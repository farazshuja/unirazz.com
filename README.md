# Unirazz Services static website

This folder is a complete, dependency-free static website for GitHub Pages.

## Publish with GitHub Pages

1. Upload the contents of this folder to the root of a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Select **Deploy from a branch**, then choose the `main` branch and `/ (root)`.
4. The included `CNAME` file sets the custom domain to `www.unirazz.com`; confirm the domain in the Pages settings and point its DNS to GitHub Pages when ready.

The enquiry form uses `mailto:` and does not require server-side hosting. The
`power-equipment-expertise.html` page opens from the Procurement Consultancy
service card and includes its own SEO metadata, structured data and image-rich
technical content. The `consumer-grid-station-methodology.html` page opens in a
new tab from the featured Kohinoor Textile Mills consumer grid station project
and presents the seven-phase EPCC delivery methodology. Keep the included
`robots.txt` and `sitemap.xml` at the site root so search engines can discover
all pages.

## Blog

The generated VitePress blog is published from `/blog` at
`https://www.unirazz.com/blog/`. Add or edit article Markdown files in
`/blog-source/docs/articles/`, update the article list in
`/blog-source/docs/.vitepress/config.mjs`, then run:

```bash
npm run build:blog
```

Run `npm install` once inside `/blog-source` before the first build. The build
updates `/blog` in place, ready to commit and push with the rest of this static
site.
