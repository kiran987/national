import { RECAPTCHA_SITE_KEY } from '../config/recaptcha';

/**
 * Executes Google reCAPTCHA v3 and returns the response token.
 * Resolves to an empty string if reCAPTCHA is not loaded or configured.
 */
export async function executeRecaptcha(action: string = 'submit'): Promise<string> {
  if (typeof window === 'undefined') return '';
  const win = window as any;

  if (!win.grecaptcha || !RECAPTCHA_SITE_KEY || RECAPTCHA_SITE_KEY === 'YOUR_RECAPTCHA_SITE_KEY') {
    return '';
  }

  return new Promise((resolve) => {
    try {
      win.grecaptcha.ready(async () => {
        try {
          const token = await win.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
          resolve(token || '');
        } catch {
          resolve('');
        }
      });
    } catch {
      resolve('');
    }
  });
}
