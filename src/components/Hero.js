'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.stat-num').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 150);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-tag" style={{ fontFamily: 'var(--font-ui)' }}>
          Spruce Grove, Alberta — Est. 2012
        </div>

        <h1 className="hero-h1" style={{ fontFamily: 'var(--font-display)' }}>
          BUILT FOR<br />
          <em>WESTERN</em>
          CANADA
        </h1>

        <p className="hero-sub">
          Earthworks, underground utilities, and civil infrastructure for municipalities,
          oil &amp; gas, and First Nations communities — delivered safely and on spec.
        </p>

        <div className="hero-actions" style={{ fontFamily: 'var(--font-ui)' }}>
          <a href="#contact" className="btn-primary" onClick={(e) => handleScroll(e, 'contact')}>
            Get a Free Estimate
          </a>
          <a href="#projects" className="btn-ghost" onClick={(e) => handleScroll(e, 'projects')}>
            View Our Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="hero-stats" ref={statsRef}>
          <div>
            <div className="stat-num reveal" style={{ fontFamily: 'var(--font-display)' }}>13+</div>
            <div className="stat-label">Years Operating</div>
          </div>
          <div>
            <div className="stat-num reveal" style={{ fontFamily: 'var(--font-display)' }}>50+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div>
            <div className="stat-num reveal" style={{ fontFamily: 'var(--font-display)' }}>3</div>
            <div className="stat-label">Provinces Served</div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div
          className="hero-img-bg"
          style={{ backgroundImage: "url('https://www.optioninc.ca/slides/03.png')" }}
        />
        <div className="hero-img-gradient" />
        <div className="hero-img-overlay" />
        <div className="hero-floating-card">
          <div className="hfc-label" style={{ fontFamily: 'var(--font-ui)' }}>Current Project</div>
          <div className="hfc-text">ACE Regional Water Pipeline — 17km HDPE, Paradise Valley, AB</div>
        </div>
      </div>
    </section>
  );
}
