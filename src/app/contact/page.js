import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import { SITE } from '@/data/site';
import { PhoneIcon, MailIcon, PinIcon } from '@/components/icons';

export const metadata = {
  title: 'Contact | Get a Quote for Your Civil Construction Project',
  description:
    'Contact Option Excavating Inc. in Spruce Grove, Alberta. Call 780-809-1700 or send us a message to start your civil construction or underground utilities project in Western Canada.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Let's Talk" title="Contact" image="/media/2026/03/5.jpg" />

      <section className="section">
        <div className="container">
          <Reveal className="text-center" style={{ marginBottom: 48 }}>
            <span className="eyebrow center-block">Connect With Us</span>
            <h2 className="heading">Let’s Talk <span className="accent">With Us</span></h2>
          </Reveal>

          <div className="contact-grid">
            <Reveal className="contact-info-card">
              <div className="ci-row">
                <PhoneIcon className="ci-icon" />
                <div>
                  <h4>Call</h4>
                  <a href={SITE.phoneHref}>{SITE.phone}</a>
                </div>
              </div>
              <div className="ci-row">
                <MailIcon className="ci-icon" />
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </div>
              <div className="ci-row">
                <PinIcon className="ci-icon" />
                <div>
                  <h4>Address</h4>
                  <p>{SITE.address.line1}</p>
                  <p>{SITE.address.city}, {SITE.address.region} {SITE.address.postal}</p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          <Reveal className="map-embed">
            <iframe
              title="Option Excavating service area in Spruce Grove, Alberta"
              src="https://www.google.com/maps?q=Spruce+Grove,+Alberta,+Canada&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
