import { useEffect, useRef } from 'react';

export function DeclutterDemo() {
  const stageRef = useRef(null);
  const messyRef = useRef(null);
  const cleanRef = useRef(null);
  const badgeRef = useRef(null);
  const replayBtnRef = useRef(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    async function wait(ms) {
      return new Promise((res) => setTimeout(res, ms));
    }

    async function play() {
      // Reset
      if (messyRef.current) {
        const noiseBlocks = messyRef.current.querySelectorAll('[data-noise]');
        noiseBlocks.forEach((el) => {
          el.classList.remove('gone', 'strike-show');
          el.style.display = '';
        });
      }

      if (cleanRef.current) {
        const mdLines = cleanRef.current.querySelectorAll('[data-md]');
        mdLines.forEach((el) => el.classList.remove('shown'));
      }

      if (badgeRef.current) badgeRef.current.classList.remove('show');

      if (prefersReduced) {
        // Skip to end state
        if (messyRef.current) {
          const noiseBlocks = messyRef.current.querySelectorAll('[data-noise]');
          noiseBlocks.forEach((el) => {
            el.classList.add('gone');
            el.style.display = 'none';
          });
        }
        if (cleanRef.current) {
          const mdLines = cleanRef.current.querySelectorAll('[data-md]');
          mdLines.forEach((el) => el.classList.add('shown'));
        }
        if (badgeRef.current) badgeRef.current.classList.add('show');
        return;
      }

      await wait(400);

      // Strike and remove noise blocks
      if (messyRef.current) {
        const noiseBlocks = Array.from(messyRef.current.querySelectorAll('[data-noise]'));
        for (const el of noiseBlocks) {
          el.classList.add('strike-show');
          await wait(350);
          el.classList.add('gone');
          await wait(500);
          el.style.display = 'none';
        }
      }

      await wait(200);

      // Reveal markdown lines
      if (cleanRef.current) {
        const mdLines = Array.from(cleanRef.current.querySelectorAll('[data-md]'));
        for (const el of mdLines) {
          el.classList.add('shown');
          await wait(160);
        }
      }

      await wait(300);
      if (badgeRef.current) badgeRef.current.classList.add('show');
    }

    // Scroll trigger — play once
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasPlayedRef.current) {
          hasPlayedRef.current = true;
          play();
          observer.disconnect();
        }
      });
    }, { threshold: 0.6 });

    if (stageRef.current) observer.observe(stageRef.current);

    // Replay button
    const handleReplay = () => {
      hasPlayedRef.current = false;
      play();
    };

    if (replayBtnRef.current) {
      replayBtnRef.current.addEventListener('click', handleReplay);
    }

    return () => {
      observer.disconnect();
      if (replayBtnRef.current) {
        replayBtnRef.current.removeEventListener('click', handleReplay);
      }
    };
  }, []);

  return (
    <section className="section py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-wide text-primary mb-3">How Clipped Works</p>
          <h2 className="text-4xl md:text-5xl font-normal mb-4">Same article. Two experiences.</h2>
          <p className="text-lg text-cream/60 font-mono">Watch what your AI is actually working with — before and after.</p>
        </div>

        <div ref={stageRef} className="grid md:grid-cols-2 gap-0 border border-ash rounded-lg overflow-hidden bg-dark shadow-lg">
          {/* LEFT: Messy page */}
          <div className="border-r border-ash">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-ash font-mono text-xs text-cream/50">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-ash/50" />
                <span className="w-2 h-2 rounded-full bg-ash/50" />
                <span className="w-2 h-2 rounded-full bg-ash/50" />
              </div>
              yourbrowser.com/article
            </div>

            <div ref={messyRef} className="p-4 space-y-2 text-sm">
              <div
                data-noise
                className="noise-block bg-ash/20 border border-dashed border-ash text-cream/40 p-3 rounded font-mono text-xs flex items-center justify-between"
              >
                <span>🍪 We use cookies to improve your experience — Accept All</span>
                <span className="strike">✕</span>
              </div>

              <div
                data-noise
                className="noise-block bg-ash/20 border border-dashed border-ash text-cream/40 p-3 rounded font-mono text-xs flex items-center justify-between"
              >
                <span>• AD · Subscribe now for $9.99/mo</span>
                <span className="strike">✕</span>
              </div>

              <div className="text-cream font-bold">The Hidden Cost of Context Switching</div>

              <div
                data-noise
                className="noise-block bg-ash/20 border border-dashed border-ash text-cream/40 p-3 rounded font-mono text-xs flex items-center justify-between"
              >
                <span>Related: 10 Productivity Hacks You Need</span>
                <span className="strike">✕</span>
              </div>

              <div className="text-cream/80">
                Every time you switch between reading and writing, your brain pays a tax most people never measure.
              </div>

              <div
                data-noise
                className="noise-block bg-ash/20 border border-dashed border-ash text-cream/40 p-3 rounded font-mono text-xs flex items-center justify-between"
              >
                <span>❤ Sign up for our newsletter — never miss a post</span>
                <span className="strike">✕</span>
              </div>

              <div className="text-cream/80">
                Researchers call this "attention residue" — part of your focus stays behind on the last task.
              </div>

              <div
                data-noise
                className="noise-block bg-ash/20 border border-dashed border-ash text-cream/40 p-3 rounded font-mono text-xs flex items-center justify-between"
              >
                <span>• AD · Try our app free for 30 days</span>
                <span className="strike">✕</span>
              </div>

              <div className="text-cream/80">The fix isn't fewer switches. It's cleaner handoffs between them.</div>

              <div
                data-noise
                className="noise-block bg-ash/20 border border-dashed border-ash text-cream/40 p-3 rounded font-mono text-xs flex items-center justify-between"
              >
                <span>💬 247 comments · Share this article</span>
                <span className="strike">✕</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Clean markdown */}
          <div>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-ash font-mono text-xs text-cream/50">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-ash/50" />
                <span className="w-2 h-2 rounded-full bg-ash/50" />
                <span className="w-2 h-2 rounded-full bg-ash/50" />
              </div>
              clipped.md
            </div>

            <div ref={cleanRef} className="p-4 font-mono text-xs leading-relaxed">
              <div data-md className="opacity-0 transform translate-y-1">
                <span className="text-primary"># </span>
                <span className="text-cream">The Hidden Cost of Context Switching</span>
              </div>

              <div data-md className="opacity-0 transform translate-y-1 text-cream/50 text-[10px]">
                Source: yourbrowser.com/article
              </div>

              <div data-md className="opacity-0 transform translate-y-1">&nbsp;</div>

              <div data-md className="opacity-0 transform translate-y-1 text-cream/80">
                Every time you switch between reading and writing, your brain pays a tax most people never measure.
              </div>

              <div data-md className="opacity-0 transform translate-y-1">&nbsp;</div>

              <div data-md className="opacity-0 transform translate-y-1 text-cream/80">
                Researchers call this "attention residue" — part of your focus stays behind on the last task.
              </div>

              <div data-md className="opacity-0 transform translate-y-1">&nbsp;</div>

              <div data-md className="opacity-0 transform translate-y-1 text-cream/80">
                The fix isn't fewer switches. It's cleaner handoffs between them.
                <span className="inline-block w-1.5 h-4 bg-primary ml-1 animate-pulse" />
              </div>

              <div
                ref={badgeRef}
                className="demo-badge inline-block mt-6 bg-primary/20 border border-primary text-primary font-mono text-xs px-3 py-2 rounded"
              >
                ✓ Ready for Claude
              </div>
            </div>
          </div>
        </div>

        <button
          ref={replayBtnRef}
          className="block mx-auto mt-8 bg-transparent border border-ash text-cream/60 font-mono text-xs px-4 py-2 rounded hover:border-primary hover:text-primary transition-colors cursor-pointer"
        >
          ↻ Replay animation
        </button>
      </div>

      <style jsx>{`
        [data-noise] {
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        [data-noise] .strike {
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        [data-noise].strike-show .strike {
          opacity: 1;
        }

        [data-noise].gone {
          opacity: 0;
          transform: translateX(10px) scale(0.96);
          pointer-events: none;
        }

        [data-md] {
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        [data-md].shown {
          opacity: 1;
          transform: translateY(0);
        }

        .demo-badge {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .demo-badge.show {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
