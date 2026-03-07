'use client';
import { useState, useEffect, useRef } from 'react';

const contactInfo = [
  {
    icon: <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/></svg>,
    label: 'Phone',
    value: '780-809-1700',
    href: 'tel:7808091700',
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/></svg>,
    label: 'Toll-Free',
    value: '1-855-514-3073',
    href: 'tel:18555143073',
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/><polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/></svg>,
    label: 'Estimating',
    value: 'estimating@optionexcavating.com',
    href: 'mailto:estimating@optionexcavating.com',
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/></svg>,
    label: 'Office',
    value: '#5, 55 Alberta Ave, Spruce Grove, AB',
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', company: '', projectType: '', scope: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-grid">
          <div>
            <div className="section-label reveal" style={{ fontFamily: 'var(--font-ui)' }}>Reach Out</div>
            <h2 className="section-title reveal" style={{ fontFamily: 'var(--font-display)' }}>
              LET&apos;S TALK <span>SCOPE</span>
            </h2>
            <p className="section-desc reveal">
              Whether it&apos;s a municipal tender, private contract, or community partnership — we want to hear about it.
            </p>

            <div className="contact-info">
              {contactInfo.map((c, i) => (
                <div key={i} className="ci-item reveal">
                  <div className="ci-icon">{c.icon}</div>
                  <div>
                    <div className="ci-label" style={{ fontFamily: 'var(--font-ui)' }}>{c.label}</div>
                    <div className="ci-val">
                      {c.href ? <a href={c.href}>{c.value}</a> : c.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="section-label" style={{ marginBottom: 8, fontFamily: 'var(--font-ui)' }}>
                Estimate Request
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" style={{ fontFamily: 'var(--font-ui)' }}>First Name</label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Johan"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ fontFamily: 'var(--font-ui)' }}>Last Name</label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Smith"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" style={{ fontFamily: 'var(--font-ui)' }}>Company / Organization</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Town of Edson"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" style={{ fontFamily: 'var(--font-ui)' }}>Project Type</label>
                <select
                  className="form-select"
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                >
                  <option value="">Select a service type...</option>
                  <option value="water-sewer">Water / Sewer Infrastructure</option>
                  <option value="earthworks">Earthworks &amp; Road Building</option>
                  <option value="hdpe">HDPE / PVC Pipe Fusion</option>
                  <option value="oil-gas">Oil &amp; Gas Pipeline</option>
                  <option value="rehab">Rehabilitation / Repair</option>
                  <option value="first-nations">First Nations Community</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" style={{ fontFamily: 'var(--font-ui)' }}>Project Location &amp; Scope</label>
                <textarea
                  className="form-textarea"
                  placeholder="Brief description of your project, location, and timeline..."
                  required
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', fontFamily: 'var(--font-ui)' }}
              >
                {submitted ? '✓ Request Sent — We\'ll Be in Touch' : 'Submit Estimate Request →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
