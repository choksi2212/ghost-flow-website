'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const codeExamples = {
  python: `import ghost_flow as gf

# Create neural network
model = gf.nn.Sequential([
    gf.nn.Linear(784, 128),
    gf.nn.ReLU(),
    gf.nn.Linear(128, 10)
])

# Train
optimizer = gf.optim.Adam(model.parameters())
for epoch in range(10):
    loss = model.train_step(x_train, y_train)
    optimizer.step()`,
  
  rust: `use ghost_flow::prelude::*;

// Create tensors
let x = Tensor::randn(&[1000, 1000]);
let y = Tensor::randn(&[1000, 1000]);

// Matrix multiply
let z = x.matmul(&y);

// Neural network
let model = Sequential::new(vec![
    Box::new(Linear::new(784, 128)),
    Box::new(ReLU),
]);`,
}

export default function CodeSection() {
  const [activeTab, setActiveTab] = useState<'python' | 'rust'>('python')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-15%' })

  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-white text-black relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-bold mb-16 tracking-tighter"
        >
          Simple API
        </motion.h2>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-4 mb-8"
        >
          <button
            onClick={() => setActiveTab('python')}
            className={`px-8 py-4 text-xl font-medium transition-all ${
              activeTab === 'python'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Python
          </button>
          <button
            onClick={() => setActiveTab('rust')}
            className={`px-8 py-4 text-xl font-medium transition-all ${
              activeTab === 'rust'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Rust
          </button>
        </motion.div>

        {/* Code block */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-black text-white p-8 md:p-12 font-mono text-sm md:text-base overflow-x-auto"
          >
            <pre className="text-gray-300 leading-relaxed">
              <code>{codeExamples[activeTab]}</code>
            </pre>
          </motion.div>
        </motion.div>

        {/* Install commands */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-6 items-center justify-center"
        >
          <code className="px-6 py-3 bg-gray-100 text-black font-mono text-sm border-2 border-gray-200">
            pip install ghost-flow
          </code>
          <span className="text-gray-400">or</span>
          <code className="px-6 py-3 bg-gray-100 text-black font-mono text-sm border-2 border-gray-200">
            cargo add ghost-flow
          </code>
        </motion.div>
      </div>
    </section>
  )
}
