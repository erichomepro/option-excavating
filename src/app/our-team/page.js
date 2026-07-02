import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import TeamGrid from '@/components/TeamGrid';
import Reveal from '@/components/Reveal';
import { FIELD_TEAM_PHOTOS, FIELD_TEAM_COPY } from '@/data/team';

export const metadata = {
  title: 'Our Team | Experienced Civil Construction Professionals',
  description:
    'Meet the management and field team behind Option Excavating Inc., delivering civil construction and underground infrastructure across Western Canada from Spruce Grove, Alberta.',
  alternates: { canonical: '/our-team' },
};

export default function OurTeamPage() {
  return (
    <>
      <PageHero eyebrow="Crew Members" title="Our Team" image="/media/2026/05/ft7.jpg" />

      <section className="section">
        <div className="container">
          <Reveal className="text-center" style={{ marginBottom: 48 }}>
            <span className="eyebrow center-block">Meet the Team</span>
            <h2 className="heading">Our <span className="accent">Team</span></h2>
          </Reveal>
          <TeamGrid />
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <Reveal className="text-center" style={{ marginBottom: 28 }}>
            <span className="eyebrow center-block">Meet the Team</span>
            <h2 className="heading">Our <span className="accent">Field Team</span></h2>
            <p className="lede center-block" style={{ marginTop: 16 }}>{FIELD_TEAM_COPY}</p>
          </Reveal>
          <div className="field-photos">
            {FIELD_TEAM_PHOTOS.map((src, i) => (
              <Reveal className="field-photo" key={src} delay={(i % 3) * 60}>
                <Image src={src} alt="Option Excavating field crew" width={460} height={345} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
