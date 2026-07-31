# YouTube Watch Stats website

Static public website for YouTube Watch Stats, deployed with GitHub Pages at `https://ytstats.yashkhandelwal.me`.

## Routes

- `/` — product landing page
- `/privacy/` — Chrome Web Store privacy policy
- `/support/` — support and troubleshooting

## Local preview

Serve the repository root with any static HTTP server. Root-relative links require an HTTP preview rather than opening the HTML files directly.

## Deployment

GitHub Pages publishes the `main` branch from the repository root. The custom subdomain must use a DNS `CNAME` record pointing `ytstats` to the GitHub Pages hostname for the repository owner. Enforce HTTPS after DNS verification succeeds.

The site intentionally has no analytics, cookies, forms, backend, or third-party JavaScript.
