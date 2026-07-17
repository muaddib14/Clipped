import { Logo } from './Logo';

export function Solution() {
  const features = [
    'Paste articles into Claude instantly',
    'Works on everything: paywalls, ads, poor HTML',
    'No cleanup. No manual formatting.',
    'Organize clips into projects — group research by topic',
    'Built-in library — search, browse, and re-copy past clips',
    'Highlight text to clip just a selection, not the whole page',
    'Tag clips and filter your library by topic',
    'Let Claude read your library directly via MCP — no copy-paste',
    '100% local — nothing leaves your browser',
  ];

  return (
    <section className="section py-24">
      <div className="max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-normal mb-4 text-center">One Click. No Cleanup.</h2>
        <p className="text-lg text-cream/60 font-mono text-center max-w-2xl mx-auto mb-16">
          Clipped runs locally. Strips ads, nav, comments. Delivers clean markdown ready for Claude.
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Features */}
          <div className="space-y-1">
            {features.map((item, i) => (
              <div key={i} className="flex gap-4 items-start py-4 border-b border-ash">
                <span className="text-primary font-mono text-sm mt-0.5">→</span>
                <span className="text-cream font-mono text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* Visual: markdown file preview */}
          <div className="rounded-card border border-ash overflow-hidden card-hover">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-ash">
              <Logo size="sm" />
              <span className="font-mono text-xs text-cream/50">
                <span className="text-primary">Essays/</span>how-to-do-great-work.md
              </span>
            </div>
            <div className="p-6 font-mono text-xs leading-relaxed">
              <p className="text-cream font-semibold"># How to Do Great Work</p>
              <p className="text-cream/40 mb-3">Source: paulgraham.com/greatwork.html</p>
              <p className="text-cream/70">The first step is to decide what to</p>
              <p className="text-cream/70">work on. The work you choose needs</p>
              <p className="text-cream/70">to have three qualities: a natural</p>
              <p className="text-cream/70">aptitude, a deep interest, and</p>
              <p className="text-cream/70">scope to do great work.</p>
            </div>
            <div className="flex gap-2 px-5 pb-5">
              <span className="px-3 py-1 rounded-pill border border-primary text-primary text-[10px] font-mono uppercase">Extracted</span>
              <span className="px-3 py-1 rounded-pill border border-ash text-cream/50 text-[10px] font-mono uppercase">2.1kb</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
