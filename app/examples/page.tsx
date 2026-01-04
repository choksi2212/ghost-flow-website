'use client'

import ScrollSection from '@/components/Sections/ScrollSection'
import CodeSection from '@/components/Sections/CodeSection'
import PageWrapper from '@/components/Layout/PageWrapper'

export default function Examples() {
    return (
        <PageWrapper>
            <div className="pt-24">
                <ScrollSection className="bg-black text-white">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                        <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-tighter">
                            Examples
                        </h1>
                        <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
                            Real-world implementations and code samples
                        </p>
                    </div>
                </ScrollSection>

                <CodeSection />

                <ScrollSection className="bg-white text-black">
                    <div className="max-w-5xl mx-auto px-6 md:px-12">
                        <h2 className="text-6xl font-bold mb-12 tracking-tighter">Advanced Examples</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="p-8 bg-black text-white">
                                <h3 className="text-3xl font-bold mb-4">Classical ML</h3>
                                <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
                                    {`# Random Forest
rf = gf.ml.RandomForest(
    n_estimators=100,
    max_depth=10
)
rf.fit(X_train, y_train)
predictions = rf.predict(X_test)

# K-Means Clustering
kmeans = gf.ml.KMeans(n_clusters=5)
kmeans.fit(data)
labels = kmeans.predict(data)`}
                                </pre>
                            </div>

                            <div className="p-8 bg-gray-100">
                                <h3 className="text-3xl font-bold mb-4">GPU Acceleration</h3>
                                <pre className="text-sm font-mono text-gray-700 overflow-x-auto">
                                    {`# Move to GPU
x = gf.Tensor.randn([1000, 1000]).cuda()
y = gf.Tensor.randn([1000, 1000]).cuda()

# Fast GPU operations
z = x @ y  # Optimized CUDA kernels

# Fused operations
model = gf.nn.FusedConvBNReLU(
    in_channels=64,
    out_channels=128
)`}
                                </pre>
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-4xl font-bold mb-6">Production Examples</h3>
                            <p className="text-xl text-gray-600 mb-8">
                                Explore complete implementations in our GitHub repository
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                                {[
                                    'Image Classification',
                                    'Text Generation',
                                    'Time Series Forecasting',
                                    'Reinforcement Learning',
                                    'Ensemble Methods',
                                    'Custom CUDA Kernels'
                                ].map((example, i) => (
                                    <div key={i} className="p-4 border-2 border-gray-200">
                                        <div className="text-lg font-medium">{example}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollSection>
            </div>
        </PageWrapper>
    )
}
