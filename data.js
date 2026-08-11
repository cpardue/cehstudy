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
