import { useEffect, useRef, useState } from 'react';
import { Logo } from './Logo';

const border = { borderColor: '#3a3836' };

export function ProductPreview() {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [introFlash, setIntroFlash] = useState(false);
  const [project, setProject] = useState('');
  const [extracting, setExtracting] = useState(true);

  const stageRef = useRef(null);
  const junkRef1 = useRef(null);
  const junkRef2 = useRef(null);
  const hasPlayedRef = useRef(false);

  function handleCopy() {
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  async function play() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const junkBars = [junkRef1.current, junkRef2.current].filter(Boolean);

    // Reset
    junkBars.forEach((el) => {
      el.classList.remove('flag', 'gone');
      el.style.display = '';
    });
    setExtracting(true);
    setIntroFlash(false);

    if (prefersReduced) {
      junkBars.forEach((el) => { el.style.display = 'none'; });
      setExtracting(false);
      return;
    }

    await wait(500);

    for (const el of junkBars) {
      el.classList.add('flag');
      await wait(140);
      el.classList.add('gone');
      await wait(160);
      el.style.display = 'none';
    }

    await wait(300);
    setExtracting(false);

    await wait(700);
    setIntroFlash(true);
    await wait(1000);
    setIntroFlash(false);
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasPlayedRef.current) {
          hasPlayedRef.current = true;
          play();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    if (stageRef.current) observer.observe(stageRef.current);
    return () => observer.disconnect();
  }, []);

  function handleReplay() {
    hasPlayedRef.current = true;
    play();
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
    <div
      ref={stageRef}
      className="rounded-card overflow-hidden text-left border"
      style={{ ...border, background: '#0f0f0f' }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={border}>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full border" style={border} />
          <span className="w-2.5 h-2.5 rounded-full border" style={border} />
          <span className="w-2.5 h-2.5 rounded-full border" style={border} />
        </div>
        <div className="flex-1 mx-4 px-3 py-1 rounded-pill border font-mono text-xs" style={{ ...border, color: 'rgba(245,240,232,0.5)' }}>
          medium.com/@writer/how-to-do-great-work
        </div>
        <div className="w-6 h-6 rounded flex items-center justify-center border border-primary">
          <Logo size="sm" />
        </div>
      </div>

      {/* Split content */}
      <div className="grid md:grid-cols-2">
        {/* Left: raw article page */}
        <div className="p-8 border-r" style={border}>
          <p className="text-[10px] font-mono uppercase tracking-wide mb-6" style={{ color: 'rgba(245,240,232,0.4)' }}>Original Page</p>
          <div className="space-y-2">
            <div className="h-2 w-2/5 rounded" style={{ background: 'rgba(245,240,232,0.15)' }} />
            <div className="h-3 w-full rounded mt-4" style={{ background: 'rgba(245,240,232,0.25)' }} />
            <div className="h-3 w-11/12 rounded" style={{ background: 'rgba(245,240,232,0.25)' }} />
            <div className="h-3 w-full rounded" style={{ background: 'rgba(245,240,232,0.25)' }} />
            <div ref={junkRef1} className="junk-bar h-2 w-full rounded mt-3" style={{ background: 'rgba(245,240,232,0.25)' }} />
            <div ref={junkRef2} className="junk-bar h-2 w-4/5 rounded" style={{ background: 'rgba(245,240,232,0.25)' }} />
            <div className="h-3 w-full rounded mt-3" style={{ background: 'rgba(245,240,232,0.25)' }} />
            <div className="h-3 w-2/3 rounded" style={{ background: 'rgba(245,240,232,0.25)' }} />
          </div>
          <p className="text-[10px] font-mono mt-6" style={{ color: 'rgba(245,240,232,0.3)' }}>ads · nav · comments · tracking scripts</p>
        </div>

        {/* Right: actual extension popup */}
        <div className="p-8 flex items-center justify-center">
          <div className="w-full max-w-[280px] rounded-card border p-5" style={border}>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="font-mono text-sm" style={{ color: '#f5f0e8' }}>Clipped</span>
            </div>
            <p className="font-mono text-[11px] mb-4" style={{ color: 'rgba(245,240,232,0.5)' }}>Extract to markdown for Claude</p>

            <div
              className="w-full py-2 px-3 mb-3 rounded font-mono text-[10px] text-center transition-all duration-300"
              style={
                extracting
                  ? { background: 'rgba(245,240,232,0.05)', border: '1px solid rgba(245,240,232,0.2)', color: 'rgba(245,240,232,0.4)' }
                  : copied
                  ? { background: 'rgba(124,113,232,0.15)', border: '1px solid #7c71e8', color: '#7c71e8' }
                  : { background: 'rgba(111,208,140,0.1)', border: '1px solid #6fd08c', color: '#6fd08c' }
              }
            >
              {extracting ? '● Extracting...' : copied ? '✓ Copied to clipboard!' : '✓ Ready to copy or download'}
            </div>

            <button
              onClick={handleCopy}
              className={`copy-btn relative w-full py-2.5 rounded-pill bg-primary text-dark font-mono text-[11px] uppercase tracking-wide text-center mb-2 transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${copied || introFlash ? 'pulse' : ''}`}
            >
              Copy to Clipboard
              {(copied || introFlash) && (
                <span className="copied-flash absolute inset-0 flex items-center justify-center rounded-pill bg-[#6fd08c] text-dark font-mono text-[11px] uppercase tracking-wide">
                  ✓ Copied
                </span>
              )}
            </button>

            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full py-2 rounded border font-mono text-[10px] uppercase tracking-wide text-center flex items-center justify-center gap-1 cursor-pointer hover:border-primary transition-colors"
              style={{ ...border, color: 'rgba(245,240,232,0.6)' }}
            >
              <span>More options</span>
              <span className="text-[8px] transition-transform duration-200" style={{ transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)' }}>▲</span>
            </button>

            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: expanded ? '160px' : '0px' }}
            >
              <div className="mt-3 pt-3 border-t" style={border}>
                <p className="font-mono text-[9px] uppercase tracking-wide mb-2" style={{ color: 'rgba(245,240,232,0.4)' }}>Save to project</p>
                <input
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  placeholder="Search or create project..."
                  className="w-full py-2 px-3 rounded font-mono text-[10px] mb-2 bg-transparent outline-none focus:border-primary"
                  style={{ ...border, background: 'rgba(245,240,232,0.03)', color: '#f5f0e8' }}
                />
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded border font-mono text-[9px] uppercase tracking-wide text-center hover:border-primary transition-colors cursor-pointer" style={{ ...border, color: 'rgba(245,240,232,0.6)' }}>
                    Download .md
                  </button>
                  <a
                    href="#library"
                    className="flex-1 py-2 rounded border border-primary font-mono text-[9px] uppercase tracking-wide text-center text-primary hover:bg-primary hover:text-dark transition-colors"
                  >
                    Library
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="text-right mt-2">
        <button
          onClick={handleReplay}
          className="font-mono text-[10px] uppercase tracking-wide cursor-pointer hover:text-primary transition-colors"
          style={{ color: 'rgba(245,240,232,0.35)' }}
        >
          ↻ Replay
        </button>
      </div>

      <style jsx>{`
        .junk-bar {
          transition: opacity 0.5s ease, transform 0.5s ease, background-color 0.3s ease;
        }
        .junk-bar.flag {
          background: rgba(255, 159, 67, 0.4) !important;
        }
        .junk-bar.gone {
          opacity: 0;
          transform: translateX(14px);
          pointer-events: none;
        }

        .copy-btn.pulse {
          animation: copyPulse 0.5s ease;
        }
        @keyframes copyPulse {
          0% { transform: scale(1); }
          40% { transform: scale(0.97); }
          100% { transform: scale(1); }
        }

        .copied-flash {
          animation: copiedFadeInOut 0.9s ease forwards;
        }
        @keyframes copiedFadeInOut {
          0% { opacity: 0; }
          15% { opacity: 1; }
          75% { opacity: 1; }
          100% { opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .junk-bar, .copy-btn.pulse, .copied-flash {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
