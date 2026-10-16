type SchemaCircuitProps = {
  resource?: string
  fields?: Array<{ name: string; generator: string; value: string }>
}

const DEFAULT_FIELDS = [
  { name: 'id', generator: 'random_int', value: '42' },
  { name: 'name', generator: 'sentence', value: '"Field kettle"' },
  { name: 'price', generator: 'price', value: '64.00' },
  { name: 'sku', generator: 'uuid', value: '"8f3a…"' },
]

export function SchemaCircuit({
  resource = 'products',
  fields = DEFAULT_FIELDS,
}: SchemaCircuitProps) {
  return (
    <figure className="border border-wire bg-panel">
      <figcaption className="sr-only">
        A {resource} schema passes through a request and a generator, then becomes a JSON response.
      </figcaption>
      <div className="flex items-center justify-between border-b border-wire px-3 py-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">Schema circuit</p>
        <p className="font-mono text-[11px] text-slate-500">GET /{resource}</p>
      </div>
      <CircuitDesktop resource={resource} fields={fields} />
      <CircuitMobile resource={resource} fields={fields} />
    </figure>
  )
}

function CircuitDesktop({
  resource,
  fields,
}: Required<SchemaCircuitProps>) {
  return (
    <svg viewBox="0 0 860 292" className="hidden h-auto w-full md:block" role="img" aria-hidden="true">
      <rect x="16" y="18" width="196" height="256" fill="#0B1014" stroke="#2A3943" />
      <text x="28" y="42" fill="#4FD1C5" fontSize="11" fontFamily="IBM Plex Mono, monospace">SCHEMA</text>
      <text x="28" y="60" fill="#A8BAC4" fontSize="12" fontFamily="IBM Plex Mono, monospace">{resource}.json</text>
      {fields.map((field, index) => {
        const y = 82 + index * 44
        return (
          <g key={field.name}>
            <rect x="28" y={y} width="170" height="32" fill="#121A20" stroke="#2A3943" />
            <text x="38" y={y + 20} fill="#E7EEF2" fontSize="12" fontFamily="IBM Plex Mono, monospace">{field.name}</text>
            <text x="112" y={y + 20} fill="#7D909C" fontSize="11" fontFamily="IBM Plex Mono, monospace">{field.generator}</text>
            <line x1="198" y1={y + 16} x2="248" y2="146" stroke="#4FD1C5" strokeWidth="1.5" className="motion-flow" />
          </g>
        )
      })}

      <rect x="248" y="96" width="164" height="100" fill="#121A20" stroke="#79A8FF" />
      <text x="262" y="124" fill="#79A8FF" fontSize="11" fontFamily="IBM Plex Mono, monospace">REQUEST</text>
      <text x="262" y="148" fill="#E7EEF2" fontSize="14" fontFamily="IBM Plex Mono, monospace">GET /{resource}</text>
      <text x="262" y="170" fill="#A8BAC4" fontSize="12" fontFamily="IBM Plex Mono, monospace">?limit=4</text>
      <circle cx="228" cy="146" r="4" fill="#4FD1C5" className="motion-breathe" />

      <line x1="412" y1="146" x2="470" y2="146" stroke="#79A8FF" strokeWidth="1.5" className="motion-flow" />
      <circle cx="430" cy="146" r="4" fill="#79A8FF" className="motion-packet" style={{ ['--travel' as string]: '36px' }} />

      <rect x="470" y="78" width="150" height="136" fill="#0B1014" stroke="#FFB86B" />
      <text x="484" y="106" fill="#FFB86B" fontSize="11" fontFamily="IBM Plex Mono, monospace">CACHE</text>
      <text x="484" y="132" fill="#E7EEF2" fontSize="13" fontFamily="IBM Plex Mono, monospace">seed 42</text>
      <text x="484" y="156" fill="#A8BAC4" fontSize="12" fontFamily="IBM Plex Mono, monospace">HIT or MISS</text>
      <text x="484" y="180" fill="#7D909C" fontSize="11" fontFamily="IBM Plex Mono, monospace">X-Cache</text>
      <line x1="620" y1="146" x2="678" y2="146" stroke="#FFB86B" strokeWidth="1.5" className="motion-flow" />
      <circle cx="638" cy="146" r="4" fill="#FFB86B" className="motion-packet" style={{ ['--travel' as string]: '34px', animationDelay: '0.35s' }} />

      <rect x="678" y="18" width="166" height="256" fill="#070B0E" stroke="#4FD1C5" />
      <text x="692" y="42" fill="#4FD1C5" fontSize="11" fontFamily="IBM Plex Mono, monospace">RESPONSE</text>
      <text x="692" y="66" fill="#7D909C" fontSize="12" fontFamily="IBM Plex Mono, monospace">{'['}</text>
      {fields.map((field, index) => (
        <text key={field.name} x="704" y={92 + index * 28} fill="#E7EEF2" fontSize="12" fontFamily="IBM Plex Mono, monospace" className="motion-value" style={{ animationDelay: `${0.15 * index}s` }}>
          {field.name}: {field.value}
        </text>
      ))}
      <text x="692" y="214" fill="#7D909C" fontSize="12" fontFamily="IBM Plex Mono, monospace">{']'}</text>
    </svg>
  )
}

function CircuitMobile({
  resource,
  fields,
}: Required<SchemaCircuitProps>) {
  const height = 148 + fields.length * 86
  return (
    <svg viewBox={`0 0 340 ${height}`} className="h-auto w-full md:hidden" role="img" aria-hidden="true">
      <text x="16" y="28" fill="#4FD1C5" fontSize="12" fontFamily="IBM Plex Mono, monospace">{resource}.json</text>
      {fields.map((field, index) => {
        const y = 44 + index * 42
        return (
          <g key={field.name}>
            <rect x="16" y={y} width="140" height="32" fill="#121A20" stroke="#2A3943" />
            <text x="26" y={y + 21} fill="#E7EEF2" fontSize="12" fontFamily="IBM Plex Mono, monospace">{field.name}</text>
            <text x="176" y={y + 21} fill="#4FD1C5" fontSize="12" fontFamily="IBM Plex Mono, monospace">{field.value}</text>
            <line x1="156" y1={y + 16} x2="170" y2={y + 16} stroke="#4FD1C5" className="motion-flow" />
          </g>
        )
      })}
      <text x="16" y={height - 28} fill="#79A8FF" fontSize="12" fontFamily="IBM Plex Mono, monospace">GET /{resource}?limit=4</text>
    </svg>
  )
}
