// ─── Data ─────────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
] as const;

// ─── Personal Info ────────────────────────────────────────────────────────────
export const PERSONAL = {
  name:     'Meer Kalal Arshad',
  tagline:  'Computer Science Student | Full-Stack Developer & Digital Marketing Specialist',
  location: 'Faisalabad, Punjab, Pakistan',
  phone:     '+92-316-7842387',
  whatsapp:  'https://wa.me/923167842387',
  email:     'imeersyed143@gmail.com',
  linkedin:  'https://linkedin.com/in/meer-kalal-arshad-62519a392',
  github:    'https://github.com/meer-syed',
  instagram: 'https://www.instagram.com/msmdigital.co/',
  education: 'BS Computer Science — Government College University Faisalabad (7th Semester)',
} as const;

// ─── Experience ───────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    id: 'decodelabs',
    role: 'Web Development Intern',
    company: 'Decode Labs',
    companyDesc: 'IT Services & IT Consulting — Remote',
    period: 'Jul 2026 – Present',
    icon: '💻',
    color: 'from-blue-500 to-indigo-600',
    highlights: [
      'Developed a responsive travel booking web application for browsing destinations and tour packages',
      'Built with HTML, CSS, Bootstrap, JavaScript, React, Node.js, Express, and MongoDB',
      'Implemented user authentication, booking functionality, and destination management',
      'Integrated REST APIs for seamless frontend–backend communication',
      'Optimized UI/UX for improved user engagement and full mobile responsiveness',
      'Managed source code with Git and GitHub throughout the project lifecycle',
    ],
  },
  {
    id: 'qj-tax',
    role: 'Founder & Freelance Digital Marketing Consultant',
    company: 'QJ Tax & Legal',
    companyDesc: 'Tax & Legal Advisory Business',
    period: 'Feb 2026 – Present',
    icon: '⚖️',
    color: 'from-amber-500 to-orange-600',
    highlights: [
      'Designed and produced professional social media posts and branding assets using AI-assisted tools',
      'Built and executed a peak tax season strategy including ATL awareness campaigns',
      'Developed a Facebook growth roadmap and led LinkedIn brand positioning for inbound leads',
      'Wrote scripts for AI-generated marketing videos and coordinated cross-platform content calendars',
      'Designed and built a client portfolio website to support lead generation and credibility',
    ],
  },
  {
    id: 'safe-storage',
    role: 'Social Media Manager',
    company: 'Safe Storage Cargo Dubai',
    companyDesc: 'Freelance — Dubai',
    period: 'Jun 2022 – Oct 2023',
    icon: '📦',
    color: 'from-emerald-500 to-teal-600',
    highlights: [
      'Designed and created engaging social media posts and promotional graphics for Facebook',
      'Published and managed content across Facebook pages, groups, and other social channels',
      'Wrote compelling captions with relevant hashtags to maximize reach and engagement',
      'Promoted cargo, logistics, and shipping services through creative marketing campaigns',
      'Tracked post performance and optimized content strategies based on engagement insights',
      'Increased brand awareness through consistent and targeted content marketing',
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 'travel-booking',
    title: 'Travel Booking Website',
    description: 'A responsive travel booking platform where users can browse destinations, view tour packages, and submit booking requests. Built during internship at Decode Labs with full-stack implementation.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    icon: '✈️',
    color: 'from-blue-900 to-indigo-900',
    accent: '#3B82F6',
    github: 'https://github.com/meer-syed',
    demo: 'https://travel-booking-website-rho.vercel.app/',
    status: 'Live',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    description: 'Built and deployed a responsive portfolio using React, Next.js, TypeScript, and Tailwind CSS. Hosted on Vercel with a working contact form integration and glassmorphic design system.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    icon: '🌐',
    color: 'from-slate-800 to-slate-900',
    accent: '#8B5CF6',
    github: 'https://github.com/meer-syed',
    demo: '#',
    status: 'Live',
  },
  {
    id: 'resume-analyzer',
    title: 'AI-Powered Resume Analyzer',
    description: 'Final Year Project — An AI-driven application that evaluates resumes, provides actionable feedback, and matches candidates against job descriptions using natural language processing.',
    tags: ['Python', 'AI / NLP', 'React', 'FastAPI'],
    icon: '🤖',
    color: 'from-purple-900 to-violet-900',
    accent: '#8B5CF6',
    github: 'https://github.com/meer-syed',
    demo: '#',
    status: 'In Progress',
  },
  {
    id: 'qj-website',
    title: 'QJ Tax & Legal Website',
    description: 'Professional business website for a tax and legal consultancy offering NTN registration, income tax filing, company registration, and legal advisory services.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    icon: '⚖️',
    color: 'from-amber-900 to-orange-900',
    accent: '#F59E0B',
    github: 'https://github.com/meer-syed',
    demo: '#',
    status: 'Live',
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const SKILLS = {
  'Languages & Frameworks': [
    { name: 'HTML5',       level: 95, icon: '🌐' },
    { name: 'CSS3',        level: 92, icon: '🎨' },
    { name: 'JavaScript',  level: 90, icon: '⚡' },
    { name: 'TypeScript',  level: 80, icon: '🔷' },
    { name: 'React',       level: 88, icon: '⚛️' },
    { name: 'Next.js',     level: 78, icon: '▲' },
    { name: 'Tailwind CSS',level: 93, icon: '💨' },
    { name: 'Node.js',     level: 75, icon: '🟢' },
    { name: 'Express.js',  level: 72, icon: '🚂' },
    { name: 'Python',      level: 68, icon: '🐍' },
  ],
  'Tools & Platforms': [
    { name: 'Git',         level: 88, icon: '🔗' },
    { name: 'GitHub',      level: 88, icon: '🐙' },
    { name: 'MongoDB',     level: 74, icon: '🍃' },
    { name: 'Vercel',      level: 85, icon: '▲' },
    { name: 'WordPress',   level: 78, icon: '📝' },
    { name: 'Bootstrap',   level: 90, icon: '🅱️' },
  ],
  'Design & Content': [
    { name: 'Canva',       level: 95, icon: '🖌️' },
    { name: 'CapCut',      level: 90, icon: '🎬' },
    { name: 'Figma',       level: 72, icon: '✏️' },
    { name: 'Opus Clip',   level: 82, icon: '🎥' },
  ],
  'Marketing & Growth': [
    { name: 'Facebook Ads',      level: 88, icon: '📘' },
    { name: 'LinkedIn Marketing',level: 82, icon: '💼' },
    { name: 'Meta Ads',          level: 85, icon: '🎯' },
    { name: 'Content Strategy',  level: 90, icon: '📝' },
    { name: 'Google AdSense',    level: 75, icon: '🔍' },
    { name: 'Organic Lead Gen',  level: 86, icon: '🌱' },
  ],
};

// ─── Certifications ──────────────────────────────────────────────────────────
export const CERTIFICATIONS = [
  {
    id: 'ai-everyone',
    title: 'AI For Everyone',
    issuer: 'HDS — Hassan Digital School',
    period: 'May 2026 – Jul 2026',
    icon: '🤖',
  },
  {
    id: 'social-media-mktg',
    title: 'Social Media Marketing',
    issuer: 'HDS — Hassan Digital School',
    period: 'Jun 2026 – Jul 2026',
    icon: '📱',
  },
];
