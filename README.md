# JPncoded Landing Page

Static landing page with bilingual (ID/EN) slang copy and automatic language selection by IP (Cloudflare).

## How language works
- Cloudflare Pages Functions sets a `lang` cookie from `CF-IPCountry`.
- Browser falls back to `navigator.language` if no cookie exists.
- Manual switch is always available (ID/EN toggle).

## Configure links
Edit `app.js`:
- `config.links` for site URLs and social links.
- Any link left as `#` stays disabled.

## Cloudflare setup
Deploy to Cloudflare Pages with Functions enabled so `functions/_middleware.js` runs.

## Local preview
Open `index.html` directly in a browser. Language fallback uses browser settings.
