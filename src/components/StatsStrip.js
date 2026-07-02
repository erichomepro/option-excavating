'use client';
import { useEffect, useRef, useState } from 'react';

// Stats band with count-up-on-scroll. Numbers are verifiable values pulled from
// the site content only: 2011 (established), 15 services, 14 featured projects,
// plus a non-numeric "Western Canada" service area.
// Count-up runs once via requestAnimationFrame, triggered by IntersectionObserver.
// Under prefers-reduced-motion, the final values render immediately (no animation).
const STATS = [
  { value: 2011, label: 'Established', plain: true },
  { value: 15, label: 'Core Services' },
  { value: 14, label: 'Featured Projects' },
  { text: 'Western Canada', label: 'Service Area' },
];

function CountUp({ target, plain }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setDisplay(target);
      return;
    }

    let raf;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          // easeOutCubic for a confident settle.
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(Math.round(eased * target));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target]);

  // Established year must not render with thousands grouping.
  const shown = plain ? String(display) : display;
  return <span ref={ref}>{shown}</span>;
}

export default function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Option Excavating at a glance">
      <div className="container stats-grid">
        {STATS.map((s) => (
          <div className="stat-item" key={s.label}>
            <div className="stat-value">
              {s.text ? s.text : <CountUp target={s.value} plain={s.plain} />}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
