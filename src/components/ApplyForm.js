'use client';
import { useState, useRef } from 'react';

// Job application form. Resume (PDF/Word, max 3MB) + cover letter. Submits as
// multipart to /api/apply, which forwards to the hiring system and emails the
// hiring team with the position in the subject line.

const MAX_RESUME_BYTES = 3 * 1024 * 1024;
const RESUME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export default function ApplyForm({ slug, title }) {
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [fileName, setFileName] = useState('');
  const fileRef = useRef(null);

  const onFileChange = () => {
    const f = fileRef.current?.files?.[0];
    setFileName(f ? f.name : '');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    const resume = data.get('resume');
    if (!resume || !resume.size) {
      setStatus({ state: 'err', message: 'Please attach your resume (PDF or Word).' });
      return;
    }
    if (!RESUME_TYPES.includes(resume.type)) {
      setStatus({ state: 'err', message: 'Resume must be a PDF or Word document.' });
      return;
    }
    if (resume.size > MAX_RESUME_BYTES) {
      setStatus({ state: 'err', message: 'Resume must be under 3MB.' });
      return;
    }

    data.set('slug', slug);
    setStatus({ state: 'sending', message: 'Submitting your application…' });
    try {
      const res = await fetch('/api/apply', { method: 'POST', body: data });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || 'Something went wrong. Please try again.');
      setStatus({
        state: 'ok',
        message: `Thank you. Your application for ${title} has been submitted. Our hiring team will review it and be in touch.`,
      });
      formEl.reset();
      setFileName('');
    } catch (err) {
      setStatus({ state: 'err', message: err.message || 'Something went wrong. Please try again.' });
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="form-field">
          <input name="name" placeholder="Full Name" aria-label="Full Name" required />
        </div>
        <div className="form-field">
          <input name="email" placeholder="Email" aria-label="Email" type="email" required />
        </div>
      </div>
      <div className="form-field">
        <input name="phone" placeholder="Phone Number" aria-label="Phone Number" type="tel" />
      </div>
      <div className="form-field">
        <textarea
          name="cover_letter"
          placeholder="Cover letter: tell us about your experience and why you want to join the team."
          aria-label="Cover letter"
          rows={6}
        />
      </div>

      <div className="form-field">
        <label className="file-label">
          <input
            ref={fileRef}
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={onFileChange}
            required
          />
          <span className="file-btn">Attach Resume</span>
          <span className="file-name">{fileName || 'PDF or Word, max 3MB'}</span>
        </label>
      </div>

      {/* Honeypot: hidden from humans. */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="apply-company">Company (leave blank)</label>
        <input id="apply-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="btn" disabled={status.state === 'sending'}>
        {status.state === 'sending' ? 'Submitting…' : 'Submit Application'}
      </button>

      {status.message ? (
        <p className={`form-status ${status.state === 'ok' ? 'ok' : status.state === 'err' ? 'err' : ''}`}>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
