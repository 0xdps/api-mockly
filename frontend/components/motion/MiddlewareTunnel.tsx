const GATES = [
  { name: 'delay', detail: '0–30s', tone: '#79A8FF' },
  { name: 'flakyRate', detail: '503 chance', tone: '#FFB86B' },
  { name: 'tenant', detail: 'X-Tenant-ID', tone: '#4FD1C5' },
  { name: 'role', detail: 'X-Role', tone: '#4FD1C5' },
  { name: 'idempotency', detail: 'replay key', tone: '#79A8FF' },
  { name: 'trace', detail: 'X-Request-ID', tone: '#A8BAC4' },
]

export function MiddlewareTunnel() {
  return (
    <figure className="border border-wire bg-panel">
      <figcaption className="sr-only">
        A request passes delay, chaos, tenant, role, idempotency, and trace gates before data is returned.
      </figcaption>
      <div className="border-b border-wire px-3 py-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-electric">Middleware tunnel</p>
      </div>
      <div className="overflow-x-auto p-3">
        <svg viewBox="0 0 760 118" className="h-[118px] min-w-[680px]" role="img" aria-hidden="true">
          <line x1="28" y1="62" x2="732" y2="62" stroke="#2A3943" strokeWidth="8" />
          <line x1="28" y1="62" x2="732" y2="62" stroke="#4FD1C5" strokeWidth="1.5" className="motion-flow" />
          <circle cx="48" cy="62" r="5" fill="#4FD1C5" className="motion-packet" style={{ ['--travel' as string]: '660px', animationDuration: '3.6s' }} />
          {GATES.map((gate, index) => {
            const x = 92 + index * 104
            return (
              <g key={gate.name}>
                <rect x={x} y="28" width="92" height="68" fill="#0B1014" stroke={gate.tone} />
                <text x={x + 8} y="54" fill={gate.tone} fontSize="11" fontFamily="IBM Plex Mono, monospace">{gate.name}</text>
                <text x={x + 8} y="74" fill="#A8BAC4" fontSize="10" fontFamily="IBM Plex Mono, monospace">{gate.detail}</text>
              </g>
            )
          })}
        </svg>
      </div>
    </figure>
  )
}
