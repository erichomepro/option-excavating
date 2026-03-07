'use client';
import { useEffect, useRef } from 'react';

const sectors = [
  {
    icon: <svg viewBox="0 0 24 24"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>,
    name: 'Municipal & Public Works',
  },
  {
    icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>,
    name: 'Oil & Gas',
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M2 20h20M6 20V8l4-4h4l4 4v12M9 12h6M9 8h6M10 20v-4h4v4" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>,
    name: 'Commercial & Industrial',
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20c4 0 5-2 5-2s1 2 5 2a4.49 4.49 0 001.29-.34L20.18 22l1.89-.66C20.1 16.17 17.9 10 9 8" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>,
    name: 'First Nations Communities',
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.5" fill="none"/><polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>,
    name: 'Residential Development',
  },
];

export default function Sectors() {
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

  return (
    <section className="sectors-section" ref={sectionRef}>
      <div className="container">
        <div className="sectors-center reveal">
          <div className="section-label" style={{ fontFamily: 'var(--font-ui)' }}>Industries We Serve</div>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-display)' }}>
            THE SECTORS <span>WE BUILD FOR</span>
          </h2>
        </div>

        <div className="sectors-grid">
          {sectors.map((s, i) => (
            <div key={i} className="sector-item reveal">
              <div className="sector-icon-wrap">{s.icon}</div>
              <div className="sector-name" style={{ fontFamily: 'var(--font-ui)' }}>{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
