import Image from 'next/image';

export default function PageHero({ eyebrow, title, image }) {
  return (
    <header className="page-hero">
      <div className="page-hero-media">
        <Image src={image} alt="" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
      </div>
      <div className="page-hero-overlay" />
      <div className="container page-hero-inner">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1>{title}</h1>
      </div>
    </header>
  );
}
