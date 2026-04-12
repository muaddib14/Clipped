import { IconShield, IconTwitter, IconMail, IconDiscord, IconGithub } from './Icons';

export function Footer() {
  return (
    <footer className="bg-dark border-t border-ash">
      <div className="section py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8 font-mono text-sm">
          <div>
            <h4 className="uppercase tracking-wide text-xs mb-4 text-cream/50">Clipped</h4>
            <p className="text-cream/60">Extract articles. Read with AI. No friction.</p>
          </div>

          <div>
            <h4 className="uppercase tracking-wide text-xs mb-4 text-cream/50">Product</h4>
            <ul className="space-y-2 text-cream/60">
              <li><a href="#" className="hover:text-cream transition">Chrome Web Store</a></li>
              <li><a href="#" className="hover:text-cream transition">Documentation</a></li>
              <li><a href="#" className="hover:text-cream transition">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-wide text-xs mb-4 text-cream/50">Resources</h4>
            <ul className="space-y-2 text-cream/60">
              <li><a href="https://github.com/clipped-extension" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cream transition"><IconGithub size={14} />GitHub</a></li>
              <li><a href="#" className="hover:text-cream transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cream transition">Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-wide text-xs mb-4 text-cream/50">Connect</h4>
            <ul className="space-y-2 text-cream/60">
              <li><a href="#" className="flex items-center gap-2 hover:text-cream transition"><IconTwitter size={14} />Twitter</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-cream transition"><IconMail size={14} />Email</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-cream transition"><IconDiscord size={14} />Discord</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ash pt-8">
          <div className="mb-6 p-4 rounded-card border border-ash">
            <div className="flex items-center justify-center gap-2 text-cream/70 text-sm font-mono">
              <IconShield size={16} className="text-primary" />
              <p>Nothing leaves your browser. <a href="https://github.com/clipped-extension" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Open source</a>. No tracking. No servers.</p>
            </div>
          </div>
          <p className="text-center text-cream/50 text-xs font-mono uppercase tracking-wide">© 2025 Clipped. Built for AI researchers, by researchers.</p>
        </div>
      </div>
    </footer>
  );
}
