# YouTube Watch Stats website

Static public website for YouTube Watch Stats, deployed with GitHub Pages at `https://ytstats.yashkhandelwal.me`.

## Routes

- `/` — product landing page
- `/whatsnew/` — current and archived extension release notes
- `/privacy/` — Chrome Web Store privacy policy
- `/support/` — support and troubleshooting

## Repository structure

```text
index.html                  Landing page
whatsnew/index.html         Public release notes and archive
privacy/index.html          Public version 2.5 privacy policy
support/index.html          Support and troubleshooting
404.html                    Static not-found page
assets/site.css             Shared responsive light/dark visual system
assets/theme.js             Local-only theme preference
assets/                     Logo, social image, and feature media
robots.txt                  Search crawler policy
sitemap.xml                 Canonical public routes
CNAME                       GitHub Pages custom domain
.nojekyll                   Direct static publishing
```

## Local preview

Serve the repository root with any static HTTP server. Root-relative links require an HTTP preview rather than opening the HTML files directly.

## Deployment

GitHub Pages publishes the `main` branch from the repository root. The custom subdomain uses the committed `CNAME` and serves the public website independently from the extension repository.

The site intentionally has no analytics, cookies, forms, backend, or third-party JavaScript.

## HTTPS status

Verified 3 August 2026: plain HTTP redirects permanently to HTTPS, and `/`, `/whatsnew/`, `/privacy/`, `/support/`, `/robots.txt`, and `/sitemap.xml` all return successful HTTPS responses without authentication.

## Search indexing launch

The repository supplies crawlable links, canonical HTTPS URLs, `robots.txt`, `sitemap.xml`, index directives, SoftwareApplication structured data, and a 1200×630 social preview.

Owner actions after HTTPS enforcement:

1. Add or open the `yashkhandelwal.me` Domain property in Google Search Console and complete its DNS TXT verification.
2. Submit `https://ytstats.yashkhandelwal.me/sitemap.xml` in the Sitemaps report.
3. Use URL Inspection → Test live URL → Request indexing for `/`, `/whatsnew/`, `/privacy/`, and `/support/`.
4. Put the website URL in the Chrome Web Store listing and retain the repository homepage link so the new site has authoritative inbound links.
5. Optionally import the verified Search Console property into Bing Webmaster Tools and submit the same sitemap.
6. Recheck coverage after at least one week; submission requests discovery but cannot guarantee ranking or immediate indexing.
