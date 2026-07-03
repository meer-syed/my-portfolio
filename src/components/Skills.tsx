import { useReveal, useCountUp } from '../hooks';
import { SKILLS } from '../data';

interface SkillBarProps {
  name: string;
  level: number;
  icon: string;
  animate: boolean;
  delay?: number;
}

function SkillBar({ name, level, icon, animate, delay = 0 }: SkillBarProps) {
  const count = useCountUp(level, 900, animate);

  return (
    <div
      className="group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-base" aria-hidden="true">{icon}</span>
          <span className="text-sm font-medium text-white">{name}</span>
        </div>
        <span
          className="text-xs font-mono text-gold-400 tabular-nums"
          aria-label={`${name} proficiency: ${level} percent`}
        >
          {animate ? count : 0}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full bg-navy-800 overflow-hidden"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} skill level`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-400 transition-all duration-1000 ease-out"
          style={{ width: animate ? `${level}%` : '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="skills-heading"
      className={`py-24 px-6 bg-navy-950 reveal ${visible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-400 font-mono text-sm tracking-widest uppercase mb-3">Tech & Expertise</p>
          <h2 id="skills-heading" className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Skills Matrix
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" aria-hidden="true" />
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([category, skills], catIdx) => (
            <div
              key={category}
              className="glass rounded-2xl p-6"
              style={{ transitionDelay: `${catIdx * 150}ms` }}
            >
              <h3 className="font-display font-semibold text-lg text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-gradient-to-b from-gold-400 to-gold-600 inline-block" aria-hidden="true" />
                {category}
              </h3>
              <div className="space-y-5">
                {skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    animate={visible}
                    delay={catIdx * 150 + i * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech logo chips */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm mb-6">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GitHub Actions', 'Vercel', 'Firebase', 'ChatGPT API'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm rounded-full border border-white/10 bg-white/5 text-slate-300 hover:border-gold-500/30 hover:text-white transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
