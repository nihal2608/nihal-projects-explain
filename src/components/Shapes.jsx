import React from 'react'

// Simple 3D shapes built from primitives. One shape per project type.

function Mat({ color, active, opacity = 1 }) {
  return (
    <meshStandardMaterial
      color={color}
      metalness={0.45}
      roughness={0.28}
      emissive={color}
      emissiveIntensity={active ? 0.4 : 0.14}
      transparent={opacity < 1}
      opacity={opacity}
    />
  )
}

function Logs({ color, active }) {
  const widths = [1.9, 1.4, 1.7, 1.2, 1.6]
  return (
    <group>
      {widths.map((w, i) => (
        <mesh key={i} position={[(i % 2 ? 0.12 : -0.12), -0.9 + i * 0.45, 0]}>
          <boxGeometry args={[w, 0.3, 0.9]} />
          <Mat color={color} active={active} />
        </mesh>
      ))}
    </group>
  )
}

function Phone({ color, active }) {
  return (
    <group>
      <mesh>
        <boxGeometry args={[1.15, 2.2, 0.16]} />
        <Mat color={color} active={active} />
      </mesh>
      <mesh position={[0, 0, 0.09]}>
        <boxGeometry args={[0.98, 1.95, 0.02]} />
        <meshStandardMaterial color="#0b1020" emissive={color} emissiveIntensity={active ? 0.35 : 0.12} />
      </mesh>
      <mesh position={[0, 0.7, 0.11]}>
        <boxGeometry args={[0.6, 0.12, 0.01]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[0, 0.2, 0.11]}>
        <boxGeometry args={[0.7, 0.5, 0.01]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.7} />
      </mesh>
    </group>
  )
}

function Lock({ color, active }) {
  return (
    <group position={[0, -0.2, 0]}>
      <mesh>
        <boxGeometry args={[1.5, 1.1, 0.7]} />
        <Mat color={color} active={active} />
      </mesh>
      <mesh position={[0, 0.55, 0]}>
        <torusGeometry args={[0.5, 0.13, 16, 40, Math.PI]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.05, 0.36]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.06, 24]} />
        <meshStandardMaterial color="#0b1020" />
      </mesh>
    </group>
  )
}

function Network({ color, active }) {
  const nodes = [
    [1.5, 0.4, 0],
    [-1.5, -0.3, 0.3],
    [0.2, 1.4, -0.4],
    [-0.4, -1.4, 0.5],
    [0.9, -0.9, -1.0],
  ]
  return (
    <group>
      <mesh>
        <icosahedronGeometry args={[0.7, 1]} />
        <Mat color={color} active={active} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
      </mesh>
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.18, 20, 20]} />
          <meshStandardMaterial color="#ffffff" emissive={color} emissiveIntensity={0.8} />
        </mesh>
      ))}
    </group>
  )
}

function City({ color, active }) {
  const blocks = [
    [-0.8, 0.9, -0.4, 0.5],
    [-0.1, 1.7, 0.0, 0.55],
    [0.7, 1.2, -0.3, 0.5],
    [-0.5, 0.6, 0.6, 0.45],
    [0.5, 0.8, 0.6, 0.5],
    [1.1, 0.5, 0.2, 0.4],
  ]
  return (
    <group position={[0, -0.9, 0]}>
      <mesh position={[0.1, 0, 0.1]}>
        <boxGeometry args={[2.8, 0.1, 1.9]} />
        <meshStandardMaterial color="#1e293b" metalness={0.3} roughness={0.6} />
      </mesh>
      {blocks.map(([x, h, z, w], i) => (
        <mesh key={i} position={[x, 0.05 + h / 2, z]}>
          <boxGeometry args={[w, h, w]} />
          <Mat color={color} active={active} />
        </mesh>
      ))}
    </group>
  )
}

function Chat({ color, active }) {
  return (
    <group>
      <mesh scale={[1.4, 1, 0.65]}>
        <sphereGeometry args={[0.95, 32, 32]} />
        <Mat color={color} active={active} />
      </mesh>
      <mesh position={[-0.55, -0.95, 0]} rotation={[0, 0, 0.5]}>
        <coneGeometry args={[0.28, 0.6, 20]} />
        <Mat color={color} active={active} />
      </mesh>
      {[-0.5, 0, 0.5].map((x) => (
        <mesh key={x} position={[x, 0, 0.62]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#0b1020" />
        </mesh>
      ))}
    </group>
  )
}

function Coins({ color, active }) {
  return (
    <group position={[0, -0.6, 0]}>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[(i % 2 ? 0.08 : -0.08), i * 0.3, 0]}>
          <cylinderGeometry args={[0.85, 0.85, 0.22, 40]} />
          <Mat color={color} active={active} />
        </mesh>
      ))}
    </group>
  )
}

const MAP = { logs: Logs, phone: Phone, lock: Lock, network: Network, city: City, chat: Chat, coins: Coins }

export default function Shape({ type, color, active }) {
  const Comp = MAP[type] || Coins
  return <Comp color={color} active={active} />
}
