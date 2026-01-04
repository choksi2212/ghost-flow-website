'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

const codeExamples = {
  python: `import ghostflow as gf

# Create and train a model
model = gf.Model()
model.add(gf.layers.Dense(128, activation='relu'))
model.add(gf.layers.Dense(10, activation='softmax'))

# Compile with CUDA acceleration
model.compile(optimizer='adam', device='cuda')

# Train on your data
model.fit(X_train, y_train, epochs=10)

# Make predictions
predictions = model.predict(X_test)`,

  rust: `use ghostflow::prelude::*;

// Create a neural network
let mut model = Sequential::new()
    .add(Dense::new(128).activation(Activation::ReLU))
    .add(Dense::new(10).activation(Activation::Softmax));

// Compile with GPU support
model.compile(
    Optimizer::Adam { lr: 0.001 },
    Device::CUDA(0)
);

// Train the model
model.fit(&x_train, &y_train, 10)?;`,

  javascript: `import { Model, layers } from 'ghostflow';

// Build your model
const model = new Model();
model.add(layers.dense({ units: 128, activation: 'relu' }));
model.add(layers.dense({ units: 10, activation: 'softmax' }));

// Compile and train
await model.compile({ optimizer: 'adam' });
await model.fit(xTrain, yTrain, { epochs: 10 });

// Get predictions
const predictions = await model.predict(xTest);`,
}

export default function PremiumCodeSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeExamples>('python')
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#16161D] py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E8E8ED] mb-4 tracking-tighter">
            Simple, Powerful API
          </h2>
          <p className="text-xl text-[#8B8B9A] font-light">
            Write less code, achieve more
          </p>
        </div>

        <div className="bg-[#0B0B0F] rounded-2xl border border-[#27272F] overflow-hidden">
          {/* Tabs */}
          <div className="flex items-center justify-between border-b border-[#27272F] px-6 py-4">
            <div className="flex gap-2">
              {Object.keys(codeExamples).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveTab(lang as keyof typeof codeExamples)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === lang
                      ? 'bg-[#60A5FA] text-[#E8E8ED]'
                      : 'text-[#8B8B9A] hover:text-[#E8E8ED]'
                  }`}
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </button>
              ))}
            </div>

            <button
              onClick={copyCode}
              className="flex items-center gap-2 px-4 py-2 text-sm text-[#8B8B9A] hover:text-[#E8E8ED] transition-colors"
            >
              {copied ? (
                <>
                  <Check size={16} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copy
                </>
              )}
            </button>
          </div>

          {/* Code */}
          <div className="p-6 overflow-x-auto">
            <motion.pre
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm md:text-base"
            >
              <code className="text-[#8B8B9A] font-mono leading-relaxed">
                {codeExamples[activeTab]}
              </code>
            </motion.pre>
          </div>
        </div>
      </div>
    </section>
  )
}
