'use client'

import PageWrapper from '@/components/Layout/PageWrapper'
import Link from 'next/link'
import { BookOpen, Github, Package, Box } from 'lucide-react'

export default function Docs() {
  return (
    <PageWrapper showFloatingShapes={false}>
      <div className="min-h-screen bg-[#0B0B0F] pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h1 className="text-6xl md:text-7xl font-bold text-[#E8E8ED] mb-6 tracking-tighter">
            Documentation
          </h1>
          <p className="text-2xl text-[#8B8B9A] mb-16 font-light max-w-3xl">
            Everything you need to build with GhostFlow
          </p>

          <div className="space-y-16">
            {/* Installation */}
            <div>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Installation</h2>
              <p className="text-xl text-[#8B8B9A] mb-6">
                Install GhostFlow via your preferred package manager
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-[#16161D] border border-[#27272F] rounded-2xl hover:border-[#60A5FA]/30 transition-all">
                  <h3 className="text-xl font-bold text-[#E8E8ED] mb-3">Python</h3>
                  <code className="block px-4 py-3 bg-[#0B0B0F] border border-[#27272F] font-mono text-[#60A5FA] rounded-lg">
                    pip install ghost-flow
                  </code>
                </div>
                <div className="p-6 bg-[#16161D] border border-[#27272F] rounded-2xl hover:border-[#60A5FA]/30 transition-all">
                  <h3 className="text-xl font-bold text-[#E8E8ED] mb-3">Rust</h3>
                  <code className="block px-4 py-3 bg-[#0B0B0F] border border-[#27272F] font-mono text-[#60A5FA] rounded-lg">
                    cargo add ghost-flow
                  </code>
                </div>
              </div>
            </div>

            {/* Quick Example */}
            <div>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Quick Example</h2>
              <div className="bg-[#16161D] border border-[#27272F] rounded-2xl p-8">
                <pre className="font-mono text-sm text-[#8B8B9A] overflow-x-auto">
{`import ghost_flow as gf

# Create neural network
model = gf.nn.Sequential([
    gf.nn.Linear(784, 128),
    gf.nn.ReLU(),
    gf.nn.Dropout(0.2),
    gf.nn.Linear(128, 10)
])

# Training loop
optimizer = gf.optim.Adam(model.parameters(), lr=0.001)

for epoch in range(10):
    # Forward pass
    output = model(x_train)
    loss = gf.nn.cross_entropy(output, y_train)
    
    # Backward pass
    loss.backward()
    optimizer.step()
    optimizer.zero_grad()
    
    print(f"Epoch {epoch}: Loss = {loss.item():.4f}")`}
                </pre>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link 
                  href="https://docs.rs/ghost-flow" 
                  target="_blank"
                  className="group block p-8 bg-[#16161D] border border-[#27272F] rounded-2xl hover:border-[#60A5FA]/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#60A5FA]/10 rounded-xl border border-[#60A5FA]/20 group-hover:bg-[#60A5FA]/20 transition-all">
                      <BookOpen size={24} className="text-[#60A5FA]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#E8E8ED] mb-2 group-hover:text-[#60A5FA] transition-colors">
                        API Documentation
                      </h3>
                      <p className="text-[#8B8B9A]">Complete API reference with examples</p>
                    </div>
                  </div>
                </Link>
                
                <Link 
                  href="https://github.com/choksi2212/ghost-flow" 
                  target="_blank"
                  className="group block p-8 bg-[#16161D] border border-[#27272F] rounded-2xl hover:border-[#60A5FA]/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#60A5FA]/10 rounded-xl border border-[#60A5FA]/20 group-hover:bg-[#60A5FA]/20 transition-all">
                      <Github size={24} className="text-[#60A5FA]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#E8E8ED] mb-2 group-hover:text-[#60A5FA] transition-colors">
                        GitHub Repository
                      </h3>
                      <p className="text-[#8B8B9A]">Source code and examples</p>
                    </div>
                  </div>
                </Link>
                
                <Link 
                  href="https://pypi.org/project/ghost-flow/" 
                  target="_blank"
                  className="group block p-8 bg-[#16161D] border border-[#27272F] rounded-2xl hover:border-[#60A5FA]/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#60A5FA]/10 rounded-xl border border-[#60A5FA]/20 group-hover:bg-[#60A5FA]/20 transition-all">
                      <Package size={24} className="text-[#60A5FA]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#E8E8ED] mb-2 group-hover:text-[#60A5FA] transition-colors">
                        PyPI Package
                      </h3>
                      <p className="text-[#8B8B9A]">Python package information</p>
                    </div>
                  </div>
                </Link>
                
                <Link 
                  href="https://crates.io/crates/ghost-flow" 
                  target="_blank"
                  className="group block p-8 bg-[#16161D] border border-[#27272F] rounded-2xl hover:border-[#60A5FA]/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#60A5FA]/10 rounded-xl border border-[#60A5FA]/20 group-hover:bg-[#60A5FA]/20 transition-all">
                      <Box size={24} className="text-[#60A5FA]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#E8E8ED] mb-2 group-hover:text-[#60A5FA] transition-colors">
                        Crates.io
                      </h3>
                      <p className="text-[#8B8B9A]">Rust crate information</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Core Concepts */}
            <div>
              <h2 className="text-4xl font-bold text-[#E8E8ED] mb-6">Core Concepts</h2>
              <div className="space-y-4">
                <div className="p-6 bg-[#16161D] border border-[#27272F] rounded-2xl">
                  <h3 className="text-xl font-bold text-[#E8E8ED] mb-3">Tensors</h3>
                  <p className="text-[#8B8B9A]">
                    Multi-dimensional arrays with automatic differentiation support. GhostFlow tensors are memory-efficient and support both CPU and GPU operations.
                  </p>
                </div>
                <div className="p-6 bg-[#16161D] border border-[#27272F] rounded-2xl">
                  <h3 className="text-xl font-bold text-[#E8E8ED] mb-3">Neural Networks</h3>
                  <p className="text-[#8B8B9A]">
                    Build complex neural networks with our high-level API. Includes common layers, activation functions, and loss functions.
                  </p>
                </div>
                <div className="p-6 bg-[#16161D] border border-[#27272F] rounded-2xl">
                  <h3 className="text-xl font-bold text-[#E8E8ED] mb-3">Optimizers</h3>
                  <p className="text-[#8B8B9A]">
                    State-of-the-art optimization algorithms including Adam, SGD, RMSprop, and more. All optimizers support learning rate scheduling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
