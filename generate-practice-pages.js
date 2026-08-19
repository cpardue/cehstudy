/**
 * generate-practice-pages.js — Generate 20 per-module CEH practice quiz pages.
 * Reads questions.json (200 MCQs, 10/module) and emits ceh-practice-questions/<slug>/index.html.
 * Mirrors the pattern in generate-glossary-pages.js and the quiz mechanics in ceh-practice-questions/index.html.
 *
 * Options are shuffled at generation time with a deterministic per-question seed (mulberry32).
 * Required because on-disk correctIndex is 0 for every question — unshuffled pages would all show "A".
 * Re-run any time: output is idempotent (same input → same bytes).
 */
const fs = require('fs');
const path = require('path');

const BASE = 'https://cehstudy.com';
const UPDATED_LINE = 'August 2026';
const LASTMOD = '2026-08-18';
const OUT_ROOT = path.join(__dirname, 'ceh-practice-questions');

// HTML entities built from char codes so an auto-formatter can't collapse them to literals.
const AMP = String.fromCharCode(38); // '&'
function esc(s) {
    return String(s)
        .replace(/&/g, AMP + 'amp;')
        .replace(/</g, AMP + 'lt;')
        .replace(/>/g, AMP + 'gt;')
        .replace(/"/g, AMP + 'quot;');
}

// Canonical module names (slugs fixed by TODO 1.2; topics from ceh-v13/module-NN/index.html titles).
// short keeps <title> <= 70 chars: "CEH v13 <short> Practice Questions 2026 | CEHStudy"
const MODULES = [
    { num: 1, slug: 'introduction-to-ethical-hacking', topic: 'Introduction to Ethical Hacking', short: 'Ethical Hacking',
      blurb: 'Foundations of ethical hacking: the CIA triad, risk analysis, threat actors, and pentest frameworks like the Cyber Kill Chain and PTES.' },
    { num: 2, slug: 'footprinting-reconnaissance', topic: 'Footprinting & Reconnaissance', short: 'Footprinting',
      blurb: 'Passive and active reconnaissance: OSINT tools, DNS/WHOIS interrogation, document metadata, and mapping the target attack surface.' },
    { num: 3, slug: 'scanning-networks', topic: 'Scanning Networks', short: 'Scanning Networks',
      blurb: 'Port scanning with Nmap: SYN/FIN/XMAS scans, UDP discovery, OS fingerprinting, and firewall-aware scan techniques.' },
    { num: 4, slug: 'enumeration', topic: 'Enumeration', short: 'Enumeration',
      blurb: 'Extracting usernames, shares, and service details via SMB, LDAP, SNMP, NetBIOS, and SMTP enumeration.' },
    { num: 5, slug: 'vulnerability-analysis', topic: 'Vulnerability Analysis', short: 'Vulnerability Analysis',
      blurb: 'Vulnerability management: CVSS scoring, CVEs, authenticated vs. unauthenticated scanning, and tools like Nessus and OpenVAS.' },
    { num: 6, slug: 'system-hacking', topic: 'System Hacking', short: 'System Hacking',
      blurb: 'Gaining access to systems: SAM/NTLM/Kerberos attacks, password cracking, buffer overflows, and privilege escalation.' },
    { num: 7, slug: 'malware-threats', topic: 'Malware Threats', short: 'Malware Threats',
      blurb: 'Malware types and lifecycle: viruses, worms, trojans, ransomware, rootkits, APT toolkits, and static vs. dynamic analysis.' },
    { num: 8, slug: 'sniffing-traffic-analysis', topic: 'Sniffing & Traffic Analysis', short: 'Sniffing',
      blurb: 'Network interception: ARP spoofing, DNS poisoning, SSL stripping, packet capture, and traffic analysis techniques.' },
    { num: 9, slug: 'social-engineering', topic: 'Social Engineering', short: 'Social Engineering',
      blurb: 'Manipulating people: phishing, vishing, pretexting, baiting, tailgating, and building a security-awareness program.' },
    { num: 10, slug: 'denial-of-service', topic: 'Denial-of-Service Attacks', short: 'Denial-of-Service',
      blurb: 'Volume, protocol, and application-layer attacks: SYN floods, amplification, botnets, and DDoS mitigation strategies.' },
    { num: 11, slug: 'session-hijacking', topic: 'Session Hijacking', short: 'Session Hijacking',
      blurb: 'Stealing active sessions: session sniffing, session fixation, cookies and tokens, and defenses like HTTPS and re-authentication.' },
    { num: 12, slug: 'evading-ids-firewalls-honeypots', topic: 'Evading IDS, Firewalls & Honeypots', short: 'Evading IDS & Firewalls',
      blurb: 'Bypassing security controls: IDS evasion, packet manipulation, tunneling, and understanding honeypot defenses.' },
    { num: 13, slug: 'hacking-web-servers', topic: 'Hacking Web Servers', short: 'Hacking Web Servers',
      blurb: 'Attacking web servers: misconfigurations, directory traversal, upload flaws, and OS-level weaknesses behind HTTP services.' },
    { num: 14, slug: 'hacking-web-applications', topic: 'Hacking Web Applications', short: 'Hacking Web Applications',
      blurb: 'Web application vulnerabilities from the OWASP Top 10: XSS, CSRF, command injection, authentication flaws, and WAF bypass.' },
    { num: 15, slug: 'sql-injection', topic: 'SQL Injection', short: 'SQL Injection',
      blurb: 'Database attacks: union-based, boolean/time-based blind SQLi, error-based techniques, detection, and prevention.' },
    { num: 16, slug: 'hacking-wireless-networks', topic: 'Hacking Wireless Networks', short: 'Hacking Wireless Networks',
      blurb: 'Wireless attacks: WPA2 handshake capture and cracking, PMKID, WPS PIN attacks, evil twins, and WPA3 SAE.' },
    { num: 17, slug: 'mobile-platforms-iot', topic: 'Mobile Platforms & IoT', short: 'Mobile Platforms & IoT',
      blurb: 'Mobile and IoT attack surface: app sandboxing bypass, USB debugging abuse, embedded device flaws, and firmware analysis.' },
    { num: 18, slug: 'lateral-movement', topic: 'Lateral Movement', short: 'Lateral Movement',
      blurb: 'Moving across a network: pass-the-hash, Kerberoasting, DCSync, pivoting techniques, and detection on enterprise networks.' },
    { num: 19, slug: 'post-exploitation-incident-response', topic: 'Post-Exploitation & Incident Response', short: 'Post-Exploitation',
      blurb: 'After access: privilege escalation, persistence, log tampering, data exfiltration, and incident response steps.' },
    { num: 20, slug: 'cryptography', topic: 'Cryptography', short: 'Cryptography',
      blurb: 'Cryptography: symmetric vs. asymmetric encryption, hashing, digital signatures, PKI, TLS, and hash attacks like rainbow tables.' }
];

// Related glossary terms per module (3 each; slugs must exist under glossary-terms/)
const RELATED = {
    1: [
        { slug: 'advanced-persistent-threat', name: 'Advanced Persistent Threat', note: 'Threat actors covered in Module 1' },
        { slug: 'social-engineering', name: 'Social Engineering', note: 'Human-factor attacks on the exam' },
        { slug: 'phishing-attack', name: 'Phishing Attack', note: 'Most common initial access vector' }
    ],
    2: [
        { slug: 'network-enumeration', name: 'Network Enumeration', note: 'The next phase after footprinting' },
        { slug: 'port-scanning', name: 'Port Scanning', note: 'Active recon covered in Module 3' },
        { slug: 'phishing-attack', name: 'Phishing Attack', note: 'Person-focused OSINT can enable social engineering' }
    ],
    3: [
        { slug: 'port-scanning', name: 'Port Scanning', note: 'Core Module 3 technique' },
        { slug: 'network-enumeration', name: 'Network Enumeration', note: 'Scanning feeds into enumeration' },
        { slug: 'denial-of-service', name: 'Denial of Service', note: 'Aggressive scans can trigger or mimic DoS' }
    ],
    4: [
        { slug: 'network-enumeration', name: 'Network Enumeration', note: 'Protocol-by-protocol breakdown' },
        { slug: 'port-scanning', name: 'Port Scanning', note: 'Enumeration targets open ports found by scanning' },
        { slug: 'privilege-escalation', name: 'Privilege Escalation', note: 'Enumeration findings enable targeted escalation' }
    ],
    5: [
        { slug: 'zero-day-vulnerability', name: 'Zero-Day Vulnerability', note: '0-day vs N-day and disclosure' },
        { slug: 'buffer-overflow', name: 'Buffer Overflow', note: 'Classic exploitable vulnerability class' },
        { slug: 'privilege-escalation', name: 'Privilege Escalation', note: 'High-impact finding in any assessment' }
    ],
    6: [
        { slug: 'buffer-overflow', name: 'Buffer Overflow', note: 'Memory corruption exploitation' },
        { slug: 'privilege-escalation', name: 'Privilege Escalation', note: 'Vertical vs horizontal escalation' },
        { slug: 'rainbow-table-attack', name: 'Rainbow Table Attack', note: 'Precomputed hash cracking and salting' }
    ],
    7: [
        { slug: 'malware', name: 'Malware', note: 'Full taxonomy: virus through ransomware' },
        { slug: 'keylogger', name: 'Keylogger', note: 'Credential-theft malware capability' },
        { slug: 'advanced-persistent-threat', name: 'Advanced Persistent Threat', note: 'APTs use custom malware families' }
    ],
    8: [
        { slug: 'man-in-the-middle', name: 'Man-in-the-Middle Attack', note: 'The goal of most sniffing techniques' },
        { slug: 'arp-spoofing', name: 'ARP Spoofing', note: 'Primary Layer 2 interception method' },
        { slug: 'denial-of-service', name: 'Denial of Service', note: 'Deauth floods are a wireless DoS vector' }
    ],
    9: [
        { slug: 'social-engineering', name: 'Social Engineering', note: 'All 15 classic techniques defined' },
        { slug: 'phishing-attack', name: 'Phishing Attack', note: 'The most common SE delivery vector' },
        { slug: 'keylogger', name: 'Keylogger', note: 'SE is the primary delivery method' }
    ],
    10: [
        { slug: 'denial-of-service', name: 'Denial of Service', note: 'Volume, protocol, and Layer 7 attacks' },
        { slug: 'man-in-the-middle', name: 'Man-in-the-Middle Attack', note: 'Combined attack chains on the exam' },
        { slug: 'advanced-persistent-threat', name: 'Advanced Persistent Threat', note: 'APTs use DDoS for disruption phases' }
    ],
    11: [
        { slug: 'man-in-the-middle', name: 'Man-in-the-Middle Attack', note: 'Session theft rides on MitM positions' },
        { slug: 'csrf', name: 'CSRF', note: 'Abuses the victim session' },
        { slug: 'cross-site-scripting', name: 'Cross-Site Scripting', note: 'XSS can lift session cookies directly' }
    ],
    12: [
        { slug: 'port-scanning', name: 'Port Scanning', note: 'Stealth scans are the evasion baseline' },
        { slug: 'man-in-the-middle', name: 'Man-in-the-Middle Attack', note: 'Tunneling creates covert MitM paths' },
        { slug: 'zero-day-vulnerability', name: 'Zero-Day Vulnerability', note: 'Unsigned attacks defeat naive IDS' }
    ],
    13: [
        { slug: 'directory-traversal', name: 'Directory Traversal', note: 'Path traversal / LFI / RFI defined' },
        { slug: 'command-injection', name: 'Command Injection', note: 'OS-level injection on the backend' },
        { slug: 'cross-site-scripting', name: 'Cross-Site Scripting', note: 'Server-side storage of XSS payloads' }
    ],
    14: [
        { slug: 'cross-site-scripting', name: 'Cross-Site Scripting', note: 'Reflected, stored, and DOM-based XSS' },
        { slug: 'csrf', name: 'CSRF', note: 'Forged requests using the victim session' },
        { slug: 'command-injection', name: 'Command Injection', note: 'Shell metacharacter payloads' }
    ],
    15: [
        { slug: 'sql-injection', name: 'SQL Injection', note: 'Union, blind, time-based, error-based' },
        { slug: 'cross-site-scripting', name: 'Cross-Site Scripting', note: 'Both are OWASP Top 10 injection flaws' },
        { slug: 'command-injection', name: 'Command Injection', note: 'OS-level analog of database injection' }
    ],
    16: [
        { slug: 'wpa2-cracking', name: 'WPA2 Cracking', note: 'Handshake, PMKID, and WPA3 SAE' },
        { slug: 'man-in-the-middle', name: 'Man-in-the-Middle Attack', note: 'Evil twin is a wireless MitM' },
        { slug: 'denial-of-service', name: 'Denial of Service', note: 'Deauthentication flood as wireless DoS' }
    ],
    17: [
        { slug: 'phishing-attack', name: 'Phishing Attack', note: 'Smishing targets mobile users' },
        { slug: 'malware', name: 'Malware', note: 'Mobile trojans and infostealers' },
        { slug: 'social-engineering', name: 'Social Engineering', note: 'Physical access to IoT/OT devices' }
    ],
    18: [
        { slug: 'privilege-escalation', name: 'Privilege Escalation', note: 'Escalation enables wider lateral movement' },
        { slug: 'man-in-the-middle', name: 'Man-in-the-Middle Attack', note: 'Network interception between hops' },
        { slug: 'advanced-persistent-threat', name: 'Advanced Persistent Threat', note: 'Lateral movement in the APT kill chain' }
    ],
    19: [
        { slug: 'privilege-escalation', name: 'Privilege Escalation', note: 'Post-exploitation privilege paths' },
        { slug: 'malware', name: 'Malware', note: 'Persistence mechanisms and implants' },
        { slug: 'advanced-persistent-threat', name: 'Advanced Persistent Threat', note: 'Long-dwelling post-compromise activity' }
    ],
    20: [
        { slug: 'rainbow-table-attack', name: 'Rainbow Table Attack', note: 'Hash attacks and the salt countermeasure' },
        { slug: 'man-in-the-middle', name: 'Man-in-the-Middle Attack', note: 'TLS downgrades and interception' },
        { slug: 'zero-day-vulnerability', name: 'Zero-Day Vulnerability', note: 'Crypto library flaws exploited pre-patch' }
    ]
};

function mulberry32(seed) {
    return function () {
        seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

const questions = JSON.parse(fs.readFileSync(path.join(__dirname, 'questions.json'), 'utf8'));

function buildPage(m) {
    const qs = questions.filter(q => q.module === m.num);
    if (qs.length < 8) throw new Error('Module ' + m.num + ': only ' + qs.length + ' questions');

    const title = `CEH v13 ${m.short} Practice Questions 2026 | CEHStudy`;
    if (title.length > 70) throw new Error(`Title >70 chars (module ${m.num}): ${title.length}`);
    const url = `${BASE}/ceh-practice-questions/${m.slug}/`;
    const desc = `Free CEH v13 Module ${m.num} ${m.topic} practice questions with detailed explanations. ${qs.length} original multiple-choice questions. Test your knowledge for the CEH 312-50 exam — no sign-up needed.`;

    // Shuffle options deterministically per question; track new correct letter
    const cards = [];
    const quizQuestions = [];
    qs.forEach((q, i) => {
        const rng = mulberry32(q.id * 7919 + 13);
        const order = [0, 1, 2, 3];
        for (let k = order.length - 1; k > 0; k--) {
            const j = Math.floor(rng() * (k + 1));
            const tmp = order[k]; order[k] = order[j]; order[j] = tmp;
        }
        const shuffled = order.map(o => q.options[o]);
        const correctLetter = 'ABCD'[order.indexOf(q.correctIndex)];
        const n = i + 1;
        const optionsHtml = shuffled.map((opt, oi) => `      <label><input type="radio" name="m${m.num}q${n}" value="${'ABCD'[oi]}"> ${'ABCD'[oi]}) ${esc(opt)}</label>`).join('\n');
        cards.push(`  <div class="question-card" data-correct="${correctLetter}">
    <h3 class="section-heading" style="margin-top:0;">Question ${n}: ${esc(q.question)}</h3>
    <div class="options">
${optionsHtml}
    </div>
    <button class="btn btn-secondary" onclick="checkAnswer(this)">Check Answer</button>
    <div class="explanation"><strong style="color:var(--accent);">Answer: ${correctLetter}</strong> — ${esc(q.explanation)}</div>
  </div>`);
        quizQuestions.push({ '@type': 'Question', name: q.question, answerValue: `${correctLetter}) ${shuffled[order.indexOf(q.correctIndex)]}` });
    });

    const prev = m.num > 1 ? MODULES[m.num - 2] : null;
    const next = m.num < 20 ? MODULES[m.num] : null;
    const related = RELATED[m.num];
    const modNum = String(m.num).padStart(2, '0');

    const faqData = [
        { q: `How many CEH v13 ${m.topic} practice questions are on this page?`,
          a: `This page includes ${qs.length} original multiple-choice practice questions for CEH v13 Module ${m.num} (${m.topic}). Each question includes a detailed explanation of the correct answer and why the other options are wrong. The full CEHStudy question bank covers all 20 modules with 200+ questions — see the practice hub at ${BASE}/ceh-practice-questions/ for every module.` },
        { q: `What does CEH v13 Module ${m.num} (${m.topic}) cover?`,
          a: `${m.blurb} These are the same topics tested under this module on the EC-Council 312-50 exam. Pair this quiz with our free Module ${m.num} flashcards at ${BASE}/ceh-v13/module-${modNum}/ to close any gaps.` },
        { q: 'Are these real CEH exam questions?',
          a: 'No. Every question on CEHStudy is original study material written for exam preparation. They match the style, difficulty, and domain coverage of the actual CEH v13 exam but are not leaked or reproduced EC-Council questions.' },
        { q: `How should I use this ${m.topic} quiz for exam prep?`,
          a: `Answer all ${qs.length} questions without peeking at explanations, then click "Show My Score". Review every explanation — especially the ones you missed — and re-test those topics with our free CEH flashcards. Aim for 80% or higher on module quizzes before scheduling the exam.` },
        { q: `Where do I find CEH ${m.topic} flashcards?`,
          a: `Our free flashcard app covers all 20 CEH v13 modules including Module ${m.num} (${m.topic}). Visit the CEH flashcards page at ${BASE}/ceh-flashcards/ or the Module ${m.num} page at ${BASE}/ceh-v13/module-${modNum}/. No account or sign-up required.` }
    ];
    const faqItems = faqData.map(f => `  <div class="faq-item">
    <h3 class="section-heading" style="margin-top:0;">${esc(f.q)}</h3>
    <p class="content-text">${f.a}</p>
  </div>`).join('\n');
    const faqJson = faqData.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }));

    const relatedHtml = related.map(r => `    <li><a href="/glossary-terms/${r.slug}/">${esc(r.name)}</a> — ${esc(r.note)}</li>`).join('\n');

    const articleJson = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `CEH v13 ${m.topic} Practice Questions (${qs.length} Questions with Explanations)`,
        description: desc,
        author: { '@type': 'Organization', name: 'CEHStudy' },
        datePublished: LASTMOD,
        dateModified: LASTMOD,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url }
    }, null, 4).replace(/\n/g, '\n  ');

    const quizJson = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Quiz',
        name: `CEH v13 Module ${m.num} ${m.topic} Practice Quiz`,
        description: `${qs.length} original practice questions for CEH v13 Module ${m.num} (${m.topic}) with detailed explanations.`,
        question: quizQuestions
    }, null, 4).replace(/\n/g, '\n  ');

    const faqSchemaJson = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqJson }, null, 4).replace(/\n/g, '\n  ');

    const breadcrumbJson = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: BASE + '/' },
            { '@type': 'ListItem', position: 2, name: 'Practice Questions', item: `${BASE}/ceh-practice-questions/` },
            { '@type': 'ListItem', position: 3, name: `Module ${m.num}: ${m.topic}`, item: url }
        ]
    }, null, 4).replace(/\n/g, '\n  ');

    const prevLabel = prev ? `Previous: Module ${prev.num} — ${esc(prev.topic)} practice questions` : 'Start at the beginning';
    const prevHref = prev ? `/ceh-practice-questions/${prev.slug}/` : '/ceh-practice-questions/introduction-to-ethical-hacking/';
    const prevText = prev ? `Module ${prev.num} quiz →` : 'Module 1 quiz →';
    const nextLabel = next ? `Next: Module ${next.num} — ${esc(next.topic)} practice questions` : 'You reached the final module';
    const nextHref = next ? `/ceh-practice-questions/${next.slug}/` : '/ceh-v13-study-guide/';
    const nextText = next ? `Module ${next.num} quiz →` : 'Full study guide →';

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" type="image/png" href="/tiny_green_favicon_skull.png">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <meta name="keywords" content="CEH v13 module ${m.num} practice questions, ${esc(m.topic)} practice test, free CEH practice questions, CEH 312-50 practice, CEH module ${m.num} quiz, CEH exam prep 2026">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${url}">

  <link rel="alternate" hreflang="en-us" href="${url}">
  <link rel="alternate" hreflang="x-default" href="${BASE}/">
  <link rel="stylesheet" href="/styles.css">
  <script type="application/ld+json">
