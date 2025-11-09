import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer id="contact" className="relative py-12 px-6 bg-[#F5F0EB]/30 dark:bg-[#1A0F1B]/30 overflow-hidden">
      {/* Subtle Japanese pattern background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #FFB7C5 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-2xl">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
              I'd love to hear from you! Feel free to reach out for collaborations or just a friendly chat ✨
            </p>
          </div>

          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-white/80 dark:bg-[#2D1B2E]/80 backdrop-blur-sm border border-[#E8DED2]/50 dark:border-[#4A2E4C]/50 flex items-center justify-center shadow-lg hover:border-[#FFB7C5]/50 transition-colors cursor-pointer"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </motion.a>
              );
            })}
          </div>

          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#E8DED2] dark:via-[#4A2E4C] to-transparent" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300"
          >
            <span>Designed with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              <Heart className="w-4 h-4 text-[#FFB7C5] fill-[#FFB7C5]" />
            </motion.div>
            <span>by Your Name</span>
          </motion.div>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
