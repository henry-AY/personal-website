import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent, useSpring } from "framer-motion";
import { ReactLenis, useLenis } from 'lenis/react';

import ColorBends from './ColorBends';
import TiltedCard from './TiltedCard';
import MagneticElement from './MagneticElement';
import GradualBlur from './GradualBlur';

import { Github, Linkedin, Mail, ChevronDown, Plus, Minus } from 'lucide-react';

function ParallaxImage({ src, alt }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="card-image-container">
      {/* Added willChange to force GPU acceleration on the parallax element */}
      <motion.img src={src} alt={alt} className="card-image" style={{ y, willChange: "transform" }} />
    </div>
  );
}

const Hero = () => {
  const { scrollY } = useScroll();
  const [showCanvas, setShowCanvas] = useState(true);
  
  // Cache viewport height so we don't recalculate layout on every scroll tick
  const viewportHeight = useRef(typeof window !== "undefined" ? window.innerHeight : 800);

  useEffect(() => {
    const handleResize = () => { viewportHeight.current = window.innerHeight; };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > viewportHeight.current) {
      if (showCanvas) setShowCanvas(false);
    } else {
      if (!showCanvas) setShowCanvas(true);
    }
  });

  return (
    <header className="hero">
      <div className="hero-bg">
        {showCanvas && (
          <ColorBends 
            colors={["#ff5c7a", "#8a5cff", "#00ffd1"]} 
            rotation={0} speed={0.2} scale={1} frequency={1} 
            warpStrength={1} mouseInfluence={1} parallax={0.5} 
            noise={0.1} transparent={true} autoRotate={0} 
          />
        )}
      </div>
      
      <div className="hero-content">
        <h1>Henry Yost.</h1>
        <p className="bio">Data Science Student building AI/ML solutions, scalable backends & pipelines, and high-performance digital experiences.</p>
      </div>

      <div className="scroll-indicator">
        <ChevronDown size={32} />
      </div>
    </header>
  );
};

