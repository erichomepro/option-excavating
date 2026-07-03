import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Application relay. Validates at the boundary, then forwards the multipart
// form to FieldOS, which stores the resume, records the application for the
// hiring team, and emails info@optionexcavating.com with the position in the
// subject line. The shared secret keeps bots from hitting FieldOS directly.

const FIELDOS_URL = process.env.FIELDOS_API_URL || 'https://fieldos-tan.vercel.app';
const MAX_RESUME_BYTES = 3 * 1024 * 1024;
const RESUME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

export async function POST(request) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: bots fill the hidden "company" field. Pretend success.
  const honeypot = String(form.get('company') || '');
  if (honeypot.trim() !== '') return NextResponse.json({ ok: true });

  const slug = String(form.get('slug') || '').trim();
  const name = String(form.get('name') || '').trim();
  const email = String(form.get('email') || '').trim();
  const resume = form.get('resume');

  if (!slug || !name) {
    return NextResponse.json({ error: 'Please complete your name.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }
  if (!(resume instanceof File) || resume.size === 0) {
    return NextResponse.json({ error: 'Please attach your resume.' }, { status: 400 });
  }
  if (resume.size > MAX_RESUME_BYTES) {
    return NextResponse.json({ error: 'Resume must be under 3MB.' }, { status: 400 });
  }
  if (!RESUME_TYPES.has(resume.type)) {
    return NextResponse.json({ error: 'Resume must be a PDF or Word document.' }, { status: 400 });
  }

  const secret = process.env.CAREERS_APPLY_SECRET;
  if (!secret) {
    console.error(
      JSON.stringify({
        level: 'error',
        route: 'POST /api/apply',
        msg: 'CAREERS_APPLY_SECRET is not set; cannot forward applications to FieldOS.',
      })
    );
    return NextResponse.json(
      { error: 'Applications are temporarily unavailable. Please email us directly.' },
      { status: 500 }
    );
  }

  const forward = new FormData();
  forward.set('slug', slug);
  forward.set('name', name);
  forward.set('email', email);
  forward.set('phone', String(form.get('phone') || ''));
  forward.set('cover_letter', String(form.get('cover_letter') || ''));
  forward.set('resume', resume, resume.name);

  let res;
  try {
    res = await fetch(`${FIELDOS_URL}/api/public/careers/apply`, {
      method: 'POST',
      headers: { 'x-careers-secret': secret },
      body: forward,
    });
  } catch {
    return NextResponse.json(
      { error: 'Could not submit your application. Please try again or email us directly.' },
      { status: 502 }
    );
  }

  const j = await res.json().catch(() => ({}));
  if (!res.ok) {
    return NextResponse.json(
      { error: j.error || 'Could not submit your application. Please try again.' },
      { status: res.status === 404 ? 404 : 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
