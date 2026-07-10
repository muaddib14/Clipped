import { LibraryPreview } from './LibraryPreview';

export function Library() {
  return (
    <section id="library" className="section py-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-4">Every Clip, In Its Place</h2>
          <p className="text-lg text-cream/60 font-mono mb-4">
            Tag a clip to a project as you save it. Clipped groups everything into folders automatically — searchable, browsable, right inside the extension.
          </p>
          <p className="text-xs font-mono uppercase tracking-wide text-primary">4 projects · 8 clips organized</p>
        </div>

        <LibraryPreview />
      </div>
    </section>
  );
}
