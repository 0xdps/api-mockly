export function AuthRails() {
  return (
    <figure className="border border-wire bg-panel">
      <figcaption className="sr-only">
        Dashboard access uses a browser session. Template data uses an X-API-Key. Both rails meet when a custom schema is generated.
      </figcaption>
      <div className="border-b border-wire px-3 py-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">Two access rails</p>
      </div>
      <svg viewBox="0 0 640 168" className="h-auto w-full" role="img" aria-hidden="true">
        <text x="20" y="36" fill="#79A8FF" fontSize="12" fontFamily="IBM Plex Mono, monospace">Browser session</text>
        <text x="20" y="56" fill="#A8BAC4" fontSize="11" fontFamily="IBM Plex Mono, monospace">Authorization: Bearer</text>
        <line x1="196" y1="42" x2="430" y2="42" stroke="#79A8FF" className="motion-flow" />
        <circle cx="210" cy="42" r="4" fill="#79A8FF" className="motion-packet" style={{ ['--travel' as string]: '200px' }} />
        <text x="20" y="108" fill="#4FD1C5" fontSize="12" fontFamily="IBM Plex Mono, monospace">Template client</text>
        <text x="20" y="128" fill="#A8BAC4" fontSize="11" fontFamily="IBM Plex Mono, monospace">X-API-Key: mk_ or mak_</text>
        <line x1="196" y1="114" x2="430" y2="114" stroke="#4FD1C5" className="motion-flow" />
        <circle cx="210" cy="114" r="4" fill="#4FD1C5" className="motion-packet" style={{ ['--travel' as string]: '200px', animationDelay: '0.4s' }} />
        <rect x="430" y="28" width="186" height="112" fill="#0B1014" stroke="#FFB86B" />
        <text x="446" y="58" fill="#FFB86B" fontSize="12" fontFamily="IBM Plex Mono, monospace">Generate</text>
        <text x="446" y="82" fill="#E7EEF2" fontSize="12" fontFamily="IBM Plex Mono, monospace">custom schema</text>
        <text x="446" y="106" fill="#A8BAC4" fontSize="11" fontFamily="IBM Plex Mono, monospace">mk_ own templates</text>
        <text x="446" y="124" fill="#A8BAC4" fontSize="11" fontFamily="IBM Plex Mono, monospace">mak_ public only</text>
      </svg>
    </figure>
  )
}
