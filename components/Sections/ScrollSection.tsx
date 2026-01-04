'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ScrollSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function ScrollSection({ children, className = '', delay = 0 }: ScrollSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-15%' })

  return (
    <section
      ref={ref}
      className={`min-h-screen flex items-center justify-center relative ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  )
}
