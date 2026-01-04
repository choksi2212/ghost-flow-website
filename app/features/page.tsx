'use client'

import PageWrapper from '@/components/Layout/PageWrapper'
import { Zap, Shield, Cpu, Award, Sparkles, Code2, ArrowRight, CheckCircle2, TrendingUp, Lock, Gauge } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "10x faster inference with SIMD optimization and intelligent multi-threading",
    stats: "10x Faster",
    link: "/features/performance",
    highlights: ["SIMD Vectorization", "Multi-threading", "Zero-copy Operations"]
  },
  {
    icon: Cpu,
    title: "GPU Accelerated",
    description: "100+ hand-optimized CUDA kernels for maximum performance",
    stats: "100+ Kernels",
    link: "/features/gpu",
    highlights: ["Custom CUDA", "Multi-GPU", "Mixed Precision"]
  },
  {
    icon: Shield,
    title: "Memory Safe",
    description: "Built in Rust with compile-time safety guarantees",
    stats: "Zero Errors",
    link: "/features/safety",
    highlights: ["Compile-time Safety", "No GC", "Thread Safe"]
  },
  {
    icon: Award,
    title: "Battle Tested",
    description: "95% code coverage with comprehensive testing",
    stats: "95% Coverage",
    link: "/features/reliability",
    highlights: ["5000+ Tests", "CI/CD", "Benchmarked"]
  },
  {
    icon: Sparkles,
    title: "Easy to Use",
    description: "Simple Python API that feels natural and intuitive",
    stats: "5 Min Setup",
    link: "/get-started",
    highlights: ["Python API", "Type Hints", "Great Docs"]
  },
  {
    icon: Code2,
    title: "Production Ready",
    description: "Used by teams in production environments worldwide",
    stats: "Production",
    link: "/examples",
    highlights: ["Stable API", "Active Support", "Real Usage"]
  },
]

export default function FeaturesPage() {
  return (
    <PageWrapper showFloatingShapes={false}>
      <div className="min-h-screen bg-[#0B0B0F] pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#60A5FA] rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#60A5FA] rounded-full blur-[150px] opacity-10" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#16161D] border border-[#27272F] rounded-full mb-6">
              <Sparkles size={16} className="text-[#60A5FA]" />
              <span className="text-sm text-[#8B8B9A]">Production-Ready Features</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-[#E8E8ED] mb-6 tracking-tighter">
              Features
            </h1>
            <p className="text-2xl text-[#8B8B9A] font-light max-w-3xl mx-auto">
              Everything you need to build production ML systems
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link
                  key={index}
                  href={feature.link}
                  className="group block"
                >
                  <div className="relative bg-[#16161D] border-2 border-[#27272F] rounded-2xl p-8 hover:border-[#60A5FA]/50 transition-all duration-300 h-full">
                    {/* Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-4 bg-[#60A5FA]/10 rounded-2xl border border-[#60A5FA]/20 group-hover:bg-[#60A5FA]/20 transition-all">
                        <Icon size={32} className="text-[#60A5FA]" />
                      </div>
                      <ArrowRight size={20} className="text-[#8B8B9A] group-hover:text-[#60A5FA] group-hover:translate-x-1 transition-all" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-[#E8E8ED] mb-3 group-hover:text-[#60A5FA] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[#8B8B9A] mb-6">
                      {feature.description}
                    </p>

                    {/* Stats */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#60A5FA]/10 border border-[#60A5FA]/20 rounded-full mb-6">
                      <TrendingUp size={14} className="text-[#60A5FA]" />
                      <span className="text-sm font-medium text-[#60A5FA]">{feature.stats}</span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {feature.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#10B981] flex-shrink-0" />
                          <span className="text-sm text-[#8B8B9A]">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#60A5FA] rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  </div>
                </Link>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#60A5FA]/10 to-transparent border border-[#60A5FA]/20 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-[#E8E8ED] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#8B8B9A] mb-8 max-w-2xl mx-auto">
              Install GhostFlow and start building production ML systems in minutes
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] text-[#0B0B0F] font-bold rounded-xl hover:scale-105 transition-transform"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
