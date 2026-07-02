'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowIcon } from '@/components/icons';

// Hero with a lazy-loaded background video. The poster image renders
// immediately as a CSS background layer (so first paint never waits on the
// video), and the video source is attached after mount. A gentle Ken Burns
// scale runs on the media layer, and the foreground content plays a staggered
// entrance on mount. All motion is CSS and disabled under prefers-reduced-motion.
export default function HomeHero() {
  const videoRef = useRef(null);
  const [entered, setEntered] = useState(false);
  const poster = '/media/hero/hero-poster.jpg';
  const desktopSrc = '/media/hero/hero-desktop.mp4';
  const mobileSrc = '/media/hero/hero-mobile.mp4';

  // Trigger the entrance on mount (next frame so the transition runs).
  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let attached = false;
    const attach = () => {
      if (attached) return;
      attached = true;
      // Serve the lighter 720p clip to phones, the 1080p clip to larger screens.
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      video.src = isMobile ? mobileSrc : desktopSrc;
      video.load();
      video.play().catch(() => {});
    };
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 300));
    idle(attach);
  }, []);

  return (
    <section className={`home-hero ${entered ? 'entered' : ''}`}>
      <div className="home-hero-media" aria-hidden="true">
        <div className="home-hero-poster" style={{ backgroundImage: `url(${poster})` }} />
        <video
          ref={videoRef}
          className="home-hero-video"
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        />
      </div>
      <div className="home-hero-overlay" />

      <div className="container home-hero-inner">
        <h1>
          <span className="hero-line hero-line-1">BUILT FOR</span>
          <span className="hero-line hero-line-2">WESTERN CANADA</span>
        </h1>
        <p className="home-hero-sub hero-fade">
          Playing in the dirt, and thriving in the dirt. We do not chase easy work. We take on
          the tough, risky civil construction jobs, get our hands dirty, and build lasting
          partnerships. We do all that in our playground of Western Canada, with an amazing team.
        </p>
        <div className="hero-fade hero-cta-wrap">
          <Link href="/contact" className="btn">
            Start Your Project <ArrowIcon />
          </Link>
        </div>
      </div>

      <a href="#hero-next" className="hero-scroll" aria-label="Scroll down">
        <span className="hero-scroll-chevron" />
      </a>
    </section>
  );
}
