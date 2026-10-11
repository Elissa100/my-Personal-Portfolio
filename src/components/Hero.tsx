import { ArrowDown, ArrowUpRight, ExternalLink, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="page-shell hero-layout">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Full-Stack Software Developer <span className="eyebrow-dot">/</span> Kigali, Rwanda</p>
          <h1>Elissa<br /><span>Sibomana.</span></h1>
          <p className="hero-lede">I build web applications and backend services that solve real business problems.</p>
          <p className="hero-detail">Frontend-focused, with hands-on experience across APIs, databases, and complete product workflows.</p>
          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              View my work <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a
              href="/Elissa_Sibomana_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              <ExternalLink size={16} aria-hidden="true" /> View CV
            </a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href="https://github.com/Elissa100" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github size={17} aria-hidden="true" /><span>GitHub</span><ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/elissa-sibomana-1888b8413" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={17} aria-hidden="true" /><span>LinkedIn</span><ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a href="mailto:sibomanaelissa71@gmail.com" aria-label="Email Elissa">
              <span className="social-email-mark" aria-hidden="true">@</span><span>Email</span><ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <div className="portrait-caption"><span>ELISSA SIBOMANA</span><span>SOFTWARE DEVELOPER</span></div>
          <img
            className="hero-portrait"
            src="/profile-main.jpg"
            alt="Portrait of Elissa Sibomana"
            width="600"
            height="720"
            fetchPriority="high"
          />
          <span className="portrait-index" aria-hidden="true">KIGALI / RWANDA</span>
        </div>
      </div>
    </section>
  );
}
