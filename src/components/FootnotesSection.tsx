import { FOOTNOTES } from '../data/plans';

export function FootnotesSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 text-xs text-slate-400 leading-relaxed space-y-2.5">
      {FOOTNOTES.map((footnote) => (
        <p key={footnote.id} id={`footnote-${footnote.id}`} className="text-slate-400 font-normal">
          <span className="font-semibold text-slate-400 mr-1.5">{footnote.id}.</span>
          <span>{footnote.text} </span>
          {footnote.highlightText && (
            <strong className="text-slate-300 font-semibold">{footnote.highlightText}</strong>
          )}
        </p>
      ))}
    </div>
  );
}
