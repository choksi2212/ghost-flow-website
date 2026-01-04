'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CountUp from '@/components/Effects/CountUp'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

interface FeatureSectionProps {
  title: string
  description: string
  stat?: string
  statNumber?: number
  statLabel?: string
  features?: string[]
  theme?: 'dark' | 'light'
  icon?: React.ReactNode
  learnMoreLink?: string
}

export default function FeatureSection({ 
  title, 
  description, 
  stat,
  statNumber, 
  statLabel,
  features = [],
  theme = 'dark',
  icon,
  learnMoreLink
}: FeatureSectionProps) {
  const isDark = theme === 'dark'
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const statRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate title
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
            }
          }
        )
      }

      // Animate description
      if (descRef.current) {
        gsap.fromTo(descRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: descRef.current,
              start: 'top 80%',
            }
          }
        )
      }

      // Animate features
      if (featuresRef.current) {
        const featureItems = featuresRef.current.querySelectorAll('.feature-item')
        gsap.fromTo(featureItems,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: featuresRef.current,
              start: 'top 80%',
            }
          }
        )
      }

      // Animate stat card
      if (statRef.current) {
        gsap.fromTo(statRef.current,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: statRef.current,
              start: 'top 80%',
            }
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const StatCard = () => (
    <div ref={statRef} className="relative">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#60A5FA] rounded-full blur-[100px] opacity-20 animate-pulse-glow" />
      
      <div className="relative bg-[#16161D]/50 border border-[#27272F] rounded-3xl p-12 backdrop-blur-sm hover:border-[#60A5FA]/30 transition-all duration-500 group">
        <div className="text-center">
          <div className="text-7xl md:text-8xl font-bold mb-4 tracking-tighter text-[#E8E8ED]">
            {statNumber ? (
              <CountUp end={statNumber} duration={2} suffix={stat || ''} />
            ) : (
              <span>{stat}</span>
            )}
          </div>
          
          {statLabel && (
            <div className="text-2xl font-light text-[#8B8B9A] mb-6">
              {statLabel}
            </div>
          )}

          {learnMoreLink && (
            <Link href={learnMoreLink} className="flex items-center justify-center gap-2 text-[#60A5FA] opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-sm font-medium">Learn more</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <section 
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        isDark ? 'bg-[#0B0B0F] text-[#E8E8ED]' : 'bg-[#16161D] text-[#E8E8ED]'
      }`}
    >
      {isDark && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#60A5FA] rounded-full blur-[150px] opacity-10" />
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {icon && (
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#60A5FA]/10 border border-[#60A5FA]/20 rounded-2xl mb-6 glow">
                {icon}
              </div>
            )}

            <h2 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-6 break-words">
              {title}
            </h2>
            
            <p ref={descRef} className="text-xl md:text-2xl font-light leading-relaxed text-[#8B8B9A] mb-8 break-words">
              {description}
            </p>

            {features.length > 0 && (
              <div ref={featuresRef} className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="feature-item flex items-start gap-3 group"
                  >
                    <CheckCircle2 
                      size={24} 
                      className="text-[#10B981] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" 
                    />
                    <span className="text-lg text-[#8B8B9A] group-hover:text-[#E8E8ED] transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {(stat || statNumber) && <StatCard />}
        </div>
      </div>
    </section>
  )
}
