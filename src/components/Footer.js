'use client';

export default function Footer() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="footer-wrap">
      <footer>
        <div className="footer-grid">
          <div>
            <div className="footer-logo" style={{ fontFamily: 'var(--font-display)' }}>
              OPTIO<span>N</span> EXCAVATING
            </div>
            <p className="footer-about">
              Earthworks and underground utility construction serving Western Canada since 2012.
              Locally owned and operated out of Spruce Grove, Alberta.
            </p>
          </div>

          <div>
            <div className="footer-col-title" style={{ fontFamily: 'var(--font-ui)' }}>Services</div>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e) => handleScroll(e, 'services')}>Water &amp; Sewer</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, 'services')}>Earthworks</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, 'services')}>HDPE Pipe Fusion</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, 'services')}>Oil &amp; Gas</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, 'services')}>Rehabilitation</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, 'services')}>First Nations</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title" style={{ fontFamily: 'var(--font-ui)' }}>Company</div>
            <ul className="footer-links">
              <li><a href="#why-us" onClick={(e) => handleScroll(e, 'why-us')}>About Us</a></li>
              <li><a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a></li>
              <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title" style={{ fontFamily: 'var(--font-ui)' }}>Contact</div>
            <ul className="footer-links">
              <li><a href="tel:7808091700">780-809-1700</a></li>
              <li><a href="mailto:estimating@optionexcavating.com">Estimating@optionexcavating.com</a></li>
              <li><a href="tel:18555143073">1-855-514-3073 (Toll-Free)</a></li>
              <li>Spruce Grove, AB</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 <span>Option Excavating Inc.</span> — Alberta Corp #2016646784
          </div>
          <div className="certifications" style={{ fontFamily: 'var(--font-ui)' }}>
            <span className="cert-badge">AB Transportation</span>
            <span className="cert-badge">AB Environment</span>
            <span className="cert-badge">COR Certified</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
