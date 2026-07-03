export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-navy-950 border-t border-white/5 py-10 px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <p className="font-display font-bold text-lg text-white">
            Meer Kalal <span className="text-gradient">Arshad</span>
          </p>
          <p className="text-slate-500 text-sm mt-1">Full-Stack Developer & Digital Marketing Specialist</p>
        </div>

        {/* Links */}
        <nav aria-label="Footer navigation" className="flex items-center gap-6">
          {[
            { href: 'mailto:imeersyed143@gmail.com', label: 'Email Meer', icon: '✉' },
            { href: 'https://github.com/meer-syed', label: 'GitHub profile (opens in new tab)', icon: (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            ) },
          ].map(({ href, label, icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-slate-400 hover:text-gold-400 transition-colors focus-visible:outline-gold-400 rounded"
              aria-label={label}
            >
              {typeof icon === 'string' ? <span className="text-lg">{icon}</span> : icon}
            </a>
          ))}
        </nav>

        {/* Back to top */}
        <button
          type="button"
          onClick={scrollTop}
          className="flex items-center gap-2 text-slate-500 hover:text-gold-400 transition-colors text-sm focus-visible:outline-gold-400 rounded"
          aria-label="Scroll back to top"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          Back to top
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-slate-600 text-xs">
        © {year} Meer Kalal Arshad. Built with React, TypeScript & Tailwind CSS.
      </div>
    </footer>
  );
}
