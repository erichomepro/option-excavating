// Central site configuration: brand, nav, contact, social.
// Single source of truth for shared chrome across all pages.

export const SITE = {
  name: 'Option Excavating Inc.',
  shortName: 'Option Excavating',
  url: 'https://www.optionexcavating.com',
  phone: '780-809-1700',
  phoneHref: 'tel:+17808091700',
  email: 'info@optionexcavating.com',
  address: {
    line1: 'PO Box 5208',
    city: 'Spruce Grove',
    region: 'AB',
    postal: 'T7X 3A3',
    country: 'CA',
  },
  areaServed: ['Spruce Grove', 'Stony Plain', 'Edmonton', 'Parkland County', 'Western Canada'],
  blurb:
    'Option Excavating Inc. ("Option") is a full-service underground infrastructure installation company, located in Spruce Grove, Alberta. We are a solely-owned corporation, specializing in installing water, sanitary sewer and storm sewer main lines and services, and strive to provide our clients with safe, accurate and efficient installations.',
  social: {
    youtube: 'https://www.youtube.com/@optionexcavating',
    linkedin: 'https://www.linkedin.com/company/option-excavating-inc',
  },
  logo: '/media/2026/04/Option-Excavating-Transparent.png',
  logoDark: '/media/2026/03/2022-Option-Excavating-Logo-1.png',
  ogImage: '/media/2026/03/home-img-02.jpg',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Projects', href: '/projects' },
  { label: 'Careers', href: '/careers' },
  { label: 'Why This Site', href: '/why-this-site' },
  { label: 'Contact', href: '/contact' },
];

// CTA band copy reused across pages (verbatim from source site).
export const CTA = {
  pre: "Let's start your project today",
  body:
    "Let's turn your dream project into a reality! With our expertise and passion, we are committed to bringing your ideas to life. Contact us today and let's get started on making your vision a tangible success. Together, we can create something extraordinary.",
  buttonLabel: 'Contact Us',
  buttonHref: '/contact',
  bg: '/media/2026/03/home-img-02.jpg',
};
