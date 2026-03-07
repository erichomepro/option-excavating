'use client';
import { useEffect, useRef } from 'react';

export default function FirstNations() {
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
    <section className="fn-section" ref={sectionRef}>
      <div className="container">
        <div className="fn-banner reveal">
          <div>
            <div className="section-label" style={{ fontFamily: 'var(--font-ui)' }}>Community Commitment</div>
            <h2 className="fn-title" style={{ fontFamily: 'var(--font-display)' }}>
              PROUD TO BUILD FOR<br /><span>FIRST NATIONS COMMUNITIES</span>
            </h2>
            <p className="fn-desc">
              Option Excavating has partnered with Kehewin Cree Nation, Clearwater River Dene Nation,
              and others to deliver safe, clean water and sanitary infrastructure to underserved
              communities across Alberta and Saskatchewan.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-primary"
            style={{ whiteSpace: 'nowrap', fontFamily: 'var(--font-ui)' }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
