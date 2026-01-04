'use client'

import { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const requestRef = useRef<number>()

  useEffect(() => {
    setMounted(true)
    
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    const animate = () => {
      setPosition({ x: mouseX, y: mouseY })
      requestRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseout', handleMouseOut, { passive: true })
    
    requestRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      className="fixed pointer-events-none mix-blend-difference"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        width: isHovering ? '40px' : '12px',
        height: isHovering ? '40px' : '12px',
        transition: 'width 0.2s ease-out, height 0.2s ease-out',
        willChange: 'transform',
        zIndex: 99999,
      }}
    >
      <div className="w-full h-full bg-white rounded-full" />
    </div>
  )
}
