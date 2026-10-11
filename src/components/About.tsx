import SectionIntro from './SectionIntro';

export default function About() {
  return (
    <section id="about" className="section-block section-paper">
      <div className="page-shell">
        <SectionIntro
          number="01"
          title="A little about me"
          description="I work across the parts of a product that turn an idea into something people can use."
        />
        <div className="about-copy">
          <p>
            I&apos;m a developer based in Kigali, Rwanda. My main focus is building clear, dependable
            frontend experiences, and I also work on the APIs, data, and business logic behind them.
          </p>
          <p>
            I&apos;ve contributed to products in communications, logistics, and construction—from
            modernizing an existing SMS platform to building features across web, mobile, and backend
            services. I enjoy understanding how a system already works, then making it more useful.
          </p>
        </div>
      </div>
    </section>
  );
}
