import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="page-shell education-layout">
        <div className="education-label">
          <GraduationCap size={20} aria-hidden="true" />
          <span>Education</span>
        </div>
        <div>
          <h2>Rwanda Coding Academy</h2>
          <p>Software Programming &amp; Embedded Systems</p>
        </div>
        <span className="education-period">October 2022 to July 2025</span>
      </div>
    </section>
  );
}
