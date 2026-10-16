'use client'

import { useState } from 'react'
import { getApiUrl } from '@/lib/api'

const SAMPLE = [
  { id: 42, name: 'Field kettle', price: 64, sku: '8f3a-21c0' },
  { id: 77, name: 'Cedar tray', price: 28, sku: 'b19e-04aa' },
]

export function LiveSchemaRun() {
  const [status, setStatus] = useState<'idle' | 'running' | 'done' | 'error'>('idle')
  const [payload, setPayload] = useState<unknown>(SAMPLE)
  const [elapsed, setElapsed] = useState<number | null>(null)
  const endpoint = `${getApiUrl()}/products?limit=2&fields=id,name,price,sku`

  async function run() {
    setStatus('running')
    const started = performance.now()
    try {
      const response = await fetch(endpoint)
      const data = await response.json()
      if (!response.ok) throw new Error(`Request failed with ${response.status}`)
      setPayload(data)
      setElapsed(Math.round(performance.now() - started))
      setStatus('done')
    } catch {
      setPayload(SAMPLE)
      setElapsed(null)
      setStatus('error')
    }
  }

  return (
    <div className="grid gap-6 border border-wire bg-panel p-4 lg:grid-cols-[280px_minmax(0,1fr)] lg:p-6">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-warm">Live generation</p>
        <h2 className="mt-3 font-display text-3xl text-white">Run the same schema.</h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          The product schema is already an endpoint. This request asks for two items and only four fields.
        </p>
        <button
          type="button"
          onClick={run}
          disabled={status === 'running'}
          className="mt-5 bg-action px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 disabled:opacity-60"
        >
          {status === 'running' ? 'Generating…' : 'Run /products'}
        </button>
        <p className="mt-3 break-all font-mono text-[11px] text-slate-500">{endpoint}</p>
      </div>
      <div className="min-w-0 border border-wire bg-carbon p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-signal">
            {status === 'error' ? 'Sample response' : status === 'done' ? 'Response' : 'Ready'}
          </p>
          {elapsed !== null && <p className="font-mono text-[11px] text-slate-500">{elapsed} ms</p>}
        </div>
        <pre className="max-h-72 overflow-auto border-0 bg-transparent p-0 text-xs text-signal">
          <code>{JSON.stringify(payload, null, 2)}</code>
        </pre>
        {status === 'error' && (
          <p className="mt-3 text-xs text-warm">The API did not respond, so this is the sample the circuit is showing.</p>
        )}
      </div>
    </div>
  )
}
