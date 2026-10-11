import SectionIntro from './SectionIntro';

const skillGroups = [
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Material UI'],
  },
  {
    name: 'Backend & APIs',
    skills: ['Node.js', 'NestJS', 'Express.js', 'Java', 'Spring Boot', 'Python', 'REST APIs', 'Prisma'],
  },
  {
    name: 'Data',
    skills: ['PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    name: 'Mobile',
    skills: ['Flutter', 'React Native'],
  },
  {
    name: 'Tools & delivery',
    skills: ['Git', 'Docker', 'CI/CD'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-block section-tint">
      <div className="page-shell">
        <SectionIntro
          number="04"
          title="Tools I work with"
          description="A practical toolkit for building and supporting complete products."
        />
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.name}>
              <h3>{group.name}</h3>
              <ul className="skill-tags">
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
