// ─────────────────────────────────────────────────────────────────────────────
// Form Submission Configuration (Static & Serverless Support)
// ─────────────────────────────────────────────────────────────────────────────
// For static hosting (Cloudflare Pages, Vercel, Netlify, GitHub Pages):
// You can get a free access key from https://web3forms.com (delivers straight to info@naacanada.org).
// When WEB3FORMS_ACCESS_KEY is set, forms submit directly to Web3Forms' spam-filtered static endpoint.
// When left empty, forms submit to the local backend endpoints or Cloudflare/Vercel serverless functions.
export const FORM_CONFIG = {
  web3formsAccessKey: '', // e.g. 'YOUR_WEB3FORMS_ACCESS_KEY'
  web3formsEndpoint: 'https://api.web3forms.com/submit',
  notificationEmail: 'info@naacanada.org',
};
