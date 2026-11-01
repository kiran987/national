import { FORM_CONFIG } from '../config/forms';

export interface SubmitFormOptions {
  form: HTMLFormElement;
  phpEndpoint: string;
  subject: string;
  recaptchaToken?: string;
}

/**
 * Universal Form Submitter:
 * 1. If Web3Forms Access Key is set -> submits to https://api.web3forms.com/submit
 * 2. If no key -> submits to local endpoint (e.g. PHP or Cloudflare Pages function)
 * 3. Gracefully handles static hosting where PHP is not available so forms never 404 or refresh
 */
export async function submitForm({ form, phpEndpoint, subject, recaptchaToken }: SubmitFormOptions): Promise<{ success: boolean; message?: string }> {
  const formData = new FormData(form);

  if (recaptchaToken) {
    formData.set('g-recaptcha-response', recaptchaToken);
  }

  // Option A: Web3Forms Static Endpoint
  if (FORM_CONFIG.web3formsAccessKey && FORM_CONFIG.web3formsAccessKey.trim() !== '') {
    formData.set('access_key', FORM_CONFIG.web3formsAccessKey);
    formData.set('subject', subject);
    formData.set('from_name', 'National Athletics Academy');

    const jsonObject: Record<string, any> = {};
    formData.forEach((value, key) => {
      if (key.endsWith('[]')) {
        const cleanKey = key.slice(0, -2);
        if (!jsonObject[cleanKey]) jsonObject[cleanKey] = [];
        jsonObject[cleanKey].push(value);
      } else {
        jsonObject[key] = value;
      }
    });

    try {
      const resp = await fetch(FORM_CONFIG.web3formsEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(jsonObject),
      });
      const data = await resp.json();
      return { success: data.success || resp.ok, message: data.message };
    } catch (err) {
      console.warn('Web3Forms submission error, falling back to local handler:', err);
    }
  }

  // Option B / Default: cPanel PHP endpoint
  try {
    const resp = await fetch(phpEndpoint, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData,
    });
    const data = await resp.json().catch(() => ({}));
    if (resp.ok && data.success !== false) {
      return { success: true, message: data.message };
    }
    return { success: false, message: data.error || 'Submission failed. Please email info@naacanada.org directly.' };
  } catch (err) {
    console.warn('Form submission failed:', err);
    return { success: false, message: 'Network error. Please check your connection or email info@naacanada.org directly.' };
  }
}
