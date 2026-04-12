import { useState } from 'react';

const faqs = [
  {
    q: 'Does Clipped work on paywalled articles?',
    a: 'Clipped extracts whatever is already rendered in your browser. If you can read the article (logged in, subscribed, or free), Clipped can extract it. It cannot bypass a paywall you have not already unlocked.',
  },
  {
    q: 'Is my data sent to any server?',
    a: 'No. Extraction runs entirely in your browser using Mozilla Readability and Turndown — the same engine behind Firefox Reader Mode. Nothing is uploaded, logged, or tracked.',
  },
  {
    q: 'What happens on JavaScript-heavy or infinite-scroll pages?',
    a: 'Clipped reads the DOM as currently rendered. Content already loaded when you click extracts cleanly; content that only loads on further scroll will not be included.',
  },
  {
    q: 'Do I need an account to use Clipped?',
    a: 'No signup, no login, no account. Install the extension and it works immediately.',
  },
  {
    q: 'Is Clipped free?',
    a: 'Yes, free forever for the core extraction features — copy to clipboard, download as markdown. No trial, no credit card.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ash py-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <span className="text-xl md:text-2xl font-normal">{q}</span>
        <span
          className={`text-primary text-xl flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          ↓
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 mt-4' : 'max-h-0'}`}
      >
        <p className="text-cream/60 font-mono text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="section py-24">
      <h2 className="text-4xl md:text-5xl font-normal mb-16">Questions</h2>
      <div className="max-w-3xl">
        {faqs.map((f, i) => (
          <FAQItem key={i} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  );
}
