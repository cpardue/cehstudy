# cehstudy.com — Website Context

## Hosting
- **Domain:** cehstudy.com (points to GitHub Pages)
- **Repo:** github.com/cpardue/cehstudy (main branch)
- **Type:** Static site, no build system — HTML/CSS/JS served directly from GitHub Pages

## Key Files
| File | Purpose |
|------|---------|
| `index.html` | Main flashcard app entry point + SEO content |
| `ceh-v13/module-NN/index.html` | 19 individual module study pages with SEO |
| `about/index.html` | About CEHStudy page |
| `contact/index.html` | Contact page |
| `faq/index.html` | CEH v13 FAQ page |
| `disclaimer/index.html` | EC-Council disclaimer page |
| `glossary/index.html` | CEH cybersecurity glossary index |
| `ceh-v13/index.html` | CEH v13 modules index page |
| `ceh-v13-study-guide/index.html` | Full CEH v13 study guide (pillar page) |
| `ceh-practice-questions/index.html` | 15 practice questions by category |
| `robots.txt` | Search engine crawl directives |
| `sitemap.xml` | Site map for SEO with all indexable pages |

## Recent Changes — 2026-08-12
### All Phases Complete
- Phase 0: Site backup created
- Phase 1: Homepage SEO foundation (meta tags, JSON-LD, content sections)
- Phase 2: 19 individual module pages in `ceh-v13/module-NN/`
- Phase 3: Support pages (about, contact, faq, disclaimer, glossary)
- Phase 4: Site infrastructure (robots.txt, sitemap.xml, footer nav)
- Phase 5: Content expansion (study guide, practice questions)

## SEO Structure
- **Title tags:** Page-specific with consistent `| CEHStudy` suffix
- **Meta descriptions:** ~150-160 chars, keyword-rich, call-to-action
- **JSON-LD:** WebPage, FAQPage, BreadcrumbList, DefinedTerm schemas
- **Canonical URLs:** Self-referencing on every page
- **Internal linking:** Cross-links between modules, guides, glossary
- **Footer nav:** Flashcards | CEH v13 Modules | Study Guide | Practice Questions | Glossary | FAQ | About | Contact | Disclaimer

## Optional Future Work
- Individual glossary term pages (`/glossary/[term]/index.html`)
- Google Analytics 4 setup (client-side supported)
- Open Graph / Twitter Card meta tags for social sharing
- More practice questions (target: 50+)
- Submit sitemap to Google Search Console & Bing Webmaster Tools
