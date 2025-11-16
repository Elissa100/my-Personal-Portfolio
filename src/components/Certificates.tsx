import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle, Coffee } from 'lucide-react';
import { SiSpringboot, SiGit, SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs } from 'react-icons/si';

const certificates = [
  {
    title: 'Full-Stack Web Development',
    issuer: 'Rwanda Coding Academy',
    description: 'Comprehensive training in modern web development technologies and best practices',
    technologies: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Java & Spring Boot Development',
    issuer: 'Rwanda Coding Academy',
    description: 'Enterprise-level Java development and Spring Boot framework expertise',
    technologies: [
      { name: 'Java', icon: Coffee, color: '#007396' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    ],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Git & Version Control',
    issuer: 'Rwanda Coding Academy',
    description: 'Professional version control and collaborative development workflows',
    technologies: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
    ],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'Rwanda Coding Academy',
    description: 'Modern responsive design principles and mobile-first development',
    technologies: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    ],
    gradient: 'from-pink-500 to-purple-500'
  }
];

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="certificates" className="py-20 bg-slate-800" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Achievements</span>
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${cert.gradient}`} />

                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${cert.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                        {cert.title}
                      </h3>
                      <p className="text-cyan-400 text-sm font-medium flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                      >
                        <tech.icon className="w-4 h-4" style={{ color: tech.color }} />
                        <span className="text-xs text-gray-300">{tech.name}</span>
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
