/** One-shot: add .ad-slot CSS to inline-styled Phase-4 pages (no /styles.css). Idempotent. */
const fs = require('fs');
const files = [
    'ceh-comparison/index.html',
    'ceh-exam-domains/index.html',
    'ceh-exam-registration/index.html',
    'ceh-study-plan/index.html'
];
const CSS = `\n        .ad-slot{max-width:728px;min-height:90px;margin:24px auto;padding:12px;text-align:center;background:var(--bg2);border:1px dashed var(--border);overflow:hidden}\n        .ad-slot .adsbygoogle{display:block;width:100%}\n        .ad-slot-label{font-size:.65rem;letter-spacing:.08em;text-transform:uppercase;color:var(--text2);margin-bottom:6px;display:block}\n        @media(max-width:728px){.ad-slot{max-width:100%;min-height:0}}\n    </style>`;
for (const f of files) {
    let html = fs.readFileSync(f, 'utf8');
    if (html.includes('.ad-slot')) { console.log('skip (already styled): ' + f); continue; }
    const idx = html.indexOf('</style>');
    if (idx === -1) { console.log('ERROR no style block: ' + f); continue; }
    html = html.slice(0, idx) + CSS + html.slice(idx);
    fs.writeFileSync(f, html, 'utf8');
    console.log('styled: ' + f);
}