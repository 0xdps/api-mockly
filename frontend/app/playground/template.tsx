'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Volume2, BarChart3, Clock, Settings, Dices, Package, LucideIcon } from 'lucide-react'
import { MiddlewareTunnel } from '@/components/motion/MiddlewareTunnel'

type TabType = 'echo' | 'status' | 'delay' | 'middleware' | 'chaos'

const tabs: { id: TabType; label: string; icon: LucideIcon; description: string; path: string }[] = [
  { id: 'echo', label: 'Echo', icon: Volume2, description: 'Test request/response', path: '/playground/echo' },
  { id: 'status', label: 'Status', icon: BarChart3, description: 'Generate HTTP status codes', path: '/playground/status' },
  { id: 'delay', label: 'Delay', icon: Clock, description: 'Test response delays', path: '/playground/delay' },
  { id: 'middleware', label: 'Middleware', icon: Settings, description: 'Test middleware parameters', path: '/playground/middleware' },
  { id: 'chaos', label: 'Chaos', icon: Dices, description: 'Chaos engineering tests', path: '/playground/chaos' },
]

export default function PlaygroundTemplate({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const activeTab = tabs.find(tab => pathname === tab.path)

  return (
    <div className="h-full flex flex-col md:flex-row">
      <div className="flex gap-2 overflow-x-auto border-b border-wire p-3 md:hidden">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.path}
            className={`shrink-0 px-3 py-1.5 text-sm ${pathname === tab.path ? 'bg-panel text-electric' : 'text-slate-400'}`}
          >
            {tab.label}
          </Link>
        ))}
        <Link href="/templates" className="shrink-0 px-3 py-1.5 text-sm text-slate-400">Catalog</Link>
      </div>
      <div className="hidden w-64 border-r border-wire bg-panel md:flex md:flex-col">
        {/* Utility Tools */}
        <div className="flex-1 overflow-y-auto p-3">
          <div className="space-y-1">
            <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Utilities
            </div>
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <Link
                  key={tab.id}
                  href={tab.path}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left
                    ${
                      pathname === tab.path
                        ? 'bg-carbon text-electric border border-electric/40'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-carbon'
                    }
                  `}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{tab.label}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{tab.description}</div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Resources Link */}
          <div className="mt-6 space-y-1">
            <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Resources
            </div>
            <Link
              href="/templates"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left text-slate-400 hover:text-slate-300 hover:bg-slate-800/50"
            >
              <Package className="w-5 h-5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">Browse catalog</div>
                <div className="text-xs text-slate-500 mt-0.5">Test 100+ API endpoints</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Content Header */}
        {activeTab && (
          <div className="bg-carbon border-b border-wire px-6 py-4">
            <div className="flex items-center gap-3">
              {(() => {
                const Icon = activeTab.icon
                return <Icon className="w-6 h-6" />
              })()}
              <div>
                <h1 className="text-xl font-bold text-white">{activeTab.label}</h1>
                <p className="text-sm text-slate-400">{activeTab.description}</p>
              </div>
            </div>
          </div>
        )}
        {pathname === '/playground/middleware' && (
          <div className="border-b border-wire px-4 py-4 md:px-6">
            <MiddlewareTunnel />
          </div>
        )}

        {/* Tab Content */}
        <div className="flex-1 min-h-0 p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
