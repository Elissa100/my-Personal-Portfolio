import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: 'Diploma in Software Programming & Embedded Systems',
    institution: 'Rwanda Coding Academy',
    location: 'Kigali, Rwanda',
    period: '2022 - 2025',
    focus: [
      'Full-Stack Web Development',
      'Software Engineering Principles',
      'IoT & Embedded Systems',
      'Mobile Application Development',
      'Database Design & Management',
      'Agile Development Methodologies'
    ],
    highlight: 'React.js, TypeScript, Node.js, Express, Spring Boot, Java, PostgreSQL'
  }
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="education" className="py-20 bg-slate-900" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Qualifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12" />

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-cyan-400 font-semibold mb-3">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-gray-400">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-cyan-400" />
                    Areas of Specialization
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.focus.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                        className="text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-2">Strongest Technologies:</p>
                  <p className="text-cyan-400 font-medium">{edu.highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
