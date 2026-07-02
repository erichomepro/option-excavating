'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SITE, NAV_LINKS } from '@/data/site';
import { PhoneIcon } from '@/components/icons';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Passive, rAF-throttled scroll read so we never thrash layout on scroll.
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 80);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav-solid nav-shrink' : 'nav-transparent'}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo" aria-label="Option Excavating home">
            <Image src={SITE.logo} alt="Option Excavating Inc." width={170} height={46} priority />
          </Link>

          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={isActive(l.href) ? 'active' : ''}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <a href={SITE.phoneHref} className="nav-phone">
            <PhoneIcon />
            {SITE.phone}
          </a>

          <button
            className={`hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={isActive(l.href) ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <a href={SITE.phoneHref} className="active" onClick={() => setOpen(false)}>
          {SITE.phone}
        </a>
      </div>
    </>
  );
}
