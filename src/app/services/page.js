import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { SERVICES } from '@/data/services';

export const metadata = {
  title: 'Services | Excavation, Underground Utilities & Civil Construction',
  description:
    'Full-service civil construction and underground utilities across Western Canada: subdivisions, earthworks, storm outfalls, pipeline construction, HDD, lift stations, hydrovac, demolition and remediation.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="What We Do" title="Services" image="/media/2026/03/7.jpg" />

      <section className="section">
        <div className="container">
          <Reveal className="text-center" style={{ marginBottom: 24 }}>
            <span className="eyebrow center-block">What We Offer</span>
            <h2 className="heading">Excavation & Civil Construction <span className="accent">Services</span></h2>
            <p className="lede center-block" style={{ marginTop: 14 }}>
              From deep underground utilities to bulk earthworks and trenchless installations, our
              experienced team and equipment deliver safe, high quality projects on schedule across
              Western Canada.
            </p>
          </Reveal>

          <div className="svc-rows">
            {SERVICES.map((s, i) => {
              const reverse = i % 2 === 1;
              return (
                <Reveal
                  as="article"
                  className={`svc-row ${reverse ? 'reverse' : ''}`}
                  variant={reverse ? 'right' : 'left'}
                  key={s.num}
                >
                  <span className="svc-watermark" aria-hidden="true">{s.num}</span>
                  <div className="svc-row-media">
                    <Image src={s.image} alt={s.name} width={620} height={426} />
                  </div>
                  <div className="svc-row-body">
                    <h2>{s.name}</h2>
                    <div className="svc-rule" />
                    <p>{s.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
