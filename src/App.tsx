import { lazy, Suspense } from 'react';
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
