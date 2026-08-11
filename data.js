// CEH v13 Flashcard Data - All 20 Modules
const CEH_DATA = {
  modules: [
    { id:1, title:"Introduction to Ethical Hacking", slug:"module1", sections:[
      { title:"Information Security", content:"<h4>The CIA Triad</h4><p>Information security's primary focus is the balanced protection of the <strong>confidentiality, integrity, and availability</strong> of data.</p><ul><li><strong>Confidentiality:</strong> Only authorized users can access data</li><li><strong>Integrity:</strong> Data is protected from unauthorized modification</li><li><strong>Availability:</strong> Data and systems are accessible when needed</li></ul>", cards:[
        {q:"What does the CIA triad stand for?",a:"Confidentiality, Integrity, and Availability"},
        {q:"What is the difference between a passive attack and an active attack?",a:"Passive attacks do not directly engage with the target system (e.g., network traffic analysis). Active attacks directly engage with the target."}
      ]},
      { title:"Hacking Methodology", content:"<h4>CEH Hacking Methodology Phases</h4><ol><li>Gaining Access</li><li>Escalating Privileges</li><li>Maintaining Access</li><li>Covering Tracks</li></ol>", cards:[
        {q:"What are the 4 phases of the CEH hacking methodology?",a:"1) Gaining Access, 2) Escalating Privileges, 3) Maintaining Access, 4) Covering Tracks"},
        {q:"What is the Cyber Kill Chain?",a:"7-phase model: Reconnaissance, Weaponization, Delivery, Exploitation, Installation, Command & Control, Action on Objectives."}
      ]},
      { title:"Hacker Types", content:"<h4>Hacker Classifications</h4><ul><li><strong>White Hat:</strong> Ethical hackers who work to keep data safe</li><li><strong>Black Hat:</strong> Hackers with malicious intentions</li><li><strong>Grey Hat:</strong> May violate laws but without malicious intent</li></ul>", cards:[
        {q:"What is the difference between white hat and black hat hackers?",a:"White hat hackers work ethically to find and fix vulnerabilities. Black hat hackers have malicious intent."},
        {q:"What is a script kiddie?",a:"An unskilled individual who uses scripts or programs developed by others to hack systems."}
      ]},
      { title:"Security Controls & Risk", content:"<h4>Risk Management</h4><p>Identification, evaluation, and prioritization of risks followed by coordinated application of resources.</p>", cards:[
        {q:"What is Defense-in-Depth?",a:"A layered security approach where multiple controls protect information assets."},
        {q:"What is a Risk Matrix?",a:"A matrix that defines risk level by combining probability/likelihood with consequence severity categories."}
      ]},
      { title:"Security Laws", content:"<ul><li>PCI DSS - Payment card industry security standard</li><li>ISO 27001 - Information security management systems</li><li>HIPAA - Healthcare data protection</li><li>Sarbanes-Oxley - Financial reporting practices</li><li>DMCA - Digital Millennium Copyright Act</li><li>GDPR - EU privacy law</li></ul>", cards:[
        {q:"What is PCI DSS?",a:"Payment Card Industry Data Security Standard for organizations that handle credit cards."},
        {q:"What does the DMCA criminalize?",a:"Production and dissemination of technology intended to circumvent Digital Rights Management (DRM) measures."}
      ]}
    ]},
    { id:2, title:"Footprinting & Reconnaissance", slug:"module2", sections:[
      { title:"Footprinting Concepts", content:"<p>Footprinting is the process of gathering information about a target organization before launching an attack.</p>", cards:[
        {q:"What is footprinting?",a:"The process of gathering information about a target organization before launching an attack. It is the first phase of ethical hacking."},
        {q:"What is the difference between active and passive footprinting?",a:"Passive footprinting gathers info without directly interacting with the target. Active footprinting involves direct interaction."}
      ]},
      { title:"Search Engine Footprinting", content:"<p>Google dorks are advanced search operators used to find specific information exposed on the web.</p>", cards:[
        {q:"What are Google Dorks?",a:"Advanced Google search operators: site:, filetype:, inurl:, intitle:, intext:"}
      ]}
    ]},
    { id:3, title:"Scanning Networks", slug:"module3", sections:[
      { title:"Network Scanning Concepts", content:"<p>Network scanning discovers live hosts, open ports, and services on a target network.</p>", cards:[
        {q:"What is the difference between scanning and footprinting?",a:"Footprinting gathers general information. Scanning actively probes the target's network to discover live hosts, open ports, and services."},
        {q:"What is directory transversal?",a:"Finding a directory listing and gaining access to a parent or root file for access to other files."},
        {q:"What is incremental substitution?",a:"Replacing numbers in a URL to access other files."},
        {q:"What is vulnerability scanning?",a:"The automated process of proactively identifying vulnerabilities of computing systems present in a network."},
        {q:"What is network scanning?",a:"A procedure for identifying active hosts on a network."},
        {q:"What is port scanning?",a:"A series of messages sent by someone attempting to break into a computer to learn about the computer's network services."},
        {q:"What is a TCP SYN scan?",a:"<code>-sS</code> — Half-open scan, sends SYN packets and analyzes responses without completing the TCP handshake."},
        {q:"What is a TCP connect() scan?",a:"<code>-sT</code> — Completes the full TCP three-way handshake."},
        {q:"What is a FIN scan?",a:"<code>-sF</code> — Sends a FIN packet; non-listening ports respond with RST."},
        {q:"What is a Xmas Tree scan?",a:"<code>-sX</code> — Sets FIN, PSH, and URG flags like a Christmas tree."},
        {q:"What is a Ping scan?",a:"<code>-sP</code> — ICMP ping sweep to discover live hosts."},
        {q:"What is a Version Detection scan?",a:"<code>-sV</code> — Probes open ports to determine service/version info."},
        {q:"What is a UDP scan?",a:"<code>-sU</code> — Scans for open UDP ports."},
        {q:"What is an IP Protocol scan?",a:"<code>-sO</code> — Detects which IP protocols (TCP, UDP, ICMP, etc.) are supported."},
        {q:"What is an ACK scan?",a:"<code>-sA</code> — Determines if a firewall is stateful or stateless."},
        {q:"What is a Window scan?",a:"<code>-sW</code> — Uses the TCP window value in RST packets to determine port status."},
        {q:"What is an FTP Bounce attack?",a:"<code>-b</code> — Uses a proxy FTP server to scan a target through the relay."},
        {q:"What is a List scan?",a:"<code>-sL</code> — Simple DNS resolution list, does not send any packets to the target."},
        {q:"What is an Idlescan?",a:"<code>-sI</code> — Zombie-based stealthy port scan."},
        {q:"How do you disable ping in nmap?",a:"<code>-P0</code> (or <code>-Pn</code> in newer versions) — skips host discovery."},
        {q:"What is a TCP Ping?",a:"<code>-PT</code> — Uses TCP SYN/ACK to specific ports for host discovery."},
        {q:"What is a SYN Ping?",a:"<code>-PS</code> — Sends TCP SYN packets for host discovery."},
        {q:"What are the ICMP ping types in nmap?",a:"<code>-PI</code> — ICMP ping. <code>-PP</code> ICMP Timestamp. <code>-PM</code> ICMP Netmask. <code>-PB</code> combines all ICMP pings."},
        {q:"How do you specify output formats in nmap?",a:"<code>-oN</code> Normal, <code>-oX</code> XML, <code>-oG</code> Grepable, <code>-oA</code> All outputs."},
        {q:"What are the nmap timing options?",a:"<code>-T0</code> Paranoid (300s wait), <code>-T1</code> Sneaky (15s wait), <code>-T2</code> Polite (0.4s wait), <code>-T3</code> Normal, <code>-T4</code> Aggressive (300s timeout, 1.25s/probe), <code>-T5</code> Insane (75s timeout, 0.3s/probe)."},
        {q:"How do you specify ports in nmap?",a:"<code>-p &lt;port ranges&gt;</code> — e.g., <code>-p 1-1000</code> or <code>-p 22,80,443</code>."},
        {q:"How do you perform OS fingerprinting with randomization in nmap?",a:"<code>nmap --randomize_hosts -O</code> — Randomizes host order and attempts OS detection."}
      ]}
    ]},
    { id:4, title:"Enumeration", slug:"module4", sections:[
      { title:"Enumeration Concepts", content:"<p>Enumeration extracts user names, host names, and service information from a system.</p>", cards:[
        {q:"What is enumeration?",a:"Extracting user accounts, passwords, SMB info, SNMP data, and directory service information from a target system."}
      ]}
    ]},
    { id:5, title:"Vulnerability Analysis", slug:"module5", sections:[
      { title:"Vulnerability Assessment", content:"<p>Identifying, quantifying, and prioritizing vulnerabilities in a system.</p>", cards:[
        {q:"What is vulnerability assessment?",a:"The process of identifying, quantifying, and prioritizing vulnerabilities using automated tools and manual analysis."}
      ]}
    ]},
    { id:6, title:"System Hacking", slug:"module6", sections:[
      { title:"Gaining Access", content:"<p>Techniques for gaining access including password cracking and exploitation.</p>", cards:[
        {q:"What is password cracking?",a:"Recovering passwords from data stored in scrambled form. Methods include brute-force, dictionary attacks, and rainbow tables."}
      ]}
    ]},
    { id:7, title:"Malware Threats", slug:"module7", sections:[
      { title:"Malware Concepts", content:"<p>Types of malware: viruses, worms, trojans, ransomware, spyware, rootkits, fileless malware.</p>", cards:[
        {q:"What are the main types of malware?",a:"Viruses, worms, trojans, ransomware, spyware, rootkits, fileless malware, and APTs."}
      ]}
    ]},
    { id:8, title:"Sniffing", slug:"module8", sections:[
      { title:"Sniffing Concepts", content:"<p>Capturing and analyzing network traffic flowing through a network.</p>", cards:[
        {q:"What is network sniffing?",a:"The process of capturing and analyzing network traffic. Sniffers can capture packets, credentials, and sensitive data."}
      ]}
    ]},
    { id:9, title:"Social Engineering", slug:"module9", sections:[
      { title:"Social Engineering Concepts", content:"<p>Manipulating people into performing actions or divulging confidential information.</p>", cards:[
        {q:"What is social engineering?",a:"The art of manipulating people into performing actions or divulging confidential information."}
      ]}
    ]},
    { id:10, title:"Denial-of-Service", slug:"module10", sections:[
      { title:"DoS/DDoS Concepts", content:"<p>Causing systems to become unavailable to users.</p>", cards:[
        {q:"What is the difference between DoS and DDoS?",a:"DoS comes from a single source. DDoS comes from multiple distributed sources, often a botnet."}
      ]}
    ]},
    { id:11, title:"Session Hijacking", slug:"module11", sections:[
      { title:"Session Hijacking Concepts", content:"<p>Taking over a user's authenticated session.</p>", cards:[
        {q:"What is session hijacking?",a:"Taking over a user's authenticated session by stealing or predicting the session ID."}
      ]}
    ]},
    { id:12, title:"Evading IDS, Firewalls & Honeypots", slug:"module12", sections:[
      { title:"IDS/IPS Concepts", content:"<p>Intrusion Detection and Prevention Systems.</p>", cards:[
        {q:"What is the difference between IDS and IPS?",a:"IDS monitors and alerts on suspicious activity. IPS actively blocks detected threats."}
      ]}
    ]},
    { id:13, title:"Hacking Web Servers", slug:"module13", sections:[
      { title:"Web Server Concepts", content:"<p>Attack vectors against web servers like IIS and Apache.</p>", cards:[
        {q:"What are common web server vulnerabilities?",a:"Misconfigurations, default credentials, unnecessary modules, outdated software, directory traversal."}
      ]}
    ]},
    { id:14, title:"Hacking Web Applications", slug:"module14", sections:[
      { title:"Web Application Threats", content:"<p>OWASP Top 10 and web application security risks.</p>", cards:[
        {q:"What is the OWASP Top 10?",a:"A standard document listing the top 10 most critical web application security risks."}
      ]}
    ]},
    { id:15, title:"SQL Injection", slug:"module15", sections:[
      { title:"SQL Injection Concepts", content:"<p>Inserting malicious SQL to manipulate backend databases.</p>", cards:[
        {q:"What is SQL injection?",a:"A technique where malicious SQL statements are inserted into input fields to manipulate the backend database."}
      ]}
    ]},
    { id:16, title:"Hacking Wireless Networks", slug:"module16", sections:[
      { title:"Wireless Concepts", content:"<p>Wireless cryptography and attack vectors.</p>", cards:[
        {q:"What are the weaknesses of WEP?",a:"WEP uses a static key with weak IV implementation and can be cracked in minutes."}
      ]}
    ]},
    { id:17, title:"Hacking Mobile Platforms", slug:"module17", sections:[
      { title:"Mobile Attack Vectors", content:"<p>Android and iOS security attacks.</p>", cards:[
        {q:"What are common mobile security risks?",a:"Malicious apps, insecure Wi-Fi connections, jailbreaking/rooting, data leakage, smishing."}
      ]}
    ]},
    { id:18, title:"IoT & OT Hacking", slug:"module18", sections:[
      { title:"IoT Hacking", content:"<p>Internet of Things and operational technology vulnerabilities.</p>", cards:[
        {q:"What makes IoT devices vulnerable?",a:"Default credentials, unencrypted communications, lack of security updates, exposed interfaces."}
      ]}
    ]},
    { id:19, title:"Cloud Computing", slug:"module19", sections:[
      { title:"Cloud Concepts", content:"<p>Cloud service models and container security.</p>", cards:[
        {q:"What are the three cloud service models?",a:"IaaS (Infrastructure), PaaS (Platform), and SaaS (Software)."}
      ]}
    ]},
    { id:20, title:"Cryptography", slug:"module20", sections:[
      { title:"Cryptography Concepts", content:"<p>Encryption algorithms, PKI, digital signatures.</p>", cards:[
        {q:"What is the difference between symmetric and asymmetric encryption?",a:"Symmetric uses the same key for encryption and decryption (AES). Asymmetric uses a public/private key pair (RSA)."}
      ]}
    ]}
  ]
};
