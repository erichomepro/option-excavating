import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { PROJECTS, getProject } from '@/data/projects';
import { SITE } from '@/data/site';
import { ArrowIcon } from '@/components/icons';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Project`,
    description: project.summary.slice(0, 155),
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Option Excavating Inc.`,
      description: project.summary.slice(0, 200),
      images: [{ url: project.thumb }],
      type: 'article',
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    image: `${SITE.url}${project.thumb}`,
    creator: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    locationCreated: { '@type': 'Place', name: project.location },
    about: 'Civil construction and underground infrastructure',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageHero eyebrow={project.location} title={project.title} image={project.gallery[0] || project.thumb} />

      <section className="section">
        <div className="container proj-detail-grid">
          <Reveal className="proj-main">
            <span className="eyebrow">About this Project</span>
            <div className="proj-rule" />
            <p style={{ marginBottom: 28 }}>{project.summary}</p>

            <h3 style={{ fontSize: 20, marginBottom: 8 }}>Construction Particulars</h3>
            <ul className="proj-scope">
              {project.scope.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="aside" className="proj-facts">
            <div className="proj-fact">
              <div className="pf-label">Location</div>
              <div className="pf-val">{project.location}</div>
            </div>
            <div className="proj-fact">
              <div className="pf-label">Construction Duration</div>
              <div className="pf-val">{project.duration}</div>
            </div>
            <div className="proj-fact">
              <div className="pf-label">Client</div>
              <div className="pf-val">{project.client}</div>
            </div>
            <div className="proj-fact">
              <div className="pf-label">Consultant</div>
              <div className="pf-val">{project.consultant}</div>
            </div>
            <div className="proj-fact">
              <div className="pf-label">Construction Team</div>
              <ul className="proj-team-list">
                {project.team.map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {project.gallery.length > 0 && (
          <div className="container">
            <div className="gallery-grid">
              {project.gallery.map((src, i) => (
                <Reveal className="gallery-img" key={src + i} delay={(i % 3) * 50}>
                  <Image src={src} alt={`${project.title} photo ${i + 1}`} width={460} height={345} />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <div className="container" style={{ marginTop: 44 }}>
          <Link href="/projects" className="btn btn-dark">
            <ArrowIcon style={{ transform: 'rotate(180deg)' }} /> Back to All Projects
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
