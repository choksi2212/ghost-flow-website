'use client'

import PageWrapper from '@/components/Layout/PageWrapper'
import { Award, CheckCircle2, Target, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function ReliabilityPage() {
  return (
    <PageWrapper showFloatingShapes={false}>
      <div className="min-h-screen bg-[#0B0B0F] pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Link href="/" className="inline-flex items-center text-[#60A5FA] hover:text-[#93C5FD] mb-8 transition-colors">
            ← Back to Home
          </Link>

          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#60A5FA]/10 border border-[#60A5FA]/20 rounded-2xl mb-6">
              <Award size={40} className="text-[#60A5FA]" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-[#E8E8ED] mb-6 tracking-tighter">
              Battle Tested Reliability
            </h1>
            <p className="text-2xl text-[#8B8B9A] font-light">
              95% code coverage with comprehensive testing and validation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-[#60A5FA] mb-2">95%</div>
              <div className="text-[#8B8B9A]">Code Coverage</div>
            </div>
            <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-[#60A5FA] mb-2">5000+</div>
              <div className="text-[#8B8B9A]">Test Cases</div>
            </div>
            <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-[#60A5FA] mb-2">100%</div>
              <div className="text-[#8B8B9A]">CI/CD Coverage</div>
            </div>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Comprehensive Testing</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                Every feature in GhostFlow is thoroughly tested with unit tests, integration tests, and end-to-end tests. We don't ship code without comprehensive test coverage.
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#E8E8ED] mb-4">Testing Layers</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-[#10B981] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-[#E8E8ED] font-medium mb-1">Unit Tests</div>
                      <div className="text-[#8B8B9A]">Test individual functions and modules in isolation</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-[#10B981] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-[#E8E8ED] font-medium mb-1">Integration Tests</div>
                      <div className="text-[#8B8B9A]">Verify components work together correctly</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-[#10B981] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-[#E8E8ED] font-medium mb-1">End-to-End Tests</div>
                      <div className="text-[#8B8B9A]">Test complete workflows from start to finish</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-[#10B981] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-[#E8E8ED] font-medium mb-1">Performance Tests</div>
                      <div className="text-[#8B8B9A]">Ensure operations meet performance targets</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Property-Based Testing</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                We use QuickCheck for property-based testing, automatically generating thousands of test cases to find edge cases that manual testing might miss.
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <pre className="text-sm text-[#8B8B9A] font-mono overflow-x-auto">
{`#[quickcheck]
fn test_matmul_associative(a: Tensor, b: Tensor, c: Tensor) {
    // (A @ B) @ C == A @ (B @ C)
    let left = (a.matmul(&b)).matmul(&c);
    let right = a.matmul(&(b.matmul(&c)));
    assert_tensors_close(&left, &right, 1e-5);
}

#[quickcheck]
fn test_transpose_involution(x: Tensor) {
    // Transpose twice returns original
    let result = x.transpose().transpose();
    assert_eq!(x, result);
}`}
                </pre>
                <p className="text-sm text-[#8B8B9A] mt-4">
                  QuickCheck automatically generates random tensors and verifies mathematical properties hold
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Continuous Benchmarking</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                Performance regressions are caught automatically with our continuous benchmarking system. Every commit is benchmarked against the previous version.
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#E8E8ED] mb-4">Benchmarked Operations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#8B8B9A]">
                  <div>• Matrix multiplication</div>
                  <div>• Convolution operations</div>
                  <div>• Activation functions</div>
                  <div>• Gradient computation</div>
                  <div>• Memory allocation</div>
                  <div>• Data loading</div>
                </div>
                <div className="mt-6 p-4 bg-[#0B0B0F] rounded-lg">
                  <div className="text-sm text-[#8B8B9A] mb-2">Example Benchmark Result:</div>
                  <code className="text-xs text-[#10B981]">
                    matmul/1000x1000    time: [98.2 ms 98.5 ms 98.8 ms]<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;change: [-2.1% -1.8% -1.5%] (improvement)
                  </code>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Production Ready</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                GhostFlow is used in production by teams around the world. Our rigorous testing and validation process ensures you can deploy with confidence.
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#E8E8ED] mb-4">Production Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Target size={24} className="text-[#60A5FA] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-[#E8E8ED] font-medium mb-1">Stable API</div>
                      <div className="text-sm text-[#8B8B9A]">Semantic versioning with no breaking changes</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target size={24} className="text-[#60A5FA] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-[#E8E8ED] font-medium mb-1">Comprehensive Docs</div>
                      <div className="text-sm text-[#8B8B9A]">Every function documented with examples</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target size={24} className="text-[#60A5FA] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-[#E8E8ED] font-medium mb-1">Error Messages</div>
                      <div className="text-sm text-[#8B8B9A]">Clear, actionable error messages</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target size={24} className="text-[#60A5FA] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-[#E8E8ED] font-medium mb-1">Active Support</div>
                      <div className="text-sm text-[#8B8B9A]">Responsive community and maintainers</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Continuous Integration</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                Every pull request is automatically tested on multiple platforms and configurations before merging.
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#E8E8ED] mb-4">CI Pipeline</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[#8B8B9A]">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                    <span>Build on Linux, macOS, and Windows</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#8B8B9A]">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                    <span>Run 5000+ test cases</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#8B8B9A]">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                    <span>Check code coverage (must be &gt; 90%)</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#8B8B9A]">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                    <span>Run benchmarks and check for regressions</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#8B8B9A]">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                    <span>Lint code and check formatting</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#8B8B9A]">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                    <span>Build and test documentation</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] text-[#E8E8ED] text-lg font-medium rounded-xl hover:scale-105 transition-transform"
            >
              <Award size={20} />
              Deploy with Confidence
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
