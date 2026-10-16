const STEPS = [
  { label: 'collection', sample: '100 products' },
  { label: 'search q', sample: 'matches “kettle”' },
  { label: 'sort price', sample: 'low to high' },
  { label: 'fields', sample: 'id, name, price' },
  { label: 'page', sample: '4 items' },
]

export function QueryLens() {
  return (
    <figure className="border border-wire bg-carbon">
      <figcaption className="sr-only">
        Search, sort, field selection, and pagination narrow a generated collection before it is returned.
      </figcaption>
      <div className="border-b border-wire px-3 py-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-warm">Query lens</p>
      </div>
      <ol className="grid sm:grid-cols-5">
        {STEPS.map((step, index) => (
          <li key={step.label} className="relative border-t border-wire px-3 py-4 sm:border-l sm:border-t-0 first:border-l-0">
            <p className="font-mono text-[11px] text-slate-500">0{index + 1}</p>
            <p className="mt-2 font-mono text-sm text-ink">{step.label}</p>
            <p className="mt-1 text-xs text-slate-400">{step.sample}</p>
            {index < STEPS.length - 1 && (
              <span className="absolute right-2 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-signal motion-breathe sm:block" style={{ animationDelay: `${index * 0.18}s` }} />
            )}
          </li>
        ))}
      </ol>
    </figure>
  )
}
