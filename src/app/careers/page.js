import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import { ArrowIcon } from '@/components/icons';
import { SITE } from '@/data/site';
import { getOpenPostings, EMPLOYMENT_LABEL } from '@/lib/careers';

export const metadata = {
  title: 'Careers | Join a Western Canada Civil Construction Team',
  description:
    'Join Option Excavating Inc. We are hiring civil construction field crew across Western Canada. View open positions and build your career with an experienced team.',
  alternates: { canonical: '/careers' },
};

export const revalidate = 300;

export default async function CareersPage() {
  const positions = await getOpenPostings();

  return (
    <>
      <PageHero eyebrow="Crew Members" title="Careers" image="/media/2026/03/6.jpg" />

      <section className="section">
        <div className="container careers-positions">
          <Reveal>
            <h2>Open Positions</h2>
            <div className="careers-group-label">Option Excavating Field</div>
            {positions.length === 0 ? (
              <p className="lede" style={{ marginTop: 24 }}>
                We have no posted openings right now, but crews grow with the season. Check back soon
                or send us your resume anyway.
              </p>
            ) : (
              positions.map((p) => (
                <Link href={`/careers/${p.slug}`} className="career-row career-row-link" key={p.slug}>
                  <div>
                    <h3>{p.title}</h3>
                    <span className="career-loc">
                      {p.location} · {EMPLOYMENT_LABEL[p.employment_type] || 'Full-time'}
                    </span>
                  </div>
                  <span className="career-view">
                    View &amp; Apply <ArrowIcon />
                  </span>
                </Link>
              ))
            )}
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
