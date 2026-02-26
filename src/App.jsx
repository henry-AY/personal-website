import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ReactLenis, useLenis } from 'lenis/react';

import ColorBends from './ColorBends';
import TiltedCard from './TiltedCard';
import MagneticElement from './MagneticElement';

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
      <motion.img src={src} alt={alt} className="card-image" style={{ y }} />
    </div>
  );
}

const Hero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { margin: "0px" });

  return (
    <header ref={heroRef} className="hero">
      <div className="hero-bg">
        {isInView && (
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
        
        {isOpen && (
          <motion.ul 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="exp-details"
          >
            {exp.details.map((detail, i) => (
              <motion.li layout key={i}>{detail}</motion.li>
            ))}
          </motion.ul>
        )}

        <motion.button layout className="exp-toggle">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
          {isOpen ? "Show less" : "Read more"}
        </motion.button>
        
        {exp.tech && (
          <motion.div layout className="tech-stack exp-tech">
            {exp.tech.map((techItem, i) => (
              <span key={i} className="tech-pill">{techItem}</span>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

function Navigation() {
  const lenis = useLenis();

  const handleScroll = (e, target) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, { 
        offset: 0, 
        duration: 1.5, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    }
  };

  return (
    <nav className="pill-nav">
      <div className="logo">
        <a href="#home" onClick={(e) => handleScroll(e, '#home')}>Henry<span>Yost</span></a>
      </div>

      <div className="nav-page-links">
        <a href="#home" onClick={(e) => handleScroll(e, '#home')}>Home</a>
        <a href="#experience" onClick={(e) => handleScroll(e, '#experience')}>Experience</a>
        <a href="#projects" onClick={(e) => handleScroll(e, '#projects')}>Projects</a>
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
    role: "Data Science Intern",
    company: "Tech Company Name",
    date: "2024 — Present",
    tech: ["AWS", "Lambda", "Keywords", "Python"],
    description: "Engineered robust data pipelines and developed machine learning models to optimize internal processes.",
    details: [
      "TO BE filled",
      "TO BE filled",
      "TO BE filled"
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "Another Company",
    date: "2023 — 2024",
    tech: ["C++", "Backend", "Tester", "MIL"],
    description: "Built and maintained highly responsive frontend interfaces and optimized state management.",
    details: [
      "TO BE filled",
      "TO BE filled",
      "TO BE filled"
    ]
  }
];

function App() {
  const timelineRef = useRef(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  return (
    <ReactLenis root options={{ lerp: 0.01, duration: 1.5, smoothTouch: false }}>
      <div id="home" style={{ position: 'absolute', top: 0 }}></div>
      <div className="noise-overlay"></div>

      <Navigation />

      <Hero />

      <main className="scrolling-content-layer">
        
        <section id="experience" className="experience-section">
          
          <div className="section-header">
            <h2>Experience</h2>
            <p>01 — 02</p>
          </div>

          <div className="experience-container" ref={timelineRef}>
            
            <div className="timeline-track"></div>
            
            <motion.div 
              className="timeline-progress" 
              style={{ scaleY: timelineProgress, transformOrigin: "top" }} 
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
                        {project.tech.map((tech, i) => (
                          <span key={i} className="tech-pill">{tech}</span>
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

      <footer id="contact" className="stacking-footer">
        <div className="footer-content">
          <h2>Let's connect.</h2>
          
          <div className="social-links">
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
        
        <div className="footer-bottom">
          <p>© 2026 Henry Yost.</p>
          <p>Designed and built with Vite and React.</p>
        </div>
      </footer>
    </ReactLenis>
  );
}

export default App;