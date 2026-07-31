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

## HTTPS launch

Keep the `ytstats` CNAME in **DNS only** mode while GitHub Pages provisions its managed certificate. Once GitHub enables the repository's **Enforce HTTPS** control, turn it on and verify that HTTP redirects to HTTPS. A CDN proxy is not required for this static site and can prevent GitHub from validating the origin domain.

## Search indexing launch

The repository supplies crawlable links, canonical HTTPS URLs, `robots.txt`, `sitemap.xml`, index directives, SoftwareApplication structured data, and a 1200×630 social preview.

Owner actions after HTTPS enforcement:

1. Add or open the `yashkhandelwal.me` Domain property in Google Search Console and complete its DNS TXT verification.
2. Submit `https://ytstats.yashkhandelwal.me/sitemap.xml` in the Sitemaps report.
3. Use URL Inspection → Test live URL → Request indexing for `/`, `/privacy/`, and `/support/`.
4. Put the website URL in the Chrome Web Store listing and retain the repository homepage link so the new site has authoritative inbound links.
5. Optionally import the verified Search Console property into Bing Webmaster Tools and submit the same sitemap.
6. Recheck coverage after at least one week; submission requests discovery but cannot guarantee ranking or immediate indexing.
