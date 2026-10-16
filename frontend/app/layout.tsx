import type { Metadata } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { UmamiAnalytics } from '@/components/UmamiAnalytics'
import { AuthProvider } from '@/components/AuthProvider'

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
})

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
})

export const metadata: Metadata = {
  title: 'Mockly - Schema-Driven Mock API',
  description: 'Free mock API service with realistic data. Schema-driven, instantly available, perfect for prototyping and testing.',
  keywords: ['mock api', 'fake data', 'rest api', 'json api', 'testing', 'prototyping'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-sans antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
        <UmamiAnalytics />
      </body>
    </html>
  )
}
