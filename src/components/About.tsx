import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12" />

          <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg dark:shadow-none">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Full-Stack Software Developer</span> from Kigali, Rwanda, specializing in building scalable backend systems, intuitive frontend interfaces, and cross-platform mobile applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Currently pursuing my <span className="text-blue-600 dark:text-blue-400 font-semibold">Diploma in Software Programming & Embedded Systems</span> at Rwanda Coding Academy (2022-2025), where I've honed my skills in modern web technologies, software engineering principles, and IoT systems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I recently completed an internship at <span className="text-cyan-600 dark:text-cyan-400 font-semibold">kLab Rwanda</span>, where I contributed to full-stack projects using React.js, Node.js, Express.js, and PostgreSQL. I collaborated with talented teams in agile workflows, focusing on UI development, API integration, and debugging complex systems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              My strongest areas include <span className="text-blue-600 dark:text-blue-400 font-semibold">React.js, TypeScript, Node.js, Express, Spring Boot, Java, and PostgreSQL</span>. I'm driven by a passion for creating efficient, maintainable, and user-friendly solutions that solve real-world problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}