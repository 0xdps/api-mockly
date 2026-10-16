'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { HeaderAuth } from './HeaderAuth'

interface HeaderProps {
  compact?: boolean
}

const LINKS = [
  { href: '/templates', label: 'Catalog', event: 'nav_tpl' },
  { href: '/playground', label: 'Utilities', event: 'nav_pg' },
  { href: '/docs', label: 'Docs', event: 'nav_docs' },
]

export function Header({ compact }: HeaderProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-wire bg-carbon/95 backdrop-blur-md">
      <a href="#content" className="skip-link">Skip to content</a>
      <nav aria-label="Primary" className={`flex items-center justify-between gap-4 py-3 ${compact ? 'px-4' : 'mx-auto max-w-6xl px-4'}`}>
        <Link href="/" data-umami-event="nav_h" data-umami-label="Header Home" className="flex items-center gap-2.5 text-white">
          <Image src="/logo.svg" alt="" width={28} height={28} className="h-7 w-7" />
          <span className="font-display text-xl tracking-tight">Mockly</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`)
            return (
              <Link
                key={link.href}
                href={link.href}
                data-umami-event={link.event}
                aria-current={active ? 'page' : undefined}
                className={`px-3 py-1.5 text-sm ${active ? 'text-electric' : 'text-slate-300 hover:text-white'}`}
              >
                {link.label}
              </Link>
            )
          })}
          <a
            href="https://github.com/0xdps/api-mockly"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="nav_gh"
            className="px-3 py-1.5 text-sm text-slate-300 hover:text-white"
          >
            GitHub
          </a>
          <HeaderAuth />
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center border border-wire text-slate-200 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-wire px-4 py-3 md:hidden">
          <div className="flex flex-col">
            {LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="py-2 text-sm text-slate-200">
                {link.label}
              </Link>
            ))}
            <a href="https://github.com/0xdps/api-mockly" target="_blank" rel="noopener noreferrer" className="py-2 text-sm text-slate-200">
              GitHub
            </a>
            <div className="pt-2">
              <HeaderAuth />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
