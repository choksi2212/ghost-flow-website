'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null)

  // Reduced node count for better performance
  const { positions, connections } = useMemo(() => {
    const nodeCount = 100 // Reduced from 120
    const positions = new Float32Array(nodeCount * 3)
    const connectionPositions: number[] = []

    // Create nodes in 3D space
    for (let i = 0; i < nodeCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (distance < 2.8) { // Reduced connection distance
          connectionPositions.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          )
        }
      }
    }

    return {
      positions,
      connections: new Float32Array(connectionPositions),
    }
  }, [])

  // Slower, smoother animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      
      {/* Nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.12} 
          color="#FFFFFF" 
          transparent 
          opacity={0.7}
          sizeAttenuation={true}
        />
      </points>

      {/* Connections */}
      {connections.length > 0 && (
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={connections.length / 3}
              array={connections}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            color="#FFFFFF" 
            transparent 
            opacity={0.12}
          />
        </lineSegments>
      )}
    </group>
  )
}

export default function NeuralNetworkWebGL() {
  return (
    <div className="absolute inset-0 z-0 bg-black pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 70 }}
        gl={{ 
          antialias: false, // Disabled for performance
          alpha: false,
          powerPreference: 'high-performance',
          stencil: false,
          depth: false,
        }}
        dpr={[1, 1.5]} // Reduced from [1, 2]
        style={{ width: '100%', height: '100%', background: '#000000' }}
      >
        <NeuralNetwork />
      </Canvas>
    </div>
  )
}
