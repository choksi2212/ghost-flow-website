'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

interface SpringConfig {
  damping: number
  stiffness: number
  mass: number
  restDelta: number
}

interface SmoothCursorProps {
  cursor?: React.ReactNode
  springConfig?: SpringConfig
}

const defaultSpringConfig: SpringConfig = {
  damping: 25,
  stiffness: 300,
  mass: 0.5,
  restDelta: 0.0001,
}

const DefaultCursorSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 2L18 10L10 12L8 18L2 2Z"
      fill="#E8E8ED"
      stroke="#60A5FA"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
)

export function SmoothCursor({
  cursor = <DefaultCursorSVG />,
  springConfig = defaultSpringConfig,
}: SmoothCursorProps) {
  const [mounted, setMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const lastPositionRef = useRef({ x: 0, y: 0 })
  const lastTimeRef = useRef(Date.now())

  // Motion values for smooth animation
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const rotation = useMotionValue(0)

  // Spring animations
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)
  const springRotation = useSpring(rotation, {
    damping: 20,
    stiffness: 150,
    mass: 0.3,
  })

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now()
      const deltaTime = currentTime - lastTimeRef.current
      const deltaX = e.clientX - lastPositionRef.current.x
      const deltaY = e.clientY - lastPositionRef.current.y

      // Calculate rotation based on movement direction
      if (deltaTime > 0) {
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
        rotation.set(angle)
      }

      // Update position
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      // Store last position and time
      lastPositionRef.current = { x: e.clientX, y: e.clientY }
      lastTimeRef.current = currentTime
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseout', handleMouseOut, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [cursorX, cursorY, rotation])

  if (!mounted) return null

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        rotate: springRotation,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
        }}
      >
        {cursor}
      </motion.div>
    </motion.div>
  )
}
