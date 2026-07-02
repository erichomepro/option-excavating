import { SITE } from '@/data/site';
import { PROJECTS } from '@/data/projects';

export default function sitemap() {
  const base = SITE.url;
  const now = new Date();
  const staticPaths = ['', '/about', '/services', '/our-team', '/projects', '/careers', '/contact'];

  const pages = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === '' ? 'weekly' : 'monthly',
    priority: p === '' ? 1 : 0.7,
  }));

  const projectPages = PROJECTS.map((proj) => ({
    url: `${base}/projects/${proj.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...pages, ...projectPages];
}
