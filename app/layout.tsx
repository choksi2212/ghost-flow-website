import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import MinimalNav from '@/components/UI/MinimalNav'
import SmoothScrollProvider from '@/components/Providers/SmoothScrollProvider'
import PageTransition from '@/components/Effects/PageTransition'

export const metadata: Metadata = {
  title: 'GhostFlow',
  description: 'A blazingly fast machine learning framework built in Rust with Python bindings. 50+ algorithms, GPU acceleration, and production-ready.',
  keywords: ['machine learning', 'rust', 'python', 'ml framework', 'neural networks', 'gpu', 'cuda'],
  authors: [{ name: 'GhostFlow Team' }],
  icons: {
    icon: [
      { url: '/icon.png' },
      { url: '/ghostflow.png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'GhostFlow',
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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/ghostflow.png" type="image/png" />
        <link rel="shortcut icon" href="/ghostflow.png" />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="cfa8a7ac-e2c0-4abe-898f-4ac91c4cfb10"
        />
      </head>
      <body className="antialiased font-sans">
        <SmoothScrollProvider>
          <MinimalNav />
          <PageTransition>
            <main>
              {children}
            </main>
          </PageTransition>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
