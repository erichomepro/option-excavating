'use client';
import { useEffect, useRef } from 'react';

const services = [
  {
    num: '01',
    icon: <svg viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>,
    name: 'Water & Sewer Infrastructure',
    desc: 'Deep utility installation including trunk lines, force mains, water mains, and sanitary & storm sewer systems for municipal and civil clients.',
    tags: ['Water Mains', 'Sanitary Sewer', 'Storm Sewer', 'Force Mains'],
  },
  {
    num: '02',
    icon: <svg viewBox="0 0 24 24"><path d="M2 20h20M6 20V8l4-4h4l4 4v12" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M10 20v-4h4v4M9 12h6M9 8h6" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>,
    name: 'Earthworks & Road Building',
    desc: 'Large and small-scale earthmoving, site grading, cut-and-fill, road construction, and land development servicing.',
    tags: ['Grading', 'Road Building', 'Site Servicing', 'Land Development'],
  },
  {
    num: '03',
    icon: <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>,
    name: 'HDPE & PVC Pipe Fusion',
    desc: 'Certified pipe fusion services for high-density polyethylene and PVC applications in water, gas, and industrial pipeline projects.',
    tags: ['HDPE Fusion', 'PVC Services', 'Pipeline Install'],
  },
  {
    num: '04',
    icon: <svg viewBox="0 0 24 24"><path d="M12 2v8M4 8l8 4 8-4" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M4 12l8 4 8-4M4 16l8 4 8-4" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>,
    name: 'Oil & Gas Pipelines',
    desc: 'Water and wastewater pipeline construction for the petroleum sector, including upstream and midstream infrastructure.',
    tags: ['Water Pipelines', 'Wastewater', 'Upstream'],
  },
  {
    num: '05',
    icon: <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.5" fill="none"/><polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>,
    name: 'Rehabilitation & Repairs',
    desc: 'Water and sewer system rehabilitation, pipe relining, structural repairs, and emergency service restoration.',
    tags: ['Pipe Rehab', 'Sewer Repair', 'Emergency Services'],
  },
  {
    num: '06',
    icon: <svg viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20c4 0 5-2 5-2s1 2 5 2a4.49 4.49 0 001.29-.34L20.18 22l1.89-.66C20.1 16.17 17.9 10 9 8" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>,
    name: 'First Nations Community Projects',
    desc: 'Design-build water system installation and commissioning for Indigenous communities across Alberta and Saskatchewan.',
    tags: ['Water Systems', 'Sanitary', 'Subdivision Dev.'],
  },
];

export default function Services() {
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
    <section className="services-section" id="services" ref={sectionRef}>
      <div className="container">
        <div className="services-header reveal">
          <div>
            <div className="section-label" style={{ fontFamily: 'var(--font-ui)' }}>What We Do</div>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-display)' }}>
              OUR <span>SERVICES</span>
            </h2>
            <p className="section-desc">
              Full-scope underground infrastructure and civil earthworks across Western Canada.
            </p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.num} className="service-card reveal">
              <span className="service-num" style={{ fontFamily: 'var(--font-display)' }}>{s.num}</span>
              <div className="service-icon-wrap">{s.icon}</div>
              <div className="service-name" style={{ fontFamily: 'var(--font-ui)' }}>{s.name}</div>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags" style={{ fontFamily: 'var(--font-ui)' }}>
                {s.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
