'use client'

import Link from 'next/link'

export default function MinimalFooter() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10 z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">GhostFlow</h3>
            <p className="text-gray-400 text-lg">
              High-performance machine learning framework built in Rust with Python bindings.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/docs', label: 'Documentation' },
                { href: '/examples', label: 'Examples' },
                { href: '/get-started', label: 'Get Started' },
                { href: 'https://github.com/choksi2212/ghost-flow', label: 'GitHub' },
                { href: 'https://pypi.org/project/ghost-flow/', label: 'PyPI' },
                { href: 'https://crates.io/crates/ghost-flow', label: 'Crates.io' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Install</h4>
            <code className="block px-4 py-2 bg-white/5 border border-white/10 text-sm font-mono mb-3">
              pip install ghost-flow
            </code>
            <code className="block px-4 py-2 bg-white/5 border border-white/10 text-sm font-mono">
              cargo add ghost-flow
            </code>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 GhostFlow. Licensed under Apache 2.0 and MIT
          </p>
          <div className="flex gap-6">
            <Link href="https://github.com/choksi2212/ghost-flow/blob/main/LICENSE-APACHE" target="_blank" className="text-gray-500 hover:text-white transition-colors text-sm">
              Apache License
            </Link>
            <Link href="https://github.com/choksi2212/ghost-flow/blob/main/LICENSE-MIT" target="_blank" className="text-gray-500 hover:text-white transition-colors text-sm">
              MIT License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
