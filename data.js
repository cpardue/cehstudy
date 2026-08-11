// CEH v13 Flashcard Data - All 20 Modules
const CEH_DATA = {
  modules: [
    { id:1, title:"Introduction to Ethical Hacking", slug:"module1", sections:[
      { title:"Information Security Overview", content:"<h4>Essential Terms</h4><p>Information security protects information and information systems from unauthorized access, use, disclosure, disruption, modification, or destruction.</p>", cards:[
        {q:"What is information security?",a:"Protecting information and information systems; a set of processes and activities performed to prevent unauthorized users from stealing and misusing information or services."},
        {q:"What is hack value?",a:"Hackers' evaluation of whether something is worth or interesting to target. High hack value examples include credit card data (can generate money) vs. just names (shows a difficult task is doable)."},
        {q:"What is a vulnerability?",a:"A weakness that can compromise the system and be used for a possible attack. Examples: policy weaknesses, design/implementation errors (e.g., USB drives that disguise as keyboards)."},
        {q:"What is an exploit?",a:"A breach through vulnerabilities, or software that allows taking advantage of identified vulnerabilities."},
        {q:"What is a payload?",a:"Part of malware or exploit code used for creating backdoors, damaging/deleting files, committing data, or hijacking a computer (e.g., keylogger or RAT)."},
        {q:"What is a zero-day attack?",a:"Exploiting previously unknown vulnerabilities before a patch is released. A zero-day vulnerability is unknown to the vendor or known but unpatched."},
        {q:"What is the window of vulnerability (WOV)?",a:"Time from when a vulnerability is discovered until most vulnerable systems are patched. Often measured in days (e.g., 28 days)."},
        {q:"What is daisy chaining?",a:"An attack where hackers gain access to one device and then use it to access subsequent devices on the network, potentially owning the entire network."},
        {q:"What is doxing?",a:"Finding and publishing someone's personally identifiable information (PII) for malicious reasons, such as name, email, address, SSN."},
        {q:"What is a bot?",a:"A software robot that can be controlled to execute predefined tasks. Hackers use bots to control infected machines for malicious purposes."}
      ]},
      { title:"CIA Triad & Elements of Security", content:"<h4>CIA Triad</h4><p>The three principles of information security: Confidentiality, Integrity, and Availability.</p>", cards:[
        {q:"What does the CIA triad stand for?",a:"Confidentiality, Integrity, and Availability — the three pillars of information security."},
        {q:"What is confidentiality?",a:"Ensures information is available only to authorized users. Controls: encryption, classification, access control, proper disposal."},
        {q:"What is integrity?",a:"Ensures the accuracy of information and prevents improper/unauthorized modification. Controls: hashing, access control."},
        {q:"What is availability?",a:"Ensuring resources are available whenever authorized users need them. Controls: redundancy, data backups, antivirus, DDoS prevention."},
        {q:"What is authenticity?",a:"Ensures the quality of being genuine — users are who they claim to be, or data has not been corrupted. Controls: biometrics, smart cards, digital certificates."},
        {q:"What is non-repudiation?",a:"Guarantee that a sender cannot deny having sent a message and a recipient cannot deny having received it. Controls: digital signatures, logging."}
      ]},
      { title:"Functionality, Usability, Security Triangle", content:"<h4>Security Trade-offs</h4><p>Any change made to one component directly affects the other two.</p>", cards:[
        {q:"What is the functionality-usability-security triangle?",a:"A model showing that increasing security decreases functionality and usability (and vice versa). Balance each for desired levels of all three."},
        {q:"What happens when system security is increased?",a:"Functionality and usability decrease due to greater overhead from more checks and examinations."}
      ]},
      { title:"Document Types", content:"<h4>Policy Documents</h4>", cards:[
        {q:"What is a standard?",a:"Mandatory rules used to achieve consistency."},
        {q:"What is a baseline?",a:"Provides the minimum security level necessary."},
        {q:"What is a guideline?",a:"Flexible, recommended actions users should take when no standard exists."},
        {q:"What is a procedure?",a:"Detailed step-by-step instructions for accomplishing a task or goal."}
      ]},
      { title:"Hacker Types", content:"<h4>Classifications of Hackers</h4>", cards:[
        {q:"What is a black hat hacker?",a:"Uses skills to discover and exploit vulnerabilities for financial gain or malicious reasons. Steals data, shuts down systems."},
        {q:"What is a white hat hacker?",a:"Also known as an ethical hacker. Uses skills to improve security by discovering vulnerabilities before black hats do. Works with permission."},
        {q:"What is a grey hat hacker?",a:"Might break laws and regulations but does not have explicitly malicious intent. Middle ground between black and white hats."},
        {q:"What is a script kiddie?",a:"Inexperienced hacker who uses tools and scripts developed by others rather than creating their own exploits."},
        {q:"What is a suicide hacker?",a:"Performs attacks for a cause despite knowing the risk of being caught and prosecuted."},
        {q:"What is a cyber terrorist?",a:"Seeks to destroy stuff and promote fear, unrest, and disruption. Influenced by religious or political beliefs."},
        {q:"What are state-sponsored hackers?",a:"Hackers recruited by governments to gain access to classified information of other governments (from governments, individuals, or corporations)."},
        {q:"What is a hacktivist?",a:"Breaks into government and corporate systems out of protest to promote a political or social agenda."}
      ]},
      { title:"Hacking Stages", content:"<h4>5 Phases of Hacking</h4>", cards:[
        {q:"What is reconnaissance in hacking?",a:"Also called footprinting/fingerprinting. The necessary first step — preliminary surveying and research about the target before an attack."},
        {q:"What is scanning in hacking?",a:"Using information from reconnaissance to conduct technical scans — mapping routers, firewalls, using port scanners, network mappers, vulnerability scanners."},
        {q:"What are the 5 stages of hacking?",a:"1) Reconnaissance, 2) Scanning, 3) Gaining Access, 4) Maintaining Access, 5) Clearing Tracks."},
        {q:"What happens during gaining access?",a:"Attack stage: finding entry points, exploiting vulnerabilities, escalating privileges. Methods: password cracking, buffer overflow, session hijacking, DoS."},
        {q:"What is maintaining access?",a:"Keeping admin/root privileges after breaking in. Installing backdoors, rootkits, trojans, or keyloggers for persistent access."},
        {q:"What is clearing tracks?",a:"Hiding activities by clearing log entries, masquerading as legitimate activity to remain unnoticed and maintain system access."}
      ]},
      { title:"Security Threats & Attacks", content:"<h4>Types of Security Threats</h4>", cards:[
        {q:"What is a network threat?",a:"Attacks on the communication channel between devices. Examples: DoS, password-based attacks, DNS/ARP poisoning, MITM, spoofing, session hijacking, sniffing."},
        {q:"What is a host threat?",a:"Attacks targeting a system directly. Examples: password attacks, unauthorized access, malware, footprinting, privilege escalation, backdoor attacks."},
        {q:"What is an application threat?",a:"Exploitation of vulnerabilities in applications caused by bad coding or improper input validation. Examples: SQL injection, XSS, session hijacking, buffer overflow."},
        {q:"What is a misconfiguration attack?",a:"Gaining access to systems with poorly configured security — default accounts, forgotten proxy settings. Detected mostly by automated scanners."},
        {q:"What are shrink-wrap code attacks?",a:"Attacks on libraries and frameworks the software depends on. Finding vulnerabilities in libraries allows reuse across multiple applications."},
        {q:"What is an Advanced Persistent Threat (APT)?",a:"A stealthy, long-term threat actor targeting high-value organizations. Uses sophisticated malware, extracts data via low-and-slow techniques."},
        {q:"What is the difference between a virus and a worm?",a:"A virus requires user action to activate (e.g., running a file). A worm can spread independently without user action — it is self-replicating."},
        {q:"What is a botnet?",a:"A network of infected machines controlled by hackers for malicious activities such as DDoS attacks. Main problem: lack of security software or updates on devices."},
        {q:"What are insider attacks?",a:"Performed by people from within the organization who have authorized access. One of the greatest and most difficult-to-defend risks."},
        {q:"What is separation of duties?",a:"Also called segregation of duties — the concept of having more than one person required to complete a task, preventing single-point abuse."}
      ]},
      { title:"Penetration Testing", content:"<h4>Types & Methodologies</h4>", cards:[
        {q:"What is penetration testing?",a:"Simulating a security attack to discover vulnerabilities, evaluate security, and provide detailed analysis of weaknesses."},
        {q:"What is the purpose of penetration testing?",a:"Identify threats, reduce security expenses, provide complete security assessment, maintain compliance, test security controls, and improve infrastructure."},
        {q:"What is the difference between a security audit, vulnerability assessment, and penetration test?",a:"Security audit checks policy compliance. Vulnerability assessment finds vulnerabilities. Penetration test includes both — it demonstrates how vulnerabilities can be exploited."},
        {q:"What is a black box test?",a:"Tester has very little or no information about the client's infrastructure. Simulates an external attack. More realistic but costlier and time-consuming."},
        {q:"What is a grey box test?",a:"Tester has partial knowledge of the internal workings. Combination of black box and white box testing. Helps reduce cost."},
        {q:"What is a white box test?",a:"Tester knows everything about the company — network, infrastructure, policies, subnets, firewalls, IDS details. Most cost-effective for single-component testing."},
        {q:"What is a blind test?",a:"Tester has little/no information. Target (e.g., sysadmin) knows about the test and its scope."},
        {q:"What is a double-blind test?",a:"Neither the pen-tester nor the target knows anything about each other. Produces reliable results but is most difficult and expensive."},
        {q:"What is red team vs blue team?",a:"Red team = attackers finding vulnerabilities. Blue team = defenders detecting and predicting attacks. Purple team does both."},
        {q:"Name common penetration testing methodologies.",a:"OWASP (web apps), OSSTMM (open-source standard), ISSAF (assessment framework), NIST (federal/industry standards)."}
      ]}
    ]},
    { id:2, title:"Footprinting & Reconnaissance", slug:"module2", sections:[
      { title:"Footprinting Overview", content:"<h4>Footprinting Concepts</h4><p>Also known as fingerprinting or reconnaissance. Gathering information about a target system — software, network protocols, operating systems, hardware devices — to find a way to break in.</p>", cards:[
        {q:"What is footprinting?",a:"The process of gathering information about a target organization before launching an attack. It is the first phase of ethical hacking."},
        {q:"What is the difference between passive and active footprinting?",a:"Passive footprinting involves no direct contact with the target (e.g., news, WHOIS databases, social media). Active footprinting involves direct interaction (e.g., nmap scanning, port scanning, DNS queries)."},
        {q:"What is OSINT?",a:"Open-source intelligence — collection and analysis of information from public/open sources. Unrelated to open-source software."},
        {q:"What is competitive intelligence in footprinting?",a:"Assessment of strengths and weaknesses of current and potential competitors using tools like Alexa traffic stats, SEC filings, and financial databases."},
        {q:"What are the four types of footprinting information gathered?",a:"Network info (domains, IPs, DNS), System info (OS, servers, users), Organization info (employees, phone numbers, locations)."},
        {q:"What are the objectives of footprinting?",a:"Learn security posture, identify focus areas, find vulnerabilities, and map the network."}
      ]},
      { title:"WHOIS & DNS Interrogation", content:"<h4>WHOIS Protocol</h4><p>Query protocol on port 43 for retrieving information about assigned Internet resources.</p>", cards:[
        {q:"What is WHOIS?",a:"A protocol (port 43) used to retrieve information about domain registration, including owner details, registrar, IP ranges, and dates."},
        {q:"What is the difference between thick and thin WHOIS?",a:"Thick WHOIS: full registrar info for a set of data. Thin WHOIS: limited info only."},
        {q:"What is a WHOIS guard?",a:"A proxy between domain owners and WHOIS accessers. Emails are usually still redirected, allowing phishing attempts to identify the real owner."},
        {q:"What are Regional Internet Registries (RIRs)?",a:"Organizations that manage WHOIS databases by region: ARIN (Americas), AFRINIC (Africa), APNIC (Asia-Pacific), RIPE (Europe), LACNIC (Latin America/Caribbean)."},
        {q:"What is DNS interrogation?",a:"Collecting information about DNS zone data — server types, locations, key hosts. E.g., <code>host -t a target.com</code>."},
        {q:"What is a reverse DNS lookup?",a:"Using an IP address to find its domain name. Multiple IPs can map to the same domain or multiple domains to the same IP."},
        {q:"What are MX records?",a:"Mail exchange records that expose which email service a target uses. Preference numbers determine priority — smallest number = highest priority."}
      ]},
      { title:"Search Engine Footprinting", content:"<h4>Google Hacking</h4><p>Using advanced search operators (dorks) to find exposed information.</p>", cards:[
        {q:"What are Google Dorks?",a:"Advanced Google search operators: site:, filetype:, inurl:, intitle:, intext:, cache:"},
        {q:"What does the <code>site:</code> dork do?",a:"Limits results to a specified domain. E.g., <code>site:example.com</code>."},
        {q:"What does the <code>filetype:</code> dork do?",a:"Returns only results of a given file type. E.g., <code>filetype:pdf</code>."},
        {q:"What does the <code>inurl:</code> dork do?",a:"Returns only pages with the query in its URL."},
        {q:"What does the <code>intitle:</code> dork do?",a:"Returns only pages with the query in its title."},
        {q:"What does the <code>cache:</code> dork do?",a:"Shows cached versions of a queried page."},
        {q:"What are Google logical operators?",a:"<code>OR</code>/<code>|</code> — X or Y. <code>AND</code> — both terms. <code>-</code> — exclude term. <code>*</code> — wildcard. <code>()</code> — group terms."},
        {q:"What is metagoofil?",a:"Open-source tool that extracts metadata from public documents (PDF, DOC, XLS) found via Google using <code>site:</code> and <code>filetype:</code> dorks."}
      ]},
      { title:"Footprinting Tools", content:"<h4>Reconnaissance Tools</h4>", cards:[
        {q:"What is Maltego?",a:"Proprietary OSINT tool that provides graphical links for investigative tasks — visualizing relationships between data."},
        {q:"What is Recon-ng?",a:"Open-source CLI framework for open-source web-based reconnaissance."},
        {q:"What is FOCA?",a:"Tool to find metadata and hidden information in documents (PDF, DOC) — identifies which team created them and which servers/clients were used."},
        {q:"What is DMITRY?",a:"DeepMagic Information Gathering Tool — performs WHOIS lookup, Netcraft info retrieval, subdomain/email search, TCP scanning, and banner grabbing."}
      ]},
      { title:"Online Intelligence Services", content:"<h4>Search Engines & Services</h4>", cards:[
        {q:"What is Shodan?",a:"Search engine that finds specific types of IoT devices connected to the internet (webcams, routers, servers) with filtering by open ports."},
        {q:"What is Censys?",a:"Internet asset discovery platform — scans for unknown internet resources and provides details about discovered assets."},
        {q:"What is Netcraft?",a:"DNS search service that reports HTML5/Flash usage, X-Frame-Options headers, and other web server details."},
        {q:"What is CrimeFlare?",a:"Helps find real IP addresses behind a CDN (e.g., CloudFlare) by looking at past DNS records."},
        {q:"What are IoT search engines used for in footprinting?",a:"Finding manufacturer details, geographical location, IP address, hostname, and open ports of IoT devices. Examples: Shodan, Censys, Thingful."}
      ]},
      { title:"Footprinting Countermeasures", content:"<h4>Defensive Strategies</h4>", cards:[
        {q:"What are common footprinting countermeasures?",a:"Enforce security policies, educate employees, encrypt sensitive info, disable unnecessary protocols, properly configure services, limit public information release, use Whois Guard, restrict site caching via robots.txt."},
        {q:"How does robots.txt help against footprinting?",a:"It informs search engine crawlers what pages should NOT be indexed. E.g., <code>User-agent: * Disallow: /</code> blocks all indexing."}
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
      { title:"Enumeration Overview", content:"<h4>Enumeration Concepts</h4><p>Actively engaging a system to query it for information — routing tables, users, groups, machine names, network resources — to discover and exploit vulnerabilities.</p>", cards:[
        {q:"What is enumeration?",a:"Extracting user accounts, passwords, SMB info, SNMP data, and directory service information from a target system."},
        {q:"What is the difference between footprinting and enumeration?",a:"Footprinting gathers general info passively. Enumeration actively probes the target to extract specific data like usernames, groups, shares, and services."},
        {q:"What are common ports and services enumerated?",a:"Port 25 (SMTP), 53 (DNS), 135 (RPC), 137 (NetBIOS), 139 (SMB), 161/162 (SNMP), 389 (LDAP), 445 (SMB/TCP), 514 (Syslog), 1433 (MSSQL), 3268 (Global Catalog)."}
      ]},
      { title:"Windows Enumeration", content:"<h4>Windows Enumeration Techniques</h4>", cards:[
        {q:"How do you enumerate all shares in Windows?",a:"<code>net share</code> or <code>net view \\serverName /all</code>."},
        {q:"What is a null session in Windows enumeration?",a:"An anonymous connection that allows enumeration of machine configuration. E.g., <code>net use \\target\\ipc$ \"\" /user: \"\"</code>."},
        {q:"How do you enumerate Windows user accounts?",a:"Use email patterns (e.g., tom.john@smith.com → tom.john), try default passwords, or use tools like dumpusers, GetAcct, DumpSec, Hyena."}
      ]},
      { title:"Security Identifier (SID)", content:"<h4>Windows SID Format</h4>", cards:[
        {q:"What is a Security Identifier (SID)?",a:"A unique value assigned by Windows to each security principal (user, group, computer). Format: <code>S-<revision>-<authority>-<subauthorities>-<RID></code>."},
        {q:"What does the SID <code>S-1-5-21-...-500</code> mean?",a:"S = Security, 1 = revision, 5 = SECURITY_NT_AUTHORITY, 21 = local significance, ... = authority values, 500 = Administrator account."},
        {q:"What are common Windows RID values?",a:"500 = Administrator, 501 = Guest, 502 = Printer Operator, 512 = Domain Admins, 513 = Domain Users."},
        {q:"What tools are used for Windows SID enumeration?",a:"<code>user2sid</code>, <code>sid2user</code>, dumpusers, GetAcct, DumpSec, Hyena, PsGetSid."}
      ]},
      { title:"NetBIOS Enumeration", content:"<h4>NetBIOS Concepts</h4>", cards:[
        {q:"What is NetBIOS?",a:"Network Basic Input/Output System — a naming system for Windows machines that allows file/printer sharing using SMB protocol. Easily exploitable, often one of the first scans."},
        {q:"What information can NetBIOS enumeration reveal?",a:"System name, username, domain, printers, and available shares."},
        {q:"How do you enumerate NetBIOS names?",a:"<code>nbtstat -a &lt;IP or hostname&gt;</code> shows NetBIOS names. <code>net view &lt;IP&gt;</code> prints available shares."},
        {q:"What is smb-nat?",a:"NetBIOS Auditing Tool — brute forces usernames and passwords for administrative shares: <code>nbt -o output -u userlist -p passwordlist &lt;ip/range&gt;</code>."}
      ]},
      { title:"SNMP Enumeration", content:"<h4>SNMP Concepts</h4>", cards:[
        {q:"What is SNMP?",a:"Simple Network Management Protocol — used for monitoring and remotely modifying network equipment settings. Uses community strings for authentication."},
        {q:"What are SNMP community strings?",a:"Read community string = read-only access. Read/write (private) = full configuration access. SNMPv3 encrypts them."},
        {q:"What is an SNMP manager and agent?",a:"Agent embedded in network devices sends data to manager via port 162. Data messages are called traps."},
        {q:"What is an Object Identifier (OID)?",a:"A unique identifier for any monitored device. E.g., <code>1.3.6.1.2.1.2.2.1.8</code>."},
        {q:"What is a Management Information Base (MIB)?",a:"A text file that translates numerical OIDs to word-based names (e.g., <code>SYNOLOGY-SYSTEM-MIB::temperature.0</code>)."},
        {q:"How do you perform SNMP enumeration?",a:"<code>snmpwalk -c public -v1 &lt;IP&gt;</code> enumerates ports. <code>snmp-check &lt;IP&gt; -v 2c</code> gives routing tables, storage, users."},
        {q:"What are the SNMP version security differences?",a:"v1/v2: no encryption, only community string (insecure). v3: username + password + encryption."}
      ]},
      { title:"LDAP Enumeration", content:"<h4>LDAP Concepts</h4>", cards:[
        {q:"What is LDAP?",a:"Lightweight Directory Access Protocol — used by on-premises Active Directory. Hierarchical structure: domain > child-domains > OUs > users/groups/computers."},
        {q:"What information can LDAP enumeration reveal?",a:"Usernames, addresses, servers, and other sensitive info that can be used for brute force or social engineering attacks."},
        {q:"How do you protect against LDAP enumeration?",a:"Use LDAPS (LDAP over SSL/TLS) or LDAP over STARTTLS, use NTLM/Basic authentication, select usernames different from email addresses."}
      ]},
      { title:"NTP Enumeration", content:"<h4>NTP Concepts</h4>", cards:[
        {q:"What is NTP enumeration?",a:"Querying NTP (Network Time Protocol, UDP 123) for lists of connected hosts, client IPs, system names, operating systems, and internal IP addresses."},
        {q:"What tools are used for NTP enumeration?",a:"<code>ntptrace</code>, <code>ntpdc</code>, <code>ntpq</code>, nmap, Wireshark, NTPQuery."}
      ]},
      { title:"SMTP Enumeration", content:"<h4>SMTP Concepts</h4>", cards:[
        {q:"What is SMTP enumeration?",a:"Using SMTP (port 25) to validate email addresses — checking if they exist. Secure variants: SMTPS (port 587, TLS), STARTTLS (port 465)."},
        {q:"What SMTP commands are used for enumeration?",a:"<code>VRFY</code> validates email addresses. <code>EXPN</code> reveals mailing list members. <code>RCPT TO</code> defines recipients."},
        {q:"What tool is commonly used for SMTP user enumeration?",a:"<code>smtp-user-enum</code> — inspects responses to VRFY, EXPN, and RCPT TO commands. E.g., <code>smtp-user-enum -M &lt;method&gt; -U &lt;userlist&gt; -t &lt;server&gt;</code>."}
      ]},
      { title:"Active Directory Brute Force", content:"<h4>AD Enumeration</h4>", cards:[
        {q:"How do you brute force Active Directory?",a:"1) Find admin user with SID 500: <code>Get-ADUser -Filter * | where {$_.SID -like \"*-500\"}</code>. 2) Brute-force credentials with <code>net use \\computername password /u:user@domain</code>."}
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
