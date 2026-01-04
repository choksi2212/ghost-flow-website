'use client'

import PageWrapper from '@/components/Layout/PageWrapper'
import { Shield, Lock, CheckCircle2, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function SafetyPage() {
  return (
    <PageWrapper showFloatingShapes={false}>
      <div className="min-h-screen bg-[#0B0B0F] pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Link href="/" className="inline-flex items-center text-[#60A5FA] hover:text-[#93C5FD] mb-8 transition-colors">
            ← Back to Home
          </Link>

          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#10B981]/10 border border-[#10B981]/20 rounded-2xl mb-6">
              <Shield size={40} className="text-[#10B981]" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-[#E8E8ED] mb-6 tracking-tighter">
              Memory Safety Guaranteed
            </h1>
            <p className="text-2xl text-[#8B8B9A] font-light">
              Zero runtime errors with Rust's compile-time safety guarantees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-[#10B981] mb-2">Zero</div>
              <div className="text-[#8B8B9A]">Segfaults</div>
            </div>
            <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-[#10B981] mb-2">Zero</div>
              <div className="text-[#8B8B9A]">Memory Leaks</div>
            </div>
            <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-[#10B981] mb-2">Zero</div>
              <div className="text-[#8B8B9A]">Data Races</div>
            </div>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Compile-Time Safety</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                Rust's ownership system eliminates entire classes of bugs at compile time. If your code compiles, you can be confident it won't crash due to memory errors.
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#E8E8ED] mb-4">What Rust Prevents</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#10B981] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#E8E8ED] font-medium">Null Pointer Dereferences</div>
                      <div className="text-sm text-[#8B8B9A]">No null pointers in safe Rust</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#10B981] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#E8E8ED] font-medium">Use After Free</div>
                      <div className="text-sm text-[#8B8B9A]">Ownership prevents dangling pointers</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#10B981] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#E8E8ED] font-medium">Buffer Overflows</div>
                      <div className="text-sm text-[#8B8B9A]">Bounds checking on all array access</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#10B981] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#E8E8ED] font-medium">Data Races</div>
                      <div className="text-sm text-[#8B8B9A]">Thread safety guaranteed by type system</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">No Garbage Collection</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                Unlike Python or Java, GhostFlow doesn't need a garbage collector. Memory is automatically freed when it goes out of scope, giving you predictable performance without GC pauses.
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-[#E8E8ED] mb-3 flex items-center gap-2">
                      <AlertTriangle size={20} className="text-yellow-500" />
                      With GC (Python/Java)
                    </h4>
                    <ul className="space-y-2 text-[#8B8B9A]">
                      <li>• Unpredictable pause times</li>
                      <li>• Higher memory overhead</li>
                      <li>• Stop-the-world collections</li>
                      <li>• Tuning required</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#E8E8ED] mb-3 flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-[#10B981]" />
                      GhostFlow (Rust)
                    </h4>
                    <ul className="space-y-2 text-[#8B8B9A]">
                      <li>• Deterministic cleanup</li>
                      <li>• Minimal memory overhead</li>
                      <li>• No pause times</li>
                      <li>• Zero configuration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Thread Safety by Default</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                Rust's type system ensures thread safety at compile time. You can't accidentally share mutable data between threads - the compiler won't let you.
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <pre className="text-sm text-[#8B8B9A] font-mono overflow-x-auto">
{`// This won't compile - prevents data races!
let mut x = vec![1, 2, 3];
thread::spawn(|| {
    x.push(4); // Error: can't share mutable data
});

// Correct way - explicit synchronization
let x = Arc::new(Mutex::new(vec![1, 2, 3]));
let x_clone = x.clone();
thread::spawn(move || {
    x_clone.lock().unwrap().push(4); // Safe!
});`}
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Zero-Cost Abstractions</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                GhostFlow's high-level API compiles down to the same efficient machine code as hand-written C. You get safety without sacrificing performance.
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#E8E8ED] mb-4">Performance Comparison</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#E8E8ED]">GhostFlow (Rust)</span>
                      <span className="text-[#10B981] font-bold">100%</span>
                    </div>
                    <div className="w-full bg-[#0B0B0F] rounded-full h-3">
                      <div className="bg-[#10B981] h-3 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#E8E8ED]">Hand-written C</span>
                      <span className="text-[#8B8B9A]">98%</span>
                    </div>
                    <div className="w-full bg-[#0B0B0F] rounded-full h-3">
                      <div className="bg-[#8B8B9A] h-3 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#E8E8ED]">Python (NumPy)</span>
                      <span className="text-[#8B8B9A]">15%</span>
                    </div>
                    <div className="w-full bg-[#0B0B0F] rounded-full h-3">
                      <div className="bg-[#8B8B9A] h-3 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#8B8B9A] mt-6">
                  * Relative performance on tensor operations
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Production Ready</h2>
              <p className="text-xl text-[#8B8B9A] mb-6 leading-relaxed">
                Deploy with confidence knowing your ML models won't crash in production. GhostFlow's safety guarantees mean fewer bugs, less downtime, and happier users.
              </p>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Lock size={24} className="text-[#10B981] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-[#E8E8ED] font-medium mb-1">Memory Safe</div>
                      <div className="text-sm text-[#8B8B9A]">No segfaults or memory corruption</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock size={24} className="text-[#10B981] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-[#E8E8ED] font-medium mb-1">Thread Safe</div>
                      <div className="text-sm text-[#8B8B9A]">No data races or deadlocks</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock size={24} className="text-[#10B981] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-[#E8E8ED] font-medium mb-1">Type Safe</div>
                      <div className="text-sm text-[#8B8B9A]">Catch errors at compile time</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock size={24} className="text-[#10B981] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-[#E8E8ED] font-medium mb-1">Exception Safe</div>
                      <div className="text-sm text-[#8B8B9A]">Proper error handling with Result types</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#34D399] text-white text-lg font-medium rounded-xl hover:scale-105 transition-transform"
            >
              <Shield size={20} />
              Build Safe ML Systems
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
