'use client';
import { useState } from 'react';

const initial = { firstName: '', lastName: '', phone: '', email: '', message: '', company: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', message: 'Sending…' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
      setStatus({ state: 'ok', message: 'Thank you. Your message has been sent. We will be in touch shortly.' });
      setForm(initial);
    } catch (err) {
      setStatus({ state: 'err', message: err.message || 'Something went wrong. Please try again.' });
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="form-field">
          <input name="firstName" value={form.firstName} onChange={update} placeholder="First Name" aria-label="First Name" required />
        </div>
        <div className="form-field">
          <input name="lastName" value={form.lastName} onChange={update} placeholder="Last Name" aria-label="Last Name" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <input name="phone" value={form.phone} onChange={update} placeholder="Phone Number" aria-label="Phone Number" type="tel" />
        </div>
        <div className="form-field">
          <input name="email" value={form.email} onChange={update} placeholder="Email" aria-label="Email" type="email" required />
        </div>
      </div>
      <div className="form-field">
        <textarea name="message" value={form.message} onChange={update} placeholder="Message" aria-label="Message" required />
      </div>

      {/* Honeypot: hidden from humans, replaces the legacy math captcha. */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="company">Company (leave blank)</label>
        <input id="company" name="company" value={form.company} onChange={update} tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="btn" disabled={status.state === 'sending'}>
        {status.state === 'sending' ? 'Sending…' : 'Submit'}
      </button>

      {status.message ? (
        <p className={`form-status ${status.state === 'ok' ? 'ok' : status.state === 'err' ? 'err' : ''}`}>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
