import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Software Development Intern',
    company: 'kLab Rwanda',
    location: 'Kigali, Rwanda',
    period: 'September 2025 - November 2025',
    description: [
      'Developed full-stack applications using React.js, Node.js, Express.js, and PostgreSQL',
      'Contributed to UI/UX development and implemented responsive designs',
      'Integrated RESTful APIs and managed database operations',
      'Collaborated with cross-functional teams in agile development workflows',
      'Debugged complex issues and optimized application performance',
      'Participated in code reviews and maintained high code quality standards'
    ]
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12" />

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block" />

                <div className="md:ml-8 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 shadow-lg dark:shadow-none">
                  <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-gray-50 dark:border-slate-800 hidden md:block" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <Briefcase className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                        {exp.role}
                      </h3>
                      <p className="text-xl text-cyan-600 dark:text-cyan-400 font-semibold mb-2">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                        className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-cyan-600 dark:text-cyan-400 mt-1">▹</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}