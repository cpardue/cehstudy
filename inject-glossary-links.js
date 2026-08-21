// Inject ≥3 related glossary term links into every ceh-v13/module-NN/index.html
const fs = require('fs');
const path = require('path');

const moduleDir = path.join(__dirname, 'ceh-v13');
const modules = [];

// Discover all module directories
for (const f of fs.readdirSync(moduleDir)) {
  if (/^module-\d+$/.test(f)) {
    const modNum = parseInt(f.split('-')[1], 10);
    modules.push({ num: modNum, slug: `module-${String(modNum).padStart(2, '0')}` });
  }
}
modules.sort((a, b) => a.num - b.num);

// Available glossary slugs (from glossary-terms/ directory)
const availableSlugs = new Set([
  'advanced-persistent-threat', 'arp-spoofing', 'buffer-overflow', 'command-injection',
  'cross-site-scripting', 'csrf', 'denial-of-service', 'directory-traversal',
  'keylogger', 'malware', 'man-in-the-middle', 'network-enumeration',
  'phishing-attack', 'port-scanning', 'privilege-escalation', 'rainbow-table-attack',
  'social-engineering', 'sql-injection', 'wpa2-cracking', 'zero-day-vulnerability'
]);

// Glossary term → module mappings (derived from glossary-terms/related arrays + module content)
const termToModules = {
  // Module 1: Intro to Ethical Hacking
  'advanced-persistent-threat': [1],
  'zero-day-vulnerability': [1, 5],
  'malware': [1, 7],
  // Module 2: Footprinting
  'port-scanning': [2, 3],
  'network-enumeration': [2, 4],
  // Module 3: Scanning
  'port-scanning': [2, 3],
  'network-enumeration': [2, 4, 8],
  'denial-of-service': [3, 10],
  // Module 4: Enumeration
  'network-enumeration': [2, 4, 8],
  'port-scanning': [2, 3],
  'privilege-escalation': [4, 6],
  // Module 5: Vulnerability Analysis
  'zero-day-vulnerability': [1, 5],
  'buffer-overflow': [5, 6],
  'sql-injection': [5, 15],
  'cross-site-scripting': [5, 14],
  // Module 6: System Hacking
  'buffer-overflow': [5, 6],
  'privilege-escalation': [4, 6],
  'command-injection': [6, 14],
  'keylogger': [6, 7],
  'rainbow-table-attack': [6],
  'malware': [1, 7],
  // Module 7: Malware
  'malware': [1, 7],
  'advanced-persistent-threat': [1, 7],
  'keylogger': [6, 7],
  'zero-day-vulnerability': [1, 5],
  // Module 8: Sniffing & Traffic Analysis
  'man-in-the-middle': [6, 8, 11],
  'arp-spoofing': [8, 11],
  'denial-of-service': [3, 10],
  // Module 9: Social Engineering
  'phishing-attack': [7, 9],
  'social-engineering': [9],
  // Module 10: Denial of Service
  'denial-of-service': [3, 10],
  'man-in-the-middle': [6, 8, 11],
  // Module 11: Session Hijacking
  'man-in-the-middle': [6, 8, 11],
  'csrf': [14],
  'phishing-attack': [7, 9],
  // Module 12: Hacking Wireless Networks
  'wpa2-cracking': [12],
  'denial-of-service': [3, 10],
  'man-in-the-middle': [6, 8, 11],
  // Module 13: Hacking Mobile Platforms & IoT
  'malware': [1, 7],
  'phishing-attack': [7, 9],
  'social-engineering': [9],
  // Module 14: Hacking Web Applications
  'sql-injection': [5, 15],
  'cross-site-scripting': [5, 14],
  'command-injection': [6, 14],
  'directory-traversal': [14],
  'csrf': [14],
  // Module 15: SQL Injection
  'sql-injection': [5, 15],
  'cross-site-scripting': [5, 14],
  'command-injection': [6, 14],
  // Module 16: Lateral Movement
  'privilege-escalation': [4, 6],
  'man-in-the-middle': [6, 8, 11],
  'malware': [1, 7],
  // Module 17: Post-Exploitation & Incident Response
  'advanced-persistent-threat': [1, 7],
  'malware': [1, 7],
  'privilege-escalation': [4, 6],
  // Module 18: Cloud Computing
  'sql-injection': [5, 15],
  'cross-site-scripting': [5, 14],
  'denial-of-service': [3, 10],
  // Module 19: IoT & OT Hacking
  'malware': [1, 7],
  'wpa2-cracking': [12],
  'man-in-the-middle': [6, 8, 11],
  // Module 20: Cryptography
  'rainbow-table-attack': [6],
  'wpa2-cracking': [12],
  'keylogger': [6, 7],
};

// Build per-module glossary term list (only include available slugs)
const moduleTerms = {};
for (const [slug, modNums] of Object.entries(termToModules)) {
  if (!availableSlugs.has(slug)) continue; // skip non-existent terms like session-hijacking
  for (const mn of modNums) {
    if (!moduleTerms[mn]) moduleTerms[mn] = [];
    if (!moduleTerms[mn].includes(slug)) moduleTerms[mn].push(slug);
  }
}

// Ensure every module has at least 3 terms — add fallback terms where needed
const fallbackTerms = ['malware', 'zero-day-vulnerability', 'social-engineering', 'network-enumeration'];
for (let i = 1; i <= 20; i++) {
  if (!moduleTerms[i]) moduleTerms[i] = [];
  for (const fb of fallbackTerms) {
    if (moduleTerms[i].length >= 3) break;
    if (!moduleTerms[i].includes(fb)) moduleTerms[i].push(fb);
  }
}

let count = 0;
let skipped = 0;

for (const mod of modules) {
  const filePath = path.join(moduleDir, mod.slug, 'index.html');
  if (!fs.existsSync(filePath)) {
    skipped++;
    console.log(`SKIP ${mod.slug}/ — file not found`);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  // Check if glossary links already exist
  if (html.includes('glossary-terms/')) {
    skipped++;
    console.log(`SKIP ${mod.slug}/ — already has glossary links`);
    continue;
  }

  const terms = moduleTerms[mod.num];
  if (!terms || terms.length === 0) {
    skipped++;
    console.log(`SKIP ${mod.slug}/ — no term mappings`);
    continue;
  }

  // Take top 3-4 terms (prefer first entries)
  const selected = terms.slice(0, Math.min(4, terms.length));

  // Build glossary links HTML block
  const glossaryBlock = `
        <h2 class="section-heading">Related Glossary Terms</h2>
        <ul class="content-list">
${selected.map(slug => {
  const termName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return `            <li><a href="/glossary-terms/${slug}/">${termName}</a> — Definition and CEH exam relevance</li>`;
}).join('\n')}
        </ul>`;

  // Inject right before the <!-- Footer --> comment
  const footerComment = html.indexOf('    <!-- Footer -->');
  if (footerComment > -1) {
    html = html.slice(0, footerComment) + glossaryBlock + '\n\n' + html.slice(footerComment);
    count++;
    console.log(`✓ ${mod.slug}/ — injected ${selected.length} glossary links`);
  } else {
    skipped++;
    console.log(`FAIL ${mod.slug}/ — cannot find injection point`);
  }

  fs.writeFileSync(filePath, html, 'utf8');
}

console.log(`\nDone. Injected glossary links into ${count} module pages. Skipped ${skipped}.`);
