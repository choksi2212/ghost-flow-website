import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MinimalNav from '@/components/UI/MinimalNav'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'GhostFlow - High-Performance ML Framework',
  description: 'A blazingly fast machine learning framework built in Rust with Python bindings. 50+ algorithms, GPU acceleration, and production-ready.',
  keywords: ['machine learning', 'rust', 'python', 'ml framework', 'neural networks', 'gpu', 'cuda'],
  authors: [{ name: 'GhostFlow Team' }],
  openGraph: {
    title: 'GhostFlow - High-Performance ML Framework',
    description: 'Blazingly fast ML framework in Rust with Python bindings',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <MinimalNav />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
