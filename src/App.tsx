import { lazy, Suspense, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Code-split heavy sections
const Experience = lazy(() => import('./components/Experience'));
const Projects   = lazy(() => import('./components/Projects'));
const Skills     = lazy(() => import('./components/Skills'));
const Contact    = lazy(() => import('./components/Contact'));

function SectionSkeleton() {
  return (
    <div className="py-24 px-6 flex justify-center" aria-hidden="true">
      <div className="w-full max-w-4xl space-y-4 animate-pulse">
        <div className="h-6 w-32 bg-navy-800 rounded-full mx-auto" />
        <div className="h-10 w-64 bg-navy-800 rounded-xl mx-auto" />
        <div className="h-48 bg-navy-800 rounded-2xl mt-8" />
      </div>
    </div>
  );
}

// ── Animated 3D Blue Cursor ────────────────────────────────────────────────────
function AnimatedCursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos      = useRef({ x: 0, y: 0 });
  const ring     = useRef({ x: 0, y: 0 });
  const raf      = useRef<number>(0);
  const hovering = useRef(false);

  useEffect(() => {
    const dot   = dotRef.current;
    const outer = ringRef.current;
    const trail = trailRef.current;
    if (!dot || !outer || !trail) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      // Dot follows instantly
      dot.style.left = `${e.clientX}px`;
      dot.style.top  = `${e.clientY}px`;
      trail.style.left = `${e.clientX}px`;
      trail.style.top  = `${e.clientY}px`;
    };

    // Ring lags behind with lerp
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      outer.style.left = `${ring.current.x}px`;
      outer.style.top  = `${ring.current.y}px`;
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    // Scale up ring on interactive elements
    const onEnter = () => {
      hovering.current = true;
      outer.style.width  = '56px';
      outer.style.height = '56px';
      outer.style.borderColor = 'rgba(6,182,212,0.8)';
      outer.style.boxShadow = '0 0 20px rgba(6,182,212,0.4), 0 0 40px rgba(6,182,212,0.15)';
      dot.style.transform = 'translate(-50%,-50%) scale(2.2)';
      dot.style.background = '#06B6D4';
    };
    const onLeave = () => {
      hovering.current = false;
      outer.style.width  = '40px';
      outer.style.height = '40px';
      outer.style.borderColor = 'rgba(37,99,235,0.65)';
      outer.style.boxShadow = '0 0 14px rgba(37,99,235,0.35), 0 0 28px rgba(37,99,235,0.12)';
      dot.style.transform = 'translate(-50%,-50%) scale(1)';
      dot.style.background = '#2563EB';
    };

    const interactables = document.querySelectorAll('a, button, [role="button"], input, textarea, select, label');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer ring — lags behind with lerp */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1.5px solid rgba(37,99,235,0.65)',
          boxShadow: '0 0 14px rgba(37,99,235,0.35), 0 0 28px rgba(37,99,235,0.12), inset 0 0 10px rgba(37,99,235,0.08)',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%,-50%)',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
          background: 'radial-gradient(circle at center, rgba(37,99,235,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Center dot — instant follow */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#2563EB',
          boxShadow: '0 0 8px rgba(37,99,235,0.9), 0 0 16px rgba(37,99,235,0.5)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%,-50%)',
          transition: 'transform 0.15s ease, background 0.15s ease',
        }}
      />

      {/* Faint trailing glow dot */}
      <div
        ref={trailRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9997,
          transform: 'translate(-50%,-50%)',
          transition: 'left 0.04s linear, top 0.04s linear',
          filter: 'blur(2px)',
        }}
      />
    </>
  );
}

export default function App() {
  return (
    <>
      {/* Skip to main for keyboard users */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold-500 focus:text-navy-900 focus:font-bold focus:rounded-lg focus:shadow-gold"
      >
        Skip to main content
      </a>

      <div className="noise-overlay" aria-hidden="true" />

      {/* Animated 3D blue cursor — hidden on touch devices via CSS */}
      <AnimatedCursor />

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
