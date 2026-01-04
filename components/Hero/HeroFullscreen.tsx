'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Dynamically import WebGL component to prevent SSR issues
const NeuralNetworkWebGL = dynamic(() => import('./NeuralNetworkWebGL'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black" />,
})

export default function HeroFullscreen() {
    return (
        <section className="h-screen flex items-center justify-center relative overflow-hidden bg-black">
            <NeuralNetworkWebGL />

            <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white mb-8 tracking-tighter leading-none">
                        GhostFlow
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl md:text-4xl text-gray-400 max-w-4xl mx-auto mb-12 font-light"
                >
                    High-Performance Machine Learning Framework
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link
                        href="/get-started"
                        className="group px-10 py-5 bg-white text-black text-lg font-medium hover:bg-gray-200 transition-all duration-300 relative overflow-hidden"
                    >
                        <span className="relative z-10">Get Started</span>
                        <div className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </Link>

                    <Link
                        href="https://github.com/choksi2212/ghost-flow"
                        target="_blank"
                        className="px-10 py-5 border-2 border-white text-white text-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
                    >
                        View on GitHub
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-16 inline-block"
                >
                    <code className="px-6 py-3 bg-white/5 border border-white/10 text-white font-mono text-sm">
                        pip install ghost-flow
                    </code>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-1 h-2 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    )
}
