// ─── Data ─────────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
] as const;

export const EXPERIENCE = [
  {
    id: 'qj-tax',
    role: 'Managing Director & Digital Marketing Consultant',
    company: 'QJ Tax & Legal',
    period: '2025 – Present',
    icon: '⚖️',
    color: 'from-gold-400 to-gold-600',
    highlights: [
      'Spearheading brand strategy and digital identity for a professional tax & legal firm',
      'Designing and executing tax-season marketing campaigns with measurable lead generation',
      'Building automated lead-funnel systems combining SEO, social ads, and email nurturing',
      'Overseeing all digital touchpoints — website, social channels, and client communications',
    ],
  },
  {
    id: 'iptv',
    role: 'IPTV Business Development',
    company: 'Independent Venture',
    period: '2025 – Present',
    icon: '📡',
    color: 'from-blue-400 to-indigo-500',
    highlights: [
      'Built global reseller network from ground up, managing customer acquisition across 5+ markets',
      'Developed pricing strategy, onboarding flows, and retention programs',
      'Leveraged WhatsApp, Telegram & targeted ads for cost-efficient customer acquisition',
    ],
  },
  {
    id: 'freelance',
    role: 'Freelance Digital Marketing & Social Media Manager',
    company: 'Various Clients',
    period: '2024',
    icon: '📱',
    color: 'from-emerald-400 to-teal-500',
    highlights: [
      'Managed multi-platform organic growth strategies achieving consistent follower growth',
      'Leveraged AI-assisted content creation pipelines (ChatGPT, Canva AI) for scale',
      'Produced short-form video content (Reels, Shorts, TikTok) with strong engagement metrics',
    ],
  },
];

export const PROJECTS = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    description: 'A production-grade portfolio with dark glassmorphic design, smooth animations, TypeScript safety, and perfect Lighthouse scores. Built from scratch with a custom design system.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    icon: '🌐',
    color: 'from-navy-700 to-navy-800',
    accent: '#D4A017',
    github: 'https://github.com/meer-syed',
    demo: '#',
    status: 'Live',
  },
  {
    id: 'resume-analyzer',
    title: 'AI-Powered Resume Analyzer',
    description: 'Final year project — an intelligent resume parsing and scoring system using NLP to match resumes against job descriptions, provide actionable feedback, and rank candidates.',
    tags: ['Python', 'NLP', 'React', 'FastAPI', 'OpenAI'],
    icon: '🤖',
    color: 'from-purple-900 to-indigo-900',
    accent: '#8B5CF6',
    github: 'https://github.com/meer-syed',
    demo: '#',
    status: 'In Progress',
  },
  {
    id: 'student-notes',
    title: 'Student Notes App',
    description: 'A full-stack note-taking application for students with rich-text editing, subject tagging, collaborative sharing, and a clean minimal interface designed for focus.',
    tags: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    icon: '📚',
    color: 'from-teal-900 to-cyan-900',
    accent: '#14B8A6',
    github: 'https://github.com/meer-syed',
    demo: '#',
    status: 'Built',
  },
  {
    id: 'football-channel',
    title: 'Football YouTube Shorts Channel',
    description: 'Content creation and video editing showcase — producing viral-format football highlight Shorts with AI-assisted scripting, dynamic captions, and trend-driven packaging.',
    tags: ['CapCut', 'Content Strategy', 'YouTube', 'AI Scripting'],
    icon: '⚽',
    color: 'from-green-900 to-emerald-900',
    accent: '#22C55E',
    github: '',
    demo: 'https://youtube.com',
    status: 'Ongoing',
  },
];

export const SKILLS = {
  'Languages & Frameworks': [
    { name: 'HTML5',      level: 95, icon: '🌐' },
    { name: 'CSS3',       level: 92, icon: '🎨' },
    { name: 'JavaScript', level: 90, icon: '⚡' },
    { name: 'TypeScript', level: 82, icon: '🔷' },
    { name: 'React',      level: 88, icon: '⚛️' },
    { name: 'Next.js',    level: 78, icon: '▲' },
    { name: 'Tailwind',   level: 93, icon: '💨' },
    { name: 'Node.js',    level: 72, icon: '🟢' },
  ],
  'Design & Tools': [
    { name: 'Canva',      level: 95, icon: '🖌️' },
    { name: 'CapCut',     level: 88, icon: '🎬' },
    { name: 'Figma',      level: 70, icon: '✏️' },
    { name: 'Git',        level: 85, icon: '🔗' },
  ],
  'Marketing & Growth': [
    { name: 'Facebook Ads',   level: 88, icon: '📘' },
    { name: 'LinkedIn Mktg', level: 82, icon: '💼' },
    { name: 'SEO',            level: 80, icon: '🔍' },
    { name: 'Content Strategy', level: 90, icon: '📝' },
    { name: 'Lead Generation',  level: 85, icon: '🎯' },
    { name: 'AI Content',       level: 88, icon: '🤖' },
  ],
};
