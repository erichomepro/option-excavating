'use client';
import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    type: 'Water Transmission',
    category: 'municipal',
    name: 'ACE Regional Water Pipeline',
    location: 'Paradise Valley, AB — 17km HDPE',
    img: 'https://www.optioninc.ca/gallery/ace/1.jpg',
  },
  {
    type: 'First Nations',
    category: 'first-nations',
    name: 'Clearwater River Dene Nation',
    location: 'Northern SK — Sanitary + Subdivision',
    img: 'https://www.optioninc.ca/gallery/clearwater/1.jpg',
  },
  {
    type: 'Storm Infrastructure',
    category: 'municipal',
    name: 'Town of Edson Storm System',
    location: 'Edson, AB',
    img: 'https://www.optioninc.ca/gallery/edson/1.jpg',
  },
  {
    type: 'Commercial',
    category: 'oil-gas',
    name: 'Lymburn Esso Station',
    location: 'Edmonton Area, AB',
    img: 'https://www.optioninc.ca/gallery/lymburn/1.jpg',
  },
  {
    type: 'Industrial Servicing',
    category: 'oil-gas',
    name: 'Spruce Grove Industrial',
    location: 'Spruce Grove, AB',
    img: 'https://www.optioninc.ca/gallery/spruce/1.jpg',
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Municipal', value: 'municipal' },
  { label: 'Oil & Gas', value: 'oil-gas' },
  { label: 'First Nations', value: 'first-nations' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

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
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="projects-header reveal">
          <div>
            <div className="section-label" style={{ fontFamily: 'var(--font-ui)' }}>Portfolio</div>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-display)' }}>
              FEATURED <span>PROJECTS</span>
            </h2>
          </div>
          <div className="projects-filters" style={{ fontFamily: 'var(--font-ui)' }}>
            {filters.map(f => (
              <button
                key={f.value}
                className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid reveal">
          {filtered.map((p, i) => (
            <div key={i} className="project-card">
              <div className="pc-img" style={{ backgroundImage: `url('${p.img}')` }} />
              <div className="pc-overlay">
                <div className="pc-type" style={{ fontFamily: 'var(--font-ui)' }}>{p.type}</div>
                <div className="pc-name" style={{ fontFamily: 'var(--font-ui)' }}>{p.name}</div>
                <div className="pc-loc">{p.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
