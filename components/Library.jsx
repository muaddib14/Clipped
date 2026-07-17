import { LibraryPreview } from './LibraryPreview';

export function Library() {
  return (
    <section id="library" className="section py-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-4">Every Clip, In Its Place</h2>
          <p className="text-lg text-cream/60 font-mono mb-4">
            Save a clip to a project folder, then layer on free-form tags for finer filtering. Search across titles, projects, and tags — sort by date, project, or length. One click exports a markdown digest of the week.
          </p>
          <p className="text-xs font-mono uppercase tracking-wide text-primary">4 projects · 8 clips organized</p>
        </div>

        <LibraryPreview />
      </div>
    </section>
  );
}
