'use client'

import HeroFullscreen from '@/components/Hero/HeroFullscreen'
import FeatureSection from '@/components/Sections/FeatureSection'
import PremiumCodeSection from '@/components/Sections/PremiumCodeSection'
import ScrollSection from '@/components/Sections/ScrollSection'
import PageWrapper from '@/components/Layout/PageWrapper'
import ScrollFloat from '@/components/Effects/ScrollFloat'
import MagneticButton from '@/components/UI/MagneticButton'
import { Zap, Shield, Cpu, Award, Sparkles, Rocket, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <PageWrapper showFloatingShapes={false}>
      <HeroFullscreen />
      
      <FeatureSection
        title="Lightning Fast Performance"
        description="Experience unprecedented speed with SIMD-optimized tensor operations and intelligent multi-threading. GhostFlow delivers 10x faster inference compared to traditional frameworks, making real-time ML applications a reality."
        statNumber={10}
        stat="x"
        statLabel="Faster Inference"
        features={[
          "SIMD vectorization for maximum CPU utilization",
          "Intelligent work-stealing thread pool",
          "Zero-copy tensor operations",
          "Optimized memory layouts for cache efficiency"
        ]}
        theme="dark"
        icon={<Zap size={32} className="text-[#60A5FA]" />}
        learnMoreLink="/features/performance"
      />

      <FeatureSection
        title="GPU Acceleration"
        description="Harness the full power of modern GPUs with our hand-crafted CUDA kernels. From training massive models to real-time inference, GhostFlow scales seamlessly across multiple GPUs."
        statNumber={100}
        stat="+"
        statLabel="Optimized CUDA Kernels"
        features={[
          "Custom CUDA kernels for every operation",
          "Multi-GPU training with automatic sharding",
          "Mixed precision training (FP16/BF16)",
          "Kernel fusion for reduced memory bandwidth"
        ]}
        theme="light"
        icon={<Cpu size={32} className="text-[#60A5FA]" />}
        learnMoreLink="/features/gpu"
      />

      <FeatureSection
        title="Memory Safety Guaranteed"
        description="Built from the ground up in Rust, GhostFlow eliminates entire classes of bugs at compile time. No more segfaults, no more memory leaks, no more undefined behavior."
        stat="Zero"
        statLabel="Runtime Errors"
        features={[
          "Compile-time memory safety guarantees",
          "No garbage collection overhead",
          "Thread-safe by default",
          "Zero-cost abstractions"
        ]}
        theme="dark"
        icon={<Shield size={32} className="text-[#10B981]" />}
        learnMoreLink="/features/safety"
      />

      <PremiumCodeSection />

      <FeatureSection
        title="Battle Tested Reliability"
        description="Every line of code is rigorously tested and validated. With comprehensive test coverage and continuous integration, you can trust GhostFlow in production."
        statNumber={95}
        stat="%"
        statLabel="Code Coverage"
        features={[
          "Comprehensive unit and integration tests",
          "Property-based testing with QuickCheck",
          "Continuous benchmarking",
          "Production-ready from day one"
        ]}
        theme="light"
        icon={<Award size={32} className="text-[#60A5FA]" />}
        learnMoreLink="/features/reliability"
      />

      {/* CTA Section */}
      <ScrollSection className="bg-[#0B0B0F] text-[#E8E8ED] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#60A5FA] rounded-full blur-[150px] opacity-20 animate-pulse-glow" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#16161D] border border-[#27272F] rounded-full mb-8">
            <Sparkles size={16} className="text-[#60A5FA]" />
            <span className="text-sm text-[#8B8B9A]">Join 10,000+ Developers</span>
          </div>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8">
            <span className="bg-gradient-to-r from-[#E8E8ED] via-[#BFDBFE] to-[#E8E8ED] bg-clip-text text-transparent">
              Start Building Today
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-[#8B8B9A] max-w-4xl mx-auto font-light leading-relaxed mb-12 break-words">
            Join developers building production ML systems with GhostFlow. Get started in minutes, scale to millions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Link
              href="/get-started"
              className="group px-12 py-6 bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] text-[#000000] text-xl font-medium rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <Rocket size={20} />
                Get Started Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link
              href="https://github.com/choksi2212/ghost-flow"
              target="_blank"
              className="px-12 py-6 bg-[#16161D] border-2 border-[#27272F] text-[#E8E8ED] text-xl font-medium hover:border-[#60A5FA] hover:bg-[#16161D]/80 transition-all duration-300 rounded-xl backdrop-blur-sm"
            >
              View on GitHub
            </Link>
          </div>

          <div className="inline-block">
            <code className="px-6 py-3 bg-[#16161D]/80 border border-[#27272F] text-[#60A5FA] font-mono text-base rounded-lg backdrop-blur-sm">
              $ pip install ghost-flow
            </code>
          </div>
        </div>
      </ScrollSection>
    </PageWrapper>
  )
}
