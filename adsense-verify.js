/** Verify AdSense integration: 1 publisher snippet + 1 ad slot per monetized page; 0 on low-value pages. */
const fs = require('fs'), path = require('path');
const skip = new Set(['about', 'contact', 'disclaimer', 'changelog', 'glossary', 'glossary-terms']);
function walk(d) {
    let out = [];
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        if (e.name.startsWith('.') || ['node_modules', 'MCP_Servers', 'Github_MCP_Server'].includes(e.name)) continue;
        const f = path.join(d, e.name);
        if (e.isDirectory()) out = out.concat(walk(f));
        else if (e.name === 'index.html') out.push(f);
    }
    return out;
}
let bad = 0, ok = 0, skipOk = 0;
for (const f of walk('.')) {
    const rel = path.relative('.', f).split(path.sep).join('/');
    const top = rel.split('/')[0];
    const h = fs.readFileSync(f, 'utf8');
    const slots = (h.match(/class="ad-slot"/g) || []).length;
    const pubs = (h.match(/pagead2\.googlesyndication/g) || []).length;
    if (skip.has(top) && rel !== 'index.html') {
        if (h.includes('adsbygoogle')) { console.log('UNEXPECTED AD ON SKIPPED PAGE: ' + rel); bad++; } else skipOk++;
        continue;
    }
    if (slots === 1 && pubs === 1) ok++;
    else { console.log('PROBLEM: ' + rel + ' slots=' + slots + ' pubs=' + pubs); bad++; }
}
console.log('OK pages: ' + ok + ' | clean-skipped: ' + skipOk + ' | problems: ' + bad);