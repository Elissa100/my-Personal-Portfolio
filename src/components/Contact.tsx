import { ArrowUpRight, Github, Mail, MapPin, Phone } from 'lucide-react';
import SectionIntro from './SectionIntro';

export default function Contact() {
  return (
    <section id="contact" className="section-block contact-section">
      <div className="page-shell">
        <SectionIntro
          number="05"
          title="Let’s build something useful."
          description="For roles, collaborations, or a good conversation about building software, get in touch."
        />
        <div className="contact-details">
          <a href="mailto:sibomanaelissa71@gmail.com" className="contact-item">
            <Mail size={18} aria-hidden="true" />
            <span>sibomanaelissa71@gmail.com</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a href="tel:+250796146694" className="contact-item">
            <Phone size={18} aria-hidden="true" />
            <span>+250 796 146 694</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a href="https://github.com/Elissa100" target="_blank" rel="noreferrer" className="contact-item">
            <Github size={18} aria-hidden="true" />
            <span>github.com/Elissa100</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <div className="contact-item contact-location">
            <MapPin size={18} aria-hidden="true" />
            <span>Kigali, Rwanda</span>
          </div>
        </div>
      </div>
    </section>
  );
}
