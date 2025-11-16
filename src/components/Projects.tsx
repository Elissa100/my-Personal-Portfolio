import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Clock, Coffee } from 'lucide-react';
import { SiReact, SiSpringboot, SiPostgresql, SiTailwindcss, SiTypescript, SiNodedotjs, SiExpress, SiPrisma, SiSocketdotio, SiStripe } from 'react-icons/si';

const projects = [
  {
    title: 'HavenHub',
    description: 'Full-stack hotel and housing management system with comprehensive booking, room management, and payment processing capabilities.',
    technologies: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ],
    github: 'https://github.com/Elissa100/havenhub',
    demo: null,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'SkillLink Frontend',
    description: 'Modern and intuitive freelancing platform UI with advanced filtering, real-time search, and responsive design for optimal user experience.',
    technologies: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ],
    github: 'https://github.com/Elissa100/skilllink-frontend',
    demo: null,
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'SkillLink Backend',
    description: 'Robust API backend for the SkillLink platform featuring JWT authentication, real-time messaging, payment integration, and Redis caching.',
    technologies: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
      { name: 'Socket.io', icon: SiSocketdotio, color: '#010101' },
      { name: 'Stripe', icon: SiStripe, color: '#635BFF' },
    ],
    github: 'https://github.com/Elissa100/skilllink-backend',
    demo: null,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Collabris',
    description: 'Real-time collaboration platform enabling teams to work together seamlessly with instant updates, shared workspaces, and live editing.',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Socket.io', icon: SiSocketdotio, color: '#010101' },
    ],
    github: 'https://github.com/Elissa100/collabris',
    demo: null,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Kapee Shop',
    description: 'Feature-rich e-commerce application with product catalog, shopping cart, secure checkout, and order management system.',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ],
    github: 'https://github.com/Elissa100/kapeeshop',
    demo: null,
    gradient: 'from-orange-500 to-red-500'
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20 bg-slate-900" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                      >
                        <tech.icon className="w-3.5 h-3.5" style={{ color: tech.color }} />
                        <span className="text-xs text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">GitHub</span>
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white hover:shadow-lg transition-all duration-300`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    ) : (
                      <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-500 cursor-not-allowed">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">Coming Soon</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
