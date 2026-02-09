'use server';

export async function sendContactEmail(data) {
  try {
    const res = await fetch(process.env.EMAIL_API_URL, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        }),
    });

    const text = await res.text();
    console.log('[ACTION] API response:', text);

    if (!res.ok) {
        throw new Error(text);
    }


  } catch (err) {
    console.error('[ACTION] ERROR:', err.message);
    throw err; // This causes 500 in browser
  }
}