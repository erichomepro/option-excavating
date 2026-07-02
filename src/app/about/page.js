import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import TeamGrid from '@/components/TeamGrid';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'About | Civil Construction in Spruce Grove & Western Canada',
  description:
    'Option Excavating Inc. is a Spruce Grove, Alberta civil construction and underground infrastructure company serving Western Canada. Established 2011, specializing in water, sanitary and storm sewer mains.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Who We Are" title="About" image="/media/2026/03/8.jpg" />

      <section className="section">
        <div className="container about-split">
          <Reveal className="about-body">
            <span className="eyebrow">Who We Are</span>
            <h2 className="heading">About Our <span className="accent">Company</span></h2>
            <p>
              Option Excavating Inc. (“Option”) is a full-service underground infrastructure
              installation company, located in Spruce Grove, Alberta. We are a solely-owned
              corporation, specializing in installing water, sanitary sewer and storm sewer main
              lines and services, and strive to provide our clients with safe, accurate and efficient
              installations.
            </p>
            <p>
              Option’s beginnings successfully encompassed decades of underground work performed
              within the City of Edmonton and surrounding areas, but in 2018 shifted the company’s
              direction to an under-served niche market within the petroleum and construction
              industry, effectively closing the underground division and moving all manpower and
              resources to the new endeavour. The decision to pivot into a new market has been a
              rewarding and successful one.
            </p>
          </Reveal>

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
        </div>

        <div className="container" style={{ maxWidth: 860, marginTop: 56 }}>
          <Reveal>
            <p style={{ marginBottom: 16 }}>
              In 2022, Option found itself looking to diversify and reopened its underground
              infrastructure division, recruiting a well-respected and experienced team led by our
              General Manager, who brings forward extensive construction and management knowledge
              through 20+ years of advancement in the industry, from field work to project
              management, estimating and operations management.
            </p>
            <p style={{ marginBottom: 16 }}>
              Our team of dedicated professionals bring forward the ability to construct quality
              projects to the required standard of local Governments, Municipalities, Alberta
              Transportation, Alberta Environment and Parks, Alberta Infrastructure, and First Nation
              communities, and have collaborated with these public bodies collectively and
              individually prior to joining Option. We are proud to offer underground construction as
              well as the additional services of directional drilling, earthworks, general
              contracting, and construction management Canada-wide to clients.
            </p>
            <p>
              Option has been excited to re-enter the underground infrastructure market with this
              team and have successfully completed many projects in Alberta and Saskatchewan to date.
              Included in our work, we have partnered with two First Nation communities to provide
              safe drinking water to their residents and engaged in a pilot program to transparently
              measure and report economic benefits to their respective Nation through their project
              sponsorship. The Pehta reporting tool shows great promise in providing credibility,
              confidence and comparability in the selection of service providers for First Nations
              work, and Option embraced the opportunity to be an early adopter of this groundbreaking
              endeavour.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />

      <section className="section section-light">
        <div className="container">
          <Reveal className="text-center" style={{ marginBottom: 48 }}>
            <span className="eyebrow center-block">Meet the Team</span>
            <h2 className="heading">Our <span className="accent">Team</span></h2>
          </Reveal>
          <TeamGrid />
        </div>
      </section>
    </>
  );
}
