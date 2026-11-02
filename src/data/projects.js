// All project content lives here. Edit the text to match your real work.
// shape: logs | phone | lock | network | city | chat | coins   (see components/Shapes.jsx)
// flow: simplified architecture steps shown in the "Architecture" tab.

export const projects = [
  {
    id: 'syslog',
    name: 'Syslog / Log Manager',
    domain: 'Log Management',
    company: 'Advantal Technologies',
    color: '#38bdf8',
    shape: 'logs',
    oneLiner: 'Centralized collection, search and analysis of network-device logs.',
    pitch:
      'Network devices generate a huge number of log events every second. This platform collects them in one place, processes them in real time through Kafka, stores them in MongoDB and lets teams search and analyze events quickly. I worked on ingestion, consumer processing, query performance and archival / export.',
    problem:
      'Logs were scattered across many network devices, which made monitoring and troubleshooting slow.',
    solution:
      'A centralized syslog pipeline: devices send logs, Kafka buffers the high-volume stream, Spring Boot consumers process and store events in MongoDB, and REST APIs power search and export.',
    outcome:
      'One searchable place for all device events, with archival and export workflows for audit and long-term storage.',
    stack: ['Java', 'Spring Boot', 'Apache Kafka', 'MongoDB', 'REST APIs'],
    role: [
      'Supported troubleshooting of high-volume log ingestion.',
      'Worked on Kafka message publishing and consumer processing.',
      'Worked on database queries for event search and analysis.',
      'Contributed to archival and export workflows.',
    ],
    flow: [
      { title: 'Network Devices', sub: 'Routers, switches and firewalls emit syslog events' },
      { title: 'Syslog Receiver', sub: 'Collects raw log messages centrally' },
      { title: 'Apache Kafka', sub: 'Buffers the high-volume stream so nothing is lost' },
      { title: 'Spring Boot Consumers', sub: 'Parse, enrich and process each event' },
      { title: 'MongoDB', sub: 'Stores events for fast search and filtering' },
      { title: 'Search & Export APIs', sub: 'REST APIs feed dashboards, archives and exports' },
    ],
    faq: [
      {
        q: 'Why Kafka for logs?',
        a: 'Log traffic comes in bursts. Kafka absorbs spikes and lets consumers process at their own pace, so ingestion does not overload the database.',
      },
      {
        q: 'Why MongoDB?',
        a: 'Log events are semi-structured documents with varying fields, which fits a document database well and keeps searches flexible.',
      },
    ],
  },
  {
    id: 'mdm',
    name: 'MDM - Mobile Device Management',
    domain: 'Device Management',
    company: 'Advantal Technologies',
    color: '#a78bfa',
    shape: 'phone',
    oneLiner: 'Enroll, manage and control iOS devices from one backend.',
    pitch:
      'Organizations need to control the phones their employees use. This backend lets an admin enroll iOS devices, apply policies and track compliance. I built device-management APIs and the organization-based enrollment integration on top of NanoMDM.',
    problem:
      'Companies had no central way to enroll devices, enforce security policies and see which devices were compliant.',
    solution:
      'Spring Boot APIs that talk to a NanoMDM server: admins enroll devices by organization, push policies and track compliance status.',
    outcome:
      'Managed devices with policy enforcement and compliance visibility from a single admin workflow.',
    stack: ['Java', 'Spring Boot', 'REST APIs', 'NanoMDM'],
    role: [
      'Worked on backend workflows for iOS device enrollment.',
      'Contributed to device-management APIs.',
      'Worked on policy management and managed-device integration.',
      'Contributed to organization-based enrollment integration.',
    ],
    flow: [
      { title: 'Admin Console', sub: 'Admin enrolls devices and defines policies' },
      { title: 'Spring Boot MDM APIs', sub: 'Validate requests and apply organization rules' },
      { title: 'NanoMDM Server', sub: 'Speaks the Apple MDM protocol with devices' },
      { title: 'iOS Device', sub: 'Enrolls, receives policies and reports status' },
      { title: 'Compliance Tracking', sub: 'Device status flows back to the admin view' },
    ],
    faq: [
      {
        q: 'What is NanoMDM?',
        a: 'An open-source, lightweight MDM server for Apple devices. My Spring Boot services integrate with it to run enrollment and policy workflows.',
      },
      {
        q: 'What does "organization-based enrollment" mean?',
        a: 'Devices are enrolled under a specific organization, so each organization sees and manages only its own devices.',
      },
    ],
  },
  {
    id: 'aaa',
    name: 'AAA - RADIUS / TACACS+',
    domain: 'Network Security',
    company: 'Advantal Technologies',
    color: '#34d399',
    shape: 'lock',
    oneLiner: 'Controls who can access network devices, and records what they do.',
    pitch:
      'AAA stands for Authentication, Authorization and Accounting. When someone logs in to a network device, it asks this system: who are you, what are you allowed to do, and what did you do? I worked on those workflows using RADIUS and TACACS+, including policy enforcement and accounting / audit data.',
    problem:
      'Network devices need a central, secure way to verify users and control and audit their access.',
    solution:
      'A Spring Boot AAA service that handles RADIUS and TACACS+ requests: authenticate the user, authorize by policy, and record accounting data.',
    outcome:
      'Centralized access control for network devices and users with an audit trail.',
    stack: ['Java', 'Spring Boot', 'RADIUS', 'TACACS+'],
    role: [
      'Worked on authentication, authorization and accounting workflows.',
      'Supported policy enforcement for devices and users.',
      'Handled accounting and audit data.',
    ],
    flow: [
      { title: 'User / Network Device', sub: 'A login or command triggers an AAA request' },
      { title: 'RADIUS / TACACS+ Request', sub: 'Standard network protocols carry the request' },
      { title: 'Authentication', sub: 'Verify the identity of the user' },
      { title: 'Authorization', sub: 'Check policy: what is this user allowed to do?' },
      { title: 'Accounting & Audit', sub: 'Record sessions and actions for reporting' },
    ],
    faq: [
      {
        q: 'RADIUS vs TACACS+?',
        a: 'RADIUS is widely used for network access such as Wi-Fi and VPN. TACACS+ is commonly used for device administration and separates authorization more granularly.',
      },
    ],
  },
  {
    id: 'cgnat',
    name: 'CGNAT / Network Accounting',
    domain: 'Telecom Networking',
    company: 'Advantal Technologies',
    color: '#fb923c',
    shape: 'network',
    oneLiner: 'Processes accounting data from carrier network devices.',
    pitch:
      'Carrier networks produce accounting information from devices like BNG and leaf switches. My backend receives that data, processes it and shares it with a mediation system that handles it downstream, such as for billing and reporting.',
    problem:
      'Accounting data from network devices has to reach the mediation system reliably and in the right format.',
    solution:
      'A Java backend that receives accounting information from BNG and leaf devices, processes it and forwards it to the mediation system.',
    outcome: 'A dependable data path from network devices to the mediation layer.',
    stack: ['Java', 'Backend Services', 'Network Integrations'],
    role: [
      'Worked on processing accounting information received from BNG and leaf devices.',
      'Worked on sharing the processed data with the mediation system.',
    ],
    flow: [
      { title: 'BNG & Leaf Devices', sub: 'Network devices generate accounting information' },
      { title: 'Java Backend', sub: 'Receives and processes the accounting data' },
      { title: 'Mediation System', sub: 'Consumes processed data for downstream use' },
    ],
    faq: [
      {
        q: 'What is a BNG?',
        a: 'A Broadband Network Gateway: the device that connects subscribers to the provider network and reports their usage.',
      },
    ],
  },
  {
    id: 'cep',
    name: 'Citizen Enablement Portal (CEP / NEC)',
    domain: 'Smart City',
    company: 'Advantal Technologies',
    color: '#f472b6',
    shape: 'city',
    oneLiner: 'Citizen complaints routed to the city command centre.',
    pitch:
      'Part of a smart-city platform where citizens raise complaints that are routed to the Integrated Command and Control Centre (ICCC). I contributed to the backend functionality for those complaints and to the admin-portal backend.',
    problem:
      'Citizens needed a simple channel to raise issues, and city operators needed them to reach the command centre.',
    solution:
      'REST APIs that accept citizen complaints and route them to the ICCC, plus backend services for the admin portal.',
    outcome: 'Citizen complaints reach the city command centre through one backend.',
    stack: ['Java', 'REST APIs', 'Backend Services'],
    role: [
      'Contributed to backend functionality for complaints routed to the ICCC.',
      'Worked on admin-portal backend tasks.',
    ],
    flow: [
      { title: 'Citizen', sub: 'Raises a complaint through the portal' },
      { title: 'REST APIs', sub: 'Validate and accept the complaint' },
      { title: 'Complaint Routing', sub: 'Backend routes it to the right destination' },
      { title: 'ICCC', sub: 'Integrated Command and Control Centre acts on it' },
      { title: 'Admin Portal', sub: 'Admins manage and review through backend services' },
    ],
    faq: [
      {
        q: 'What is ICCC?',
        a: 'The Integrated Command and Control Centre: the central place where a smart city monitors and responds to events and citizen issues.',
      },
    ],
  },
  {
    id: 'cooee',
    name: 'Cooee - Telecommunications',
    domain: 'Telecom',
    company: 'Advantal Technologies',
    color: '#facc15',
    shape: 'chat',
    oneLiner: 'Calling, SMS and subscription-plan features for a telecom product.',
    pitch:
      'A telecommunications product where I worked on the backend for calling, SMS and subscription-plan features, exposed through REST APIs for the client applications.',
    problem: 'Users need calling, messaging and plan features to work reliably behind the app.',
    solution:
      'Java backend services and REST APIs for calling, SMS and subscription plans.',
    outcome: 'Core telecom features available to client apps through clean APIs.',
    stack: ['Java', 'REST APIs', 'Backend Services'],
    role: [
      'Worked on backend functionality for calling.',
      'Worked on SMS features.',
      'Worked on subscription-plan features.',
    ],
    flow: [
      { title: 'Client App', sub: 'User makes a call, sends an SMS or picks a plan' },
      { title: 'REST APIs', sub: 'Single entry point for all features' },
      { title: 'Calling / SMS / Plans', sub: 'Backend modules for each feature' },
      { title: 'Data Store', sub: 'Subscriptions and activity are persisted' },
    ],
    faq: [],
  },
  {
    id: 'heg',
    name: 'HEG-Salary & E-Commerce',
    domain: 'Enterprise Apps',
    company: 'Xtranet Technologies',
    color: '#60a5fa',
    shape: 'coins',
    oneLiner: 'Salary management system and e-commerce backend.',
    pitch:
      'At Xtranet Technologies I worked on HEG-SALARY, a salary management system for an organization, and on backend services and REST APIs for an e-commerce platform. I also optimized database queries and took part in code reviews.',
    problem:
      'An organization needed a system to manage salaries, and an e-commerce platform needed backend APIs that stay efficient.',
    solution:
      'Java backend services with REST APIs for frontend / backend communication, with optimized database queries.',
    outcome: 'Working salary management and e-commerce backends with better query efficiency.',
    stack: ['Java', 'REST APIs', 'SQL'],
    role: [
      'Developed backend services for an e-commerce platform.',
      'Implemented REST APIs for frontend / backend communication.',
      'Worked on database query optimization.',
      'Participated in code reviews and guided junior developers.',
    ],
    flow: [
      { title: 'Frontend', sub: 'Web interface used by staff or customers' },
      { title: 'REST APIs', sub: 'Frontend / backend communication' },
      { title: 'Business Services', sub: 'Salary and e-commerce logic in Java' },
      { title: 'Database', sub: 'Optimized queries for efficient reads and writes' },
    ],
    faq: [],
  },
]
