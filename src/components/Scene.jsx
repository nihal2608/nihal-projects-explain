import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html, Stars, Sparkles } from '@react-three/drei'
import Shape from './Shapes.jsx'

const RADIUS = 5.6

function ProjectItem({ project, index, total, active, onSelect }) {
  const spin = useRef()
  const [hover, setHover] = useState(false)
  const angle = (index / total) * Math.PI * 2
  const position = [Math.sin(angle) * RADIUS, 0, Math.cos(angle) * RADIUS]

  useFrame((state, dt) => {
    if (!spin.current) return
    spin.current.rotation.y += dt * (active ? 0.9 : 0.25)
    const targetScale = active ? 1.25 : hover ? 1.1 : 0.85
    const s = spin.current.scale.x + (targetScale - spin.current.scale.x) * Math.min(1, dt * 6)
    spin.current.scale.setScalar(s)
    spin.current.position.y = Math.sin(state.clock.elapsedTime * 1.2 + index) * 0.12
  })

  useEffect(() => {
    document.body.style.cursor = hover ? 'pointer' : 'auto'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [hover])

  return (
    <group position={position} rotation={[0, angle, 0]}>
      <group
        ref={spin}
        onClick={(e) => {
          e.stopPropagation()
          onSelect(index)
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHover(true)
        }}
        onPointerOut={() => setHover(false)}
      >
        <Shape type={project.shape} color={project.color} active={active} />
      </group>
      <mesh position={[0, -1.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.5, 48]} />
        <meshBasicMaterial color={project.color} transparent opacity={active ? 0.28 : 0.1} />
      </mesh>
      <Html position={[0, -2.1, 0]} center distanceFactor={9} style={{ pointerEvents: 'none' }}>
        <div className={`label3d ${active ? 'is-active' : ''}`} style={{ '--c': project.color }}>
          <span className="label3d-n">{String(index + 1).padStart(2, '0')}</span>
          {project.name}
        </div>
      </Html>
    </group>
  )
}

function Carousel({ projects, active, onSelect }) {
  const group = useRef()
  const total = projects.length

  useFrame((_, dt) => {
    if (!group.current) return
    const target = -active * ((Math.PI * 2) / total)
    const cur = group.current.rotation.y
    const twoPi = Math.PI * 2
    const diff = ((((target - cur + Math.PI) % twoPi) + twoPi) % twoPi) - Math.PI
    group.current.rotation.y = cur + diff * Math.min(1, dt * 3.2)
  })

  return (
    <group ref={group}>
      {projects.map((p, i) => (
        <ProjectItem key={p.id} project={p} index={i} total={total} active={i === active} onSelect={onSelect} />
      ))}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, 0]}>
        <ringGeometry args={[RADIUS - 0.03, RADIUS + 0.03, 128]} />
        <meshBasicMaterial color="#6d7cff" transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

function CameraRig() {
  const { camera, size } = useThree()
  const isNarrow = size.width < 700
  useFrame((state) => {
    const tx = state.pointer.x * 1.2
    const ty = (isNarrow ? 2.4 : 2.0) + state.pointer.y * 0.5
    camera.position.x += (tx - camera.position.x) * 0.04
    camera.position.y += (ty - camera.position.y) * 0.04
    camera.position.z += ((isNarrow ? RADIUS + 11 : RADIUS + 8.5) - camera.position.z) * 0.04
    camera.lookAt(0, -0.2, RADIUS * 0.55)
  })
  return null
}

export default function Scene({ projects, active, onSelect }) {
  const color = projects[active].color
  return (
    <Canvas camera={{ position: [0, 2, RADIUS + 8.5], fov: 45 }} dpr={[1, 1.75]}>
      <color attach="background" args={['#070b16']} />
      <fog attach="fog" args={['#070b16', 12, 30]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 8, 6]} intensity={1.3} />
      <pointLight position={[0, 3, RADIUS + 3]} intensity={30} color={color} distance={14} />
      <Stars radius={60} depth={40} count={1800} factor={3} fade speed={0.6} />
      <Sparkles count={60} scale={[16, 6, 16]} size={2.2} speed={0.35} color={color} position={[0, 0, 2]} />
      <Carousel projects={projects} active={active} onSelect={onSelect} />
      <CameraRig />
    </Canvas>
  )
}
