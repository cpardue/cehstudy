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
        {q:"What is authenticity?",a:"Ensuring the quality of being genuine — users are who they claim to be, or data has not been corrupted. Controls: biometrics, smart cards, digital certificates."},
        {q:"What is non-repudiation?",a:"Guarantee that a sender cannot deny having sent a message and a recipient cannot deny having received it. Controls: digital signatures, logging."}
      ]},
      { title:"Functionality, Usability, Security Triangle", content:"<h4>Security Trade-offs</h4>", cards:[
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
        {q:"What is the difference between a security audit, vulnerability assessment, and penetration test?",a:"Security audit checks policy compliance. Vulnerability assessment finds vulnerabilities. Penetration test demonstrates how vulnerabilities can be exploited."},
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
        {q:"How do you perform OS fingerprinting with randomization in nmap?",a:"<code>nmap --randomize hosts -O</code> — Randomizes host order and attempts OS detection."}
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
        {q:"What is a Security Identifier (SID)?",a:"A unique value assigned by Windows to each security principal (user, group, computer). Format: <code>S-&lt;revision&gt;-&lt;authority&gt;-&lt;subauthorities&gt;-&lt;RID&gt;</code>."},
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
      { title:"Web Application Threats", content:"<p>OWASP Top 10 and web application security risks. For cryptography content, see <a href=\"/ceh-v13/module-20/\">CEH v13 Module 20: Cryptography</a>.</p>", cards:[
        {q:"What is the OWASP Top 10?",a:"A standard document listing the top 10 most critical web application security risks."}
      ]}
    ]},
    { id:15, title:"SQL Injection", slug:"module15", sections:[
      { title:"SQL Injection Concepts", content:"<p>Inserting malicious SQL to manipulate backend databases.</p>", cards:[
        {q:"What is SQL injection?",a:"A technique where malicious SQL statements are inserted into input fields to manipulate the backend database."}
      ]}
    ]},
    { id:16, title:"Hacking Wireless Networks", slug:"module16", sections:[
      { title:"Wireless Concepts", content:"<p>Wireless cryptography and attack vectors. For detailed wireless crypto, see <a href=\"/ceh-v13/module-20/\">CEH v13 Module 20: Cryptography</a>.</p>", cards:[
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
      { title:"Cryptography Fundamentals", content:"<h4>Core Concepts</h4><p>Cryptography is the science of securing information through transformation into an unreadable format for unauthorized users.</p>", cards:[
        {q:"What is cryptography?",a:"The science of securing information by transforming it into an unreadable format using mathematical algorithms. Only authorized parties with the correct key can decrypt and read the original message."},
        {q:"What is plaintext?",a:"The original readable message or data before encryption. Also called 'cleartext.' Example: 'Hello World' in plain text form."},
        {q:"What is ciphertext?",a:"The encrypted/encoded message that appears random and unreadable without the decryption key. Example: 'X8$kL2!mP9qR' after encryption."},
        {q:"What is an encryption algorithm (cipher)?",a:"A mathematical process/function that converts plaintext to ciphertext using a key. Examples: AES, RSA, SHA-256. Also called a cipher when used for encryption."},
        {q:"What is a decryption algorithm?",a:"The mathematical process that converts ciphertext back to plaintext using the appropriate key. Must use the correct key matching the encryption method."},
        {q:"What is a key in cryptography?",a:"A secret value used by an encryption algorithm to transform data. Keys determine how plaintext is encrypted and how ciphertext is decrypted. Key length directly impacts security strength."},
        {q:"What are the cryptographic goals (extended CIA)?",a:"Confidentiality (only authorized access), Integrity (no unauthorized modification), Availability (accessible when needed), Authentication (verify identity), Non-repudiation (cannot deny sending/receiving)."},
        {q:"What is steganography?",a:"The practice of hiding confidential data within ordinary, non-secret files or channels (e.g., hiding text inside an image file or audio file). Different from encryption — the existence of the message is concealed."},
        {q:"What is a security token?",a:"A physical device or software application that generates one-time passwords (OTPs) for authentication. Examples: RSA SecurID, smartphone authenticator apps (Google Authenticator, Authy)."},
        {q:"What is perfect forward secrecy?",a:"A property of key exchange protocols where compromise of long-term private keys does not compromise past session keys. Each session uses a unique ephemeral key. Used in TLS 1.3."}
      ]},
      { title:"Symmetric Key Encryption", content:"<h4>Same Key for Encryption & Decryption</h4><p>Symmetric encryption uses the same key for both encryption and decryption. Fast and efficient for bulk data encryption.</p>", cards:[
        {q:"What is symmetric encryption?",a:"Uses the same secret key for both encryption and decryption. Fast, efficient for bulk data. Examples: AES, DES, 3DES, Blowfish, ChaCha20, RC4. Requires secure key distribution."},
        {q:"What is AES (Advanced Encryption Standard)?",a:"The current symmetric encryption standard selected by NIST in 2001. Also known as Rijndael. Supports 128, 192, and 256-bit keys. Used in WPA2, TLS, VPNs, disk encryption. Resistant to all known practical attacks."},
        {q:"What are the three AES key sizes?",a:"AES-128 (10 rounds, 128-bit key), AES-192 (12 rounds, 192-bit key), AES-256 (14 rounds, 256-bit key). Higher = more secure but slightly slower."},
        {q:"What is DES (Data Encryption Standard)?",a:"Legacy block cipher with 56-bit key and 64-bit block size. Considered broken — can be brute-forced in hours. Used a Feistel network structure with 16 rounds."},
        {q:"What is 3DES (Triple DES)?",a:"Applied DES three times with either 2 or 3 different keys. Key sizes: 112-bit (2-key) or 168-bit (3-key). Deprecated by NIST in 2023. Slower than AES with similar security."},
        {q:"What is Blowfish?",a:"Symmetric block cipher designed by Bruce Schneier in 1993. Key size: 32-448 bits. Block size: 64 bits. Replaced DES. Faster than DES. Foundation for Twofish."},
        {q:"What is Twofish?",a:"Advanced block cipher, successor to Blowfish. Designed by Bruce Schneier. Key size: 128/192/256 bits. Block size: 128 bits. Never adopted as standard but considered very secure. Used in TrueCrypt, GPG."},
        {q:"What is ChaCha20?",a:"Modern stream cipher designed by Daniel J. Bernstein. 256-bit key. Used in TLS 1.3, SSH, WhatsApp encryption. Faster than AES on devices without hardware AES support."},
        {q:"What is RC4 and why is it broken?",a:"Stream cipher with variable key size. Broken — RFC 7465 (2015) prohibits its use in TLS. Vulnerable to plaintext recovery attacks. Was used in WEP, WPA, SSL, TLS."},
        {q:"What is the difference between block and stream ciphers?",a:"Block ciphers encrypt fixed-size blocks of data (64/128 bits) using modes like ECB, CBC, CFB, OFB, GCM. Stream ciphers encrypt data one bit/byte at a time continuously. Block ciphers are more common in modern protocols."},
        {q:"What are AES modes of operation?",a:"ECB (Electronic Codebook — insecure, patterns visible), CBC (Cipher Block Chaining — most common, needs IV), CFB (Cipher Feedback — converts block to stream), OFB (Output Feedback — stream cipher mode), GCM (Galois/Counter Mode — authenticated encryption, used in WPA2)."},
        {q:"What is ECB mode and why is it insecure?",a:"Electronic Codebook mode encrypts each block independently. Identical plaintext blocks produce identical ciphertext blocks, revealing patterns. Never use for data with repeating patterns."},
        {q:"What is CBC mode?",a:"Cipher Block Chaining — each plaintext block is XORed with the previous ciphertext block before encryption. Requires an Initialization Vector (IV). Used in TLS 1.2 and earlier."},
        {q:"What is GCM mode?",a:"Galois/Counter Mode — provides both confidentiality and authentication (authenticated encryption). Used in WPA2, TLS 1.2/1.3, IPsec. More efficient than CBC + HMAC."},
        {q:"What is an Initialization Vector (IV)?",a:"A random or pseudo-random value used to ensure that encrypting the same plaintext with the same key produces different ciphertext. Prevents pattern analysis. Critical for CBC, CFB, OFB modes."}
      ]},
      { title:"Asymmetric Key Encryption", content:"<h4>Public/Private Key Pair</h4><p>Asymmetric encryption uses a pair of mathematically related keys: public key (for encryption) and private key (for decryption).</p>", cards:[
        {q:"What is asymmetric encryption?",a:"Uses a public/private key pair. Public key encrypts, private key decrypts. Solves key distribution problem but slower than symmetric. Used for key exchange, digital signatures, certificates. Examples: RSA, ECC, DSA, ElGamal."},
        {q:"How does asymmetric encryption work?",a:"Party A encrypts with Party B's public key → only Party B can decrypt with their private key. Conversely, Party A can sign with their private key → anyone can verify with Party A's public key (digital signature)."},
        {q:"What is RSA?",a:"Rivest-Shamir-Adleman — the most widely used asymmetric algorithm. Based on difficulty of factoring large prime numbers. Key sizes: 2048-4096 bits (minimum recommended). Used in SSL/TLS, digital signatures, SSH, GPG."},
        {q:"What are minimum RSA key size requirements?",a:"RSA 2048-bit for current security through 2030. RSA 3072-bit required for post-2030 security. RSA 4096-bit for highest security. NIST recommends minimum 2048 bits."},
        {q:"What is DSA (Digital Signature Algorithm)?",a:"NIST standard for digital signatures only — cannot be used for encryption/key exchange. Based on discrete logarithm problem. Key sizes: 2048-3072 bits. Used in FIPS 186 standard."},
        {q:"What is ECC (Elliptic Curve Cryptography)?",a:"Based on elliptic curve math over finite fields. Provides same security as RSA with much smaller keys. 256-bit ECC ≈ 3072-bit RSA. Used in Bitcoin, TLS 1.3, mobile devices, smart cards. Faster key generation and signing."},
        {q:"What are common ECC key sizes?",a:"256-bit (equivalent to RSA 3072), 384-bit (equivalent to RSA 7680), 521-bit (equivalent to RSA 15360). NIST curves: P-256, P-384, P-521."},
        {q:"What is ElGamal?",a:"Asymmetric algorithm based on discrete logarithm. Can be used for encryption and digital signatures. Key sizes are variable. Used in GNU Privacy Guard (GPG). Considered legacy."},
        {q:"What is Diffie-Hellman key exchange?",a:"Allows two parties to establish a shared secret key over a public channel without previously sharing any secret information. Vulnerable to Man-in-the-Middle attacks without authentication. Foundation for many secure protocols."},
        {q:"What is ECDH (Elliptic Curve Diffie-Hellman)?",a:"Diffie-Hellman key exchange using elliptic curve cryptography. Provides same security as DH with much smaller keys and faster computation. Used in TLS 1.3, Signal protocol, Bitcoin."},
        {q:"What is ECDSA?",a:"Elliptic Curve Digital Signature Algorithm — DSA using ECC. Provides digital signatures with smaller keys and faster signing than RSA/DSA. Used in Bitcoin, Ethereum, TLS 1.3, SSH."},
        {q:"Why is asymmetric encryption slower than symmetric?",a:"Asymmetric algorithms use complex mathematical operations (large number arithmetic, modular exponentiation, elliptic curve point multiplication). Symmetric uses simpler bitwise operations on fixed-size blocks. Hybrid systems combine both: asymmetric for key exchange, symmetric for data."},
        {q:"What is a hybrid cryptosystem?",a:"Combines symmetric and asymmetric encryption. Asymmetric crypto securely exchanges a symmetric session key, then symmetric crypto encrypts the actual data. Used in TLS/SSL, PGP/GPG, IPsec. Best of both worlds: secure key exchange + fast data encryption."}
      ]},
      { title:"Cryptographic Hash Functions", content:"<h4>One-Way Fixed-Size Digests</h4><p>Cryptographic hash functions convert input data of any size to a fixed-size digest. One-way function — cannot be reversed to find original data.</p>", cards:[
        {q:"What is a cryptographic hash function?",a:"A one-way function that converts input data (any size) to a fixed-size digest/hash. Properties: deterministic, fast to compute, pre-image resistant, collision resistant, exhibits avalanche effect. Used for integrity verification, password storage, digital signatures."},
        {q:"What are the four key properties of hash functions?",a:"Deterministic (same input → same output), Quick computation (efficient to calculate), Pre-image resistant (cannot reverse hash to find input), Collision resistant (hard to find two inputs with same hash). Also: small input change produces dramatically different output (avalanche effect)."},
        {q:"What is the avalanche effect?",a:"A significant change in the output hash even with a minor change to the input. Example: changing one bit of input changes approximately 50% of the output bits. Desired property for cryptographic hashes."},
        {q:"What is MD5 and why is it broken?",a:"Message Digest 5 — produces 128-bit hash. Broken — practical collision attacks demonstrated in 2004. Can generate fake SSL certificates with collisions. Should NEVER be used for security. Still used for non-security checksums."},
        {q:"What is SHA-1 and why is it broken?",a:"Secure Hash Algorithm 1 — produces 160-bit hash. Broken by SHAttered attack (2017) — first practical collision demonstrated. Used in Git, SSL certificates, blockchain. Deprecated for security use. Still used in non-cryptographic contexts."},
        {q:"What is SHA-256?",a:"Part of SHA-2 family. Produces 256-bit (32-byte) hash. Currently secure and widely used. Used in Bitcoin, TLS certificates, code signing, SSH key fingerprints. NIST approved. Minimum recommended hash for security applications."},
        {q:"What is the SHA-2 family?",a:"SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224, SHA-512/256. All based on Merkle-Damgard construction. Different output sizes from same core algorithm. SHA-256 and SHA-512 are most common. NIST approved since 2001."},
        {q:"What is SHA-3?",a:"Latest hash standard (Keccak). Designed as alternative to SHA-2 using sponge construction instead of Merkle-Damgard. Produces variable output: 224, 256, 384, 512 bits. Not yet widely deployed but considered highly secure."},
        {q:"What is BLAKE2?",a:"Fast cryptographic hash function designed in 2008. Faster than MD5, SHA-1, SHA-2, and SHA-3 while maintaining high security. Output sizes: 1-512 bits. Used in Git (experimental), Argon2 password hashing, Telegram. BLAKE3 (2020) is even faster."},
        {q:"What is HMAC?",a:"Hash-based Message Authentication Code — combines a hash function with a secret key. Provides both integrity AND authentication. Used in TLS, IPsec, SSH. Formula: HMAC(K, m) = H((K⊕opad) || H((K⊕ipad) || m))."},
        {q:"How are hash functions used in digital signatures?",a:"Message is hashed first (fast), then the hash is encrypted with the sender's private key (slow). This provides authentication, integrity, and non-repudiation. Signing a hash is much faster than signing the entire message."},
        {q:"Why hash passwords instead of storing them in plaintext?",a:"If database is breached, hashed passwords cannot be easily reversed to reveal actual passwords. Best practice: use slow hashing algorithms (bcrypt, scrypt, Argon2) with unique salt per password. Prevents rainbow table attacks."},
        {q:"What is a rainbow table?",a:"A precomputed table of hash values for all possible passwords. Used to reverse password hashes quickly. Defeated by salting (adding random data before hashing). Modern systems use key stretching (bcrypt, scrypt) instead."},
        {q:"What is a collision attack on hash functions?",a:"Finding two different inputs that produce the same hash output. MD5 collisions demonstrated in 2004. SHA-1 collisions demonstrated in 2017 (SHAttered). Collision attacks can create fake certificates or tampered files that appear valid."},
        {q:"What is a length extension attack?",a:"Exploits Merkle-Damgard construction to append data to a message and compute the new hash without knowing the original key. Affects MD5, SHA-1, SHA-2. HMAC prevents this. SHA-3 (sponge construction) is not vulnerable."}
      ]},
      { title:"Digital Signatures", content:"<h4>Authentication, Integrity & Non-Repudiation</h4><p>Digital signatures provide proof of message origin, integrity, and prevent senders from denying they sent the message.</p>", cards:[
        {q:"What do digital signatures provide?",a:"Three security services: Authentication (verifies sender's identity), Integrity (proves message wasn't altered), Non-repudiation (sender cannot deny sending the message). Used in software distribution, email, contracts, blockchain."},
        {q:"Describe the digital signature process step by step.",a:"1) Sender creates the message. 2) Hash function creates a digest of the message. 3) Digest is encrypted with sender's PRIVATE KEY (this is the signature). 4) Signature + original message are sent. 5) Receiver decrypts signature with sender's PUBLIC KEY. 6) Receiver independently computes hash of received message. 7) If hashes match, signature is valid."},
        {q:"Why encrypt the HASH (not the whole message) with the private key?",a:"Hashing is fast, asymmetric encryption of a full message would be slow. The hash uniquely represents the message. Encrypting just the hash provides all the security benefits with much better performance."},
        {q:"What is DSS (Digital Signature Standard)?",a:"NIST standard for digital signatures (FIPS 186). Uses DSA algorithm. Specifies key sizes, hashing algorithms (SHA-2), and verification procedures. Replaced original DSA in 1994 and updated in 2000, 2009, 2013, 2019."},
        {q:"What is PKCS #10?",a:"Certificate signing request format that includes a public key and identity information, signed with the applicant's private key. Submitted to a CA to obtain a digital certificate. Used in web server certificate requests."},
        {q:"What is PKCS #7 / CMS?",a:"Cryptographic Message Syntax — standard for digitally signing, digesting, authenticating, or encrypting message data. Used in S/MIME email, code signing, PDF signatures. Successor to PKCS #6."},
        {q:"What is ECDSA?",a:"Elliptic Curve Digital Signature Algorithm — digital signatures using ECC. Smaller keys, faster signing than RSA/DSA. Used in Bitcoin transactions, Ethereum, TLS 1.3, SSH. NIST P-256 and P-384 curves commonly used."},
        {q:"How do you verify a digital signature?",a:"1) Decrypt the attached signature using the sender's PUBLIC KEY to get the original hash. 2) Compute your own hash of the received message. 3) Compare both hashes. If they match: message is authentic, untampered, and originated from the holder of the private key."},
        {q:"What is a certificate signing request (CSR)?",a:"A message sent to a Certificate Authority to apply for a digital certificate. Contains identity information, public key, and is signed with the applicant's private key (PKCS #10 format). The CA verifies identity and signs the resulting certificate."},
        {q:"What is code signing?",a:"Using digital signatures to verify the authenticity and integrity of software code. Users can verify the developer's signature before installation. Prevents tampering, malware injection. Used by software vendors, app stores, operating systems."}
      ]},
      { title:"PKI (Public Key Infrastructure)", content:"<h4>Managing Digital Certificates & Keys</h4><p>PKI is the framework that enables secure electronic transactions through digital certificates, certificate authorities, and public-key cryptography.</p>", cards:[
        {q:"What is PKI?",a:"Public Key Infrastructure — the entire framework of policies, procedures, roles, hardware, software, and systems needed to create, manage, distribute, use, store, and revoke digital certificates and manage public-key encryption."},
        {q:"What is a Certificate Authority (CA)?",a:"A trusted entity that issues, signs, and manages digital certificates. Verifies certificate applicant identity, binds public key to identity in X.509 format, signs certificates with CA's private key. Examples: Let's Encrypt, DigiCert, GlobalSign, Amazon Trust Services."},
        {q:"What is a Registration Authority (RA)?",a:"Verifies the identity of certificate applicants before the CA issues certificates. Acts as an intermediary between the applicant and CA. Handles certificate requests, validates information, but does NOT sign or issue certificates itself."},
        {q:"What is an X.509 certificate?",a:"The standard format for public key certificates. Fields: version number, serial number (unique), signature algorithm identifier, issuer (CA name), validity period (start/end dates), subject (certificate holder identity), subject public key information, issuer/subject unique identifiers (optional), certificate signature algorithm, and signature value."},
        {q:"What are the X.509 certificate versions?",a:"v1 — basic (original 1993). v2 — added optional attributes (1995). v3 — added extensions (1996, current standard). Extensions support Subject Alternative Name (SAN), Key Usage, Extended Key Usage, CRL Distribution Points, Authority Information Access."},
        {q:"What information is in an X.509 certificate?",a:"Version, serial number, signature algorithm, issuer name, validity period (not before/not after), subject name, subject public key + algorithm, issuer unique ID (v2/v3), subject unique ID (v2/v3), extensions (v3 including SAN, key usage)."},
        {q:"What is a Certificate Revocation List (CRL)?",a:"A published list of certificates that have been revoked before their scheduled expiration date. Published by the CA at regular intervals. Clients check CRL to verify certificate validity. Can be large and outdated — OCSP provides real-time alternative."},
        {q:"What is OCSP (Online Certificate Status Protocol)?",a:"Real-time protocol for checking certificate revocation status. Client sends certificate serial number to OCSP responder, which replies: good, revoked, or unknown. More current than CRL. Can be privacy-invasive (responder knows which sites you visit). OCSP Stapling (by server) solves this."},
        {q:"What is OCSP Stapling?",a:"The web server periodically queries the OCSP responder and stores (staples) the signed response. During TLS handshake, server sends the stapled OCSP response to client. Benefits: real-time revocation checking without exposing browsing history to OCSP responder."},
        {q:"What is certificate chaining/certification path?",a:"The chain from the end-entity certificate up to a trusted root CA through intermediate CAs. Chain: End Entity → Intermediate CA(s) → Root CA. Each level signs the one below it. Client validates the entire chain to trust the end certificate."},
        {q:"What is a self-signed certificate?",a:"A certificate signed by its own private key instead of being signed by a CA. Not trusted by default by browsers/OS. Used internally, for testing, or in enterprise environments with manually installed root certificates."},
        {q:"What are the types of SSL/TLS certificates?",a:"Domain Validated (DV) — verifies domain ownership only. Organization Validated (OV) — verifies organization identity. Extended Validation (EV) — most rigorous verification, shows green bar (deprecated in browsers 2019). Wildcard — covers subdomains (*.example.com). Multi-domain (SAN) — covers multiple domains."},
        {q:"What is a certificate pinning?",a:"An security mechanism where a client (browser/app) expects a server to present a specific, pre-defined certificate or public key. Prevents MITM attacks even if a fraudulent CA issues a certificate. Deprecated in browsers due to maintenance issues."},
        {q:"How does PKI relate to web browsing (HTTPS)?",a:"When you visit https://site.com: 1) Server presents its X.509 certificate. 2) Browser verifies the certificate chain to a trusted root CA. 3) Browser checks validity period, revocation status (OCSP/CRL). 4) If valid, browser uses the public key for asymmetric key exchange to establish symmetric session key. 5) Encrypted communication proceeds."},
        {q:"What is Web of Trust?",a:"Alternative to PKI used by PGP/GPG. Instead of hierarchical CAs, users sign each other's keys to build a trust network. Used in email encryption. Less scalable than PKI but decentralized and no single point of failure."}
      ]},
      { title:"Key Management", content:"<h4>Key Lifecycle & Distribution</h4><p>Key management covers all aspects of cryptographic key handling from generation through destruction.</p>", cards:[
        {q:"What is key management?",a:"The complete lifecycle management of cryptographic keys: generation, storage, distribution, usage, rotation (replacement), revocation (early invalidation), and destruction (secure deletion). Poor key management is the #1 cause of cryptographic system failures."},
        {q:"What are the methods of key distribution?",a:"Physical delivery (USB drive, secure courier), Pre-shared keys (PSK — shared before communication), Public-key encryption (encrypt symmetric key with recipient's public key), Diffie-Hellman key exchange (establish shared key over insecure channel), Key Distribution Center (KDC) using Kerberos."},
        {q:"What is a Hardware Security Module (HSM)?",a:"A physical computing device that manages digital keys and performs cryptographic operations. Tamper-resistant, FIPS 140-2 certified. Protects keys from extraction. Used by banks, CAs, cloud providers. Can perform encryption, decryption, signing, key generation."},
        {q:"What is a keystore?",a:"A password-protected database that stores cryptographic keys and certificates. Examples: Java KeyStore (JKS), Windows Certificate Store, Linux /etc/ssl/private/, OpenSSL keystore. Protects keys at rest."},
        {q:"Why rotate cryptographic keys?",a:"Limit the amount of data encrypted with a single key. Reduce damage if a key is compromised. Meet compliance requirements. Limit exposure time from undetected key theft. Recommended: rotate symmetric keys every 1-2 years, asymmetric keys every 2-3 years."},
        {q:"What is key escrow?",a:"A cryptographic key is placed in the care of a third party (escrow agent) who can retrieve it under certain conditions. Used for law enforcement access, corporate data recovery, disaster recovery. Controversial — some view it as a backdoor."},
        {q:"What is Shamir's Secret Sharing?",a:"A cryptographic algorithm that divides a secret (key) into multiple parts (shares). A minimum number of shares is required to reconstruct the original key. If fewer than the minimum are available, no information about the key can be determined. Used for multi-party key recovery."},
        {q:"What is Perfect Forward Secrecy (PFS) in key management?",a:"Each session uses a unique, ephemeral key that is not derived from long-term keys. If a long-term private key is compromised, past session keys cannot be reconstructed. Achieved through ephemeral Diffie-Hellman (DHE/ECDH). TLS 1.3 requires PFS."},
        {q:"What is key zeroization?",a:"The automatic erasure of cryptographic keys from an HSM or device when tampering is detected, battery is removed, or a specific command is received. Prevents key extraction during physical attacks. Common in military and banking HSMs."},
        {q:"How are keys destroyed?",a:"Cryptographic erase (securely delete encryption key so data cannot be decrypted), crypto-shredding (delete keys for specific data sets), physical destruction (shredding, degaussing, incineration of storage media). NIST SP 800-88 provides guidelines for media sanitization."}
      ]},
      { title:"Cryptographic Attacks", content:"<h4>Types & Mitigations</h4><p>Understanding attack methods is critical for ethical hackers to identify and remediate weaknesses.</p>", cards:[
        {q:"What is a brute force attack?",a:"Trying all possible keys/passwords until the correct one is found. Effectiveness depends on key length. A 128-bit symmetric key has 2^128 possibilities. Mitigation: use long keys, rate limiting, account lockout, key stretching (bcrypt/scrypt/Argon2 for passwords)."},
        {q:"What is a known plaintext attack?",a:"Attacker has access to some plaintext and its corresponding ciphertext, and tries to deduce the key or future ciphertext. Mitigation: use different keys for different messages, use authenticated encryption."},
        {q:"What is a chosen plaintext attack?",a:"Attacker can choose arbitrary plaintexts and obtain their encryption, then tries to deduce the key or decrypt other ciphertexts. Relevant for block cipher analysis. Mitigation: use modes that resist such attacks (GCM, CBC with random IV)."},
        {q:"What is a chosen ciphertext attack?",a:"Attacker can choose arbitrary ciphertexts and obtain their decryption, then tries to deduce information about the key or other ciphertexts. Mitigation: use authenticated encryption, never decrypt unauthenticated ciphertext."},
        {q:"What is a collision attack?",a:"Finding two different inputs that produce the same hash output. Used to create fake SSL certificates (MD5/SHA-1), tamper with digital signatures. Mitigation: use secure hash functions (SHA-256, SHA-3)."},
        {q:"What are side channel attacks?",a:"Exploiting physical implementation details rather than mathematical weaknesses: timing analysis (how long operations take), power consumption analysis (electrical power patterns), electromagnetic analysis (EM radiation from device), acoustic analysis (sound from hardware). Mitigation: constant-time algorithms, shielding, random delays."},
        {q:"What is the Man-in-the-Middle (MITM) attack?",a:"Attacker intercepts and potentially alters communication between two parties who believe they are directly communicating. Can steal session keys, credentials, data. Mitigation: certificates/PKI, certificate pinning, DNSSEC, SSH fingerprint verification."},
        {q:"What is a rubber hose attack?",a:"Coercing key holders through physical force, threats, or intimidation to reveal their keys. Also called 'crack the suspect between two rubber hoses' (waterboarding). No technical mitigation — relies on legal/physical protections."},
        {q:"What is a replay attack?",a:"Intercepting and retransmitting valid data (ciphertext, authentication tokens) to trick the system. Used in authentication, payment systems. Mitigation: timestamps, nonces (number used once), sequence numbers."},
        {q:"What is a return address attack?",a:"Encrypting a chosen plaintext with the target's public key, then sending it to the target and monitoring the encrypted response to deduce information about the key. Mitigation: use randomized encryption modes."},
        {q:"What is the BEAST attack?",a:"Browser Exploit Against SSL/TLS — exploits CBC mode in SSL 3.0 and TLS 1.0. Allows attackers to decrypt sensitive data like cookies. Mitigation: use TLS 1.2+ with GCM mode, or implement CBC ordering countermeasure."},
        {q:"What is the POODLE attack?",a:"Padding Oracle On Downgraded Legacy Encryption — exploits SSL 3.0's fallback mechanism. Allows decryption of traffic by forcing connection to use SSL 3.0. Mitigation: disable SSL 3.0, use TLS 1.2+. Also affects TLS with CBC mode (POODLE-TLS)."},
        {q:"What is a padding oracle attack?",a:"Exploits how a system handles decrypted padding in block cipher modes. The system's different error responses reveal whether padding was valid, allowing byte-by-byte decryption. Affects CBC mode. Mitigation: use authenticated encryption (GCM)."},
        {q:"What is the Logjam attack?",a:"Exploits weak Diffie-Hellman key exchange, particularly export-grade cryptography from the 1990s. Allows a MITM to downgrade connections to weaker encryption. Mitigation: use DH keys with at least 2048 bits, prefer ECDH."},
        {q:"What is a birthday attack?",a:"Exploits the probability of hash collisions — in a set of random elements, collisions become likely faster than expected (birthday paradox). Affects hash functions. A 128-bit hash has collision resistance of only 64 bits. Mitigation: use longer hash outputs (SHA-256+)."}
      ]},
      { title:"Secure Communication Protocols", content:"<h4>TLS/SSL, IPsec, SSH, PGP/GPG</h4><p>Protocols that use cryptography to secure communications across networks.</p>", cards:[
        {q:"How does TLS/SSL work?",a:"TLS (Transport Layer Security) — successor to SSL. Process: 1) Client sends supported cipher suites. 2) Server responds with selected suite + X.509 certificate. 3) Client verifies certificate chain. 4) Key exchange occurs (RSA, DH, ECDH). 5) Both parties derive symmetric session key. 6) Data transfer using symmetric encryption. TLS 1.3 simplified to 1-RTT (or 0-RTT)."},
        {q:"What is the difference between SSL and TLS?",a:"SSL (Secure Sockets Layer) is deprecated — versions 1.0, 2.0, 3.0 all have critical vulnerabilities. TLS (Transport Layer Security) is current — versions 1.0 (1999), 1.1 (2006, deprecated), 1.2 (2008, widely used), 1.3 (2018, latest). TLS 1.3 removes weak algorithms, requires forward secrecy."},
        {q:"What are TLS cipher suites?",a:"Sets of algorithms that determine: key exchange (ECDHE, DHE, RSA), authentication (RSA, ECDSA), symmetric encryption (AES-128-GCM, AES-256-GCM, ChaCha20), and hash/HMAC (SHA256, SHA384). Example: TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256."},
        {q:"What is IPsec?",a:"Internet Protocol Security — operates at network layer (Layer 3). Provides authentication and encryption for IP packets. Two modes: Transport (end-to-end, protects payload only) and Tunnel (protects entire packet including header). Uses AH (Authentication Header) for integrity and ESP (Encapsulating Security Payload) for confidentiality."},
        {q:"What are IPsec protocols AH and ESP?",a:"AH (Authentication Header — protocol 51): provides authentication and integrity but NOT encryption. ESP (Encapsulating Security Payload — protocol 50): provides confidentiality, authentication, and integrity. ESP is more commonly used. Often both are used together."},
        {q:"What is IKE in IPsec?",a:"Internet Key Exchange — protocol for setting up security associations (SAs) in IPsec. IKEv1 has two phases: Phase 1 (establish secure channel using Main/Aggressive mode), Phase 2 (negotiate IPsec parameters). IKEv2 combines and improves both phases, faster, supports MOBIKE."},
        {q:"How does SSH work?",a:"Secure Shell — secures remote login and network services. Process: 1) Server key exchange (asymmetric). 2) Server authentication (host key). 3) Client authentication (password, public key, certificate). 4) Encrypted tunnel established using symmetric encryption. Default port: 22. Protocols: SSH-1 (deprecated), SSH-2 (current)."},
        {q:"What are SSH authentication methods?",a:"Password authentication (vulnerable to brute force), Public key authentication (client signs a challenge with private key — most secure), Keyboard-interactive, Certificate-based, Host-based, GSSAPI/ Kerberos. Public key is recommended for servers."},
        {q:"What is PGP/GPG?",a:"Pretty Good Privacy / GNU Privacy Guard — email and file encryption using combined symmetric + asymmetric + hashing. Process: 1) Message hashed (SHA-1/SHA-256). 2) Hash encrypted with sender's private key (digital signature). 3) Message + signature encrypted with symmetric key (AES/CAST5). 4) Symmetric key encrypted with recipient's public key. Uses Web of Trust model."},
        {q:"What is S/MIME?",a:"Secure/Multipurpose Internet Mail Extensions — standard for sending digitally signed and encrypted emails. Uses PKI/X.509 certificates (not Web of Trust like PGP). Supported natively by Outlook, Apple Mail. Provides same services as PGP: authentication, integrity, confidentiality."},
        {q:"What is DNSSEC?",a:"DNS Security Extensions — adds cryptographic authentication to DNS responses. Prevents DNS spoofing/poisoning. Uses digital signatures (RSASHA256, ECDSAP256SHA256) and a chain of trust from root zone down. Does NOT encrypt DNS queries (use DoH/DoT for that)."},
        {q:"What are DoH and DoT?",a:"DoH (DNS over HTTPS — RFC 8484): DNS queries encrypted via HTTPS (port 443). DoT (DNS over TLS — RFC 7858): DNS queries encrypted via dedicated port 853. Both prevent DNS snooping and spoofing. DoH is harder to block/firewall."}
      ]},
      { title:"Wireless Cryptography", content:"<h4>WEP, WPA, WPA2, WPA3</h4><p>Evolution of wireless security protocols and their cryptographic foundations.</p>", cards:[
        {q:"What is WEP and why is it broken?",a:"Wired Equivalent Privacy — first Wi-Fi security protocol. Uses RC4 stream cipher with 64/128/152-bit keys (actually 40/104/128-bit key + 24-bit IV). Critical flaws: short IV causes collisions, static key, weak CRC-32 integrity check. Can be cracked in minutes using aircrack-ng."},
        {q:"What is WPA?",a:"Wi-Fi Protected Access — interim replacement for WEP introduced by Wi-Fi Alliance after TKIP (Temporal Key Integrity Protocol). TKIP dynamically changes keys per packet and includes MIC (Message Integrity Check) to prevent forgery. Still uses RC4. Superseded by WPA2."},
        {q:"What is WPA2?",a:"Wi-Fi Protected Access 2 — mandatory since 2006. Uses AES block cipher in CCMP mode (Counter Mode with Cipher Block Chaining Message Authentication Code Protocol). Provides both confidentiality and authentication. TKIP supported for backward compatibility. Vulnerable to KRACK attack (2017) — patchable."},
        {q:"What is WPA3?",a:"Wi-Fi Protected Access 3 — introduced 2018, mandatory for Wi-Fi CERTIFIED devices since 2020. Uses AES-GCMP (Galois Counter Mode). Key features: SAE (Simultaneous Authentication of Equals) replacing PSK, forward secrecy, stronger encryption (Suite B cryptography), Enhanced Open (OWE for public networks)."},
        {q:"What is SAE (Simultaneous Authentication of Equals)?",a:"Also called 'Dragonfly key exchange.' Replaces WPA2's pre-shared key authentication. Protects against offline dictionary attacks. Both parties authenticate simultaneously with equal importance. Provides forward secrecy — compromising password doesn't reveal past sessions."},
        {q:"What is TKIP?",a:"Temporal Key Integrity Protocol — introduced with WPA as interim fix for WEP flaws. Dynamically rekeys (new key per packet), includes MIC (Michael) to prevent forgery, extends IV size, includes rekeying mechanism. Still uses RC4 (inherently flawed). Replaced by AES-CCMP in WPA2."},
        {q:"What is CCMP?",a:"Counter Mode with Cipher Block Chaining Message Authentication Code Protocol — security protocol in WPA2. Uses AES in CTR mode for encryption and CBC-MAC for authentication/integrity. More secure than TKIP/Michael. Required for WPA2-AES compliance."},
        {q:"What is the KRACK attack?",a:"Key Reinstallation Attack (2017) — exploits the four-way handshake in WPA2. Attacker forces reinstallation of an already-in-use encryption key, resetting the nonce to zero. Allows packet decryption and injection. Patchable via firmware updates. Affects all WPA2 implementations."},
        {q:"What is OWE (Opportunistic Wireless Encryption)?",a:"Also called 'Enhanced Open' — introduced in WPA3 for public/open Wi-Fi networks. Provides individual data encryption even on open networks using Diffie-Hellman key exchange (similar to HTTPS for HTTP). Prevents passive eavesdropping on coffee shop Wi-Fi."},
        {q:"What is WPS and why is it dangerous?",a:"Wi-Fi Protected Setup — allows easy Wi-Fi configuration via push-button or PIN. PIN has only 7 digits (actually 6 + checksum) = 10,000 combinations. Can be brute-forced in hours. Attacker can determine first half and second half separately = very fast crack. Disable WPS on all routers."},
        {q:"How do you attack wireless networks as an ethical hacker?",a:"Common techniques: 1) Capture WPA 4-way handshake (deauth client). 2) Offline dictionary/brute force attack on handshake using aircrack-ng, hashcat. 3) For WPA3: test SAE resistance. 4) Exploit WPS PIN vulnerability. 5) Rogue AP / Evil Twin attack. 6) KRACK exploitation."},
        {q:"What is a rogue access point?",a:"An unauthorized wireless access point connected to a legitimate network. Can be installed by malicious insiders or attackers. Provides covert access to the network. Mitigation: wireless intrusion detection, regular network scans, port security on switches."},
        {q:"What is an Evil Twin attack?",a:"A rogue AP that mimics a legitimate access point (same SSID, stronger signal). Tricks users into connecting. Can perform MITM attacks, capture credentials. Mitigation: verify certificate warnings, use enterprise WPA2/WPA3 with EAP-TLS."}
      ]},
      { title:"Cryptographic Standards & Organizations", content:"<h4>NIST, FIPS, Common Criteria</h4><p>Organizations and standards that govern cryptographic implementations.</p>", cards:[
        {q:"What is NIST?",a:"National Institute of Standards and Technology — US agency that develops cryptographic standards. Selects AES as symmetric standard (2001), SHA as hash standard, publishes FIPS publications, maintains Computer Security Resource Center. Evaluates crypto through Cryptographic Standard Support Project."},
        {q:"What is FIPS 140-2?",a:"Federal Information Processing Standards for cryptographic modules. Four security levels: Level 1 (basic), Level 2 (physical tamper evidence), Level 3 (physical tamper resistance), Level 4 (environmental tamper resistance). HSMs typically achieve Level 3 or 4."},
        {q:"What is FIPS 197?",a:"The standard that specifies the Advanced Encryption Standard (AES). Defines Rijndael with 128-bit block size and 128/192/256-bit key sizes. Published in 2001, replaced FIPS PUB 46-3 (DES)."},
        {q:"What is FIPS 186?",a:"The Digital Signature Standard (DSS) — specifies DSA, ECDSA digital signature algorithms. Current version: FIPS 186-5 (2023). Supports DSA, ECDSA, RSA (for signatures only), and new XMSS/LMS (hash-based signatures for post-quantum)."},
        {q:"What is NIST SP 800-57?",a:"NIST Special Publication recommending key management practices. Covers encryption, signature, and key-management recommendations. Defines keying material categories and pairing restrictions."},
        {q:"What is Common Criteria (CC)?",a:"International standard (ISO/IEC 15408) for computer security certification. Evaluation Assurance Levels (EAL 1-7) measure product security. EAL1 = functionally tested, EAL7 = formally verified design. Used to certify HSMs, smart cards, operating systems."},
        {q:"What is the NSA Suite B?",a:"NSA cryptographic suite for protecting government information: AES-192/AES-256 for symmetric encryption, SHA-384/SHA-512 for hashing, ECC (P-256/P-384) for key exchange and signatures, ECDHE for forward secrecy, ECDSA for digital signatures. Used in WPA3."},
        {q:"What is post-quantum cryptography?",a:"Cryptographic algorithms designed to be secure against quantum computers. Shor's algorithm can break RSA/ECC efficiently on a sufficiently powerful quantum computer. NIST PQC standardization project selected CRYSTALS-Kyber (key exchange) and CRYSTALS-Dilithium (signatures). Transition expected by 2035."},
        {q:"What is the Crypto Agility concept?",a:"The ability of a system to quickly adapt to changes in cryptographic algorithms, protocols, and key sizes without major re-engineering. Important for responding to new vulnerabilities and transitioning to post-quantum algorithms. Design systems with modular crypto components."}
      ]},
      { title:"Practical Crypto Tools & Commands", content:"<h4>Command Line Tools for Ethical Hackers</h4><p>Essential tools and commands for testing cryptographic implementations.</p>", cards:[
        {q:"How do you check SSL/TLS certificate details with openssl?",a:"<code>openssl s_client -connect example.com:443</code> — connects and shows server certificate chain. <code>echo | openssl s_client -servername example.com -showcerts -connect example.com:443 2>/dev/null | openssl x509 -noout -dates -subject -issuer</code> — shows certificate dates, subject, issuer."},
        {q:"How do you test SSL/TLS security with openssl?",a:"<code>openssl s_client -connect example.com:443 -tls1</code> (test TLS 1.0), <code>-ssl3</code> (test SSL 3.0 — should fail). Check for weak cipher suites, certificate validity, protocol support."},
        {q:"How do you hash files/strings with openssl?",a:"<code>echo -n 'text' | sha256sum</code> or <code>openssl dgst -sha256 file.txt</code>. Available algorithms: md5, sha1, sha256, sha384, sha512. Useful for verifying file integrity."},
        {q:"How do you encrypt/decrypt with openssl?",a:"Encrypt: <code>openssl enc -aes-256-cbc -in plaintext.txt -out ciphertext.bin</code>. Decrypt: <code>openssl enc -aes-256-cbc -d -in ciphertext.bin -out decrypted.txt</code>. Supports AES, 3DES, ChaCha20, Blowfish, and many others."},
        {q:"How do you generate key pairs with openssl?",a:"RSA key pair: <code>openssl genpkey -algorithm RSA -out private.pem -pkeyopt rsa_keygen_bits:4096</code>. Extract public key: <code>openssl pkey -in private.pem -pubout -out public.pem</code>. ECC key pair: <code>openssl genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-256</code>."},
        {q:"What is hashcat?",a:"Advanced password recovery tool supporting GPU acceleration. Supports 350+ hash types including NTLM, WPA-WPA2, SHA-256, bcrypt. Modes: dictionary attack (-m 1000), brute force, mask attack, combination, rule-based. Example: <code>hashcat -m 0 hashes.txt rockyou.txt</code>."},
        {q:"What is John the Ripper?",a:"Open-source password cracker supporting multiple formats and hash types. Modes: single crack, wordlist, incremental (brute force), external. Example: <code>john --wordlist=rockyou.txt shadow</code>. Good for cracking SSH keys (<code>john ssh_keys/id_rsa</code>)."},
        {q:"What is aircrack-ng?",a:"Complete suite of tools for 802.11 wireless network security. Components: airodump-ng (capture packets), aireplay-ng (inject packets), aircrack-ng (crack WEP/WPA keys). Example: <code>aircrack-ng -w wordlist.txt capture.cap</code>. Requires monitor mode interface."},
        {q:"What is nmap's scripting engine for crypto?",a:"<code>nmap --script ssl-enum-ciphers &lt;target&gt;</code> — enumerates supported cipher suites. <code>ssl-cert</code> — shows certificate details. <code>ssl-heartbleed</code> — checks for Heartbleed vulnerability. <code>tls-sig-alg</code> — checks signature algorithms."}
      ]}
    ]}
  ]
};
