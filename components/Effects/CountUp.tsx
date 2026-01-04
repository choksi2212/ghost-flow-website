'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export default function CountUp({ 
  end, 
  duration = 2, 
  suffix = '', 
  className = '' 
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      let startTime: number | null = null
      const startValue = 0

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        // Easing function (easeOutCubic)
        const easeProgress = 1 - Math.pow(1 - progress, 3)
        const currentCount = Math.floor(easeProgress * (end - startValue) + startValue)
        
        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}
