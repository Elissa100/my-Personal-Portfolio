import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SiReact, SiTailwindcss, SiTypescript, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiSpringboot, SiPython, SiDjango, SiFastapi, SiCplusplus, SiC, SiFlutter, SiPostgresql, SiMysql, SiGit, SiDocker } from 'react-icons/si';
import { Coffee } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'Java', icon: Coffee, color: '#007396' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Django', icon: SiDjango, color: '#092E20' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
    ]
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'React Native', icon: SiReact, color: '#61DAFB' },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    ]
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-md dark:shadow-none"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex flex-col items-center gap-2 p-3 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-white/20 transition-all duration-300 group shadow-sm dark:shadow-none"
                    >
                      <skill.icon
                        className="w-8 h-8 transition-all duration-300"
                        style={{ color: skill.color }}
                      />
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-500/10 dark:to-cyan-500/10 backdrop-blur-sm border border-blue-100 dark:border-blue-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Problem Solving', 'Collaboration', 'Adaptability', 'Team Work', 'Communication', 'Agile Methodologies'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-full text-gray-700 dark:text-gray-300 text-sm hover:bg-gray-100 dark:hover:bg-white/20 transition-colors shadow-sm dark:shadow-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}