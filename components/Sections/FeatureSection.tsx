'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface FeatureSectionProps {
  title: string
  description: string
  stat?: string
  statLabel?: string
  theme?: 'dark' | 'light'
}

export default function FeatureSection({ 
  title, 
  description, 
  stat, 
  statLabel,
  theme = 'dark' 
}: FeatureSectionProps) {
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-15%' })

  return (
    <section 
      ref={ref}
      className={`min-h-screen flex items-center justify-center relative ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter leading-none">
              {title}
            </h2>
            <p className={`text-2xl md:text-3xl font-light leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {description}
            </p>
          </motion.div>

          {stat && (
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-center lg:text-right"
            >
              <div className="text-8xl md:text-9xl font-bold mb-4 tracking-tighter">
                {stat}
              </div>
              {statLabel && (
                <div className={`text-2xl font-light ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                  {statLabel}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
