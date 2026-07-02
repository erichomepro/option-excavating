import Link from 'next/link';
import Image from 'next/image';
import { CTA } from '@/data/site';
import Reveal from '@/components/Reveal';
import { ArrowIcon } from '@/components/icons';

export default function CtaBand() {
  return (
    <section className="cta-band" aria-label={CTA.pre}>
      <div className="cta-band-media">
        <Image src={CTA.bg} alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} />
      </div>
      <div className="cta-band-overlay" />
      <Reveal className="cta-band-inner container">
        <h2>{CTA.pre}</h2>
        <p>{CTA.body}</p>
        <Link href={CTA.buttonHref} className="btn">
          {CTA.buttonLabel} <ArrowIcon />
        </Link>
      </Reveal>
    </section>
  );
}
