import { useState, useEffect, useRef } from 'react';
import profilePic from '../assets/profile.jpg';

// ── Tech marquee data ──────────────────────────────────────────────────────────
const TECH_ROW_1 = [
  { icon: '🌐', label: 'HTML5' },
  { icon: '🎨', label: 'CSS3' },
  { icon: '⚡', label: 'JavaScript' },
  { icon: '🔷', label: 'TypeScript' },
  { icon: '⚛️',  label: 'React.js' },
  { icon: '▲',  label: 'Next.js' },
  { icon: '💨', label: 'Tailwind CSS' },
  { icon: '🟢', label: 'Node.js' },
  { icon: '🚂', label: 'Express.js' },
  { icon: '🍃', label: 'MongoDB' },
  { icon: '🔥', label: 'Firebase' },
];

const TECH_ROW_2 = [
  { icon: '🔗', label: 'Git' },
  { icon: '🐙', label: 'GitHub' },
  { icon: '🅱️', label: 'Bootstrap' },
  { icon: '🖌️', label: 'Canva' },
  { icon: '✏️', label: 'Figma' },
  { icon: '📘', label: 'Meta Ads' },
  { icon: '🔍', label: 'SEO' },
  { icon: '📱', label: 'Social Media' },
  { icon: '💡', label: 'UI Design' },
  { icon: '📝', label: 'Content Strategy' },
  { icon: '🎯', label: 'Lead Generation' },
];

// Duplicate for seamless infinite loop
const ROW1 = [...TECH_ROW_1, ...TECH_ROW_1];
const ROW2 = [...TECH_ROW_2, ...TECH_ROW_2];

const ROLES = [
  'Full-Stack Developer',
  'Digital Marketing Specialist',
  'Brand Growth Strategist',
  'CS Student & Entrepreneur',
];

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      const next = isDeleting
        ? currentWord.slice(0, displayText.length - 1)
        : currentWord.slice(0, displayText.length + 1);
      timeout = setTimeout(() => setDisplayText(next), isDeleting ? deletingSpeed : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}

export default function Hero() {
  const typedText = useTypingEffect(ROLES);
  const [loaded, setLoaded] = useState(false);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      aria-label="Hero — About Meer Kalal Arshad"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950"
    >
      {/* Background layers */}
      <div className="absolute inset-0 hero-pattern opacity-40" aria-hidden="true" />
      <div className="orb w-[600px] h-[600px] bg-gold-500 top-[-10%] right-[-10%]" aria-hidden="true" />
      <div className="orb w-[400px] h-[400px] bg-blue-600 bottom-[-5%] left-[-5%]" aria-hidden="true" />

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(245,200,66,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,200,66,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-40 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text content */}
        <div className={`flex-1 text-center lg:text-left transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" aria-hidden="true" />
            Available for freelance & consulting
          </div>

          {/* Name */}
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-4">
            Meer Kalal
            <span className="block text-gradient">Arshad</span>
          </h1>

          {/* Typing role */}
          <div
            className="font-display text-xl sm:text-2xl text-slate-300 mb-6 min-h-[2rem]"
            aria-label={`Role: ${typedText}`}
            aria-live="polite"
          >
            <span className="typing-cursor">{typedText}</span>
          </div>

          {/* Summary */}
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            CS undergraduate (7th semester) at GCU Faisalabad with hands-on experience in{' '}
            <span className="text-gold-400 font-semibold">full-stack development</span> and{' '}
            <span className="text-gold-400 font-semibold">digital marketing</span>.
            Currently interning at <span className="text-white font-medium">Decode Labs</span> and
            managing brand growth for <span className="text-white font-medium">QJ Tax & Legal</span>.
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center lg:justify-start gap-8 mb-10">
            {[
              { value: '2+', label: 'Years Experience' },
              { value: '10+', label: 'Projects Built' },
              { value: '3+', label: 'Brands Managed' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-2xl font-bold text-gold-400">{value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="/resume.pdf"
              download="Meer_Kalal_Arshad_Resume.pdf"
              className="group btn-shimmer inline-flex items-center gap-2 px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold rounded-xl transition-all duration-200 hover:shadow-gold hover:-translate-y-0.5 focus-visible:outline-gold-400"
              aria-label="Download Meer's Resume PDF"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
              <span className="ml-1 inline-block transition-transform group-hover:translate-y-0.5" aria-hidden="true">↓</span>
            </a>
            <a
              href="https://wa.me/923167842387"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-gold-500/30 hover:border-gold-500/60 text-white font-semibold rounded-xl transition-all duration-200 hover:bg-gold-500/5 focus-visible:outline-gold-400"
              aria-label="Hire Meer via WhatsApp"
            >
              Hire Me
            </a>
            <button
              type="button"
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 hover:border-white/30 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:bg-white/5 focus-visible:outline-gold-400"
              aria-label="View my projects"
            >
              View Projects
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
            <a
              href="https://github.com/meer-syed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group focus-visible:outline-gold-400 rounded"
              aria-label="GitHub profile (opens in new tab)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span className="group-hover:underline">GitHub</span>
            </a>
            <span className="w-px h-4 bg-slate-700" aria-hidden="true" />
            <a
              href="https://linkedin.com/in/meer-kalal-arshad-62519a392"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group focus-visible:outline-gold-400 rounded"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="group-hover:underline">LinkedIn</span>
            </a>
            <span className="w-px h-4 bg-slate-700" aria-hidden="true" />
            <a
              href="mailto:imeersyed143@gmail.com"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group focus-visible:outline-gold-400 rounded"
              aria-label="Send email to Meer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="group-hover:underline">Email Me</span>
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div
          className={`flex-shrink-0 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          aria-hidden="true"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-gold-500/20 animate-float" />
            {/* Middle ring */}
            <div className="absolute inset-4 rounded-full border border-gold-500/10" />
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-gold-500/20 to-transparent" />
            {/* Image */}
            <div className="absolute inset-6 rounded-full overflow-hidden ring-2 ring-gold-500/40 ring-offset-4 ring-offset-navy-950 shadow-gold-lg">
              <img
                src={profilePic}
                alt="Meer Kalal Arshad — Full-Stack Developer and Digital Marketing Specialist, Faisalabad"
                className="w-full h-full object-cover object-top"
                loading="eager"
                fetchPriority="high"
                width={384}
                height={384}
              />
            </div>
            {/* Status badge */}
            <div className="absolute bottom-8 -right-4 glass px-3 py-2 rounded-xl flex items-center gap-2 shadow-card animate-float" style={{ animationDelay: '1s' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-white">Open to Work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500" aria-hidden="true">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
      </div>

      {/* ── Tech Language Marquee ────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 pb-6 z-10" aria-hidden="true">
        {/* Row 1 — moves left */}
        <div className="marquee-wrapper mb-3">
          <div className="marquee-track" ref={track1Ref}>
            {ROW1.map((tech, i) => (
              <span key={i} className="marquee-item">
                <span className="tech-icon">{tech.icon}</span>
                {tech.label}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — moves right (reverse) */}
        <div className="marquee-wrapper">
          <div className="marquee-track-reverse" ref={track2Ref}>
            {ROW2.map((tech, i) => (
              <span key={i} className="marquee-item">
                <span className="tech-icon">{tech.icon}</span>
                {tech.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
