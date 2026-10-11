import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="page-shell flex h-[76px] items-center justify-between">
        <a className="brand-mark" href="#home" aria-label="Elissa Sibomana, home">
          ES<span>.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          <a className="nav-link" href="#home">Home</a>
          {navLinks.map((link) => (
            <a className="nav-link" href={link.href} key={link.name}>{link.name}</a>
          ))}
        </nav>

        <a href="#contact" className="header-contact hidden md:inline-flex">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="mobile-menu-button md:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="mobile-navigation md:hidden"
        hidden={!isOpen}
      >
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        {navLinks.map((link) => (
          <a href={link.href} key={link.name} onClick={() => setIsOpen(false)}>{link.name}</a>
        ))}
      </nav>
    </header>
  );
}
