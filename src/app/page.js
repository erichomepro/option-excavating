import Link from 'next/link';
import Image from 'next/image';
import HomeHero from '@/components/HomeHero';
import StatsStrip from '@/components/StatsStrip';
import CtaBand from '@/components/CtaBand';
import TeamGrid from '@/components/TeamGrid';
import Reveal from '@/components/Reveal';
import { VALUES, HOME_SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';
import { HeartIcon, ShieldIcon, UsersIcon, BoltIcon, ArrowIcon } from '@/components/icons';

export const metadata = {
  title: 'Civil Construction & Underground Utilities | Built for Western Canada',
  description:
    'Option Excavating Inc. delivers civil construction and underground infrastructure: water, sanitary and storm sewer mains, HDD, earthworks and site development across Western Canada. Based in Spruce Grove, Alberta.',
  alternates: { canonical: '/' },
};

const VALUE_ICONS = [UsersIcon, HeartIcon, ShieldIcon, BoltIcon];

export default function HomePage() {
  const portfolio = PROJECTS.slice(0, 6);

  return (
    <>
      <HomeHero />

      <StatsStrip />

      {/* CORE VALUES */}
      <section className="section" id="hero-next">
        <div className="container">
          <Reveal className="text-center" style={{ marginBottom: 48 }}>
            <span className="eyebrow center-block">Our CORE Values</span>
            <h2 className="heading">What We <span className="accent">Stand For</span></h2>
          </Reveal>
          <div className="values-grid">
            {VALUES.map((v, i) => {
              const Icon = VALUE_ICONS[i % VALUE_ICONS.length];
              return (
                <Reveal as="article" className="value-card" key={v.title} delay={(i % 2) * 80}>
                  <Icon className="value-icon" />
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section-light">
        <div className="container about-split">
          <Reveal className="about-collage">
            <div className="collage-img">
              <Image src="/media/2026/03/img-Trunk-Main-and-Outfall-Construction.jpg" alt="Trunk main and outfall construction" width={520} height={390} />
            </div>
            <div className="collage-img">
              <Image src="/media/2026/03/img-Civil-Pipe-Construction.jpg" alt="Civil pipe construction" width={520} height={390} />
            </div>
            <div className="collage-img">
              <Image src="/media/2026/03/img-Line-Stops-and-Hot-Tap-Services.jpg" alt="Line stops and hot tap services" width={520} height={390} />
            </div>
            <div className="collage-img">
              <Image src="/media/2026/03/img-Trenchless-Construction.jpg" alt="Trenchless construction" width={520} height={390} />
            </div>
            <div className="est-badge">
              <div className="est-year">2011</div>
              <div className="est-label">Established</div>
            </div>
          </Reveal>
          <Reveal className="about-body">
            <span className="eyebrow">Who We Are</span>
            <h2 className="heading">About <span className="accent">Option Excavating Inc.</span></h2>
            <p>
              Option Excavating Inc. (Option) is a full-service underground infrastructure
              installation company, located in Spruce Grove, Alberta serving all of Western Canada.
              We specialize in installing water, sanitary sewer and storm sewer main lines and
              services, and strive to provide our clients with safe, accurate and efficient
              installations.
            </p>
            <p>
              Option’s beginnings successfully encompassed decades of underground work performed
              within the City of Edmonton and surrounding areas. In 2018 the company shifted
              direction to an under-served niche market within the petroleum and construction
              industry, effectively closing the underground division and moving all manpower and
              resources to the new endeavour. The decision to pivot into a new market has been a
              rewarding and successful one.
            </p>
            <Link href="/about" className="btn btn-dark" style={{ marginTop: 24 }}>
              Read More <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section">
        <div className="container">
          <Reveal className="text-center" style={{ marginBottom: 48 }}>
            <span className="eyebrow center-block">What We Offer</span>
            <h2 className="heading">Our <span className="accent">Services</span></h2>
            <p className="lede center-block" style={{ marginTop: 14 }}>
              Option is a full-service underground infrastructure installation company. We specialize
              in water, sanitary sewer and storm sewer main line installations and services. Our
              clients range across municipal and provincial governments, and the petroleum,
              commercial and residential sectors.
            </p>
          </Reveal>
          <div className="svc-cards">
            {HOME_SERVICES.map((s, i) => (
              <Reveal as="article" className="svc-card" key={s.name} delay={(i % 3) * 70}>
                <div className="svc-card-img">
                  <Image src={s.image} alt={s.name} width={460} height={288} />
                </div>
                <div className="svc-card-body">
                  <h3>{s.name}</h3>
                  <p>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 44 }}>
            <Link href="/services" className="btn btn-dark">
              View All Services <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECT APPROACH */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: 820, textAlign: 'center' }}>
          <Reveal>
            <span className="eyebrow center-block">Process</span>
            <h2 className="heading">Option’s Project <span className="accent">Approach</span></h2>
            <p className="lede center-block" style={{ marginTop: 18 }}>
              Option takes pride in delivering a quality project to our clients and expanding our
              portfolio of work completed and services offered. We are continually building upon our
              good reputation in the industry, backed by our safety record, solid relationships
              within the engineering community and client references attesting to our efforts. Our
              field team has been together for years and has decades of combined experience guiding
              their approach on each project, ensuring the work is thoughtfully planned and phased
              prior to its start to maintain safe practices throughout.
            </p>
            <Link href="/about" className="btn" style={{ marginTop: 28 }}>
              Discover Our Mission, Vision and Core Values <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="section section-light">
        <div className="container">
          <Reveal className="text-center" style={{ marginBottom: 48 }}>
            <span className="eyebrow center-block">What We Do</span>
            <h2 className="heading">Our Project <span className="accent">Portfolio</span></h2>
          </Reveal>
          <div className="proj-grid">
            {portfolio.map((p, i) => (
              <Reveal as="article" className="proj-card" key={p.slug} delay={(i % 3) * 70}>
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
          <div className="text-center" style={{ marginTop: 44 }}>
            <Link href="/projects" className="btn btn-dark">
              View All Projects <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />

      {/* TEAM */}
      <section className="section">
        <div className="container">
          <Reveal className="text-center" style={{ marginBottom: 48 }}>
            <span className="eyebrow center-block">Meet the Team</span>
            <h2 className="heading">Our <span className="accent">Team</span></h2>
          </Reveal>
          <TeamGrid />
          <div className="text-center" style={{ marginTop: 40 }}>
            <Link href="/our-team" className="btn btn-dark">
              Meet the Full Team <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
