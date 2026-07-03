import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data';
import { useActiveSection } from '../hooks';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(['about', 'experience', 'projects', 'skills', 'contact']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-navy-950/90 backdrop-blur-md border-b border-gold-500/10 shadow-navy'
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); handleNav('#about'); }}
          className="font-display font-bold text-xl tracking-tight group focus-visible:outline-gold-400"
          aria-label="Meer Kalal Arshad - home"
        >
          <span className="text-white">Meer</span>
          <span className="text-gradient">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNav(href); }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus-visible:outline-gold-400 ${
                    isActive
                      ? 'text-gold-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gold-500/10 rounded-lg" aria-hidden="true" />
                  )}
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-sm rounded-lg transition-all duration-200 hover:shadow-gold focus-visible:outline-gold-400"
          aria-label="Hire Meer — go to contact section"
        >
          Hire Me
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!menuOpen}
      >
        <div className="bg-navy-950/95 backdrop-blur-md border-t border-gold-500/10 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => { e.preventDefault(); handleNav(href); }}
              className="px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
              tabIndex={menuOpen ? 0 : -1}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
            className="mt-2 px-4 py-3 bg-gold-500 text-navy-900 font-semibold rounded-lg text-center"
            tabIndex={menuOpen ? 0 : -1}
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
