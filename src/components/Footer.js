import Link from 'next/link';
import Image from 'next/image';
import { SITE, NAV_LINKS } from '@/data/site';
import { YoutubeIcon, LinkedinIcon } from '@/components/icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <div>
            <div className="footer-logo-tile">
              <Image src={SITE.logoDark} alt="Option Excavating Inc." width={180} height={48} />
            </div>
            <p className="footer-about">{SITE.blurb}</p>
            <div className="footer-social">
              <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-yt">
                <YoutubeIcon />
              </a>
              <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-li">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Contact Info</h4>
            <p className="fc-strong">{SITE.shortName}</p>
            <p>{SITE.address.line1}</p>
            <p>{SITE.address.city}, {SITE.address.region}</p>
            <p>{SITE.address.postal}</p>
            <p style={{ marginTop: 12 }}>
              <span className="fc-strong">Tel: </span>
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </p>
            <p>
              <span className="fc-strong">Email: </span>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <span>© {new Date().getFullYear()} Option Excavating Inc. All rights reserved.</span>
          <span>
            Site by <a href="https://aiprecisionmarketing.ca" target="_blank" rel="noopener noreferrer">AI Precision Marketing</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
