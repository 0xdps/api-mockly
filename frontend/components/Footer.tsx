import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-wire bg-carbon">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 text-sm sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div className="space-y-2 text-slate-400">
          <p className="font-display text-lg text-white">Mockly</p>
          <p>Schema-driven mock APIs for prototyping, tests, and demos.</p>
          <p>
            Built by{' '}
            <a href="https://dps.codes" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">
              0xdps
            </a>
          </p>
        </div>
        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">Use Mockly</h2>
          <ul className="mt-3 space-y-2">
            <li><Link href="/templates" className="text-slate-300 hover:text-white">Catalog</Link></li>
            <li><Link href="/playground" className="text-slate-300 hover:text-white">Utilities</Link></li>
            <li><Link href="/docs" className="text-slate-300 hover:text-white">Docs</Link></li>
            <li><a href="https://github.com/0xdps/api-mockly" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">GitHub</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">Also by 0xdps</h2>
          <ul className="mt-3 space-y-2">
            <li><a href="https://pinboard-gpt.dps.codes/" className="text-slate-300 hover:text-white">Pinboard GPT</a></li>
            <li><a href="https://devutil.dps.codes/" className="text-slate-300 hover:text-white">DevUtil</a></li>
            <li><a href="https://www.pingpong.codes/" className="text-slate-300 hover:text-white">PingPong</a></li>
            <li><a href="https://fake-stack.readthedocs.io/" className="text-slate-300 hover:text-white">Fake Stack</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
