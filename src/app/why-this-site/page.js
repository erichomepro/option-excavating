import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { ArrowIcon } from '@/components/icons';

export const metadata = {
  title: 'Why This Site',
  description:
    'Why your new Option Excavating website is faster, found more often in search, and fully under your control. Built to rank, built to last.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/why-this-site' },
};

const FINDINGS = [
  {
    n: '1',
    title: 'The old setup had a performance ceiling',
    body:
      'The previous site ran on WordPress with the Divi page builder. Divi is visually flexible but heavy, which slows page loading. Page speed is one of Google’s top ranking factors, so that setup capped how well the site could rank no matter how good the content was. This new site loads almost instantly.',
  },
  {
    n: '2',
    title: 'There was no SEO framework in place',
    body:
      'The old site had no dedicated SEO system. Meta descriptions were generic, there was no structured data (schema) to help Google understand the business, and there were no social sharing cards. Those are the basics that put a local business in front of the right searches. They are now built into every page here.',
  },
  {
    n: '3',
    title: 'Infrastructure was split across three vendors',
    body:
      'The two domains and the website each lived with a different company, and the server ran outdated software (PHP 7.4, now past its security support). Every change meant coordinating across separate logins and providers, which is slow and easy to get wrong. This site brings everything under one roof.',
  },
  {
    n: '4',
    title: 'The web address did not match the brand',
    body:
      'The company is Option Excavating, but the previous primary web address was optioninc.ca, with optionexcavating.com simply forwarding to it. Aligning the live address to the brand is an easy win that also helps recognition and trust. optionexcavating.com is now the address front and center.',
  },
];

const BENEFITS = [
  {
    title: 'Speed that ranks',
    body:
      'A modern site loads almost instantly and scores well on Google’s Core Web Vitals. Faster pages mean better rankings and a better experience for visitors on a job site or a phone.',
  },
  {
    title: 'SEO from day one',
    body:
      'Clean titles, proper meta data, business schema, and an automatic sitemap are built in, so Google understands and indexes the site quickly and accurately.',
  },
  {
    title: 'One umbrella',
    body:
      'Domains, hosting, SEO, and content all managed in one place. Changes happen fast, with no more chasing three different providers.',
  },
  {
    title: 'Future ready',
    body:
      'Every future page, service area, or campaign is faster and cheaper to build on the same system. The site grows with the business instead of fighting it.',
  },
  {
    title: 'Safer and lower maintenance',
    body:
      'No plugins to update, no outdated server software, and a much smaller target for hackers. Less to break, less to worry about.',
  },
  {
    title: 'Nothing is lost',
    body:
      'We carried over all of the content, every image, and the full project portfolio. This site keeps what works and fixes what held it back.',
  },
];

const STEPS = [
  {
    n: '1',
    title: 'Export everything',
    body:
      'We pulled all content, every media file, and the full list of pages. This step changed nothing on the live site and doubled as a complete backup.',
  },
  {
    n: '2',
    title: 'Rebuild on Vercel, SEO first',
    body:
      'We recreated the site on a modern platform with the existing brand, optimized titles and structure, business schema, and fast loading pages.',
  },
  {
    n: '3',
    title: 'Preview and approve',
    body:
      'You review every page on a private link before anything goes public. Nothing goes live without your sign off.',
  },
  {
    n: '4',
    title: 'Move the domains under one roof',
    body:
      'Both domains come under one management point and are aimed at the new site. optionexcavating.com becomes the primary address, and optioninc.ca redirects to it cleanly.',
  },
  {
    n: '5',
    title: 'Submit to Google and confirm indexing',
    body:
      'We connect Google Search Console, submit the sitemap, and confirm the new pages are being indexed, with zero downtime through the whole switch.',
  },
];

