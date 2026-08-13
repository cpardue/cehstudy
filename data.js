// CEHStudy Flashcard Data — All 20 Modules
// Auto-generated from ceh-v13 study content

const CEH_DATA = {
    modules: [
        {
            id: 1,
            title: "Introduction to Ethical Hacking",
            sections: [
                {
                    title: "Ethical Hacking Overview",
                    cards: [
                        { q: "What is ethical hacking?", a: "The authorized practice of circumventing computer systems to identify potential security breaches. Ethical hackers use the same tools and techniques as malicious hackers but with permission and for defensive purposes." },
                        { q: "What are the types of hacking?", a: "1) White Hat — authorized security professionals\n2) Black Hat — malicious hackers\n3) Gray Hat —介于两者之间，没有授权但通常没有恶意目的" },
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
                    title: "Enumeration Services",
                    cards: [
                        { q: "What is enumeration?", a: "The process of extracting user names, hostnames, IP addresses, services, and other details from target systems. It goes beyond scanning to extract actionable intelligence." },
                        { q: "What protocols are commonly enumerated?", a: "1) SNMP (Simple Network Management Protocol)\n2) LDAP (Lightweight Directory Access Protocol)\n3) NMB/NetBIOS\n4) SMTP\n5) FTP\n6) DNS\n7) SMB/CIFS" },
                        { q: "What is SNMP enumeration?", a: "Using SNMP community strings to extract information about network devices, interfaces, routing tables, and connected hosts. Default communities 'public' and 'private' are often still in use." }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "Vulnerability Analysis",
            sections: [
                {
                    title: "Vulnerability Assessment",
                    cards: [
                        { q: "What is a vulnerability?", a: "A weakness in an information system, system security procedures, internal controls, or implementation that could be exploited by a threat source. Examples: unpatched software, misconfigurations, weak passwords." },
                        { q: "What is CVSS?", a: "Common Vulnerability Scoring System. A framework for communicating vulnerability severity using scores from 0-10 (None, Low, Medium, High, Critical). Based on Base, Temporal, and Environmental metrics." },
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
                { q: "How do you analyze malware?", a: "Static analysis (examining code without running it — disassembly, strings, headers) and Dynamic analysis (running malware in a sandbox/virtual machine to observe behavior — network connections, file modifications, registry changes)." }
                ,
                { q: "What is social engineering in the context of malware distribution?", a: "Tricking users into executing malware through manipulation. Common vectors: phishing emails, malicious attachments, drive-by downloads, and compromised websites." },
                { q: "What is a botnet?", a: "A network of compromised computers (bots/zombies) controlled by an attacker through C&C (Command and Control) servers. Used for DDoS attacks, spam distribution, and cryptomining." }
            ]
        },
        {
            id: 8,
            title: "Sniffing",
            sections: [
                { q: "What is network sniffing?", a: "The process of capturing and analyzing network traffic flowing across a network. Sniffers can capture packets for legitimate troubleshooting or malicious purposes like credential theft." },
                { q: "What is ARP poisoning?", a: "A technique where an attacker sends fake ARP messages to link their MAC address with the IP address of a legitimate device on the network. This allows them to intercept traffic meant for that IP (Man-in-the-Middle attack)." },
                { q: "What tools are used for sniffing?", a: "Wireshark (packet analyzer), Tcpdump (command-line packet capture), Network Monitor, Cain & Abel (password cracker/sniffer), and Bettercap (network attack tool)." }
            ]
        },
        {
            id: 9,
            title: "Social Engineering",
            sections: [
                { q: "What is social engineering?", a: "The psychological manipulation of people into performing actions or disclosing confidential information. It exploits human psychology principles: authority, scarcity, urgency, familiarity, and consensus." },
                { q: "What are common social engineering techniques?", a: "Phishing, Spear Phishing, Whaling (targeting executives), Pretexting (creating fake scenarios), Baiting (offering something enticing), Tailgating (physical following), Quid Pro Quo (offering service in exchange for info)." },
                { q: "What is phishing?", a: "Fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity in electronic communication. Types: email phishing, smishing (SMS), vishing (voice), credential harvesting via fake websites." },
                { q: "What is spear phishing?", a: "A targeted phishing attack directed at a specific individual or organization. Uses personalized information gathered through reconnaissance to make the attack more convincing and effective." },
                { q: "What is pretexting?", a: "Creating a fabricated scenario (pretext) to engage the victim and extract information. The attacker researches the target beforehand to create a believable story, often impersonating IT support or law enforcement." },
                { q: "What is tailgating?", a: "A physical social engineering attack where an unauthorized person follows an authorized person into a restricted area. Often done by carrying items that make it seem like they 'deserve' to enter." },
                { q: "What is waterholing?", a: "A social engineering attack where attackers identify websites regularly visited by their target group and compromise those sites. When targets visit the compromised site, malware is delivered to them." },
                { q: "How do you prevent social engineering attacks?", a: "1) Employee training and awareness programs\n2) Implementing verification procedures\n3) Multi-factor authentication\n4) Security policies\n5) Regular phishing simulations\n6) Physical security measures" }
            ]
        },
        {
            id: 10,
            title: "Denial-of-Service",
            sections: [
                { q: "What is a DoS attack?", a: "An attempt to make a machine or network unavailable to its intended users by disrupting services. The attacker sends traffic that overwhelms the target's resources (bandwidth, CPU, memory)." },
                { q: "What is a DDoS attack?", a: "A distributed denial-of-service attack using multiple compromised systems (botnet) to flood the target with traffic. More powerful than single-source DoS because it comes from many sources simultaneously." },
                { q: "What are common DDoS attack types?", a: "1) Volumetric (UDP floods, ICMP floods, amplification attacks)\n2) Protocol (SYN floods, ping of death, Smurf attack)\n3) Application Layer (HTTP flood, Slowloris, RST flood)" },
                { q: "What is a SYN flood attack?", a: "Exploits the TCP three-way handshake by sending many SYN requests but never completing with SYN-ACK. The target's connection table fills up, preventing legitimate connections." },
                { q: "What is a Smurf attack?", a: "A DDoS attack that sends ICMP echo requests (pings) to broadcast addresses with a spoofed source IP of the victim. All hosts on the network reply to the victim, overwhelming it with traffic." },
                { q: "What tools are used for DoS/DDoS attacks?", a: "LOIC (Low Orbit Ion Cannon), HOIC (High Orbit Ion Cannon), Slowloris, MFlood, and botnet-based attacks. Defensively: Cisco F5 Big-IP, Cloudflare, Akamai DDoS protection." },
                { q: "How do you prevent DoS/DDoS attacks?", a: "1) Rate limiting\n2) Traffic filtering/ACLs\n3) Blackhole routing\n4) Content delivery networks (CDN)\n5) Anycast network distribution\n6) Intrusion prevention systems (IPS)\n7) Redundant infrastructure" }
            ]
        },
        {
            id: 11,
            title: "Session Hijacking",
            sections: [
                { q: "What is session hijacking?", a: "Exploiting a valid computer session — sometimes also called a session key — to gain unauthorized access to a computer system or data. The attacker takes over an established connection between two computers." },
                { q: "What are types of session hijacking?", a: "1) Network hijacking (intercepting traffic)\n2) Web session hijacking (stealing cookies)\n3) Man-in-the-Middle attacks\n4) Cross-site scripting (XSS) for cookie theft" },
                { q: "How do you prevent session hijacking?", a: "1) Use HTTPS with secure cookies\n2) Implement session ID rotation after login\n3) Set proper cookie flags (HttpOnly, Secure, SameSite)\n4) Use TLS encryption\n5) Implement CSRF tokens\n6) Monitor for anomalous session activity" }
            ]
        },
        {
            id: 12,
            title: "Evading IDS, Firewalls & Honeypots",
            sections: [
                { q: "What is an IDS?", a: "Intrusion Detection System. Monitors network or system activities for malicious activities or policy violations. Types: NIDS (Network-based), HIDS (Host-based). Signature-based vs. Anomaly-based detection." },
                { q: "What is an IPS?", a: "Intrusion Prevention System. Similar to IDS but actively blocks detected threats in real-time. Can drop packets, reset connections, or block IP addresses when malicious activity is detected." },
                { q: "What are evasion techniques?", a: "1) Fragmentation attacks\n2) Decoy scanning\n3) Timing scans to blend with normal traffic\n4) Spoofing source IPs\n5) Using tunneling (DNS, ICMP)\n6) Polymorphic attacks\n7) Slow scanning to avoid thresholds" },
                { q: "What is a honeypot?", a: "A decoy system designed to attract attackers and study their behavior. Types: research honeypots (academic), production honeypots (deployed by organizations for early warning). Low interaction vs. High interaction." }
            ]
        },
        {
            id: 13,
            title: "Hacking Web Servers",
            sections: [
                { q: "What are common web server vulnerabilities?", a: "1) Outdated software\n2) Misconfigurations\n3) Default credentials\n4) Directory traversal\n5) Server-side includes attacks\n6) CGI script vulnerabilities\n7) HTTP request smuggling" },
                { q: "What is directory traversal?", a: "An attack that uses '...' (../ or ..\\) sequences to access files and directories outside the intended root directory. Can expose sensitive files like /etc/passwd, web.config, or application source code." },
                { q: "How do you secure web servers?", a: "1) Keep software updated\n2) Disable unnecessary services/modules\n3) Use strong authentication\n4) Implement WAF (Web Application Firewall)\n5) Regular security audits\n6) Proper file permissions\n7) HTTPS enforcement" }
            ]
        },
        {
            id: 14,
            title: "Hacking Web Applications",
            sections: [
                { q: "What is the OWASP Top 10?", a: "A standard awareness document for web application security representing a broad consensus about the most critical security risks: Injection, Broken Authentication, Sensitive Data Exposure, XXE, Broken Access Control, Security Misconfiguration, XSS, Insecure Deserialization, Vulnerable Components, Insufficient Logging." },
                { q: "What is Cross-Site Scripting (XSS)?", a: "Injecting malicious scripts into web pages viewed by other users. Types: Stored (persisted on server), Reflected (from URL parameters), DOM-based (client-side only). Can steal cookies, session tokens, and deface websites." },
                { q: "What is Cross-Site Request Forgery (CSRF)?", a: "Forcing an authenticated user to perform unintended actions on a web application. The attacker tricks the victim's browser into making requests with their credentials. Prevention: anti-CSRF tokens, SameSite cookies." }
            ]
        },
        {
            id: 15,
            title: "SQL Injection",
            sections: [
                { q: "What is SQL injection?", a: "A code injection technique where malicious SQL statements are inserted into input fields to execute arbitrary SQL commands. Can bypass authentication, extract data, modify/delete records, and potentially gain server access." },
                { q: "What are types of SQL injection?", a: "1) In-band (Classic) — UNION-based, Error-based\n2) Blind (Inferential) — Boolean-based, Time-based\n3) Out-of-band — using DNS/HTTP protocols" },
                { q: "What is the 'OR 1=1' injection?", a: "A classic SQL injection payload that always returns true. Example: username=' OR 1=1-- bypasses login by making the WHERE clause always evaluate to true, returning all users." },
                { q: "How do you prevent SQL injection?", a: "1) Parameterized queries (prepared statements)\n2) Input validation and sanitization\n3) Stored procedures\n4) Least privilege database accounts\n5) Web Application Firewall (WAF)\n6) ORM frameworks" }
            ]
        },
        {
            id: 16,
            title: "Hacking Wireless Networks",
            sections: [
                { q: "What are common wireless attack types?", a: "1) Eavesdropping/Sniffing\n2) Rogue access points\n3) Evil twin attacks\n4) War driving\n5) Jamming\n6) Deauthentication attacks\n7) WEP/WPA cracking" },
                { q: "What is an evil twin attack?", a: "Setting up a fake wireless access point that mimics a legitimate SSID. Users connect thinking it's the real network, and the attacker can intercept all traffic or steal credentials." },
                { q: "How do you secure wireless networks?", a: "1) Use WPA3 (or WPA2 if WPA3 unavailable)\n2) Disable WPS\n3) Hide SSID (security through obscurity, not sufficient alone)\n4) MAC address filtering\n5) Regular firmware updates\n6) Enterprise authentication (802.1X/RADIUS)" }
            ]
        },
        {
            id: 17,
            title: "Hacking Mobile Platforms",
            sections: [
                { q: "What are mobile security risks?", a: "1) Malicious apps (sideloading)\n2) Man-in-the-Middle attacks\n3) Network sniffing\n4) GPS tracking\n5) SMS phishing (smishing)\n6) Jailbreak/root exploits\n7) Insecure data storage" },
                { q: "What is jailbreaking?", a: "Removing software restrictions on iOS devices to allow unauthorized app installation. Rooting is the Android equivalent. Both expose the device to security risks and void warranties." },
                { q: "How do you secure mobile devices?", a: "1) Enable device encryption\n2) Use strong authentication (biometrics + PIN)\n3) Keep OS/apps updated\n4) Install apps only from official stores\n5) Implement MDM (Mobile Device Management)\n6) Remote wipe capability" }
            ]
        },
        {
            id: 18,
            title: "IoT & OT Hacking",
            sections: [
                { q: "What is IoT?", a: "Internet of Things — physical devices with sensors, software, and connectivity that enable them to exchange data. Examples: smart home devices, industrial controllers, medical devices, wearables." },
                { q: "What are IoT security challenges?", a: "1) Weak/default passwords\n2) Lack of encryption\n3) Insecure APIs\n4) No automatic updates\n5) Limited processing power for security\n6) Physical accessibility\n7) Large attack surface" },
                { q: "What is OT (Operational Technology)?", a: "Hardware and software that detects or causes change through the direct monitoring or control of physical devices, processes, and events. Examples: SCADA systems, PLCs, industrial control systems (ICS)." },
                { q: "What was Stuxnet?", a: "A highly sophisticated computer worm discovered in 2010 that targeted Iranian nuclear facilities. It specifically attacked Siemens SCADA systems to disrupt centrifuge operations. Considered the first cyberweapon targeting physical infrastructure." }
            ]
        },
        {
            id: 19,
            title: "Cloud Computing",
            sections: [
                { q: "What are cloud service models?", a: "1) IaaS (Infrastructure as a Service) — VMs, storage, networking\n2) PaaS (Platform as a Service) — development platforms\n3) SaaS (Software as a Service) — applications over internet\n4) FaaS (Function as a Service) — serverless computing" },
                { q: "What are cloud deployment models?", a: "1) Public Cloud — shared infrastructure (AWS, Azure, GCP)\n2) Private Cloud — dedicated infrastructure\n3) Hybrid Cloud — combination of public and private\n4) Community Cloud — shared by organizations with common concerns" },
                { q: "What are common cloud security risks?", a: "1) Data breaches\n2) Insecure APIs\n3) Misconfigured storage (S3 buckets)\n4) Account hijacking\n5) Shared technology vulnerabilities\n6) Insufficient identity management\n7) Compliance and legal issues" },
                { q: "How do you secure cloud environments?", a: "1) Enable MFA on all accounts\n2) Encrypt data at rest and in transit\n3) Implement least privilege access\n4) Regular security audits\n5) Use cloud security posture management (CSPM) tools\n6) Monitor cloud logs and activity" }
            ]
        },
        {
            id: 20,
            title: "Cryptography",
            sections: [
                { q: "What is cryptography?", a: "The practice of securing communication by transforming readable data (plaintext) into unreadable format (ciphertext). Used for confidentiality, integrity, authentication, and non-repudiation." },
                { q: "What are types of encryption?", a: "1) Symmetric — same key for encryption/decryption (AES, DES, 3DES, RC4, Blowfish)\n2) Asymmetric — public/private key pairs (RSA, ECC, Diffie-Hellman)\n3) Hash functions — one-way (MD5, SHA-1, SHA-256, SHA-512)" },
                { q: "What is PKI?", a: "Public Key Infrastructure — a system for managing digital certificates and public-key encryption. Components: Certificate Authority (CA), Registration Authority (RA), Digital Certificates, CRL, and Certificate Revocation." },
                { q: "What is a digital signature?", a: "A mathematical scheme for verifying the authenticity and integrity of digital messages/signatures. Uses asymmetric cryptography — sender encrypts hash with private key, receiver decrypts with public key." },
                { q: "What is steganography?", a: "The practice of hiding secret data within non-secret files (images, audio, video). Unlike cryptography which hides the content, steganography hides the existence of the message itself." }
            ]
        }
    ]
};
