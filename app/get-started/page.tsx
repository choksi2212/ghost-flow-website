'use client'

import PageWrapper from '@/components/Layout/PageWrapper'
import Link from 'next/link'
import { Terminal, Code2, Rocket, BookOpen, Github, Package, CheckCircle2, Zap, Copy } from 'lucide-react'
import { useState } from 'react'

export default function GetStarted() {
  const [copiedPython, setCopiedPython] = useState(false)
  const [copiedRust, setCopiedRust] = useState(false)

  const copyToClipboard = (text: string, lang: 'python' | 'rust') => {
    navigator.clipboard.writeText(text)
    if (lang === 'python') {
      setCopiedPython(true)
      setTimeout(() => setCopiedPython(false), 2000)
    } else {
      setCopiedRust(true)
      setTimeout(() => setCopiedRust(false), 2000)
    }
  }

  return (
    <PageWrapper showFloatingShapes={false}>
      <div className="min-h-screen bg-[#0B0B0F] pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#60A5FA] rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#60A5FA] rounded-full blur-[150px] opacity-10" />
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#16161D] border border-[#27272F] rounded-full mb-6">
              <Rocket size={16} className="text-[#60A5FA]" />
              <span className="text-sm text-[#8B8B9A]">Ready in 5 minutes</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tighter text-[#E8E8ED]">
              Get Started
            </h1>
            <p className="text-2xl text-[#8B8B9A] font-light max-w-3xl mx-auto">
              Install GhostFlow and start building production ML systems in minutes
            </p>
          </div>

          {/* Installation Steps */}
          <div className="space-y-20">
            {/* Step 1: Installation */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-[#60A5FA]/10 border border-[#60A5FA]/20 rounded-xl">
                  <span className="text-2xl font-bold text-[#60A5FA]">1</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-[#E8E8ED]">Installation</h2>
                  <p className="text-lg text-[#8B8B9A]">Choose your language and install</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group p-8 bg-gradient-to-br from-[#16161D] to-[#0B0B0F] border-2 border-[#27272F] rounded-2xl hover:border-[#60A5FA]/50 transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-[#60A5FA]/10 rounded-xl border border-[#60A5FA]/20">
                        <Terminal size={24} className="text-[#60A5FA]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#E8E8ED]">Python</h3>
                    </div>
                    <button
                      onClick={() => copyToClipboard('pip install ghost-flow', 'python')}
                      className="p-2 hover:bg-[#60A5FA]/10 rounded-lg transition-colors"
                    >
                      {copiedPython ? (
                        <CheckCircle2 size={20} className="text-[#10B981]" />
                      ) : (
                        <Copy size={20} className="text-[#8B8B9A]" />
                      )}
                    </button>
                  </div>
                  <code className="block px-4 py-3 bg-[#0B0B0F] border border-[#27272F] font-mono text-lg text-[#60A5FA] rounded-lg">
                    pip install ghost-flow
                  </code>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#0B0B0F] border border-[#27272F] rounded-full text-xs text-[#8B8B9A]">
                      Python 3.8+
                    </span>
                    <span className="px-3 py-1 bg-[#0B0B0F] border border-[#27272F] rounded-full text-xs text-[#8B8B9A]">
                      PyPI
                    </span>
                  </div>
                </div>

                <div className="group p-8 bg-gradient-to-br from-[#16161D] to-[#0B0B0F] border-2 border-[#27272F] rounded-2xl hover:border-[#60A5FA]/50 transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-[#60A5FA]/10 rounded-xl border border-[#60A5FA]/20">
                        <Package size={24} className="text-[#60A5FA]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#E8E8ED]">Rust</h3>
                    </div>
                    <button
                      onClick={() => copyToClipboard('cargo add ghost-flow', 'rust')}
                      className="p-2 hover:bg-[#60A5FA]/10 rounded-lg transition-colors"
                    >
                      {copiedRust ? (
                        <CheckCircle2 size={20} className="text-[#10B981]" />
                      ) : (
                        <Copy size={20} className="text-[#8B8B9A]" />
                      )}
                    </button>
                  </div>
                  <code className="block px-4 py-3 bg-[#0B0B0F] border border-[#27272F] font-mono text-lg text-[#60A5FA] rounded-lg">
                    cargo add ghost-flow
                  </code>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#0B0B0F] border border-[#27272F] rounded-full text-xs text-[#8B8B9A]">
                      Rust 1.70+
                    </span>
                    <span className="px-3 py-1 bg-[#0B0B0F] border border-[#27272F] rounded-full text-xs text-[#8B8B9A]">
                      Crates.io
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Quick Start */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-[#60A5FA]/10 border border-[#60A5FA]/20 rounded-xl">
                  <span className="text-2xl font-bold text-[#60A5FA]">2</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-[#E8E8ED]">Write Your First Model</h2>
                  <p className="text-lg text-[#8B8B9A]">Create a neural network in seconds</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#16161D] border border-[#27272F] rounded-2xl overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-4 bg-[#0B0B0F] border-b border-[#27272F]">
                    <div className="flex items-center gap-3">
                      <Code2 size={20} className="text-[#60A5FA]" />
                      <span className="font-mono text-sm text-[#E8E8ED]">example.py</span>
                    </div>
                    <span className="px-3 py-1 bg-[#60A5FA]/10 border border-[#60A5FA]/20 rounded-full text-xs text-[#60A5FA]">
                      Python
                    </span>
                  </div>
                  <pre className="px-8 py-6 font-mono text-sm text-[#8B8B9A] overflow-x-auto">
{`import ghost_flow as gf

# Create tensors
x = gf.Tensor.randn([1000, 1000])
y = gf.Tensor.randn([1000, 1000])

# Matrix multiply
z = x @ y

# Neural network
model = gf.nn.Sequential([
    gf.nn.Linear(784, 128),
    gf.nn.ReLU(),
    gf.nn.Linear(128, 10)
])

# Training
optimizer = gf.optim.Adam(model.parameters())
for epoch in range(10):
    loss = model.train_step(x_train, y_train)
    optimizer.step()`}
                  </pre>
                </div>

                <div className="bg-[#16161D] border border-[#27272F] rounded-2xl overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-4 bg-[#0B0B0F] border-b border-[#27272F]">
                    <div className="flex items-center gap-3">
                      <Code2 size={20} className="text-[#60A5FA]" />
                      <span className="font-mono text-sm text-[#E8E8ED]">main.rs</span>
                    </div>
                    <span className="px-3 py-1 bg-[#60A5FA]/10 border border-[#60A5FA]/20 rounded-full text-xs text-[#60A5FA]">
                      Rust
                    </span>
                  </div>
                  <pre className="px-8 py-6 font-mono text-sm text-[#8B8B9A] overflow-x-auto">
{`use ghost_flow::prelude::*;

fn main() {
    // Create tensors
    let x = Tensor::randn(&[1000, 1000]);
    let y = Tensor::randn(&[1000, 1000]);
    
    // Matrix multiply
    let z = x.matmul(&y);
    
    // Neural network
    let model = Sequential::new(vec![
        Box::new(Linear::new(784, 128)),
        Box::new(ReLU),
        Box::new(Linear::new(128, 10)),
    ]);
    
    println!("GhostFlow is ready!");
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Step 3: Next Steps */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-[#60A5FA]/10 border border-[#60A5FA]/20 rounded-xl">
                  <span className="text-2xl font-bold text-[#60A5FA]">3</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-[#E8E8ED]">Explore More</h2>
                  <p className="text-lg text-[#8B8B9A]">Dive deeper into GhostFlow</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link 
                  href="/docs" 
                  className="group block p-8 bg-[#16161D] border border-[#27272F] rounded-2xl hover:border-[#60A5FA]/50 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-[#60A5FA]/10 rounded-xl border border-[#60A5FA]/20 group-hover:bg-[#60A5FA]/20 transition-all">
                      <BookOpen size={24} className="text-[#60A5FA]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#E8E8ED] mb-2 group-hover:text-[#60A5FA] transition-colors">
                        Documentation
                      </h3>
                      <p className="text-[#8B8B9A]">Complete API reference</p>
                    </div>
                  </div>
                </Link>
                
                <Link 
                  href="/examples" 
                  className="group block p-8 bg-[#16161D] border border-[#27272F] rounded-2xl hover:border-[#60A5FA]/50 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-[#60A5FA]/10 rounded-xl border border-[#60A5FA]/20 group-hover:bg-[#60A5FA]/20 transition-all">
                      <Code2 size={24} className="text-[#60A5FA]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#E8E8ED] mb-2 group-hover:text-[#60A5FA] transition-colors">
                        Examples
                      </h3>
                      <p className="text-[#8B8B9A]">Real-world code samples</p>
                    </div>
                  </div>
                </Link>
                
                <Link 
                  href="https://github.com/choksi2212/ghost-flow" 
                  target="_blank"
                  className="group block p-8 bg-[#16161D] border border-[#27272F] rounded-2xl hover:border-[#60A5FA]/50 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-[#60A5FA]/10 rounded-xl border border-[#60A5FA]/20 group-hover:bg-[#60A5FA]/20 transition-all">
                      <Github size={24} className="text-[#60A5FA]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#E8E8ED] mb-2 group-hover:text-[#60A5FA] transition-colors">
                        GitHub
                      </h3>
                      <p className="text-[#8B8B9A]">Source code & issues</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-[#60A5FA]/5 to-transparent border border-[#60A5FA]/20 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <Zap size={32} className="text-[#60A5FA] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-[#E8E8ED] mb-4">Pro Tips</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#10B981] flex-shrink-0 mt-1" />
                      <span className="text-[#8B8B9A]">Use <code className="px-2 py-1 bg-[#0B0B0F] border border-[#27272F] rounded text-[#60A5FA] font-mono text-sm">device='cuda'</code> for GPU acceleration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#10B981] flex-shrink-0 mt-1" />
                      <span className="text-[#8B8B9A]">Enable mixed precision with <code className="px-2 py-1 bg-[#0B0B0F] border border-[#27272F] rounded text-[#60A5FA] font-mono text-sm">dtype='float16'</code></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#10B981] flex-shrink-0 mt-1" />
                      <span className="text-[#8B8B9A]">Check out the examples folder for production-ready templates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
