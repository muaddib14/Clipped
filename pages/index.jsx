import Head from 'next/head';
import { Logo } from '../components/Logo';
import { Hero } from '../components/Hero';
import { DeclutterDemo } from '../components/DeclutterDemo';
import { Solution } from '../components/Solution';
import { HowClippedWorks } from '../components/HowClippedWorks';
import { MCPSection } from '../components/MCPSection';
import { Library } from '../components/Library';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { ThemeToggle } from '../components/ThemeToggle';
import { Reveal } from '../components/Reveal';

export default function Home() {
  return (
    <>
      <Head>
        <title>Clipped — Your Browser Reads It. Now Let Your AI Read It Too.</title>
        <meta name="description" content="Extract any article to markdown, organize clips into projects, and drop them into Claude in seconds. 100% local, no tracking." />
        <meta name="theme-color" content="#7c71e8" />
      </Head>

      <nav className="sticky top-0 z-50 bg-dark border-b border-ash">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <span className="font-mono text-sm uppercase tracking-wide">Clipped</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="https://github.com/muaddib14/clipped-extension/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-pill bg-primary text-dark font-mono text-xs uppercase tracking-wide hover:bg-primary/90 transition-transform duration-200 hover:scale-105"
            >
              Install ↗
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <Reveal><DeclutterDemo /></Reveal>
      <Reveal><Solution /></Reveal>
      <Reveal><HowClippedWorks /></Reveal>
      <Reveal><MCPSection /></Reveal>
      <Reveal><Library /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><CTA /></Reveal>
      <Footer />
    </>
  );
}
