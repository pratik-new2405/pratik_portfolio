import { useEffect, useState } from 'react';
import { Shield, Mail, Linkedin, Phone, Download, Menu, X, Instagram } from 'lucide-react';
import TypeWriter from './components/TypeWriter';
import SkillBar from './components/SkillBar';
import ProjectCard from './components/ProjectCard';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Python Programming', level: 80 },
    { name: 'HTML,CSS,JS', level: 85 },
    { name: 'Mysql,MongoDB', level: 80 },
    { name: 'AI/ML', level: 88 },
    { name: 'Security Auditing', level: 82 },
    { name: 'VAPT', level: 67 }
  ];

  const projects = [
    {
      title: '______',
      description: '______',
      technologies: ['_', '_', '_', '_'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: '__',
      description: '_____.',
      technologies: ['_', '_', '_', '_'],
      githubUrl: '#'
    },
    {
      title: '___',
      description: '-______',
      technologies: ['_', '_', '_', '_'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <Shield size={32} style={{ color: '#34d399' }} />
            <span>Pratik Shirode</span>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>
            <TypeWriter text="Pratik Shirode" speed={150} />
          </h1>
          <div className="subtitle">
            <TypeWriter text="Cybersecurity Enthusiast" speed={100} delay={2000} />
          </div>
          <p>
            Passionate about protecting digital assets and securing the cyber landscape
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#" className="btn btn-outline">
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-alt">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <div className="about-grid">
            <div className="about-content">
              <h3>Cybersecurity trainee</h3>
              <p>
                Aspiring cybersecurity specialist with a solid foundation in network and web security. Skilled in identifying vulnerabilities and understanding common attack vectors, with a commitment to continuous learning and improvement..
              </p>
              <p>
                With hands-on experience in vulnerability assessment and security auditing, I bring a 
                comprehensive understanding of both offensive and defensive security practices to every project.
              </p>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Security Audits</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="shield-container">
                <Shield size={120} color="#ffffff" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill.name}
                percentage={skill.level}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in discussing cybersecurity opportunities, 
                sharing knowledge, and collaborating on security projects. Feel free to reach out!
              </p>
              <div className="contact-item">
                <Mail size={24} />
                <span>pratikshirode1234@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={24} />
                <span>+91 9508817775 </span>
              </div>
              <div className="social-links">
                <a href="http://www.linkedin.com/in/pratikshirode2405" className="social-link">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/shirode_pratik12/" className="social-link">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Pratik Shirode. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;