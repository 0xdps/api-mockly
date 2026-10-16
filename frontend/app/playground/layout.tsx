import { Header } from '@/components/Header'

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen bg-carbon flex flex-col">
      <Header compact />
      
      <div id="content" className="flex-1 min-h-0 overflow-hidden">
        {children}
      </div>
    </div>
  )
}
