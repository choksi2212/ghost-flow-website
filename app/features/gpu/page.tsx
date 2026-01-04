'use client'

import PageWrapper from '@/components/Layout/PageWrapper'
import { Cpu, Zap, Layers, Activity } from 'lucide-react'
import Link from 'next/link'

export default function GPUPage() {
  return (
    <PageWrapper showFloatingShapes={false}>
      <div className="min-h-screen bg-[#0B0B0F] pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Link href="/" className="inline-flex items-center text-[#60A5FA] hover:text-[#93C5FD] mb-8 transition-colors">
            ← Back to Home
          </Link>

          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#60A5FA]/10 border border-[#60A5FA]/20 rounded-2xl mb-6">
              <Cpu size={40} className="text-[#60A5FA]" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-[#E8E8ED] mb-6 tracking-tighter">
              GPU Acceleration
            </h1>
            <p className="text-2xl text-[#8B8B9A] font-light">
              100+ hand-optimized CUDA kernels for maximum GPU performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-[#60A5FA] mb-2">100+</div>
              <div className="text-[#8B8B9A]">CUDA Kernels</div>
            </div>
            <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-[#60A5FA] mb-2">8x</div>
              <div className="text-[#8B8B9A]">GPU Speedup</div>
            </div>
            <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-[#60A5FA] mb-2">95%</div>
              <div className="text-[#8B8B9A]">GPU Utilization</div>
            </div>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Custom CUDA Kernels</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                Every operation in GhostFlow has a hand-optimized CUDA kernel. We don't rely on generic implementations - each kernel is carefully tuned for maximum performance on modern NVIDIA GPUs.
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#E8E8ED] mb-4">Optimized Operations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#8B8B9A]">
                  <div className="flex items-start gap-3">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>Matrix multiplication (GEMM)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>Convolution (2D/3D)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>Batch normalization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>Attention mechanisms</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>Activation functions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>Pooling operations</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Multi-GPU Training</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                Scale your training across multiple GPUs with automatic data and model parallelism. GhostFlow handles all the complexity of distributed training.
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <pre className="text-sm text-[#8B8B9A] font-mono overflow-x-auto">
{`// Automatic multi-GPU training
model.compile(
    optimizer='adam',
    devices=['cuda:0', 'cuda:1', 'cuda:2', 'cuda:3']
)

// Data parallelism - automatic batch splitting
model.fit(
    X_train, y_train,
    batch_size=1024,  // Split across 4 GPUs
    epochs=100
)

// Model parallelism for large models
model = gf.nn.Sequential([
    gf.nn.Linear(10000, 10000).to('cuda:0'),
    gf.nn.ReLU(),
    gf.nn.Linear(10000, 1000).to('cuda:1'),
])`}
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Mixed Precision Training</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                Train faster with FP16 and BF16 precision while maintaining model accuracy. Automatic loss scaling prevents underflow and overflow.
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#E8E8ED] mb-4">Benefits</h3>
                <ul className="space-y-3 text-[#8B8B9A]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>2x faster training with FP16</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>50% less memory usage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>Automatic loss scaling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>No accuracy loss with proper tuning</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Kernel Fusion</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                GhostFlow automatically fuses multiple operations into single kernels, reducing memory bandwidth and improving performance.
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-[#E8E8ED] mb-2">Before Fusion</h4>
                    <code className="text-sm text-[#8B8B9A]">x → ReLU → BatchNorm → Dropout (3 kernel launches)</code>
                  </div>
                  <div className="text-[#60A5FA] text-2xl text-center">↓</div>
                  <div>
                    <h4 className="text-lg font-bold text-[#E8E8ED] mb-2">After Fusion</h4>
                    <code className="text-sm text-[#10B981]">x → FusedReLU_BN_Dropout (1 kernel launch)</code>
                  </div>
                </div>
                <p className="text-sm text-[#8B8B9A] mt-6">
                  Result: 3x fewer memory reads/writes, 40% faster execution
                </p>
              </div>
            </section>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] text-[#E8E8ED] text-lg font-medium rounded-xl hover:scale-105 transition-transform"
            >
              <Cpu size={20} />
              Start Using GPU Acceleration
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
