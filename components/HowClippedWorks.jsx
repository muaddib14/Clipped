import { IconDocument, IconTarget, IconSparkles } from './Icons';
import { FlowDiagram } from './FlowDiagram';

function ExtractDiagram() {
  return (
    <div className="flex items-center gap-3 font-mono text-xs">
      <div className="px-3 py-2 rounded-pill border border-ash bg-dark">medium.com/article</div>
      <span className="text-primary">→</span>
      <div className="px-3 py-2 rounded-pill border border-primary text-primary">Readability.js</div>
      <span className="text-primary">→</span>
      <div className="px-3 py-2 rounded-pill border border-orange text-orange">.md</div>
    </div>
  );
}

function CleanupDiagram() {
  const rows = [
    { label: 'nav, ads, comments', status: 'stripped', color: 'text-cream/30 line-through' },
    { label: 'title, byline, source', status: 'kept', color: 'text-primary' },
    { label: 'body paragraphs', status: 'kept', color: 'text-primary' },
  ];
  return (
    <div className="space-y-2 font-mono text-xs">
      {rows.map((r, i) => (
        <div key={i} className="flex items-center justify-between px-4 py-2 rounded-pill border border-ash">
          <span className={r.color}>{r.label}</span>
          <span className="text-cream/40 uppercase text-[10px] tracking-wide">{r.status}</span>
        </div>
      ))}
    </div>
  );
}

function DeliveryDiagram() {
  return (
    <div className="flex items-center gap-3 font-mono text-xs flex-wrap">
      <div className="px-3 py-2 rounded-pill border border-primary text-primary">Clipboard</div>
      <span className="text-cream/40">or</span>
      <div className="px-3 py-2 rounded-pill border border-orange text-orange">article.md</div>
      <span className="text-primary">→</span>
      <div className="px-3 py-2 rounded-pill border border-ash">Claude chat</div>
    </div>
  );
}

export function HowClippedWorks() {
  const blocks = [
    {
      icon: IconDocument,
      title: 'One-Click Extraction',
      desc: 'Open any article, click the toolbar icon. No custom parsers, no manual copy-paste, no browser dev tools.',
      diagram: <ExtractDiagram />,
    },
    {
      icon: IconTarget,
      title: 'Noise Stripped Locally',
      desc: 'Readability.js kills nav, ads, and comments before they cost you context window — keeping only what actually matters.',
      diagram: <CleanupDiagram />,
    },
    {
      icon: IconSparkles,
      title: 'Delivered Your Way',
      desc: 'Copy straight to clipboard for instant paste, or download as .md — routed however your workflow needs it.',
      diagram: <DeliveryDiagram />,
    },
  ];

  return (
    <section id="how-it-works" className="section py-24">
      <h2 className="text-4xl md:text-5xl font-normal mb-4">How Clipped Works</h2>
      <p className="text-lg text-cream/60 font-mono max-w-2xl mb-8">
        Clipped extracts, filters, and routes page content — cutting the noise so only clean text reaches Claude.
      </p>

      <div className="rounded-card border border-ash mb-12">
        <FlowDiagram />
      </div>

      <div className="space-y-6">
        {blocks.map((b, i) => {
          const IconComponent = b.icon;
          return (
            <div key={i} className="grid md:grid-cols-2 gap-8 rounded-card border border-ash p-10 card-hover">
              <div>
                <div className="text-primary mb-4 w-6 h-6">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-2xl font-normal mb-3">{b.title}</h3>
                <p className="text-cream/60 font-mono text-sm leading-relaxed">{b.desc}</p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                {b.diagram}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
