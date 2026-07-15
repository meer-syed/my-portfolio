import { useReveal } from '../hooks';
import { PROJECTS } from '../data';

export default function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="projects-heading"
      className={`py-24 px-6 bg-gradient-to-b from-navy-950 to-navy-900 reveal ${visible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold-400 font-mono text-sm tracking-widest uppercase mb-3">What I've Built</p>
          <h2 id="projects-heading" className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Projects
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" aria-hidden="true" />
          <p className="mt-6 text-slate-400 max-w-xl mx-auto">
            A selection of side projects, products, and experiments that showcase my range across engineering and content creation.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          role="list"
          aria-label="Projects portfolio"
        >
          {PROJECTS.map((project, idx) => (
            <article
              key={project.id}
              role="listitem"
              className="glass rounded-2xl overflow-hidden group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${idx * 100}ms` }}
              aria-label={project.title}
            >
              {/* Card header — show screenshot for travel booking, gradient for others */}
              {project.id === 'travel-booking' ? (
                <div className="relative h-44 overflow-hidden">
                  <img
                    src="/assets/travel-booking.png"
                    alt="TravelGo — Travel Booking Website screenshot"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      // fallback to gradient if image not found
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      (e.currentTarget.parentElement as HTMLElement).classList.add('bg-gradient-to-br', 'from-blue-900', 'to-indigo-900');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/90 text-white border border-emerald-400/30">
                      {project.status}
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-4 text-3xl" aria-hidden="true">{project.icon}</span>
                </div>
              ) : (
                <div className={`bg-gradient-to-br ${project.color} p-6 flex items-start justify-between`}>
                  <span className="text-4xl" aria-hidden="true">{project.icon}</span>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-black/30 text-white border border-white/20"
                    aria-label={`Status: ${project.status}`}
                  >
                    {project.status}
                  </span>
                </div>
              )}

              {/* Card body */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-gold-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      role="listitem"
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-navy-900/60 text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors group/link focus-visible:outline-gold-400 rounded"
                      aria-label={`${project.title} source code on GitHub (opens in new tab)`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span className="group-hover/link:underline">Source</span>
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors group/link focus-visible:outline-gold-400 rounded"
                      aria-label={`${project.title} live demo (opens in new tab)`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="group-hover/link:underline">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
