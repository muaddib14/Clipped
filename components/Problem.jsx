import { IconLock, IconWaves, IconGear, IconClock, IconLayers, IconCode, IconPuzzle, IconServerOff, IconGithub, IconTarget } from './Icons';

export function Problem() {
  const problems = [
    {
      num: '01',
      icon: IconLock,
      title: 'Paywalls Lock You Out',
      desc: "Claude can't see behind paywalls. Manual paste is the only workaround.",
    },
    {
      num: '02',
      icon: IconWaves,
      title: 'Messy HTML Confuses Claude',
      desc: 'Ads, nav, comments pollute what you paste. AI gets lost in noise.',
    },
    {
      num: '03',
      icon: IconGear,
      title: 'Sites Are Broken',
      desc: 'Infinite scroll, tracking, pop-ups. Static content hard to extract clean.',
    },
    {
      num: '04',
      icon: IconClock,
      title: '5 Minutes of Friction',
      desc: 'Screenshot, copy, paste, cleanup. Every research session, same tax.',
    },
    {
      num: '05',
      icon: IconTarget,
      title: 'Clips Pile Up, Unsorted',
      desc: "Even when extraction works, files dump flat into Downloads. No project, no context — just a folder full of article.md.",
    },
  ];

  const builtWith = [
    { label: 'Mozilla Readability', icon: IconLayers },
    { label: 'Turndown.js', icon: IconCode },
    { label: 'Manifest V3', icon: IconPuzzle },
    { label: 'Zero Backend', icon: IconServerOff },
    { label: 'Open Source', icon: IconGithub },
  ];

  return (
    <section className="section py-24">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-normal mb-6">The Research Friction</h2>
        <p className="text-lg text-cream/60 font-mono">
          Claude can't read the web. You end up copy-pasting messy HTML every time. Same friction, every research session.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {problems.map((p, i) => {
          const IconComponent = p.icon;
          return (
            <div
              key={i}
              className="relative p-10 rounded-card border border-ash card-hover overflow-hidden"
            >
              <span className="absolute top-6 right-8 font-mono text-4xl text-cream/5 select-none">{p.num}</span>
              <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center mb-5">
                <IconComponent size={20} className="text-primary" />
              </div>
              <h3 className="text-2xl font-normal mb-3 text-cream">{p.title}</h3>
              <p className="text-cream/60 font-mono text-sm leading-relaxed">{p.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Built with — real tech, not fake trust badges */}
      <div className="mt-20 pt-16 border-t border-ash">
        <p className="text-xs font-mono uppercase tracking-wide text-cream/50 mb-6 text-center">Built with</p>
        <div className="marquee-mask">
          <div className="marquee-track">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex gap-16 items-center pr-16">
                {builtWith.map((tech, i) => {
                  const TechIcon = tech.icon;
                  return (
                    <span key={i} className="flex items-center gap-2 text-cream/40 font-mono text-sm uppercase tracking-wide whitespace-nowrap">
                      <TechIcon size={16} />
                      {tech.label}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
