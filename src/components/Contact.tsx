import { ArrowUpRight, Github, Mail, MapPin, Phone } from 'lucide-react';
import SectionIntro from './SectionIntro';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="section-block contact-section">
      <div className="page-shell">
        <SectionIntro
          number="05"
          title="Maybe your project just needs the right developer."
          description="Still waiting for your idea to take off? Maybe you just haven't talked to me yet. Whether you're starting from scratch, improving an existing product, or looking for a developer to join your team, tell me what you have in mind and the budget you're working with."
        />

        <div className="contact-layout">
          <ContactForm />

          <aside className="contact-aside" aria-label="Other ways to get in touch">
            <p className="contact-aside-label">Prefer a direct conversation?</p>
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
            <p className="contact-aside-note">No pressure to have every detail figured out. A clear first conversation is a good start.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
