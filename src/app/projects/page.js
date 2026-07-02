import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { PROJECTS } from '@/data/projects';

export const metadata = {
  title: 'Projects | Civil Construction Case Studies Across Western Canada',
  description:
    'Explore Option Excavating Inc. civil construction projects: water transmission mains, storm sewer, subdivisions, HDD and earthworks across Alberta and Saskatchewan.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Our Work" title="Projects" image="/media/2026/03/project-ACE.jpg" />

      <section className="section">
        <div className="container">
          <div className="proj-grid">
            {PROJECTS.map((p, i) => (
              <Reveal as="article" className="proj-card" key={p.slug} delay={(i % 3) * 60}>
                <Link href={`/projects/${p.slug}`}>
                  <div className="proj-card-img">
                    <Image src={p.thumb} alt={p.title} width={460} height={307} />
                  </div>
                  <div className="proj-card-body">
                    <span className="proj-card-loc">{p.location}</span>
                    <h3>{p.title}</h3>
                    <span className="btn btn-uppercase" style={{ alignSelf: 'flex-start' }}>View Project</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
