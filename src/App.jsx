import { useState } from 'react'
import './index.css'

function App() {
  return (
    <>
      <nav>
        <div className="logo">Dev<span>Portfolio</span></div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header id="about" className="hero">
        <div className="hero-content">
          <p className="greeting">Hi, my name is</p>
          <h1>Your Name.</h1>
          <h2>I build things for the web.</h2>
          <p className="bio">I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.</p>
          <a href="#projects" className="btn">Check out my work</a>
        </div>
      </header>

      <section id="projects" className="projects-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="project-grid">
          
          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-info">
              <h3>Project Alpha</h3>
              <p>A web application built to solve a specific problem.</p>
              <div className="tech-stack">
                <span>React</span>
                <span>Node.js</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <footer id="contact">
        <h2>Let's Connect</h2>
        <a href="mailto:your.email@example.com" className="btn outline-btn">Say Hello</a>
        <p className="copyright">© 2026 Your Name. Built with React & Vite.</p>
      </footer>
    </>
  )
}

export default App