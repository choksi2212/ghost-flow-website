'use client'

import { useRef, useState, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

export default function MagneticButton({ 
  children, 
  className = '', 
  href,
  onClick 
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const { width, height, left, top } = ref.current!.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x, y })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const Component = href ? 'a' : 'button'

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="inline-block"
    >
      <motion.div
        animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      >
        <Component
          href={href}
          onClick={onClick}
          className={`relative inline-block ${className}`}
        >
          {children}
        </Component>
      </motion.div>
    </div>
  )
}
