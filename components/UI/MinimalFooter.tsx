'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

export default function MinimalFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      // Using Web3Forms - free email service
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '41f56cfd-ebae-4fda-9010-b00cd09276f5', // You need to get this from web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: 'manaschoksiwork@gmail.com',
          subject: `Contact from ${formData.name} - GhostFlow Website`
        })
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
        setErrorMessage('Failed to send message. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Network error. Please try again.')
    }
  }

  return (
    <footer className="relative bg-[#0B0B0F] text-[#E8E8ED] border-t border-[#27272F] z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-[#E8E8ED]">GhostFlow</h3>
            <p className="text-[#8B8B9A] text-lg">
              High-performance machine learning framework built in Rust with Python bindings.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#E8E8ED]">Links</h4>
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
                    className="text-[#8B8B9A] hover:text-[#60A5FA] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Install */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#E8E8ED]">Install</h4>
            <code className="block px-4 py-2 bg-[#16161D] border border-[#27272F] text-sm font-mono mb-3 text-[#60A5FA] rounded-lg">
              pip install ghost-flow
            </code>
            <code className="block px-4 py-2 bg-[#16161D] border border-[#27272F] text-sm font-mono text-[#60A5FA] rounded-lg">
              cargo add ghost-flow
            </code>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#E8E8ED]">Contact</h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-3 py-2 bg-[#16161D] border border-[#27272F] rounded-lg text-[#E8E8ED] text-sm placeholder-[#8B8B9A] focus:border-[#60A5FA] focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-3 py-2 bg-[#16161D] border border-[#27272F] rounded-lg text-[#E8E8ED] text-sm placeholder-[#8B8B9A] focus:border-[#60A5FA] focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={3}
                className="w-full px-3 py-2 bg-[#16161D] border border-[#27272F] rounded-lg text-[#E8E8ED] text-sm placeholder-[#8B8B9A] focus:border-[#60A5FA] focus:outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-4 py-2 bg-[#60A5FA] text-[#0B0B0F] font-medium rounded-lg hover:bg-[#93C5FD] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
              >
                {status === 'loading' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 size={16} />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send
                  </>
                )}
              </button>
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-xs">
                  <AlertCircle size={14} />
                  {errorMessage || 'Failed to send message'}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#27272F] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8B8B9A] text-sm">
            © 2026 GhostFlow. Licensed under Apache 2.0 and MIT
          </p>
          <div className="flex gap-6">
            <Link href="https://github.com/choksi2212/ghost-flow/blob/main/LICENSE-APACHE" target="_blank" className="text-[#8B8B9A] hover:text-[#60A5FA] transition-colors text-sm">
              Apache License
            </Link>
            <Link href="https://github.com/choksi2212/ghost-flow/blob/main/LICENSE-MIT" target="_blank" className="text-[#8B8B9A] hover:text-[#60A5FA] transition-colors text-sm">
              MIT License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
