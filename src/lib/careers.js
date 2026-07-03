// Live job postings, served by FieldOS (Option's ops system). HR writes and
// publishes postings there; this site only reads. If FieldOS is unreachable
// the careers page falls back to a "reach out" message rather than erroring.

const FIELDOS_URL = process.env.FIELDOS_API_URL || 'https://fieldos-tan.vercel.app';

export async function getOpenPostings() {
  try {
    const res = await fetch(`${FIELDOS_URL}/api/public/careers`, { next: { revalidate: 300 } });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data.postings) ? data.postings : [];
  } catch {
    return [];
  }
}

export async function getPosting(slug) {
  const postings = await getOpenPostings();
  return postings.find((p) => p.slug === slug) || null;
}

export const EMPLOYMENT_LABEL = {
  full_time: 'Full-time',
  part_time: 'Part-time',
  seasonal: 'Seasonal',
  contract: 'Contract',
};

// Newline-separated section text -> array of bullet lines.
export function toLines(text) {
  return String(text || '')
    .split('\n')
    .map((l) => l.replace(/^[-•*]\s*/, '').trim())
    .filter(Boolean);
}
