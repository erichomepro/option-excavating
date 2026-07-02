import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import { ArrowIcon } from '@/components/icons';
import { SITE } from '@/data/site';

export const metadata = {
  title: 'Careers | Join a Western Canada Civil Construction Team',
  description:
    'Join Option Excavating Inc. We are hiring civil construction field crew across Western Canada. View open positions and build your career with an experienced team.',
  alternates: { canonical: '/careers' },
};

// Open positions sourced from the live Careers page listing.
const POSITIONS = [
  { title: 'Pipelayer', location: 'Remote' },
  { title: 'Supervisor / Foreman', location: 'Spruce Grove, AB' },
];

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Crew Members" title="Careers" image="/media/2026/03/6.jpg" />

      <section className="section">
        <div className="container careers-positions">
          <Reveal>
            <h2>Open Positions</h2>
            <div className="careers-group-label">Option Excavating Field</div>
            {POSITIONS.map((p) => (
              <div className="career-row" key={p.title}>
                <h3>{p.title}</h3>
                <span className="career-loc">{p.location}</span>
              </div>
            ))}
            <p className="lede" style={{ marginTop: 32 }}>
              Do not see the right role? We are always interested in hearing from skilled, safety-first
              civil construction professionals. Reach out and tell us about yourself.
            </p>
            <Link href="/contact" className="btn btn-dark" style={{ marginTop: 20 }}>
              Contact Our Team <ArrowIcon />
            </Link>
            <p style={{ marginTop: 16, fontSize: 14, color: 'var(--muted)' }}>
              Or email us directly at <a href={`mailto:${SITE.email}`} style={{ color: 'var(--red)' }}>{SITE.email}</a>.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
