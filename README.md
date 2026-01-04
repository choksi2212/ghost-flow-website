# GhostFlow Website

Official website for GhostFlow - A high-performance machine learning framework built in Rust with Python bindings.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Works perfectly on all devices
- **Fast**: Built with Next.js 14 for optimal performance
- **Interactive**: Smooth cursor, page transitions, and scroll effects
- **Contact Form**: Integrated contact form for user inquiries

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Lucide React

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

## 🌐 Pages

- **Home** (`/`) - Hero section with features overview
- **Features** (`/features`) - Detailed feature showcase
- **Documentation** (`/docs`) - API documentation and guides
- **Examples** (`/examples`) - Real-world code examples
- **Get Started** (`/get-started`) - Installation and quick start guide

## 🎨 Design System

### Colors
- **Background**: `#0B0B0F` (Dark), `#16161D` (Surface)
- **Text**: `#E8E8ED` (Primary), `#8B8B9A` (Secondary)
- **Accent**: `#60A5FA` (Light Blue)
- **Borders**: `#27272F`

### Typography
- **Headings**: Geist Sans (Bold, Tight tracking)
- **Body**: Geist Sans (Regular, Light)
- **Code**: Geist Mono

## 📧 Contact Form Setup

The contact form uses Web3Forms for email delivery:

1. Get your access key from [web3forms.com](https://web3forms.com)
2. Open `components/UI/MinimalFooter.tsx`
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key
4. Emails will be sent to the configured address

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- Build: `npm run build`
- Output: `.next` directory
- Node version: 18+

## 📁 Project Structure

```
ghostflow-web/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── features/          # Feature pages
│   ├── docs/              # Documentation
│   ├── examples/          # Examples page
│   ├── get-started/       # Getting started
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Effects/           # Visual effects
│   ├── Hero/              # Hero sections
│   ├── Layout/            # Layout components
│   ├── Sections/          # Page sections
│   └── UI/                # UI components
├── public/                # Static assets
└── styles/                # Global styles
```

## 🔧 Development

```bash
# Run dev server
npm run dev

# Type check
npm run type-check

# Lint
npm run lint

# Format
npm run format
```

## 📝 License

This website is part of the GhostFlow project.
- Apache License 2.0
- MIT License

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support:
- Email: manaschoksiwork@gmail.com
- GitHub: [choksi2212/ghost-flow](https://github.com/choksi2212/ghost-flow)

---

Built with ❤️ using Next.js and TypeScript
