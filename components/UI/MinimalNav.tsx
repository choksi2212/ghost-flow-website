'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function MinimalNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            GhostFlow
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </motion.nav>

      {/* Full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 md:right-12 text-white text-sm font-medium"
            >
              Close
            </button>

            <nav className="text-center">
              <ul className="space-y-8">
                {[
                  { href: '/features', label: 'Features' },
                  { href: '/docs', label: 'Documentation' },
                  { href: '/examples', label: 'Examples' },
                  { href: '/get-started', label: 'Get Started' },
                  { href: 'https://github.com/choksi2212/ghost-flow', label: 'GitHub' },
                ].map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      className="text-6xl md:text-8xl font-bold text-white hover:text-gray-400 transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
