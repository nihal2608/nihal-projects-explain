import React from 'react'

export const TABS = [
  { id: 'pitch', label: 'Pitch' },
  { id: 'flow', label: 'Architecture' },
  { id: 'role', label: 'My Role' },
  { id: 'qa', label: 'Client Q&A' },
]

function Flow({ steps, color }) {
  return (
    <ol className="flow" style={{ '--c': color }}>
      {steps.map((s, i) => (
        <li key={s.title} className="flow-step" style={{ animationDelay: `${i * 120}ms` }}>
          <span className="flow-dot">{i + 1}</span>
          <div className="flow-body">
            <strong>{s.title}</strong>
            <span>{s.sub}</span>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default function ProjectPanel({ project, tab, setTab, index, total, onPrev, onNext, tourOn }) {
  const visibleTabs = project.faq.length ? TABS : TABS.filter((t) => t.id !== 'qa')

  return (
    <aside className="panel" style={{ '--c': project.color }} aria-live="polite">
      <div className="panel-head">
        <div className="panel-meta">
          <span className="chip chip-accent">{project.domain}</span>
          <span className="panel-count">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>
        <h2>{project.name}</h2>
        <p className="panel-sub">{project.oneLiner}</p>
        <p className="panel-company">{project.company}</p>
      </div>

      <div className="tabs" role="tablist">
        {visibleTabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            className={`tab ${tab === t.id ? 'is-on' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="panel-body" key={project.id + tab}>
        {tab === 'pitch' && (
          <>
            <div className="pitch">
              <span className="pitch-tag">30-second pitch</span>
              <p>{project.pitch}</p>
            </div>
            <div className="trio">
              <div>
                <h4>The problem</h4>
                <p>{project.problem}</p>
              </div>
              <div>
                <h4>What I built</h4>
                <p>{project.solution}</p>
              </div>
              <div>
                <h4>The outcome</h4>
                <p>{project.outcome}</p>
              </div>
            </div>
            <div className="chips">
              {project.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </>
        )}

        {tab === 'flow' && (
          <>
            <p className="hint">How data moves through the system (simplified view):</p>
            <Flow steps={project.flow} color={project.color} />
          </>
        )}

        {tab === 'role' && (
          <>
            <p className="hint">What I personally worked on:</p>
            <ul className="role-list">
              {project.role.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <div className="chips">
              {project.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </>
        )}

        {tab === 'qa' && (
          <div className="qa">
            {project.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        )}
      </div>

      <div className="panel-foot">
        <button className="btn btn-ghost" onClick={onPrev} aria-label="Previous project">
          &larr; Prev
        </button>
        {tourOn && <span className="tour-badge">Guided tour running</span>}
        <button className="btn btn-ghost" onClick={onNext} aria-label="Next project">
          Next &rarr;
        </button>
      </div>
    </aside>
  )
}