function ExperienceCard({ exp }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className="experience-item"
      onClick={() => setIsOpen(!isOpen)}
      style={{ cursor: 'pointer' }}
    >
      <motion.div layout className="exp-content">
        <motion.div layout className="exp-meta">
          <motion.h3 layout>{exp.role}</motion.h3>
          <motion.span layout className="exp-date">{exp.date}</motion.span>
        </motion.div>
        
        <motion.p layout className="exp-company">{exp.company}</motion.p>
        <motion.p layout className="exp-description">{exp.description}</motion.p>
        
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div 
              key="accordion-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              style={{ overflow: "hidden" }}
            >
              <ul className="exp-details">
                {exp.details && exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button layout className="exp-toggle">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
          {isOpen ? "Show less" : "Read more"}
        </motion.button>
        
        {exp.tech && (
          <motion.div layout className="tech-stack exp-tech">
            {exp.tech.map((techItem, i) => (
              <span key={i} className="tech-pill">
                {techItem}
              </span>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

// Extracted to isolate scroll listeners from unmounting components
function ExperienceSection({ experiences }) {
  const timelineRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const timelineProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.3
  });

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h2>Experience</h2>
        <p>01 — 02</p>
      </div>

      <div className="experience-container" ref={timelineRef}>
        <div className="timeline-track"></div>
        <motion.div 
          className="timeline-progress" 
          style={{ scaleY: timelineProgress, transformOrigin: "top", willChange: "transform" }} 
        />

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <ExperienceCard exp={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Navigation({ view, setView }) {
  const lenis = useLenis();

  const handleScroll = (e, target) => {
    e.preventDefault();
    setView('home'); 
    setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(target, { 
          offset: 0, 
          duration: 1.5, 
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    }, 50);
  };

  return (
    <nav className="pill-nav">
      <div className="logo">
        <a href="#home" onClick={(e) => handleScroll(e, '#home')}>Henry<span>Yost</span></a>
      </div>

      <div className="nav-page-links">
        <a href="#home" onClick={(e) => handleScroll(e, '#home')} className={view === 'home' ? 'active' : ''}>Portfolio</a>
        <a href="#now" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); setView('now'); }} className={view === 'now' ? 'active' : ''}>Now</a>
      </div>

      <div className="nav-connect">
        <MagneticElement>
          <motion.a 
            href="https://www.linkedin.com/in/henry-yost/" 
            target="_blank" 
            rel="noreferrer"
            className="connect-btn"
            whileTap={{ scaleX: 1.05, scaleY: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Connect
          </motion.a>
        </MagneticElement>
      </div>
    </nav>
  );
}

function NowPage({ setView }) {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="now-page-container"
      style={{ 
        padding: '12rem 2rem 6rem 2rem', 
        minHeight: '85vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '4rem' 
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.05em', fontWeight: 700 }}>Right Now.</h1>
        <p style={{ color: 'var(--text-muted)', fontFamily: 'monospace', lineHeight: '1.8', fontSize: '0.95rem' }}>
          // A space for what i'm currently doing
        </p>
      </div>

      <div className="now-playing-card" style={{ width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <p style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--text-muted)', margin: 0, paddingLeft: '4px' }}>
          ON REPEAT
        </p>
        <iframe 
          style={{ borderRadius: '12px', border: '1px solid var(--border-dim)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }} 
          src="https://open.spotify.com/embed/track/5YxO2ytkSJOvrLn7i1xUe2?utm_source=generator&theme=0" 
          width="100%" 
          height="80" 
          border="0" 
          allowFullScreen="" 
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        ></iframe>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '480px', width: '100%', borderTop: '1px solid var(--border-dim)', paddingTop: '3rem' }}>
        <div>
          <h4 style={{ fontFamily: 'monospace', color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>CURRENT FOCUS</h4>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#e0e0e0' }}>Building a generative engine to mimic data distributions.</p>
        </div>
        <div>
          <h4 style={{ fontFamily: 'monospace', color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>CURRENTLY READING</h4>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#e0e0e0' }}>The Philosopher in the Valley by Michael Steinberger</p>
        </div>
      </div>
    </motion.main>
  );
}

const projects = [
  {
    title: "MonoGPT",
    description: "MonoGPT is a large language model (LLM) using a neural network and transformer architecture in PyTorch to generate human-like text.",
    imageSrc: "https://images.unsplash.com/photo-1684503830891-27e71ff697e3?q=80&w=1001&auto=format&fit=crop", 
    tech: ["Python", "PyTorch", "NumPy", "WebGL", "React", "Node.js", "FastAPI"],
    github: "https://github.com/henry-AY/monoGPT"
  },
  {
    title: "G-STAR",
    description: "Git/Gitea Simulink Test Automation Runner (G-STAR) is a CI/CD pipeline focused on automating the testing of .mldatx simulink model files utilizing a git/gitea runner.",
    imageSrc: "https://images.unsplash.com/photo-1548248823-ce16a73b6d49?q=80&w=988&auto=format&fit=crop", 
    tech: ["Git/Gitea", "Python", "MATLAB", "CI/CD"],
    github: "https://github.com/henry-AY/STAR-CICD-pipeline-docs"
  },
  {
    title: "Phil",
    description: "A Chrome Extension that intelligently filters, summarizes, and organizes your Gmail inbox. Phil fetches your latest emails, and presents a clean, organized, labeled list.",
    imageSrc: "https://images.unsplash.com/photo-1653299832314-5d3dc1e5a83c?q=80&w=927&auto=format&fit=crop", 
    tech: ["Node.js", "RESTful API", "Gemini Agent", "AWS Lambda"],
    github: "https://github.com/Dekamayaro/PHIL"
  },
  {
    title: "ATS Resume Screening",
    description: "An Applicant Tracking System (ATS) using SBERT embeddings to compare similarities, and training a Support Vector Machine (SVM) to classify candidates.",
    imageSrc: "https://images.unsplash.com/photo-1712684819524-af72f0d9c3e5?q=80&w=987&auto=format&fit=crop", 
    tech: ["Jupyter Notebook", "SBERT", "SVM", "t-SNE Clustering"],
    github: "https://github.com/henry-AY/ResumeScreening"
  }
];

const experiences = [
  {
    role: "Lead Developer",
    company: "Phil",
    date: "Mar 2026 — Present",
    tech: ["AWS", "Lambda", "DynamoDB", "RESTful APIs", "OAuth 2.0"],
    description: "Leading the backend architecture and beta deployment for an AI-powered email management Chrome extension.",
    details: [
      "Architected and deployed to beta an AI email Chrome extension using a serverless AWS Lambda backend to categorize user inboxes via a RESTful microservices architecture.",
      "Implemented a stateless data pipeline using DynamoDB TTL to minimize long-term data cloud storage usage and costs.",
      "Implemented high-privilege OAuth 2.0 modify scopes on user's inboxes with server-side token verification to ensure secure authorized access."
    ]
  },
  {
    role: "Propulsion, Controls & Modeling Testing Subteam Lead",
    company: "UCR EcoCAR",
    date: "Oct 2025 — Present",
    tech: ["Simulink", "MATLAB", "CI/CD", "Model-in-the-Loop (MIL)"],
    description: "Directing the software testing, validation and automated deployment of advanced vehicle subsystems.",
    details: [
      "Engineered and deployed an automated testing pipeline for MATLAB subsystems. Built a standalone python CI/CD system, and a distributed CI/CD system using Git/Gitea actions, reducing overall maintenance and overhead.",
      "Lead the of testing process across critical systems, including the Electric Drive Unit, Transmission Range Select, and Active Discharge subsystems, improving overall software reliability and behavior." 
    ]
  }
];

function App() {
  const [view, setView] = useState('home'); 

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothTouch: false }}>
      <div id="home" style={{ position: 'absolute', top: 0 }}></div>
      <div className="noise-overlay"></div>

      <Navigation view={view} setView={setView} />

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div
            key="home-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Hero />

            <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50, pointerEvents: 'none' }}>
              <GradualBlur
                target="parent"
                position="bottom"
                height="8rem"
                strength={3}
                divCount={5}
                curve="ease-out"
                exponential={true}
              />
            </div>

            <main className="scrolling-content-layer">
              <ExperienceSection experiences={experiences} />

              <section id="projects" className="projects-section">
                <div className="section-header">
                  <h2>Selected Works</h2>
                  <p>02 — 02</p>
                </div>
                
                <div className="project-grid">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                      <TiltedCard scaleOnHover={1.02} rotateAmplitude={8}>
                        <a href={project.github} target="_blank" rel="noreferrer" className="project-card">
                          <ParallaxImage src={project.imageSrc} alt={project.title} />
                          <div className="card-bottom">
                            <div className="card-title-row">
                              <h3>{project.title}</h3>
                              <span className="project-link" aria-label={`View ${project.title} on GitHub`}>
                                <Github size={28} />
                              </span>
                            </div>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                              {project.tech.map((techItem, i) => (
                                <span key={i} className="tech-pill">
                                  {techItem}
                                </span>
                              ))}
                            </div>
                          </div>
                        </a>
                      </TiltedCard>
                    </motion.div>
                  ))}
                </div>
              </section>
            </main>

            <footer id="contact" className="stacking-footer" style={{position: 'relative', zIndex: 100, padding: '6rem 2rem 1.5rem 2rem' }}>
              <div className="footer-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>Let's connect.</h2>
                
                <div className="social-links" style={{ marginBottom: '8rem' }}>
                  <MagneticElement>
                    <motion.a href="mailto:henryyost402@gmail.com" aria-label="Email" whileHover={{ y: -8, scale: 1.05 }} whileTap={{ scaleX: 1.15, scaleY: 0.85 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      <Mail size={32} />
                    </motion.a>
                  </MagneticElement>

                  <MagneticElement>
                    <motion.a href="https://github.com/henry-AY" target="_blank" rel="noreferrer" aria-label="GitHub" whileHover={{ y: -8, scale: 1.05 }} whileTap={{ scaleX: 1.15, scaleY: 0.85 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      <Github size={32} />
                    </motion.a>
                  </MagneticElement>

                  <MagneticElement>
                    <motion.a href="https://www.linkedin.com/in/henry-yost/" target="_blank" rel="noreferrer" aria-label="LinkedIn" whileHover={{ y: -8, scale: 1.05 }} whileTap={{ scaleX: 1.15, scaleY: 0.85 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      <Linkedin size={32} />
                    </motion.a>
                  </MagneticElement>
                </div>
              </div>
              
              <div className="footer-bottom" style={{ paddingTop: '2.5rem', marginTop: '2rem' }}>
                <p>© 2026 Henry Yost.</p>
                <p>Designed and built with Vite and React.</p>
              </div>
            </footer>
          </motion.div>
        ) : (
          <NowPage key="now-view" setView={setView} />
        )}
      </AnimatePresence>
    </ReactLenis>
  );
}

export default App;