${articleJson}
  </script>
  <script type="application/ld+json">
${quizJson}
  </script>
  <script type="application/ld+json">
${faqSchemaJson}
  </script>
  <script type="application/ld+json">
${breadcrumbJson}
  </script>
  <!-- Google AdSense -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4948135636372064" crossorigin="anonymous"></script>
</head>
<body>

<header class="header-sticky">
  <div class="header-nav-inner">
    <a href="/" class="header-nav-logo">CEHStudy</a>
    <nav class="header-nav-links">
      <a href="/ceh-v13/">Modules</a>
      <a href="/ceh-flashcards/">Flashcards</a>
      <a href="/ceh-practice-questions/">Practice Questions</a>
      <a href="/glossary/">Glossary</a>
      <a href="/faq/">FAQ</a>
    </nav>
  </div>
</header>

<div class="container">

  <p class="breadcrumb"><a href="/">Home</a> &rsaquo; <a href="/ceh-practice-questions/">Practice Questions</a> &rsaquo; Module ${m.num}</p>

  <h1 class="page-title">CEH v13 Module ${m.num}: ${esc(m.topic)} — Free Practice Questions with Explanations</h1>

  <p style="color:var(--accent);font-size:.9rem;margin-bottom:16px;">Last updated ${UPDATED_LINE} · ${qs.length} questions · Module ${m.num} of 20</p>

  <p class="content-text">${esc(m.blurb)} Below are ${qs.length} original multiple-choice practice questions for this module, each with a detailed explanation. They follow the style and difficulty of the EC-Council Certified Ethical Hacker v13 exam (312-50).</p>

  <div class="disclaimer-box">
    <strong style="color:var(--orange);">⚠️ Important Disclaimer:</strong> These practice questions are <strong>original study material</strong> created by CEHStudy for educational purposes. They are NOT EC-Council exam questions and do NOT replicate the actual exam. CEHStudy is not affiliated with or endorsed by EC-Council.
  </div>

