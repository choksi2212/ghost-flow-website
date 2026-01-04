'use client'

import ScrollSection from '@/components/Sections/ScrollSection'
import FeatureSection from '@/components/Sections/FeatureSection'
import PageWrapper from '@/components/Layout/PageWrapper'

export default function Features() {
  return (
    <PageWrapper>
      <div className="pt-24">
        <ScrollSection className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-tighter">
              Features
            </h1>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Production-ready tools for modern machine learning
            </p>
          </div>
        </ScrollSection>

        <FeatureSection
          title="Comprehensive Algorithm Suite"
          description="Neural networks, ensemble methods, clustering algorithms, and dimensionality reduction. Unified API across all implementations."
          stat="50+"
          statLabel="Algorithms"
          theme="light"
        />

        <FeatureSection
          title="GPU Acceleration"
          description="Hand-optimized CUDA kernels with fused operations. Automatic memory management and efficient batch processing for maximum throughput."
          stat="3x"
          statLabel="Performance Gain"
          theme="dark"
        />

        <FeatureSection
          title="Type Safety"
          description="Rust's type system prevents common ML bugs at compile time. No runtime surprises, no memory leaks, no data races."
          stat="100%"
          statLabel="Memory Safe"
          theme="light"
        />

        <FeatureSection
          title="Production Quality"
          description="Extensive test coverage, continuous benchmarking, and comprehensive documentation. Built for teams that ship to production."
          stat="95%"
          statLabel="Test Coverage"
          theme="dark"
        />
      </div>
    </PageWrapper>
  )
}
