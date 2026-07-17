import { useState } from 'react';
import { IconDocument } from './Icons';

const border = { borderColor: '#3a3836' };

const FOLDERS = [
  {
    name: 'SORA Research',
    clips: [
      { title: 'How Sora Generates Video from Text', domain: 'openai.com', date: '2026-07-08', tags: ['ai', 'video'] },
      { title: 'Diffusion Models Explained', domain: 'arxiv.org', date: '2026-07-06', tags: ['ai'] },
      { title: 'The Future of Text-to-Video', domain: 'theverge.com', date: '2026-07-02', tags: ['ai', 'video'] },
    ],
  },
  {
    name: 'paulgraham.com',
    clips: [
      { title: 'How to Do Great Work', domain: 'paulgraham.com', date: '2026-06-28', tags: ['essays'] },
      { title: 'What You Cant Say', domain: 'paulgraham.com', date: '2026-06-20', tags: ['essays'] },
    ],
  },
  {
    name: 'Product Notes',
    clips: [
      { title: 'Designing for Trust', domain: 'medium.com', date: '2026-07-01', tags: ['product'] },
      { title: 'The Case for Boring Software', domain: 'increment.com', date: '2026-06-25', tags: ['product', 'eng'] },
    ],
  },
  {
    name: 'medium.com',
    clips: [
      { title: 'Why Writers Should Learn to Code', domain: 'medium.com', date: '2026-06-30', tags: ['writing'] },
    ],
  },
];

function FolderCard({ name, count, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-card border p-5 flex flex-col items-center text-center card-hover cursor-pointer transition-transform hover:-translate-y-0.5"
      style={{ ...border, background: 'rgba(245,240,232,0.02)' }}
    >
      <div
        className="w-11 h-11 rounded flex items-center justify-center mb-3"
        style={{ background: 'rgba(124,113,232,0.12)' }}
      >
        <svg viewBox="0 0 24 24" width={22} height={22} fill="#7c71e8" stroke="#7c71e8" strokeWidth="1.5">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" fill="none" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fillOpacity="0.15" />
        </svg>
      </div>
      <p className="font-mono text-[13px]" style={{ color: '#f5f0e8' }}>{name}</p>
      <p className="font-mono text-[10px] mt-1" style={{ color: 'rgba(245,240,232,0.4)' }}>
        {count} clip{count !== 1 ? 's' : ''}
      </p>
    </button>
  );
}

