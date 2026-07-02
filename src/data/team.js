// Management team. Names/titles verbatim from our-team page headings.
// No real headshots exist on the source site (generic silhouettes were used),
// so each member renders as a branded monogram avatar (initials on a red tile).

export const MANAGEMENT = [
  { name: 'Johan Kruithof', title: 'General Manager' },
  { name: 'Jessie Lecocq', title: 'Operations Manager' },
  { name: 'Brad Buffalo', title: 'Civil Construction Manager' },
  { name: 'Brandy Braun', title: 'Civil Project Manager' },
  { name: 'Ashley Trembley', title: 'HSE & HR Manager' },
  { name: 'Steven Beath', title: 'Underground Superintendent' },
  { name: 'Tyler Cust', title: 'Transportation Manager' },
];

// Real field-team photos downloaded from the source site.
export const FIELD_TEAM_PHOTOS = [
  '/media/2026/05/ft1.jpg',
  '/media/2026/05/ft2.jpg',
  '/media/2026/05/ft3.jpg',
  '/media/2026/05/ft4.jpg',
  '/media/2026/05/ft5.jpg',
  '/media/2026/05/ft6.jpg',
  '/media/2026/05/ft7.jpg',
  '/media/2026/05/ft8.jpg',
  '/media/2026/05/ft9.jpg',
];

export const FIELD_TEAM_COPY =
  'Beyond our experienced management team, we have a dedicated team of field members that do the hard work of actually constructing these projects. As part of our CORE Values we strive to acknowledge the team we are blessed to have, while giving them the tools and equipment to complete work safely. From our crew BBQs to our monthly safety rewards program, we try our best to bless and reward them for their long and hard days, as they help us to Build Western Canada, one pipe at a time. Without our team of foreman, operators, pipelayers, and labourers who spend long days out of town and away from their families, there would be no OpEx and there would be no happy clients.';

export function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}
