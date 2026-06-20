import { Logo } from './Logo';
import { IconLock, IconShield, IconCode } from './Icons';
import { ProductPreview } from './ProductPreview';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-dark">
      <div className="relative z-10 section min-h-screen flex flex-col items-center justify-center text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-block p-3 rounded-card border border-primary animate-pulse-slow">
            <Logo size="lg" />
          </div>
        </div>

        {/* Version badge */}
        <span className="mb-4 px-3 py-1 rounded-pill border border-orange text-orange text-[10px] font-mono uppercase tracking-wide">
          v0.0.1 — Early Access
        </span>

        {/* Audience tag */}
        <p className="text-xs font-mono uppercase tracking-wider text-primary mb-6">For AI Researchers, Writers & Knowledge Workers</p>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-normal mb-6 leading-tight tracking-tight max-w-5xl">
          Your browser reads it.
          <br />
          Now Claude does too.
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-cream/60 max-w-2xl mb-12 font-mono leading-relaxed">
          Paste any article into Claude in seconds. No copy-paste cleanup. Works on paywalls, ads, messy HTML.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap justify-center mb-4">
          <a
            href="https://github.com/muaddib14/clipped-extension/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-pill bg-primary text-dark font-mono text-sm uppercase tracking-wide hover:bg-primary/90 transition-transform duration-200 hover:scale-105"
          >
            Install Free ↗
          </a>
          <a
            href="#demo"
            className="px-8 py-4 rounded-pill border border-cream/40 text-cream font-mono text-sm uppercase tracking-wide hover:border-primary hover:text-primary transition-colors duration-200"
          >
            See Demo
          </a>
        </div>

        <p className="text-xs font-mono text-cream/50 mb-16">
          Not on Chrome Web Store yet — <a href="#faq" className="text-primary hover:underline">see install steps ↓</a>
        </p>

        {/* Trust signals */}
        <div className="flex flex-wrap gap-3 justify-center text-xs font-mono uppercase tracking-wide text-cream/60">
          <div className="flex items-center gap-2 px-4 py-2 rounded-pill border border-ash card-hover animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <IconLock size={14} className="text-primary" />
            <span>100% Local</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-pill border border-ash card-hover animate-fade-in" style={{ animationDelay: '0.25s' }}>
            <IconShield size={14} className="text-primary" />
            <span>No Tracking</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-pill border border-ash card-hover animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <IconCode size={14} className="text-primary" />
            <span>Open Source</span>
          </div>
        </div>

        {/* Product preview */}
        <div id="demo" className="mt-16 w-full">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}
