# VISIONZ

Production React/Vite storefront source for VISIONZ.

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Cloudflare Pages

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root / blank
- Node: 22

`public/_redirects` preserves client-side routes on Cloudflare Pages.

## Commerce

The current confirmed purchasable product is **SEE BEYOND SHORTS / NOIR** at **$225**, sizes S / M / L / XL. Checkout is Stripe-hosted, so this release does not expose or require a Stripe secret in the browser.

## Source assets

The VISIONZ mark, shorts product image, hoodie photograph, and dark lookbook photograph in `public/assets` are derived from the user-supplied VISIONZ assets for this build. No social-feed export or stock filler is included.