${cards.join('\n\n')}

  <div class="score-display" id="scoreDisplay"></div>

  <div style="text-align:center; margin:30px 0;">
    <button class="btn btn-primary" onclick="showScore()" style="font-size:1.1em; padding:12px 30px;">Show My Score</button>
  </div>

  <h2 class="section-heading">Related Glossary Terms</h2>
  <ul class="content-list">
${relatedHtml}
  </ul>

  <h2 class="section-heading">Continue Your CEH v13 Prep</h2>
  <ul class="content-list">
    <li><strong>${prevLabel}</strong>: <a href="${prevHref}">${prevText}</a></li>
    <li><strong>${nextLabel}</strong>: <a href="${nextHref}">${nextText}</a></li>
    <li><strong>Practice hub:</strong> <a href="/ceh-practice-questions/">All 20 module quizzes — 200+ questions →</a></li>
    <li><strong>Flashcards:</strong> <a href="/ceh-flashcards/">Free CEH flashcards for all 20 modules →</a></li>
    <li><strong>Home:</strong> <a href="/">CEHStudy homepage →</a></li>
  </ul>

  <h2 class="section-heading">Frequently Asked Questions</h2>
${faqItems}

</div>

  <!-- AdSense -->
  <div class="ad-slot">
      <span class="ad-slot-label">Advertisement</span>
      <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4948135636372064" data-ad-slot="1111111111" data-ad-format="auto" data-full-width-responsive="true"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</${'script'}>
  </div>

