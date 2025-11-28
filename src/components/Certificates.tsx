import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle, Coffee } from 'lucide-react';
import { SiSpringboot, SiGit, SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiCoursera, SiUdemy, SiFreecodecamp } from 'react-icons/si';

const certificates = [
  {
    title: 'Full-Stack Web Development',
    issuer: 'Coursera',
    description: 'Professional specialization in modern full-stack development, covering frontend frameworks and server-side deployment.',
    technologies: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
    gradient: 'from-blue-500 to-cyan-500',
    icon: SiCoursera
  },
  {
    title: 'Java & Spring Boot Masterclass',
    issuer: 'Udemy',
    description: 'In-depth mastery of Java ecosystem, Spring Boot microservices, and enterprise application architecture.',
    technologies: [
      { name: 'Java', icon: Coffee, color: '#007396' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    ],
    gradient: 'from-purple-500 to-violet-500',
    icon: SiUdemy
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    description: 'Developer certification focused on responsive design principles, CSS Flexbox, Grid, and accessibility standards.',
    technologies: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    ],
    gradient: 'from-yellow-500 to-orange-500',
    icon: SiFreecodecamp
  },
  {
    title: 'Software Engineering Diploma',
    issuer: 'Rwanda Coding Academy',
    description: 'Formal education in software programming, embedded systems, and collaborative development workflows.',
    technologies: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
    ],
    gradient: 'from-green-500 to-emerald-500',
    icon: Award
  }
];

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden group shadow-lg dark:shadow-none"
              >
                <div className={`h-2 bg-gradient-to-r ${cert.gradient}`} />

                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${cert.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 dark:group-hover:from-blue-400 dark:group-hover:to-cyan-400 transition-all">
                        {cert.title}
                      </h3>
                      <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                      >
                        <tech.icon className="w-4 h-4" style={{ color: tech.color }} />
                        <span className="text-xs text-gray-700 dark:text-gray-300">{tech.name}</span>
                      </div>
                    ))}
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