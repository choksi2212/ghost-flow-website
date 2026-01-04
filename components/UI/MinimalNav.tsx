'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, BookOpen, Code2, Rocket, Github, ArrowRight } from 'lucide-react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import { useRouter } from 'next/navigation'

export default function MinimalNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    {
      href: '/features',
      label: 'Features',
      description: 'Explore powerful ML capabilities',
      icon: Zap,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      features: ['10x Faster', 'GPU Accelerated', 'Memory Safe']
    },
    {
      href: '/docs',
      label: 'Documentation',
      description: 'Complete API reference and guides',
      icon: BookOpen,
      gradient: 'from-purple-500/20 to-pink-500/20',
      features: ['API Reference', 'Tutorials', 'Examples']
    },
    {
      href: '/examples',
      label: 'Examples',
      description: 'Real-world code samples',
      icon: Code2,
      gradient: 'from-green-500/20 to-emerald-500/20',
      features: ['Neural Networks', 'Computer Vision', 'NLP']
    },
    {
      href: '/get-started',
      label: 'Get Started',
      description: 'Quick start guide',
      icon: Rocket,
      gradient: 'from-orange-500/20 to-red-500/20',
      features: ['5 Min Setup', 'Easy Install', 'Quick Start']
    },
    {
      href: 'https://github.com/choksi2212/ghost-flow',
      label: 'GitHub',
      description: 'View source code',
      icon: Github,
      gradient: 'from-gray-500/20 to-slate-500/20',
      features: ['Open Source', 'MIT License', 'Active Development']
    }
  ]

  const handleNavigation = async (href: string, isExternal: boolean) => {
    if (isExternal) {
      window.open(href, '_blank')
      setMenuOpen(false)
      return
    }

    setIsTransitioning(true)
    await new Promise(resolve => setTimeout(resolve, 600))
    router.push(href)
    setMenuOpen(false)
    setIsTransitioning(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-[#0B0B0F]/80 backdrop-blur-xl border-b border-[#27272F]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#E8E8ED] hover:text-[#60A5FA] transition-colors">
            GhostFlow
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#E8E8ED] text-sm font-medium hover:text-[#60A5FA] transition-colors"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </motion.nav>

      {/* ScrollStack menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#0B0B0F] z-50"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 md:right-12 text-[#E8E8ED] text-sm font-medium hover:text-[#60A5FA] transition-colors z-[60]"
            >
              Close
            </button>

            <ScrollStack className="h-screen" itemDistance={80} itemStackDistance={25}>
              {menuItems.map((item) => {
                const Icon = item.icon
                const isExternal = item.href.startsWith('http')
                
                return (
                  <ScrollStackItem
                    key={item.href}
                    itemClassName={`bg-gradient-to-br ${item.gradient} backdrop-blur-xl border-2 border-[#27272F] hover:border-[#60A5FA]/50 transition-all duration-300 cursor-pointer group overflow-hidden`}
                  >
                    <div
                      onClick={() => handleNavigation(item.href, isExternal)}
                      className="block h-full relative"
                    >
                      {/* Background glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between mb-6">
                            <div className="p-4 bg-[#60A5FA]/10 rounded-2xl border border-[#60A5FA]/20 group-hover:bg-[#60A5FA]/20 transition-all duration-300">
                              <Icon size={32} className="text-[#60A5FA]" />
                            </div>
                            <ArrowRight 
                              size={24} 
                              className="text-[#8B8B9A] group-hover:text-[#60A5FA] group-hover:translate-x-2 transition-all duration-300" 
                            />
                          </div>
                          
                          <h2 className="text-5xl md:text-6xl font-bold text-[#E8E8ED] mb-4 group-hover:text-[#60A5FA] transition-colors duration-300">
                            {item.label}
                          </h2>
                          <p className="text-xl text-[#8B8B9A] mb-6">{item.description}</p>
                        </div>

                        {/* Feature tags */}
                        <div className="flex flex-wrap gap-3">
                          {item.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-[#16161D]/80 border border-[#27272F] rounded-full text-sm text-[#8B8B9A] group-hover:border-[#60A5FA]/30 group-hover:text-[#E8E8ED] transition-all duration-300"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#60A5FA] rounded-full blur-[120px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    </div>
                  </ScrollStackItem>
                )
              })}
            </ScrollStack>

            {/* Page transition overlay */}
            <AnimatePresence>
              {isTransitioning && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  className="fixed inset-0 bg-[#60A5FA] z-[70] origin-bottom"
                >
                  <div className="flex items-center justify-center h-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-[#0B0B0F] text-4xl font-bold"
                    >
                      Loading...
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