<footer class="site-footer">
    <nav class="footer-nav" aria-label="Site navigation">
        <a href="/">Flashcards</a>
        <a href="/ceh-flashcards/">CEH Flashcards</a>
        <a href="/ceh-v13/">CEH v13 Modules</a>
        <a href="/ceh-v13-study-guide/">Study Guide</a>
        <a href="/ceh-practice-questions/">Practice Questions</a>
        <a href="/glossary/">Glossary</a>
        <a href="/faq/">FAQ</a>
        <a href="/about/">About</a>
        <a href="/disclaimer/">Disclaimer</a>
    </nav>
    <p class="footer-copy">CEHStudy — Free CEH v13 Study Resources. Not affiliated with EC-Council.</p>
</footer>

<script>
function checkAnswer(btn) {
  var card = btn.closest('.question-card');
  if (card.dataset.checked) return;
  var selected = card.querySelector('input[type="radio"]:checked');
  if (!selected) { alert('Please select an answer first.'); return; }
  card.dataset.checked = '1';
  var correct = card.getAttribute('data-correct');
  var explanation = card.querySelector('.explanation');
  var text = explanation.textContent.replace(/^Answer: [A-D] — /, '');
  if (selected.value === correct) {
    explanation.innerHTML = '<strong style="color:var(--accent);">✅ Correct!</strong> ' + escText(text);
  } else {
    explanation.innerHTML = '<strong style="color:var(--red);">❌ Incorrect.</strong> The correct answer is <strong>' + correct + '</strong> — ' + escText(text);
  }
  card.querySelectorAll('input[type="radio"]').forEach(function (r) { r.disabled = true; });
  explanation.classList.add('show');
  btn.style.display = 'none';
}
function escText(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
function showScore() {
  var cards = document.querySelectorAll('.question-card');
  var answered = 0, correctCount = 0;
  cards.forEach(function (card) {
    var selected = card.querySelector('input[type="radio"]:checked');
    if (selected) {
      answered++;
      if (selected.value === card.getAttribute('data-correct')) correctCount++;
    }
  });
  var display = document.getElementById('scoreDisplay');
  display.style.display = 'block';
  display.innerHTML = '<strong>Your Score: ' + correctCount + '/' + answered + '</strong> (' + (answered > 0 ? Math.round(correctCount / answered * 100) : 0) + '% of answered · ' + (cards.length - answered) + ' unanswered)';
  display.scrollIntoView({ behavior: 'smooth' });
}
</${'script'}>

</body>
</html>`;
}

// ---------- emit ----------
const letterCounts = { A: 0, B: 0, C: 0, D: 0 };
let count = 0;
for (const m of MODULES) {
    const html = buildPage(m);
    const dir = path.join(OUT_ROOT, m.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
    const letters = [...html.matchAll(/data-correct="([A-D])"/g)].map(x => x[1]);
    letters.forEach(l => letterCounts[l]++);
    const titleLen = html.match(/<title>(.*?)<\/title>/)[1].length;
    console.log('✓ ceh-practice-questions/' + m.slug + '/index.html (title ' + titleLen + ' chars, ' + letters.length + ' questions)');
    count++;
}
console.log('\nDone. Generated ' + count + ' module practice pages.');
console.log('Correct-answer letter distribution:', JSON.stringify(letterCounts));