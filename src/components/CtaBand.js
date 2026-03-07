'use client';
import { useEffect, useRef } from 'react';

export default function CtaBand() {
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
    <section className="cta-section" ref={sectionRef}>
      <div className="container">
        <div className="cta-band reveal">
          <div>
            <h2 className="cta-title" style={{ fontFamily: 'var(--font-display)' }}>
              READY TO START YOUR PROJECT?
            </h2>
            <p className="cta-sub">
              Tell us about your scope and we&apos;ll get back to you within one business day.
            </p>
          </div>
          <button
            className="btn-white"
            style={{ fontFamily: 'var(--font-ui)' }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get a Free Estimate →
          </button>
        </div>
      </div>
    </section>
  );
}
