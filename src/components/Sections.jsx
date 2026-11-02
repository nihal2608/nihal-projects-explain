import React from 'react'
import { profile, skills, experience, education } from '../data/profile.js'

export function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav-logo">
        NA<span>.</span>
      </a>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export function Hero({ onStartTour }) {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="container hero-inner">
        <span className="chip chip-accent">Available for new opportunities</span>
        <h1>
          {profile.name}
          <br />
          <span className="grad">{profile.role}</span>
        </h1>
        <p className="hero-lead">{profile.tagline}</p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={onStartTour}>
            Start guided 3D tour
          </button>
          <a className="btn btn-ghost" href="#projects">
            Explore projects
          </a>
          <a className="btn btn-ghost" href={profile.resume} download>
            Download resume
          </a>
        </div>
        <div className="stats">
          {profile.stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skill-grid">
          {skills.map((g) => (
            <div key={g.group} className="card">
              <h3>{g.group}</h3>
              <div className="chips">
                {g.items.map((i) => (
                  <span key={i} className="chip">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((e) => (
            <div key={e.company} className="timeline-item">
              <span className="timeline-dot" />
              <div className="card">
                <div className="timeline-head">
                  <div>
                    <h3>{e.title}</h3>
                    <p className="muted">{e.company}</p>
                  </div>
                  <span className="chip">{e.period}</span>
                </div>
                <ul className="role-list">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <h2 className="section-title small">Education</h2>
        <div className="skill-grid">
          {education.map((e) => (
            <div key={e.title} className="card">
              <h3>{e.title}</h3>
              <p className="muted">
                {e.place} &middot; {e.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="card contact">
          <h2 className="section-title">Let's work together</h2>
          <p className="muted">
            Have a backend project, an integration or a production problem? Get in touch.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            {profile.phones.map((p) => (
              <a key={p} className="btn btn-ghost" href={`tel:${p.replace(/[^+\d]/g, '')}`}>
                {p}
              </a>
            ))}
          </div>
          <p className="muted small">{profile.location}</p>
        </div>
        <footer className="footer">
          &copy; {new Date().getFullYear()} {profile.name}
        </footer>
      </div>
    </section>
  )
}
