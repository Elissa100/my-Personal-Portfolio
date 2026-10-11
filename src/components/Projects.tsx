import { ArrowUpRight } from 'lucide-react';
import SectionIntro from './SectionIntro';

function ProductLink({ href, label }: { href: string | null; label: string }) {
  if (!href) return <span className="project-link-unavailable">No public product link</span>;
  return (
    <a className="text-link" href={href} target="_blank" rel="noreferrer">
      {label} <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-block section-paper">
      <div className="page-shell">
        <SectionIntro
          number="03"
          title="Selected projects"
          description="A closer look at the products and workflows I have helped shape."
        />

        <article className="featured-project">
          <div className="featured-project-visual" aria-label="InTouchSMS project details">
            <div className="visual-label"><span className="status-dot" /> PRODUCT CONTRIBUTION</div>
            <p className="visual-wordmark">InTouch<span>SMS</span></p>
            <p className="visual-caption">Campaign communication, organized.</p>
            <div className="workflow-list" aria-label="Campaign workflow areas">
              <div><span>01</span><span>Campaigns</span><span>Compose &amp; manage</span></div>
              <div><span>02</span><span>Contacts</span><span>Groups &amp; audiences</span></div>
              <div><span>03</span><span>Scheduling</span><span>Plan &amp; review</span></div>
            </div>
            <p className="visual-disclaimer">Workflow overview, not a product screenshot</p>
          </div>

          <div className="featured-project-copy">
            <p className="project-kicker">01 / InTouch Communications</p>
            <h3>InTouchSMS</h3>
            <p className="project-description">
              An SMS platform for managing communication campaigns. I worked within the existing
              production system to modernize its client portal and make everyday tasks easier to
              understand.
            </p>
            <div className="contribution-block">
              <h4>My contribution</h4>
              <p>
                Built responsive interfaces for campaigns, contacts and groups, scheduling,
                dashboards, and account management. Connected frontend features to established
                backend APIs and services.
              </p>
            </div>
            <div className="project-meta">
              <h4>Technology</h4>
              <ul className="tech-list" aria-label="InTouchSMS technologies">
                {['React', 'Material UI', 'Redux Toolkit', 'Axios', 'JavaScript'].map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <p className="project-product-note">Production platform contribution · No product link listed</p>
          </div>
        </article>

        <div className="secondary-projects">
          <article className="secondary-project project-fika">
            <p className="project-kicker">02 / Logistics</p>
            <h3>FIKA Logistics Platform</h3>
            <p className="project-description">
              A logistics platform for freight transportation and business workflows across East Africa.
            </p>
            <div className="contribution-block">
              <h4>My contribution</h4>
              <p>
                Started with frontend development and expanded into APIs and services. Worked on
                client, transporter, and clearing-agent features, business registration and
                verification, carrier browsing, vehicles, routes, and logistics workflows.
              </p>
            </div>
            <div className="project-meta">
              <h4>Project areas</h4>
              <ul className="tech-list">
                {['Frontend', 'Backend APIs', 'Business workflows'].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="project-bottom">
              <span className="project-product-note">Live product · Project-specific stack not listed</span>
              <ProductLink href="https://fika.rw" label="Visit FIKA" />
            </div>
          </article>

          <article className="secondary-project project-construct">
            <p className="project-kicker">03 / Construction</p>
            <h3>Construct KVV</h3>
            <p className="project-description">
              A marketplace connecting homeowners with contractors, suppliers, and other construction
              professionals.
            </p>
            <div className="contribution-block">
              <h4>My contribution</h4>
              <p>
                Worked across web, mobile, and backend applications, building responsive interfaces,
                APIs, and integrations. Contributed to cost estimation and other platform features.
              </p>
            </div>
            <div className="project-meta">
              <h4>Project areas</h4>
              <ul className="tech-list">
                {['Web', 'Mobile', 'Backend APIs'].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="project-bottom">
              <span className="project-product-note">Live product · Project-specific stack not listed</span>
              <ProductLink href="https://constructkvv.rw" label="Visit Construct KVV" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
