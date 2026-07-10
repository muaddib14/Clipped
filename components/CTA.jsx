export function CTA() {
  return (
    <section className="section pt-24 pb-12">
      <div className="max-w-3xl mx-auto">
        {/* Main CTA */}
        <div className="rounded-card p-12 md:p-16 border border-ash text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            Research faster. No friction.
          </h2>
          <p className="text-lg text-cream/70 font-mono mb-8 leading-relaxed">
            Clipped is free. Forever. Install now, extract articles in seconds, organize them into projects, and paste into Claude instantly.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="https://github.com/muaddib14/clipped-extension/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-pill bg-primary text-dark font-mono text-sm uppercase tracking-wide hover:bg-primary/90 transition"
            >
              Install Free ↗
            </a>
            <a
              href="#how-it-works"
              className="inline-block px-10 py-4 rounded-pill border border-cream/40 text-cream font-mono text-sm uppercase tracking-wide hover:border-cream/70 transition"
            >
              See How It Works
            </a>
          </div>

          <p className="text-xs font-mono uppercase tracking-wide text-cream/50">
            No signup. No tracking. Works offline.
          </p>
          <p className="text-xs font-mono text-cream/50 mt-2">
            Not on Chrome Web Store yet — <a href="#faq" className="text-primary hover:underline normal-case">see install steps</a>
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { num: '100%', label: 'Local' },
            { num: 'Free', label: 'Forever' },
            { num: '0', label: 'Tracking' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-card border border-ash card-hover">
              <div className="text-2xl font-normal text-primary mb-2">{stat.num}</div>
              <div className="text-cream/70 font-mono text-xs uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
