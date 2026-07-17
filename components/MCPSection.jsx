import { IconLock, IconServerOff, IconEye } from './Icons';

const border = { borderColor: '#3a3836' };

export function MCPSection() {
  return (
    <section id="mcp" className="section py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-wide text-primary mb-3">New — MCP Connector</p>
          <h2 className="text-4xl md:text-5xl font-normal mb-4">Claude reads your library. Directly.</h2>
          <p className="text-lg text-cream/60 font-mono max-w-2xl mx-auto">
            No copy-paste. No file drag-in. <span className="text-cream">clipped-mcp</span> is a local MCP server that lets Claude search and read your saved clips mid-conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left: example conversation */}
          <div className="rounded-card border border-ash overflow-hidden card-hover">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-ash">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-mono text-xs text-cream/50">Claude conversation</span>
            </div>
            <div className="p-6 font-mono text-xs leading-relaxed space-y-4">
              <div className="text-cream/80">
                <span className="text-primary">You:</span> What have I read about context engineering this month?
              </div>
              <div className="text-cream/50 text-[10px] uppercase tracking-wide">
                → calling search_clips("context engineering")
              </div>
              <div className="text-cream/80">
                <span className="text-primary">Claude:</span> You saved 3 clips on this — &ldquo;Context Windows Explained&rdquo; (arxiv.org), &ldquo;Prompt vs Context Engineering&rdquo; (medium.com), and &ldquo;How Claude Uses Retrieved Context&rdquo; (anthropic.com). Want a summary of the disagreements between them?
              </div>
            </div>
          </div>

          {/* Right: config snippet */}
          <div className="rounded-card border border-ash overflow-hidden card-hover">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-ash">
              <span className="w-2 h-2 rounded-full bg-orange" />
              <span className="font-mono text-xs text-cream/50">claude_desktop_config.json</span>
            </div>
            <pre className="p-6 font-mono text-[11px] leading-relaxed overflow-x-auto text-cream/70">
{`{
  "mcpServers": {
    "clipped": {
      "command": "npx",
      "args": ["-y", "clipped-mcp"]
    }
  }
}`}
            </pre>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mt-10 text-xs font-mono uppercase tracking-wide text-cream/60">
          <div className="flex items-center gap-2 px-4 py-2 rounded-pill border border-ash card-hover">
            <IconLock size={14} className="text-primary" />
            <span>100% Local</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-pill border border-ash card-hover">
            <IconServerOff size={14} className="text-primary" />
            <span>No Cloud Sync</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-pill border border-ash card-hover">
            <IconEye size={14} className="text-primary" />
            <span>Read-Only</span>
          </div>
        </div>

        <p className="text-center font-mono text-xs text-cream/40 mt-8">
          Export your library once from the extension, add the config above to Claude Desktop, and ask away.
        </p>
      </div>
    </section>
  );
}
