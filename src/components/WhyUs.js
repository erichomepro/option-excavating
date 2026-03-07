'use client';
import { useEffect, useRef } from 'react';

const points = [
  {
    icon: <svg viewBox="0 0 24 24"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" stroke="currentColor" strokeWidth="2" fill="none" /></svg>,
    title: 'Government-Grade Compliance',
    desc: 'Projects built to Alberta Transportation, Alberta Infrastructure, and Municipal standards. No shortcuts.',
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M7 11v6a1 1 0 001 1h1a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h1a1 1 0 001-1v-6M2 12l5.1-4.5a2 2 0 012.6 0L12 9.5l2.3-2a2 2 0 012.6 0L22 12" stroke="currentColor" strokeWidth="2" fill="none" /></svg>,
    title: 'First Nations Experience',
    desc: 'Proven track record partnering with Cree, Dene, and other Indigenous communities across two provinces.',
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" fill="none" /></svg>,
    title: 'Scalable Fleet & Crew',
    desc: 'From single-site urban installs to 17km+ rural pipeline projects — we have the equipment and people.',
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" fill="none" /></svg>,
    title: 'Safety-First Culture',
    desc: 'Every project runs under a rigorous safety management system. Our record speaks for itself.',
  },
];

export default function WhyUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-section" id="why-us" ref={sectionRef}>
      <div className="container">
        <div className="why-grid">
          <div className="why-visual reveal">
            <div
              className="why-img"
              style={{ backgroundImage: "url('https://www.optioninc.ca/img/bg4.jpg')" }}
            />
            <div className="why-img-accent" />
            <div className="why-counter-box">
              <div className="wcb-big" style={{ fontFamily: 'var(--font-display)' }}>12+</div>
              <div className="wcb-sub" style={{ fontFamily: 'var(--font-ui)' }}>
                Years of Proven<br />Performance
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="section-label" style={{ fontFamily: 'var(--font-ui)' }}>Why Option</div>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-display)' }}>
              WE DON&apos;T JUST<br /><span>DIG HOLES.</span>
            </h2>
            <p className="section-desc">
              We deliver complete underground infrastructure — on time, on spec, and to the standard
              required by governments, municipalities, and regulators.
            </p>

            <div className="why-points">
              {points.map((p, i) => (
                <div key={i} className="why-point">
                  <div className="wp-icon">{p.icon}</div>
                  <div>
                    <div className="wp-title" style={{ fontFamily: 'var(--font-ui)' }}>{p.title}</div>
                    <p className="wp-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
