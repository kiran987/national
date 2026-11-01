// Cloudflare Pages Serverless Function for notify-signup
export async function onRequestPost({ request }: { request: Request }): Promise<Response> {
  try {
    const contentType = request.headers.get('content-type') || '';
    let bodyData: Record<string, any> = {};

    if (contentType.includes('application/json')) {
      bodyData = await request.json();
    } else {
      const formData = await request.formData();
      formData.forEach((value, key) => {
        if (key.endsWith('[]')) {
          const cleanKey = key.slice(0, -2);
          if (!bodyData[cleanKey]) bodyData[cleanKey] = [];
          bodyData[cleanKey].push(value);
        } else {
          bodyData[key] = value;
        }
      });
    }

    const { first_name, last_name, email, phone, programs, notes, 'g-recaptcha-response': token } = bodyData;

    // Optional server-side reCAPTCHA v3 check if secret key set in Cloudflare Environment
    // const secret = env.RECAPTCHA_SECRET_KEY;

    return new Response(JSON.stringify({
      success: true,
      message: "You're on the early access list! We'll notify you as soon as registration opens."
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Error processing submission.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
