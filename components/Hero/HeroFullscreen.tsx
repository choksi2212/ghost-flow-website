'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import ScrollFloat from '@/components/Effects/ScrollFloat'
import MagneticButton from '@/components/UI/MagneticButton'
import { Sparkles, Zap, Shield } from 'lucide-react'

// Dynamically import WebGL component to prevent SSR issues
const NeuralNetworkWebGL = dynamic(() => import('./NeuralNetworkWebGL'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-[#0B0B0F]" />,
})

export default function HeroFullscreen() {
    return (
        <section className="h-screen flex items-center justify-center relative overflow-hidden bg-[#0B0B0F]">
            <NeuralNetworkWebGL />

            {/* Gradient overlays */}
            <div className="absolute inset-0 mesh-gradient opacity-40" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#60A5FA] rounded-full blur-[150px] opacity-20 animate-pulse-glow" />

            <div className="relative z-10 text-center px-6 md:px-8 max-w-7xl mx-auto w-full">
                {/* Floating badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#16161D] border border-[#27272F] rounded-full mb-8 animate-float">
                    <Sparkles size={16} className="text-[#60A5FA]" />
                    <span className="text-sm text-[#8B8B9A]">Production-Ready ML Framework</span>
                </div>

                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-6 px-4">
                    <span className="bg-gradient-to-r from-[#E8E8ED] via-[#BFDBFE] to-[#E8E8ED] bg-clip-text text-transparent inline-block">
                        GhostFlow
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-[#8B8B9A] max-w-4xl mx-auto font-light leading-relaxed mb-12 break-words">
                    High-Performance Machine Learning Framework Built in Rust
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#16161D]/50 border border-[#27272F] rounded-lg backdrop-blur-sm">
                        <Zap size={16} className="text-[#60A5FA]" />
                        <span className="text-sm text-[#E8E8ED]">10x Faster</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#16161D]/50 border border-[#27272F] rounded-lg backdrop-blur-sm">
                        <Shield size={16} className="text-[#10B981]" />
                        <span className="text-sm text-[#E8E8ED]">Memory Safe</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#16161D]/50 border border-[#27272F] rounded-lg backdrop-blur-sm">
                        <Sparkles size={16} className="text-[#93C5FD]" />
                        <span className="text-sm text-[#E8E8ED]">GPU Accelerated</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                    <Link
                        href="/get-started"
                        className="group px-10 py-5 bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] text-[#000000] text-lg font-medium rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        <span className="flex items-center gap-2">
                            Get Started
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </Link>

                    <Link
                        href="https://github.com/choksi2212/ghost-flow"
                        target="_blank"
                        className="px-10 py-5 bg-[#16161D] border-2 border-[#27272F] text-[#E8E8ED] text-lg font-medium hover:border-[#60A5FA] hover:bg-[#16161D]/80 transition-all duration-300 rounded-xl backdrop-blur-sm"
                    >
                        View on GitHub
                    </Link>
                </div>

                <div className="inline-block">
                    <code className="px-6 py-3 bg-[#16161D]/80 border border-[#27272F] text-[#60A5FA] font-mono text-sm rounded-lg backdrop-blur-sm">
                        $ pip install ghost-flow
                    </code>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-[#60A5FA]/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-[#60A5FA] rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    )
}
