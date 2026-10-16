import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SchemaCircuit } from '@/components/motion/SchemaCircuit'
import { LiveSchemaRun } from '@/components/motion/LiveSchemaRun'
import { QueryLens } from '@/components/motion/QueryLens'
import { MiddlewareTunnel } from '@/components/motion/MiddlewareTunnel'
import { schemasManifest } from '@/lib/schemas-manifest'

export default function Home() {
  const grouped = schemasManifest.reduce((acc, item) => {
    const group = item.group || 'other'
    if (!acc[group]) acc[group] = []
    acc[group].push(item.name)
    return acc
  }, {} as Record<string, string[]>)
  const groups = Object.entries(grouped).sort((a, b) => b[1].length - a[1].length)

  return (
    <div className="min-h-screen bg-carbon text-slate-200">
      <Header />
      <main id="content">
        <section className="border-b border-wire">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:py-20">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">Schema, then data</p>
              <h1 className="mt-4 font-display text-5xl leading-[0.95] text-white sm:text-6xl">
                Watch a schema become an API.
              </h1>
              <p className="mt-5 max-w-md text-base leading-7 text-slate-400">
                Mockly reads a JSON Schema, registers the resource, and returns realistic records. No account for the built-in catalog.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/resources/product" data-umami-event="hero_pg" className="bg-action px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-600">
                  Open the product studio
                </Link>
                <Link href="/templates" data-umami-event="hero_tpl" className="border border-wire px-4 py-2.5 text-sm text-slate-200 hover:border-electric hover:text-white">
                  Browse {schemasManifest.length} schemas
                </Link>
              </div>
            </div>
            <SchemaCircuit />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <LiveSchemaRun />
        </section>

        <section className="border-y border-wire">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-electric">Catalog</p>
                <h2 className="mt-2 font-display text-3xl text-white">{groups.length} categories, one request shape.</h2>
              </div>
              <Link href="/templates" className="hidden text-sm text-electric hover:underline sm:inline">View all</Link>
            </div>
            <div className="grid grid-cols-2 border-l border-t border-wire sm:grid-cols-3 lg:grid-cols-4">
              {groups.map(([name, resources]) => (
                <Link key={name} href={`/resources/${resources[0]}`} className="border-b border-r border-wire px-4 py-4 hover:bg-panel">
                  <p className="font-mono text-[11px] text-slate-500">{resources.length} schema{resources.length === 1 ? '' : 's'}</p>
                  <p className="mt-1 capitalize text-white">{name}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-warm">Shape the response</p>
            <h2 className="mt-2 max-w-xl font-display text-3xl text-white">The same endpoint can be narrowed before it leaves the server.</h2>
          </div>
          <QueryLens />
          <MiddlewareTunnel />
        </section>
      </main>
      <Footer />
    </div>
  )
}
