# 🌊 GhostFlow Website

Modern, interactive website for the GhostFlow ML framework.

## 🚀 Features

- ✨ 3D Neural Network Visualization
- 🌊 Liquid Flow Effects
- 💫 Smooth Animations (Framer Motion + GSAP)
- 🎨 Beautiful Gradients
- 📱 Fully Responsive
- 🌙 Dark Mode
- ⚡ Blazing Fast (Next.js 14)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **3D**: Three.js + React Three Fiber
- **Language**: TypeScript

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

Deploy to Vercel (recommended):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or deploy to Netlify, GitHub Pages, or any static hosting.

## 📁 Project Structure

```
ghostflow-web/
├── app/
│   ├── page.tsx              # Home page
│   ├── features/             # Features page
│   ├── docs/                 # Documentation
│   ├── examples/             # Code examples
│   └── layout.tsx            # Root layout
├── components/
│   ├── Hero3D.tsx            # 3D hero section
│   ├── NeuralNetwork.tsx     # Neural network viz
│   ├── FlowParticles.tsx     # Particle effects
│   ├── FeatureCard.tsx       # Feature cards
│   └── CodeBlock.tsx         # Code highlighting
├── public/
│   └── assets/               # Images, icons
└── styles/
    └── globals.css           # Global styles
```

## 🎨 Color Palette

```css
Primary: #00D9FF (Cyan)
Secondary: #0066FF (Blue)
Accent: #8B5CF6 (Purple)
Dark: #0F172A (Slate)
Light: #F8FAFC (White)
```

## 📝 License

MIT
