import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import ApplyForm from '@/components/ApplyForm';
import { getPosting, EMPLOYMENT_LABEL, toLines } from '@/lib/careers';

export const revalidate = 300;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const posting = await getPosting(slug);
  if (!posting) return { title: 'Careers | Option Excavating' };
  return {
    title: `${posting.title} | Careers at Option Excavating`,
    description: `Apply for the ${posting.title} position at Option Excavating Inc. (${posting.location}). Upload your resume and cover letter online.`,
    alternates: { canonical: `/careers/${slug}` },
  };
}

function Section({ title, text, bullets = true }) {
  const lines = toLines(text);
  if (!lines.length) return null;
  return (
    <div className="job-section">
      <h3>{title}</h3>
      {bullets ? (
        <ul>
          {lines.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      ) : (
        lines.map((l, i) => <p key={i}>{l}</p>)
      )}
    </div>
  );
}

export default async function PostingPage({ params }) {
  const { slug } = await params;
  const posting = await getPosting(slug);
  if (!posting) notFound();

  return (
    <>
      <PageHero eyebrow="Careers" title={posting.title} image="/media/2026/03/6.jpg" />

      <section className="section">
        <div className="container careers-positions">
          <Reveal>
            <div className="job-meta">
              <span>{posting.location}</span>
              <span>{EMPLOYMENT_LABEL[posting.employment_type] || 'Full-time'}</span>
              {posting.wage ? <span>{posting.wage}</span> : null}
            </div>

            {posting.overview ? <p className="lede job-overview">{posting.overview}</p> : null}

            <Section title="What You Will Be Doing" text={posting.responsibilities} />
            <Section title="What You Bring" text={posting.requirements} />
            <Section title="Nice to Have" text={posting.nice_to_haves} />
            <Section title="What We Offer" text={posting.benefits} />
          </Reveal>

          <Reveal>
            <div className="job-apply">
              <h2>Apply for this Position</h2>
              <p style={{ color: 'var(--muted)', marginBottom: 24 }}>
                Upload your resume and tell us a bit about yourself. Your application goes straight
                to our hiring team.
              </p>
              <ApplyForm slug={posting.slug} title={posting.title} />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
