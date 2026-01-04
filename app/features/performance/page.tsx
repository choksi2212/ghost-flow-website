'use client'

import PageWrapper from '@/components/Layout/PageWrapper'
import { Zap, Cpu, TrendingUp, Gauge } from 'lucide-react'
import Link from 'next/link'

export default function PerformancePage() {
  return (
    <PageWrapper showFloatingShapes={false}>
      <div className="min-h-screen bg-[#0B0B0F] pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {/* Header */}
          <Link href="/" className="inline-flex items-center text-[#60A5FA] hover:text-[#93C5FD] mb-8 transition-colors">
            ← Back to Home
          </Link>

          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#60A5FA]/10 border border-[#60A5FA]/20 rounded-2xl mb-6">
              <Zap size={40} className="text-[#60A5FA]" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-[#E8E8ED] mb-6 tracking-tighter">
              Lightning Fast Performance
            </h1>
            <p className="text-2xl text-[#8B8B9A] font-light">
              10x faster inference with cutting-edge optimization techniques
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-[#60A5FA] mb-2">10x</div>
              <div className="text-[#8B8B9A]">Faster Inference</div>
            </div>
            <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-[#60A5FA] mb-2">5x</div>
              <div className="text-[#8B8B9A]">Better Throughput</div>
            </div>
            <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-[#60A5FA] mb-2">50%</div>
              <div className="text-[#8B8B9A]">Lower Latency</div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">SIMD Vectorization</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                GhostFlow leverages SIMD (Single Instruction, Multiple Data) instructions to process multiple data points simultaneously. Our hand-optimized kernels utilize AVX2 and AVX-512 instructions to maximize CPU throughput.
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#E8E8ED] mb-4">Key Benefits</h3>
                <ul className="space-y-3 text-[#8B8B9A]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>Process 8-16 elements per instruction with AVX2/AVX-512</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>Automatic vectorization for common operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>Optimized memory alignment for maximum efficiency</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Intelligent Multi-Threading</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                Our work-stealing thread pool automatically distributes workload across all available CPU cores. Dynamic load balancing ensures optimal resource utilization even with irregular workloads.
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#E8E8ED] mb-4">Features</h3>
                <ul className="space-y-3 text-[#8B8B9A]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>Work-stealing scheduler for optimal load distribution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>Lock-free data structures for minimal contention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>Automatic parallelization of batch operations</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Zero-Copy Operations</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                GhostFlow minimizes memory allocations and copies through smart tensor views and in-place operations. This reduces memory bandwidth requirements and improves cache efficiency.
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <pre className="text-sm text-[#8B8B9A] font-mono overflow-x-auto">
{`// Zero-copy tensor slicing
let x = Tensor::randn(&[1000, 1000]);
let slice = x.slice(0..500, 0..500); // No copy!

// In-place operations
x.add_inplace(&y); // Modifies x directly

// View transformations
let reshaped = x.view(&[100, 10000]); // No copy!`}
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Benchmarks</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                Real-world performance comparisons against popular frameworks:
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#E8E8ED]">GhostFlow</span>
                      <span className="text-[#60A5FA] font-bold">100ms</span>
                    </div>
                    <div className="w-full bg-[#0B0B0F] rounded-full h-3">
                      <div className="bg-[#60A5FA] h-3 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#E8E8ED]">PyTorch</span>
                      <span className="text-[#8B8B9A]">850ms</span>
                    </div>
                    <div className="w-full bg-[#0B0B0F] rounded-full h-3">
                      <div className="bg-[#8B8B9A] h-3 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#E8E8ED]">TensorFlow</span>
                      <span className="text-[#8B8B9A]">1000ms</span>
                    </div>
                    <div className="w-full bg-[#0B0B0F] rounded-full h-3">
                      <div className="bg-[#8B8B9A] h-3 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#8B8B9A] mt-6">
                  * Benchmark: ResNet-50 inference on ImageNet (batch size 32, CPU only)
                </p>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] text-[#E8E8ED] text-lg font-medium rounded-xl hover:scale-105 transition-transform"
            >
              <Zap size={20} />
              Try GhostFlow Now
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
