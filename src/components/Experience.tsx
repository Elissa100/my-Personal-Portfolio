import { ArrowUpRight } from 'lucide-react';
import SectionIntro from './SectionIntro';

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'FIKA',
    period: 'June 2026 – Present',
    location: 'Kigali, Rwanda',
    summary: 'Joined as a frontend developer and grew into full-stack work, contributing to production features across the logistics platform.',
    contributions: [
      'Built client, transporter, and clearing-agent workflows, including business registration and verification.',
      'Developed and maintained backend APIs and services as the role expanded.',
      'Worked on carrier browsing, vehicle and route management, and day-to-day logistics workflows.',
    ],
    href: 'https://fika.rw',
  },
  {
    role: 'Project-Based Full-Stack Developer',
    company: 'Construct KVV',
    period: 'January 2026 – July 2026',
    location: 'Kigali, Rwanda',
    summary: 'Contributed across the web, mobile, and backend applications for a construction marketplace.',
    contributions: [
      'Built responsive interfaces and connected web and mobile applications to backend services.',
      'Developed backend APIs supporting core platform functionality.',
      'Contributed to construction cost estimation and other platform features.',
    ],
    href: 'https://constructkvv.rw',
  },
  {
    role: 'Software Development Intern',
    company: 'InTouch Communications',
    period: 'February 2026 – June 2026',
    location: 'Kigali, Rwanda',
    summary: 'Improved the client-facing portal of InTouchSMS, an SMS campaign management platform.',
    contributions: [
      'Modernized responsive experiences for campaigns, contacts, scheduling, dashboards, and account management.',
      'Integrated frontend features with existing backend APIs and services.',
      'Focused on making a live production platform clearer and easier to use.',
    ],
    href: null,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-block section-tint">
      <div className="page-shell">
        <SectionIntro
          number="02"
          title="Experience"
          description="Practical product work across communications, logistics, and construction."
        />
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-entry" key={experience.company}>
              <div className="experience-date">
                <span>{experience.period}</span>
                <span>{experience.location}</span>
              </div>
              <div className="experience-main">
                <div className="experience-heading">
                  <div>
                    <p className="experience-company">{experience.company}</p>
                    <h3>{experience.role}</h3>
                  </div>
                  {experience.href && (
                    <a
                      className="text-link experience-link"
                      href={experience.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${experience.company} website`}
                    >
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  )}
                </div>
                <p className="experience-summary">{experience.summary}</p>
                <ul className="experience-points">
                  {experience.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
              </div>
              <span className="experience-index" aria-hidden="true">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
