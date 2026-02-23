import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ReactLenis } from 'lenis/react';
import ColorBends from './ColorBends';
import TiltedCard from './TiltedCard';
import MagneticElement from './MagneticElement';
import { 
  Github, Linkedin, Mail, ChevronDown 
} from 'lucide-react';

function ParallaxImage({ src, alt }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // As the card moves from the bottom of the screen to the top, 
  // the image inside slides from -15% Y to 15% Y.
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="card-image-container">
      <motion.img 
        src={src} 
        alt={alt} 
        className="card-image" 
        style={{ y }} 
      />
    </div>
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

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.01, duration: 1.5, smoothTouch: false }}>
      <div className="noise-overlay"></div>
      
      <nav>
        <div className="logo">Henry<span>Yost</span></div>
        <div className="nav-links">
          <MagneticElement>
            <motion.a 
              href="https://www.linkedin.com/in/henry-yost/" 
              target="_blank" 
              rel="noreferrer"
              // The hardware button squish
              whileTap={{ scaleX: 1.05, scaleY: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Connect
            </motion.a>
          </MagneticElement>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-bg">
          <ColorBends
            colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
            rotation={0}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            parallax={0.5}
            noise={0.1}
            transparent={true}
            autoRotate={0}
          />
        </div>
        
        <div className="hero-content">
          <h1>Henry Yost.</h1>
          <p className="bio">Data Science Student building AI/ML solutions, scalable backends & pipelines, and high-performance digital experiences </p>
        </div>

        <div className="scroll-indicator">
          <ChevronDown size={32} />
        </div>
      </header>

      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2>Selected Works</h2>
          <p>01 — 04</p>
        </div>
        
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
            >
              <TiltedCard scaleOnHover={1.02} rotateAmplitude={8}>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="project-card"
                >
                  
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

      <footer id="contact" className="stacking-footer">
        <div className="footer-content">
          <h2>Let's connect.</h2>
          
          <div className="social-links">
            <MagneticElement>
              <motion.a 
                href="mailto:henryyost402@gmail.com" 
                aria-label="Email"
                whileHover={{ y: -8, scale: 1.05 }} // Moved from CSS to Framer
                whileTap={{ scaleX: 1.15, scaleY: 0.85 }} // Slightly exaggerated squish
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail size={32} />
              </motion.a>
            </MagneticElement>

            <MagneticElement>
              <motion.a 
                href="https://github.com/henry-AY" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="GitHub"
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scaleX: 1.15, scaleY: 0.85 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Github size={32} />
              </motion.a>
            </MagneticElement>

            <MagneticElement>
              <motion.a 
                href="https://www.linkedin.com/in/henry-yost/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scaleX: 1.15, scaleY: 0.85 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
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