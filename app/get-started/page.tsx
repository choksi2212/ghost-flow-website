'use client'

import ScrollSection from '@/components/Sections/ScrollSection'
import PageWrapper from '@/components/Layout/PageWrapper'
import Link from 'next/link'

export default function GetStarted() {
  return (
    <PageWrapper>
      <div className="pt-24">
        <ScrollSection className="bg-black text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <h1 className="text-7xl md:text-9xl font-bold mb-12 tracking-tighter">
              Get Started
            </h1>

            <div className="space-y-16">
              {/* Installation */}
              <div>
                <h2 className="text-5xl font-bold mb-8">Installation</h2>
                <p className="text-2xl text-gray-400 mb-8">
                  Choose your preferred language and install in seconds
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 bg-white/5 border border-white/10">
                    <h3 className="text-2xl font-bold mb-4">Python</h3>
                    <code className="block px-4 py-3 bg-black border border-white/20 font-mono text-lg">
                      pip install ghost-flow
                    </code>
                  </div>
                  <div className="p-8 bg-white/5 border border-white/10">
                    <h3 className="text-2xl font-bold mb-4">Rust</h3>
                    <code className="block px-4 py-3 bg-black border border-white/20 font-mono text-lg">
                      cargo add ghost-flow
                    </code>
                  </div>
                </div>
              </div>

              {/* Quick Start */}
              <div>
                <h2 className="text-5xl font-bold mb-8">Quick Start</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Python Example</h3>
                    <pre className="px-8 py-6 bg-white/5 border border-white/10 font-mono text-base text-gray-300 overflow-x-auto">
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

                  <div>
                    <h3 className="text-3xl font-bold mb-4">Rust Example</h3>
                    <pre className="px-8 py-6 bg-white/5 border border-white/10 font-mono text-base text-gray-300 overflow-x-auto">
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

              {/* Next Steps */}
              <div>
                <h2 className="text-5xl font-bold mb-8">Next Steps</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link 
                    href="/docs" 
                    className="block p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <h3 className="text-2xl font-bold mb-4">Documentation</h3>
                    <p className="text-gray-400">Complete API reference and guides</p>
                  </Link>
                  
                  <Link 
                    href="/examples" 
                    className="block p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <h3 className="text-2xl font-bold mb-4">Examples</h3>
                    <p className="text-gray-400">Real-world code samples</p>
                  </Link>
                  
                  <Link 
                    href="https://github.com/choksi2212/ghost-flow" 
                    target="_blank"
                    className="block p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <h3 className="text-2xl font-bold mb-4">GitHub</h3>
                    <p className="text-gray-400">Source code and issues</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollSection>
      </div>
    </PageWrapper>
  )
}
