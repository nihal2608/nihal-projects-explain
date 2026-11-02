// Personal details, skills and experience. Edit freely.

export const profile = {
  name: 'Nihal Ansh Aherwar',
  role: 'Senior Java Backend Developer',
  tagline:
    'I build the backend engines behind telecom, network-security, smart-city and device-management platforms.',
  summary:
    'Senior Java Backend Developer with 4.6 years of experience developing and maintaining backend services across telecom, networking, smart-city, log-management and mobile device-management domains. Skilled in Java, Spring Boot, REST APIs, Microservices, MongoDB, PostgreSQL and Apache Kafka.',
  email: 'nihal.ansh000@gmail.com',
  phones: ['+91 787-951-3851', '+91 808-550-5692'],
  location: 'Chhindwara, Madhya Pradesh, India',
  linkedin: 'https://linkedin.com/in/nihal-ansh-aherwar-6ab6066a',
  resume: '/resume.pdf',
  stats: [
    { value: '4.6+', label: 'Years of experience' },
    { value: '7', label: 'Backend projects' },
    { value: '5', label: 'Industry domains' },
    { value: '2', label: 'Companies' },
  ],
}

export const skills = [
  { group: 'Programming', items: ['Java', 'Java EE', 'SQL', 'Data Structures'] },
  {
    group: 'Backend & APIs',
    items: ['Spring Boot', 'Spring', 'Hibernate', 'Microservices', 'REST APIs', 'API Gateway'],
  },
  { group: 'Security & Identity', items: ['JWT', 'Keycloak', 'Encryption', 'RADIUS / TACACS+'] },
  { group: 'Databases', items: ['MongoDB', 'PostgreSQL', 'SQL', 'NoSQL'] },
  { group: 'Messaging & Logging', items: ['Apache Kafka', 'Syslog Monitoring', 'Log Management'] },
  { group: 'Testing', items: ['JUnit', 'Mockito', 'Unit Testing', 'Integration Testing'] },
  { group: 'Tools & Platforms', items: ['Git', 'Eclipse', 'IntelliJ IDEA', 'Linux', 'AWS S3'] },
  {
    group: 'Domains',
    items: ['Mobile Device Management', 'Network Authentication', 'Telecom', 'Smart City'],
  },
]

export const experience = [
  {
    company: 'Advantal Technologies Ltd',
    title: 'Senior Java Backend Developer',
    period: 'Jul 2022 - Sep 2026',
    points: [
      'Develop and maintain Java / Spring Boot services across telecom, networking, smart-city, syslog and MDM projects.',
      'Design REST APIs for frontend apps and internal / external service integrations.',
      'Work on centralized syslog and log-monitoring workflows and on AAA access control using RADIUS / TACACS+.',
      'Troubleshoot production and performance issues; write JUnit / Mockito tests; guide junior developers.',
    ],
  },
  {
    company: 'Xtranet Technologies Private Limited',
    title: 'Senior Java Backend Developer',
    period: 'Nov 2021 - Mar 2022',
    points: [
      'Built backend services and REST APIs for an e-commerce platform.',
      'Worked on database query optimization and backend efficiency.',
      'Took part in code reviews and mentored junior developers.',
    ],
  },
]

export const education = [
  { title: 'B.E. - Computer Science & Engineering', place: 'RGPV, Bhopal', period: '2014 - 2017' },
  { title: 'Engineering Diploma - Information Technology', place: 'RGPV', period: '2011 - 2014' },
]
