export type FlowField = {
  name: string
  type?: string
  generator?: string
}

export function FieldFlow({
  resource,
  fields,
}: {
  resource: string
  fields: FlowField[]
}) {
  const visible = fields.slice(0, 6)
  if (visible.length === 0) return null

  return (
    <figure className="overflow-hidden border border-wire bg-carbon">
      <figcaption className="sr-only">
        Fields in the {resource} schema flow through their generators into one response object.
      </figcaption>
      <div className="flex items-center justify-between border-b border-wire px-3 py-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">Field flow</p>
        <p className="font-mono text-[11px] text-slate-500">{visible.length} fields shown</p>
      </div>
      <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_88px_minmax(0,0.8fr)]">
        <ul className="divide-y divide-wire">
          {visible.map((field, index) => (
            <li key={field.name} className="flex items-center justify-between gap-3 px-3 py-2.5">
              <span className="font-mono text-sm text-ink">{field.name}</span>
              <span className="truncate font-mono text-[11px] text-slate-500">
                {field.generator || field.type || 'value'}
              </span>
              <span className="hidden h-px w-8 bg-signal motion-breathe md:block" style={{ animationDelay: `${index * 0.12}s` }} />
            </li>
          ))}
        </ul>
        <div className="relative hidden md:block" aria-hidden="true">
          <svg viewBox="0 0 88 220" className="h-full w-full" preserveAspectRatio="none">
            {visible.map((field, index) => {
              const y = 18 + index * 34
              return (
                <g key={field.name}>
                  <path d={`M0 ${y} C 36 ${y}, 52 110, 88 110`} fill="none" stroke="#4FD1C5" strokeWidth="1.4" className="motion-flow" />
                </g>
              )
            })}
            <circle cx="78" cy="110" r="4" fill="#79A8FF" className="motion-breathe" />
          </svg>
        </div>
        <div className="border-t border-wire p-3 md:border-l md:border-t-0">
          <p className="font-mono text-[11px] text-electric">GET /{resource}</p>
          <pre className="mt-2 border-0 bg-transparent p-0 text-xs leading-6 text-slate-300">
            <code>{`{\n${visible.map((field) => `  "${field.name}": <${field.generator || field.type || 'value'}>`).join(',\n')}\n}`}</code>
          </pre>
        </div>
      </div>
    </figure>
  )
}
