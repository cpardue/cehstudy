/**
 * adsense-insert.js — CEHStudy AdSense integration (one ad slot per monetized page)
 *
 * Usage: node adsense-insert.js
 * Idempotent: pages already containing "adsbygoogle" are skipped.
 *
 * Placement:
 *   - index.html           -> immediately after .flashcard-area (before SEO Content Section)
 *   - all other pages      -> immediately before <footer>
 *
 * Skipped (low-value): about/, contact/, disclaimer/, changelog/, glossary/, glossary-terms/
 *
 * After AdSense account review: create ONE responsive ad unit, replace AD_SLOT_NUMBER below.
 */

const fs = require('fs');
const path = require('path');

const AD_CLIENT = 'ca-pub-4948135636372064';
const AD_SLOT_NUMBER = '1111111111'; // TODO: replace with real ad unit number after AdSense review

const SKIP_DIRS = new Set([
    'about', 'contact', 'disclaimer', 'changelog', 'glossary', 'glossary-terms'
]);

const PUBLISHER_SNIPPET =
`    <!-- Google AdSense -->\n    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}" crossorigin="anonymous"></script>\n`;

const AD_SLOT_HTML =
`    <!-- AdSense -->\n    <div class="ad-slot">\n        <span class="ad-slot-label">Advertisement</span>\n        <ins class="adsbygoogle" style="display:block" data-ad-client="${AD_CLIENT}" data-ad-slot="${AD_SLOT_NUMBER}" data-ad-format="auto" data-full-width-responsive="true"></ins>\n        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>\n    </div>\n\n`;

function findHtmlFiles(root, dir = root) {
    const out = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'MCP_Servers' || entry.name === 'Github_MCP_Server') continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) out.push(...findHtmlFiles(root, full));
        else if (entry.name === 'index.html') out.push(full);
    }
    return out;
}

function processFile(file) {
    const rel = path.relative(process.cwd(), file).split(path.sep).join('/');
    let html = fs.readFileSync(file, 'utf8');

    // Idempotency guard
    if (html.includes('adsbygoogle')) return { status: 'skipped-already-has-ads', file: rel };

    // 1) Publisher snippet before </head>
    if (!html.includes('</head>')) return { status: 'error-no-head', file: rel };
    html = html.replace('</head>', PUBLISHER_SNIPPET + '</head>');

    // 2) Ad slot insertion
    let inserted = false;
    if (rel === 'index.html') {
        // After flashcard area closes, before SEO Content Section
        const anchor = '\n    <!-- SEO Content Section -->';
        const idx = html.indexOf(anchor);
        if (idx !== -1) {
            html = html.slice(0, idx) + '\n' + AD_SLOT_HTML + html.slice(idx);
            inserted = true;
        }
    }
    if (!inserted) {
        const ftIdx = html.search(/<footer[\s>]/i);
        if (ftIdx === -1) return { status: 'error-no-footer', file: rel };
        // Walk back to start of line for clean indentation
        let lineStart = ftIdx;
        while (lineStart > 0 && html[lineStart - 1] !== '\n') lineStart--;
        html = html.slice(0, lineStart) + AD_SLOT_HTML + html.slice(lineStart);
        inserted = true;
    }

    if (!inserted) return { status: 'error-no-anchor', file: rel };
    fs.writeFileSync(file, html, 'utf8');
    return { status: 'updated', file: rel };
}

const root = process.cwd();
const files = findHtmlFiles(root);

let updated = 0, skippedAds = 0, skippedLowValue = 0, errors = [];
const results = [];

for (const file of files) {
    const rel = path.relative(process.cwd(), file).split(path.sep).join('/');
    const topDir = rel.split('/')[0];

    // Skip low-value pages
    if (SKIP_DIRS.has(topDir) && rel !== 'index.html') {
        skippedLowValue++;
        continue;
    }
    const r = processFile(file);
    results.push(r);
    if (r.status === 'updated') updated++;
    else if (r.status === 'skipped-already-has-ads') skippedAds++;
    else errors.push(r);
}

console.log(`Total index.html pages found: ${files.length}`);
console.log(`Updated with AdSense:         ${updated}`);
console.log(`Already had adsbygoogle:      ${skippedAds}`);
console.log(`Skipped (low-value):          ${skippedLowValue}`);
for (const e of errors) console.log(`ERROR: ${e.status} -> ${e.file}`);
console.log('\nUpdated files:');
results.filter(r => r.status === 'updated').forEach(r => console.log('  ' + r.file));