export default function WhyThisSitePage() {
  return (
    <>
      <PageHero
        eyebrow="For the team at Option Excavating"
        title="Built to Rank. Built to Last."
        image="/media/2026/03/home-img-02.jpg"
      />

      {/* INTRO */}
      <section className="section">
        <div className="container" style={{ maxWidth: 820, textAlign: 'center' }}>
          <Reveal>
            <p className="lede center-block" style={{ fontSize: 20, color: 'var(--text)' }}>
              Why your new website is faster, found more often, and fully under your control.
            </p>
            <p className="lede center-block" style={{ marginTop: 18 }}>
              Your previous site looked good and the content was genuine. The catch was the
              foundation underneath it. This page walks through what limited the old setup, why this
              rebuild wins, and exactly how it was put together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE FOUND */}
      <section className="section section-dark">
        <div className="container">
          <Reveal style={{ marginBottom: 40 }}>
            <span className="eyebrow">What We Found</span>
            <h2 className="heading">The old setup, <span className="accent">honestly.</span></h2>
            <p className="lede" style={{ marginTop: 14 }}>
              The previous build was good work. The constraints were in the platform, the SEO layer,
              and how the pieces were connected, not in the design.
            </p>
          </Reveal>

          <div className="wts-findings">
            {FINDINGS.map((f, i) => (
              <Reveal as="article" className="wts-find" key={f.n} delay={(i % 2) * 70}>
                <span className="wts-find-num" aria-hidden="true">{f.n}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="vendor-strip">
              <div className="vendor-box"><div className="vn">Domain A</div><div className="vd">Registrar #1</div></div>
              <div className="vendor-box"><div className="vn">Domain B</div><div className="vd">Host #2</div></div>
              <div className="vendor-box"><div className="vn">Website</div><div className="vd">Managed host #3</div></div>
            </div>
            <p className="vendor-caption text-center" style={{ marginTop: 10 }}>
              The old way: three separate vendors, none under one umbrella.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY THIS REBUILD WINS */}
      <section className="section">
        <div className="container">
          <Reveal style={{ marginBottom: 44 }} className="text-center">
            <span className="eyebrow center-block">The Difference</span>
            <h2 className="heading">Why this rebuild <span className="accent">wins.</span></h2>
            <p className="lede center-block" style={{ marginTop: 14 }}>
              This site is built for speed and search performance, and it puts every part of the
              website under one roof.
            </p>
          </Reveal>

          <div className="values-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {BENEFITS.map((b, i) => (
              <Reveal as="article" className="value-card" key={b.title} delay={(i % 3) * 60}>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="wts-feature">
            <span className="eyebrow">A Built-In Advantage</span>
            <h3>Your website, connected to your operations.</h3>
            <p>
              This site can link directly to the job management system we are building for Option
              Excavating. As new jobs come in, project pages and contacts can be added automatically.
              When a job wraps up, its site photos and the executive summary become a ready made
              project showcase or blog post. Your real work in the field keeps the website fresh, and
              specific, current project content is exactly what Google rewards for local search. It
              also shows prospects the full range of work Option takes on, with almost no extra effort
              from your team.
            </p>
            <div className="wts-flow">
              <span className="wts-chip">Job in the field</span>
              <span className="wts-arrow">&rarr;</span>
              <span className="wts-chip">Photos + executive summary</span>
              <span className="wts-arrow">&rarr;</span>
              <span className="wts-chip">New website content, automatically</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE PLAN */}
      <section className="section section-light">
        <div className="container">
          <Reveal style={{ marginBottom: 40 }}>
            <span className="eyebrow">The Plan</span>
            <h2 className="heading">A clean move, <span className="accent">zero downtime.</span></h2>
            <p className="lede" style={{ marginTop: 14 }}>
              The current site stays live the entire time. The switch only happens once the new site
              is built, reviewed, and approved.
            </p>
          </Reveal>

          <div className="wts-steps">
            {STEPS.map((s, i) => (
              <Reveal as="article" className="wts-step" key={s.n} delay={(i % 2) * 60}>
                <span className="wts-step-num" aria-hidden="true">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="wts-note">
            <div className="note-label">Zero Downtime</div>
            <p>
              The existing website remains online and untouched until this new site is approved and
              the domains are switched, so visitors never see an interruption.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="cta-band" aria-label="This is that site">
        <div className="cta-band-media">
          <Image src="/media/2026/03/home-img-02.jpg" alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className="cta-band-overlay" />
        <Reveal className="cta-band-inner container">
          <h2>This is that site. You are looking at it.</h2>
          <p>
            Faster, found more often, and fully under your control. Take a look at the work, then
            let’s make it live.
          </p>
          <div className="cta-actions">
            <Link href="/projects" className="btn">
              See the Work <ArrowIcon />
            </Link>
            <Link href="/contact" className="btn btn-dark">
              Let’s Make It Live <ArrowIcon />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
