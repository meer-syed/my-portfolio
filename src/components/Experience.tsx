import { useReveal } from '../hooks';
import { EXPERIENCE } from '../data';

export default function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="experience-heading"
      className={`py-24 px-6 bg-navy-950 reveal ${visible ? 'visible' : ''}`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold-400 font-mono text-sm tracking-widest uppercase mb-3">Career Path</p>
          <h2 id="experience-heading" className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Experience
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" aria-hidden="true" />
        </div>

        {/* Timeline */}
        <ol className="relative" aria-label="Work experience timeline">
          {EXPERIENCE.map((job, idx) => (
            <li
              key={job.id}
              className="relative pl-14 pb-12 last:pb-0"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Vertical connector */}
              {idx < EXPERIENCE.length - 1 && (
                <div className="timeline-connector" aria-hidden="true" />
              )}

              {/* Timeline dot */}
              <div
                className="absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center text-lg bg-navy-800 border-2 border-gold-500/40 shadow-gold z-10"
                aria-hidden="true"
              >
                {job.icon}
              </div>

              {/* Card */}
              <article className="glass rounded-2xl p-6 hover:border-gold-500/25 transition-all duration-300 hover:shadow-card-hover group">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-white group-hover:text-gold-400 transition-colors">
                      {job.role}
                    </h3>
                    <p className="text-slate-400 text-sm mt-0.5">{job.company}</p>
                  </div>
                  <time
                    className="flex-shrink-0 text-xs font-mono font-medium px-3 py-1.5 bg-gold-500/10 text-gold-400 border border-gold-500/20 rounded-full"
                    dateTime={job.period}
                  >
                    {job.period}
                  </time>
                </div>

                {/* Highlights */}
                <ul className="space-y-2" aria-label={`Key achievements at ${job.company}`}>
                  {job.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm">
                      <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
