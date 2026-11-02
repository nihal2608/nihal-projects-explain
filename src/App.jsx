import React, { useState, useEffect, useCallback, useRef, Suspense } from 'react'
import Scene from './components/Scene.jsx'
import ProjectPanel from './components/ProjectPanel.jsx'
import { Nav, Hero, Skills, Experience, Contact } from './components/Sections.jsx'
import { projects } from './data/projects.js'

const TOUR_TABS = ['pitch', 'flow', 'role']
const TOUR_MS = 7000

export default function App() {
  const [active, setActive] = useState(0)
  const [tab, setTab] = useState('pitch')
  const [tour, setTour] = useState(false)
  const stageRef = useRef(null)
  const total = projects.length

  const go = useCallback(
    (i) => {
      setActive(((i % total) + total) % total)
      setTab('pitch')
    },
    [total]
  )

  const stopTour = () => setTour(false)

  // Guided tour: pitch -> architecture -> role, then next project.
  useEffect(() => {
    if (!tour) return
    const t = setInterval(() => {
      setTab((cur) => {
        const idx = TOUR_TABS.indexOf(cur)
        if (idx === -1 || idx === TOUR_TABS.length - 1) {
          setActive((a) => (a + 1) % total)
          return TOUR_TABS[0]
        }
        return TOUR_TABS[idx + 1]
      })
    }, TOUR_MS)
    return () => clearInterval(t)
  }, [tour, total])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(active + 1)
      if (e.key === 'ArrowLeft') go(active - 1)
      if (e.key === 'Escape') setTour(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, go])

  const startTour = () => {
    setActive(0)
    setTab('pitch')
    setTour(true)
    stageRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const project = projects[active]

  return (
    <>
      <Nav />
      <Hero onStartTour={startTour} />

      <section className="stage" id="projects" ref={stageRef}>
        <div className="stage-canvas">
          <Suspense fallback={<div className="loading">Loading 3D scene...</div>}>
            <Scene projects={projects} active={active} onSelect={(i) => { stopTour(); go(i) }} />
          </Suspense>

          <div className="stage-top">
            <h2>My Projects in 3D</h2>
            <p>Click a project, drag the page, or use the arrow keys.</p>
          </div>

          <div className="stage-controls">
            <button className="btn btn-ghost" onClick={() => { stopTour(); go(active - 1) }}>
              &larr;
            </button>
            <button className={`btn ${tour ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setTour((t) => !t)}>
              {tour ? 'Pause tour' : 'Guided tour'}
            </button>
            <button className="btn btn-ghost" onClick={() => { stopTour(); go(active + 1) }}>
              &rarr;
            </button>
          </div>

          {tour && <div className="tour-bar" key={`${active}-${tab}`} style={{ animationDuration: `${TOUR_MS}ms` }} />}
        </div>

        <ProjectPanel
          project={project}
          tab={tab}
          setTab={(t) => { stopTour(); setTab(t) }}
          index={active}
          total={total}
          onPrev={() => { stopTour(); go(active - 1) }}
          onNext={() => { stopTour(); go(active + 1) }}
          tourOn={tour}
        />
      </section>

      <Skills />
      <Experience />
      <Contact />
    </>
  )
}
