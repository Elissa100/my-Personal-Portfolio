import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Instagram, Send, Download } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sibomanaelissa71@gmail.com',
    href: 'mailto:sibomanaelissa71@gmail.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Phone,
    label: 'Phone & Telegram',
    value: '+250 796 146 694',
    href: 'tel:+250796146694',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kigali, Rwanda',
    href: null,
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Elissa100',
    href: 'https://github.com/Elissa100',
    color: 'from-purple-500 to-pink-500'
  }
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Elissa100',
    color: '#6e5494'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/e_sibo_08/',
    color: '#E4405F'
  },
  {
    icon: Send,
    label: 'Telegram',
    href: 'https://t.me/+250796146694',
    color: '#0088cc'
  },
  {
    icon: SiWhatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/250796146694',
    color: '#25D366'
  }
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block h-full bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 group shadow-lg dark:shadow-none"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-gray-900 dark:text-white font-semibold mb-2">{info.label}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm break-words">{info.value}</p>
                    </a>
                  ) : (
                    <div className="h-full bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-lg dark:shadow-none">
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center mb-4 shadow-md`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-gray-900 dark:text-white font-semibold mb-2">{info.label}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{info.value}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 max-w-3xl mx-auto shadow-lg dark:shadow-none"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Connect With Me</h3>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 flex items-center justify-center bg-white dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-full hover:bg-gray-100 dark:hover:bg-white/20 transition-all duration-300 shadow-md dark:shadow-none"
                  >
                    <social.icon className="w-7 h-7" style={{ color: social.color }} />
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/250796146694"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <SiWhatsapp className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <button className="px-6 py-3 bg-white dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm dark:shadow-none">
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}