'use client'

import ScrollSection from '@/components/Sections/ScrollSection'
import PageWrapper from '@/components/Layout/PageWrapper'
import Link from 'next/link'

export default function Docs() {
  return (
    <PageWrapper>
      <div className="pt-24">
        <ScrollSection className="bg-black text-white min-h-screen">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <h1 className="text-7xl md:text-9xl font-bold mb-12 tracking-tighter">
              Documentation
            </h1>

            <div className="space-y-16 text-xl">
              <div>
                <h2 className="text-5xl font-bold mb-6">Installation</h2>
                <p className="text-gray-400 mb-6 text-2xl">
                  Install GhostFlow via your preferred package manager.
                </p>
                <div className="space-y-4">
                  <code className="block px-6 py-4 bg-white/5 border border-white/10 font-mono text-lg">
                    pip install ghost-flow
                  </code>
                  <code className="block px-6 py-4 bg-white/5 border border-white/10 font-mono text-lg">
                    cargo add ghost-flow
                  </code>
                </div>
              </div>

              <div>
                <h2 className="text-5xl font-bold mb-6">Quick Example</h2>
                <pre className="px-8 py-6 bg-white/5 border border-white/10 font-mono text-base text-gray-300 overflow-x-auto">
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

              <div>
                <h2 className="text-5xl font-bold mb-6">Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Link 
                    href="https://docs.rs/ghost-flow" 
                    target="_blank"
                    className="block p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <h3 className="text-2xl font-bold mb-2">API Documentation</h3>
                    <p className="text-gray-400">Complete API reference with examples</p>
                  </Link>
                  
                  <Link 
                    href="https://github.com/choksi2212/ghost-flow" 
                    target="_blank"
                    className="block p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <h3 className="text-2xl font-bold mb-2">GitHub Repository</h3>
                    <p className="text-gray-400">Source code and examples</p>
                  </Link>
                  
                  <Link 
                    href="https://pypi.org/project/ghost-flow/" 
                    target="_blank"
                    className="block p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <h3 className="text-2xl font-bold mb-2">PyPI Package</h3>
                    <p className="text-gray-400">Python package information</p>
                  </Link>
                  
                  <Link 
                    href="https://crates.io/crates/ghost-flow" 
                    target="_blank"
                    className="block p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <h3 className="text-2xl font-bold mb-2">Crates.io</h3>
                    <p className="text-gray-400">Rust crate information</p>
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