function ClipRow({ title, domain, date, tags = [] }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div
      className="flex items-center justify-between px-4 py-3 rounded border transition-colors"
      style={{ ...border, background: 'rgba(245,240,232,0.02)' }}
    >
      <div className="min-w-0">
        <p className="font-mono text-[12px] truncate" style={{ color: '#f5f0e8' }}>{title}</p>
        <p className="font-mono text-[10px] mt-0.5" style={{ color: 'rgba(245,240,232,0.4)' }}>
          {domain} · {date}
        </p>
        {tags.length > 0 && (
          <div className="flex gap-1.5 mt-1.5 flex-wrap">
            {tags.map((t, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-pill font-mono text-[9px]"
                style={{ background: 'rgba(124,113,232,0.15)', border: '1px solid rgba(124,113,232,0.4)', color: '#a89ef0' }}
              >
                #{t}
              </span>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={handleCopy}
        className="font-mono text-[10px] uppercase tracking-wide px-3 py-1.5 rounded-pill border flex-shrink-0 cursor-pointer transition-colors flex items-center gap-1.5"
        style={
          copied
            ? { borderColor: '#6fd08c', color: '#6fd08c', background: 'rgba(111,208,140,0.1)' }
            : { ...border, color: 'rgba(245,240,232,0.6)' }
        }
      >
        {copied ? (
          <>
            <svg viewBox="0 0 24 24" width={11} height={11} fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Copied
          </>
        ) : (
          'Copy'
        )}
      </button>
    </div>
  );
}

export function LibraryPreview() {
  const [view, setView] = useState('folders'); // 'folders' | 'all'
  const [activeFolder, setActiveFolder] = useState(null);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('date-desc');

  const allClips = FOLDERS.flatMap((f) => f.clips.map((c) => ({ ...c, folder: f.name })));

  const q = query.trim().toLowerCase();
  const filteredFolders = q
    ? FOLDERS.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.clips.some((c) => c.title.toLowerCase().includes(q) || (c.tags || []).some((t) => t.includes(q)))
      )
    : FOLDERS;
  const filteredClips = q
    ? allClips.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.domain.toLowerCase().includes(q) ||
          (c.tags || []).some((t) => t.includes(q))
      )
    : allClips;

  const sortedClips = [...filteredClips].sort((a, b) => {
    if (sort === 'date-asc') return new Date(a.date) - new Date(b.date);
    if (sort === 'project') return a.folder.localeCompare(b.folder);
    return new Date(b.date) - new Date(a.date);
  });

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
          chrome-extension://clipped/library.html
        </div>
      </div>

      {/* Library page content */}
      <div className="p-8 min-h-[380px]">
        {activeFolder === null ? (
          <>
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-mono text-xl mb-1" style={{ color: '#f5f0e8' }}>Clipped Library</h3>
                <p className="font-mono text-[11px]" style={{ color: 'rgba(245,240,232,0.45)' }}>
                  {allClips.length} clips · {FOLDERS.length} projects · 3 this week
                </p>
              </div>
              <button
                title="Export weekly digest"
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded border font-mono text-[10px] uppercase tracking-wide hover:border-primary hover:text-primary transition-colors"
                style={{ ...border, color: 'rgba(245,240,232,0.5)' }}
              >
                <IconDocument size={12} />
                Digest
              </button>
            </div>

            {/* Search + toggle */}
            <div className="flex gap-3 mb-6 flex-wrap">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search clips, folders, tags..."
                className="flex-1 min-w-[180px] px-4 py-2.5 rounded border font-mono text-[11px] bg-transparent outline-none focus:border-primary"
                style={{ ...border, color: '#f5f0e8' }}
              />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-3 py-2.5 rounded border font-mono text-[11px] bg-transparent outline-none focus:border-primary cursor-pointer"
                style={{ ...border, color: '#f5f0e8' }}
              >
                <option value="date-desc" style={{ background: '#0f0f0f' }}>Newest first</option>
                <option value="date-asc" style={{ background: '#0f0f0f' }}>Oldest first</option>
                <option value="project" style={{ background: '#0f0f0f' }}>Project A-Z</option>
              </select>
              <div className="flex rounded-pill border p-1 gap-1" style={border}>
                <button
                  onClick={() => setView('folders')}
                  className={`px-4 py-1.5 rounded-pill font-mono text-[10px] uppercase tracking-wide transition-colors ${
                    view === 'folders' ? 'bg-primary text-dark' : ''
                  }`}
                  style={view === 'folders' ? {} : { color: 'rgba(245,240,232,0.5)' }}
                >
                  Folders
                </button>
                <button
                  onClick={() => setView('all')}
                  className={`px-4 py-1.5 rounded-pill font-mono text-[10px] uppercase tracking-wide transition-colors ${
                    view === 'all' ? 'bg-primary text-dark' : ''
                  }`}
                  style={view === 'all' ? {} : { color: 'rgba(245,240,232,0.5)' }}
                >
                  All Clips
                </button>
              </div>
            </div>

            {view === 'folders' ? (
              filteredFolders.length ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {filteredFolders.map((f, i) => (
                    <FolderCard key={i} name={f.name} count={f.clips.length} onClick={() => setActiveFolder(f.name)} />
                  ))}
                </div>
              ) : (
                <p className="font-mono text-[12px] text-center py-12" style={{ color: 'rgba(245,240,232,0.4)' }}>
                  No folders match &ldquo;{query}&rdquo;
                </p>
              )
            ) : sortedClips.length ? (
              <div className="space-y-2">
                {sortedClips.map((c, i) => (
                  <ClipRow key={i} title={c.title} domain={c.domain} date={c.date} tags={c.tags} />
                ))}
              </div>
            ) : (
              <p className="font-mono text-[12px] text-center py-12" style={{ color: 'rgba(245,240,232,0.4)' }}>
                No clips match &ldquo;{query}&rdquo;
              </p>
            )}
          </>
        ) : (
          <>
            <button
              onClick={() => setActiveFolder(null)}
              className="flex items-center gap-2 mb-6 font-mono text-[11px]"
              style={{ color: 'rgba(245,240,232,0.6)' }}
            >
              <span className="text-primary">←</span> Back to folders
            </button>
            <h3 className="font-mono text-lg mb-4" style={{ color: '#f5f0e8' }}>{activeFolder}</h3>
            <div className="space-y-2">
              {FOLDERS.find((f) => f.name === activeFolder)?.clips.map((c, i) => (
                <ClipRow key={i} title={c.title} domain={c.domain} date={c.date} tags={c.tags} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
