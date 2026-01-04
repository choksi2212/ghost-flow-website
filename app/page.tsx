'use client'

import HeroFullscreen from '@/components/Hero/HeroFullscreen'
import FeatureSection from '@/components/Sections/FeatureSection'
import CodeSection from '@/components/Sections/CodeSection'
import ScrollSection from '@/components/Sections/ScrollSection'
import PageWrapper from '@/components/Layout/PageWrapper'
import Link from 'next/link'

export default function Home() {
  return (
    <PageWrapper showFloatingShapes={false}>
      <HeroFullscreen />
      
      <FeatureSection
        title="Enterprise-Grade Performance"
        description="Optimized tensor operations with SIMD vectorization and multi-threaded execution. Built for production workloads that demand reliability and speed."
        stat="10x"
        statLabel="Faster Inference"
        theme="dark"
      />

      <FeatureSection
        title="CUDA Acceleration"
        description="Native GPU support with hand-optimized CUDA kernels. Leverage the full power of NVIDIA hardware for training and inference at scale."
        stat="100+"
        statLabel="CUDA Kernels"
        theme="light"
      />

      <FeatureSection
        title="Memory Safety Guaranteed"
        description="Written in Rust with zero-cost abstractions. Compile-time guarantees eliminate entire classes of bugs common in ML frameworks."
        stat="Zero"
        statLabel="Runtime Errors"
        theme="dark"
      />

      <CodeSection />

      <FeatureSection
        title="Battle-Tested Reliability"
        description="Comprehensive test coverage with continuous integration. Every commit is validated against our extensive benchmark suite."
        stat="95%"
        statLabel="Code Coverage"
        theme="light"
      />

      {/* CTA Section */}
      <ScrollSection className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-12 tracking-tighter">
            Start Building
          </h2>
          <p className="text-2xl md:text-3xl text-gray-400 mb-16 max-w-3xl mx-auto font-light">
            Join teams using GhostFlow to build production ML systems
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/get-started"
              className="px-12 py-6 bg-white text-black text-xl font-medium hover:bg-gray-200 transition-all"
            >
              Get Started
            </Link>
            <Link
              href="https://github.com/choksi2212/ghost-flow"
              target="_blank"
              className="px-12 py-6 border-2 border-white text-white text-xl font-medium hover:bg-white hover:text-black transition-all"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </ScrollSection>
    </PageWrapper>
  )
}
