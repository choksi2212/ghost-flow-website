'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProfessionalFooter() {
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Examples', href: '/examples' },
      { name: 'Get Started', href: '/get-started' },
    ],
    resources: [
      { name: 'GitHub', href: 'https://github.com/choksi2212/ghost-flow' },
      { name: 'PyPI', href: 'https://pypi.org/project/ghost-flow/' },
      { name: 'Crates.io', href: 'https://crates.io/crates/ghost-flow' },
      { name: 'API Docs', href: 'https://docs.rs/ghost-flow' },
    ],
    community: [
      { name: 'Issues', href: 'https://github.com/choksi2212/ghost-flow/issues' },
      { name: 'Discussions', href: 'https://github.com/choksi2212/ghost-flow/discussions' },
      { name: 'Contributing', href: 'https://github.com/choksi2212/ghost-flow/blob/main/CONTRIBUTING.md' },
      { name: 'Changelog', href: 'https://github.com/choksi2212/ghost-flow/blob/main/CHANGELOG.md' },
    ],
  }

  return (
    <footer className="relative bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-bold mb-4 block">
              GhostFlow
            </Link>
            <p className="text-gray-400 text-lg mb-6 max-w-sm">
              High-performance machine learning framework built in Rust with Python bindings.
            </p>
            <div className="flex gap-4">
              <code className="px-4 py-2 bg-white/5 border border-white/10 text-sm font-mono">
                pip install ghost-flow
              </code>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-3">
              {links.community.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} GhostFlow. Licensed under Apache 2.0 and MIT.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="https://github.com/choksi2212/ghost-flow/blob/main/LICENSE-APACHE" target="_blank" className="text-gray-500 hover:text-white transition-colors">
              Apache License
            </Link>
            <Link href="https://github.com/choksi2212/ghost-flow/blob/main/LICENSE-MIT" target="_blank" className="text-gray-500 hover:text-white transition-colors">
              MIT License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
