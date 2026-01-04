'use client'

import { ReactNode } from 'react'
import CustomCursor from '@/components/Effects/CustomCursor'
import MinimalFooter from '@/components/UI/MinimalFooter'

interface PageWrapperProps {
  children: ReactNode
  showFloatingShapes?: boolean
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <CustomCursor />
      
      <div className="relative min-h-screen">
        <div className="relative z-10">
          {children}
        </div>
      </div>
      
      <MinimalFooter />
    </>
  )
}
