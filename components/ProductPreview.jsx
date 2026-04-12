import { Logo } from './Logo';

const border = { borderColor: '#3a3836' };

export function ProductPreview() {
  return (
    <div
      className="w-full max-w-4xl mx-auto rounded-card overflow-hidden text-left border"
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
            <div className="h-2 w-full rounded mt-3" style={{ background: 'rgba(255,159,67,0.3)' }} />
            <div className="h-2 w-4/5 rounded" style={{ background: 'rgba(255,159,67,0.3)' }} />
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
            <p className="font-mono text-[11px] mb-4" style={{ color: 'rgba(245,240,232,0.5)' }}>Extract article to markdown. Paste into Claude.</p>

            <div className="space-y-2">
              <div className="w-full py-2.5 rounded-pill bg-primary text-dark font-mono text-[11px] uppercase tracking-wide text-center">
                Copy to Clipboard
              </div>
              <div className="w-full py-2.5 rounded-pill border font-mono text-[11px] uppercase tracking-wide text-center" style={{ ...border, color: 'rgba(245,240,232,0.7)' }}>
                Download as .md
              </div>
            </div>

            <p className="font-mono text-[10px] text-primary mt-3">Ready to copy or download</p>
          </div>
        </div>
      </div>
    </div>
  );
}
