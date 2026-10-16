'use client'

import Link from 'next/link'
import { useAuthContext } from './AuthProvider'
import { LayoutDashboard, LogIn } from 'lucide-react'

export function HeaderAuth() {
  const { user, isLoading } = useAuthContext()

  if (isLoading) {
    return <div className="w-20 h-8 rounded-lg bg-white/5 animate-pulse" />
  }

  if (user) {
    return (
      <Link
        href="/dashboard"
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-200 hover:text-white"
      >
        <LayoutDashboard className="w-4 h-4" />
        Dashboard
      </Link>
    )
  }

  return (
    <Link
      href="/login"
        className="flex items-center gap-2 bg-action px-3 py-1.5 text-sm font-medium text-white hover:bg-primary-600"
    >
      <LogIn className="w-4 h-4" />
      Sign in
    </Link>
  )
}
