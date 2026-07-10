import { useState } from 'react';

const faqs = [
  {
    q: 'How do I install it? It\'s not on the Chrome Web Store yet.',
    a: 'Download the zip from the GitHub releases page, unzip it, open chrome://extensions, enable Developer Mode (top right), then click "Load unpacked" and select the unzipped folder. Pin the Clipped icon to your toolbar, open any article, and click it to extract. Works on Chrome, Brave, Edge, and other Chromium browsers — not Firefox or Safari.',
  },
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
  {
    q: 'Can I organize clips by project or topic?',
    a: 'Yes. When saving a clip, tag it to a project — Clipped groups the file into that project\'s folder instead of dumping everything flat into Downloads. Open the built-in Library to browse, search, and re-copy any past clip by folder.',
  },
  {
    q: 'Why is the extension icon greyed out on some pages?',
    a: 'Clipped checks if a page actually looks like an article before letting you extract. Search results, dashboards, and social media feeds get skipped automatically — this avoids confusing errors on pages with nothing to clip.',
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
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-60 mt-4' : 'max-h-0'}`}
      >
        <p className="text-cream/60 font-mono text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="section py-24">
      <h2 className="text-4xl md:text-5xl font-normal mb-16">Questions</h2>
      <div className="max-w-3xl">
        {faqs.map((f, i) => (
          <FAQItem key={i} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  );
}
