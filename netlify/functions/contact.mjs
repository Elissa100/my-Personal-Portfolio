const recipientEmail = 'sibomanaelissa71@gmail.com';
const senderEmail = 'elissasibomana18@gmail.com';
const allowedProjectTypes = new Set([
  'A new product or idea',
  'Improve an existing product',
  'Frontend or website development',
  'Backend, API, or integrations',
  'Mobile app development',
  'Full-time role or contract',
  'Something else',
]);

function jsonResponse(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function cleanText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export default async function handler(request) {
  if (request.method !== 'POST') {
    return jsonResponse(405, { error: 'Use the form to send a message.' });
  }

  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
    return jsonResponse(415, { error: 'The form could not read your message. Please try again.' });
  }

  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > 12_000) {
    return jsonResponse(413, { error: 'Your message is too long. Please shorten it and try again.' });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse(400, { error: 'The form could not read your message. Please try again.' });
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return jsonResponse(400, { error: 'Please complete the required fields and try again.' });
  }

  const name = cleanText(body.name);
  const email = cleanText(body.email);
  const projectType = cleanText(body.projectType);
  const budget = cleanText(body.budget);
  const details = cleanText(body.details);
  const website = cleanText(body.website);

  if (website) {
    return jsonResponse(400, { error: 'Please leave the extra field empty and try again.' });
  }

  if (
    name.length < 1 || name.length > 100 ||
    email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !allowedProjectTypes.has(projectType) ||
    budget.length > 120 ||
    details.length < 10 || details.length > 4000
  ) {
    return jsonResponse(400, { error: 'Please check the required fields and try again.' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('Contact form is unavailable: BREVO_API_KEY is not configured.');
    return jsonResponse(503, { error: 'The message form is temporarily unavailable. Please email me directly.' });
  }

  const message = [
    'New message from your portfolio contact form',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Interested in: ${projectType}`,
    `Budget: ${budget || 'Not provided'}`,
    '',
    'Project details:',
    details,
  ].join('\n');

  let brevoResponse;
  try {
    brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: { name: 'Elissa Sibomana', email: senderEmail },
        to: [{ email: recipientEmail, name: 'Elissa Sibomana' }],
        replyTo: { email, name },
        subject: 'New project inquiry from your portfolio',
        textContent: message,
      }),
    });
  } catch (error) {
    console.error('Brevo request failed:', error);
    return jsonResponse(502, { error: 'Your message could not be sent right now. Please email me directly.' });
  }

  if (!brevoResponse.ok) {
    console.error(`Brevo rejected the contact message with status ${brevoResponse.status}.`);
    return jsonResponse(502, { error: 'Your message could not be sent right now. Please email me directly.' });
  }

  return jsonResponse(200, { ok: true });
}
