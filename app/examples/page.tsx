'use client'

import PageWrapper from '@/components/Layout/PageWrapper'
import { Code2, Zap, Cpu, Brain, Eye, MessageSquare, Image, Play, Copy, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const examples = [
  {
    icon: Image,
    title: "Image Classification",
    description: "Build a CNN for image classification with just a few lines of code",
    difficulty: "Beginner",
    time: "5 min",
    code: `import ghost_flow as gf

# Load data
X_train, y_train = gf.datasets.load_mnist()

# Build model
model = gf.nn.Sequential([
    gf.nn.Conv2D(32, kernel_size=3),
    gf.nn.ReLU(),
    gf.nn.MaxPool2D(),
    gf.nn.Conv2D(64, kernel_size=3),
    gf.nn.ReLU(),
    gf.nn.Flatten(),
    gf.nn.Dense(10)
])

# Train
model.compile(optimizer='adam', loss='cross_entropy')
model.fit(X_train, y_train, epochs=10)`
  },
  {
    icon: Zap,
    title: "GPU Training",
    description: "Leverage CUDA for lightning-fast training on NVIDIA GPUs",
    difficulty: "Intermediate",
    time: "10 min",
    code: `import ghost_flow as gf

# Enable GPU
model = gf.nn.Sequential([
    gf.nn.Linear(784, 256),
    gf.nn.ReLU(),
    gf.nn.Linear(256, 10)
]).to('cuda:0')

# Mixed precision training
model.compile(
    optimizer='adam',
    device='cuda:0',
    dtype='float16'  # FP16 for 2x speedup
)

# Multi-GPU training
model.fit(
    X_train, y_train,
    batch_size=1024,
    epochs=50,
    devices=['cuda:0', 'cuda:1']
)`
  },
  {
    icon: Brain,
    title: "Transfer Learning",
    description: "Fine-tune pre-trained models for your specific task",
    difficulty: "Intermediate",
    time: "15 min",
    code: `import ghost_flow as gf

# Load pre-trained model
base_model = gf.models.ResNet50(pretrained=True)

# Freeze base layers
for param in base_model.parameters():
    param.requires_grad = False

# Add custom head
model = gf.nn.Sequential([
    base_model,
    gf.nn.Dense(512),
    gf.nn.ReLU(),
    gf.nn.Dropout(0.5),
    gf.nn.Dense(num_classes)
])

# Fine-tune
model.fit(X_train, y_train, epochs=20)`
  },
  {
    icon: Eye,
    title: "Object Detection",
    description: "Detect and localize objects in images with YOLO",
    difficulty: "Advanced",
    time: "20 min",
    code: `import ghost_flow as gf

# Load YOLO model
model = gf.models.YOLO_v5(
    num_classes=80,
    pretrained=True
)

# Detect objects
results = model.detect(
    image,
    conf_threshold=0.5,
    iou_threshold=0.4
)

# Draw bounding boxes
for box in results:
    x, y, w, h = box['bbox']
    label = box['class']
    conf = box['confidence']
    draw_box(image, x, y, w, h, label)`
  },
  {
    icon: MessageSquare,
    title: "Text Generation",
    description: "Build a transformer model for text generation",
    difficulty: "Advanced",
    time: "25 min",
    code: `import ghost_flow as gf

# Build transformer
model = gf.nn.Transformer(
    vocab_size=50000,
    d_model=512,
    nhead=8,
    num_layers=6
)

# Train on text data
model.compile(optimizer='adamw', lr=1e-4)
model.fit(
    text_dataset,
    epochs=100,
    batch_size=32
)

# Generate text
output = model.generate(
    prompt="Once upon a time",
    max_length=100,
    temperature=0.8
)`
  },
  {
    icon: Cpu,
    title: "Distributed Training",
    description: "Scale training across multiple machines",
    difficulty: "Expert",
    time: "30 min",
    code: `import ghost_flow as gf

# Initialize distributed training
gf.distributed.init(
    backend='nccl',
    world_size=4,
    rank=0
)

# Wrap model for DDP
model = gf.nn.parallel.DistributedDataParallel(
    model,
    device_ids=[0]
)

# Train across nodes
model.fit(
    train_loader,
    epochs=100,
    distributed=True
)

# Cleanup
gf.distributed.destroy()`
  },
]

export default function ExamplesPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <PageWrapper showFloatingShapes={false}>
      <div className="min-h-screen bg-[#0B0B0F] pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#60A5FA] rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#60A5FA] rounded-full blur-[150px] opacity-10" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#16161D] border border-[#27272F] rounded-full mb-6">
              <Code2 size={16} className="text-[#60A5FA]" />
              <span className="text-sm text-[#8B8B9A]">Real-World Examples</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-[#E8E8ED] mb-6 tracking-tighter">
              Examples
            </h1>
            <p className="text-2xl text-[#8B8B9A] font-light max-w-3xl mx-auto">
              Production-ready code samples showing GhostFlow in action
            </p>
          </div>

          {/* Examples Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {examples.map((example, index) => {
              const Icon = example.icon
              return (
                <div
                  key={index}
                  className="group bg-[#16161D] border-2 border-[#27272F] rounded-2xl overflow-hidden hover:border-[#60A5FA]/50 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="p-8 pb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-4 bg-[#60A5FA]/10 rounded-2xl border border-[#60A5FA]/20 group-hover:bg-[#60A5FA]/20 transition-all">
                        <Icon size={32} className="text-[#60A5FA]" />
                      </div>
                      <button
                        onClick={() => copyCode(example.code, index)}
                        className="p-2 hover:bg-[#60A5FA]/10 rounded-lg transition-colors"
                      >
                        {copiedIndex === index ? (
                          <CheckCircle2 size={20} className="text-[#10B981]" />
                        ) : (
                          <Copy size={20} className="text-[#8B8B9A]" />
                        )}
                      </button>
                    </div>

                    <h3 className="text-2xl font-bold text-[#E8E8ED] mb-3 group-hover:text-[#60A5FA] transition-colors">
                      {example.title}
                    </h3>
                    <p className="text-[#8B8B9A] mb-4">
                      {example.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-[#0B0B0F] border border-[#27272F] rounded-full text-xs text-[#8B8B9A]">
                        {example.difficulty}
                      </span>
                      <span className="px-3 py-1 bg-[#0B0B0F] border border-[#27272F] rounded-full text-xs text-[#8B8B9A]">
                        {example.time}
                      </span>
                    </div>
                  </div>

                  {/* Code */}
                  <div className="bg-[#0B0B0F] border-t border-[#27272F]">
                    <pre className="p-6 font-mono text-sm text-[#8B8B9A] overflow-x-auto">
                      {example.code}
                    </pre>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-20 bg-gradient-to-br from-[#60A5FA]/10 to-transparent border border-[#60A5FA]/20 rounded-2xl p-12 text-center">
            <Play size={48} className="text-[#60A5FA] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-[#E8E8ED] mb-4">
              Want More Examples?
            </h2>
            <p className="text-xl text-[#8B8B9A] mb-8 max-w-2xl mx-auto">
              Check out our GitHub repository for 50+ production-ready examples
            </p>
            <a
              href="https://github.com/choksi2212/ghost-flow/tree/main/examples"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] text-[#0B0B0F] font-bold rounded-xl hover:scale-105 transition-transform"
            >
              <Code2 size={20} />
              View All Examples
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
