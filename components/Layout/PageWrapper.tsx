'use client'

import { ReactNode } from 'react'
import { SmoothCursor } from '@/components/UI/SmoothCursor'
import MinimalFooter from '@/components/UI/MinimalFooter'

interface PageWrapperProps {
  children: ReactNode
  showFloatingShapes?: boolean
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <SmoothCursor />
      
      <div className="relative min-h-screen">
        <div className="relative z-10">
          {children}
        </div>
      </div>
      
      <MinimalFooter />
    </>
  )
}
