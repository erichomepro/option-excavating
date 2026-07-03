import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const TO = 'info@optionexcavating.com';
const FROM = 'Option Excavating Website <website@optionexcavating.com>';

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { firstName = '', lastName = '', phone = '', email = '', message = '', company = '' } = body || {};

  // Honeypot: real users never fill the hidden "company" field. Silently accept
  // bot submissions so the bot believes it succeeded, without sending anything.
  if (company && company.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  // Boundary validation.
  if (!firstName.trim() || !lastName.trim() || !message.trim()) {
    return NextResponse.json({ error: 'Please complete your name and message.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No paid key configured. Log a clear, actionable error and fail explicitly
    // rather than pretending the message was delivered.
    console.error(
      JSON.stringify({
        level: 'error',
        route: 'POST /api/contact',
        msg: 'RESEND_API_KEY is not set; cannot send contact email. Add RESEND_API_KEY to the environment.',
      })
    );
    return NextResponse.json(
      { error: 'Email service is not configured. Please call us at 780-809-1700.' },
      { status: 503 }
    );
  }

  const fullName = `${firstName.trim()} ${lastName.trim()}`;
  const html = `
    <h2>New website inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone) || 'Not provided'}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email.trim(),
        subject: `Website inquiry from ${fullName}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error(
        JSON.stringify({ level: 'error', route: 'POST /api/contact', status: res.status, detail: detail.slice(0, 500) })
      );
      return NextResponse.json({ error: 'We could not send your message. Please try again or call us.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(JSON.stringify({ level: 'error', route: 'POST /api/contact', msg: err.message }));
    return NextResponse.json({ error: 'We could not send your message. Please try again or call us.' }, { status: 502 });
  }
}
