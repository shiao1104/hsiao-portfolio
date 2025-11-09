import { motion } from 'motion/react';
import { Coffee, BookOpen, Code, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const timeline = [
    {
      year: '2023',
      title: 'Senior Developer',
      description: 'Leading frontend projects with modern tech stacks',
      icon: Code,
    },
    {
      year: '2021',
      title: 'Full Stack Developer',
      description: 'Building scalable web applications',
      icon: BookOpen,
    },
    {
      year: '2019',
      title: 'Started Journey',
      description: 'Fell in love with web development',
      icon: Heart,
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block">
            <span className="text-4xl">☕</span>
          </div>
          <h2 className="text-3xl md:text-4xl">有關於我</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFB7C5] to-[#B8D4C8] rounded-[3rem] blur-3xl opacity-20" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1552660838-53fe2fc30717?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyMjYyODU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profile"
              className="relative w-full rounded-[3rem] shadow-2xl border-4 border-white dark:border-[#2D1B2E]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Hello! I'm a passionate web developer who loves creating beautiful
                and functional digital experiences. I believe in the power of clean
                design and thoughtful interactions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring Japanese culture,
                sipping matcha, or sketching UI designs in my notebook 🌸
              </p>
            </div>

            <div className="space-y-6">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB7C5]/20 to-[#B8D4C8]/20 flex items-center justify-center border border-[#E8DED2]/50 dark:border-[#4A2E4C]/50"
                      >
                        <Icon className="w-5 h-5 text-[#FFB7C5]" />
                      </motion.div>
                      {index < timeline.length - 1 && (
                        <div className="absolute left-6 top-12 w-px h-12 bg-gradient-to-b from-[#E8DED2] to-transparent dark:from-[#4A2E4C]" />
                      )}
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs px-3 py-1 rounded-full bg-[#FFB7C5]/10 text-[#FFB7C5] border border-[#FFB7C5]/20">
                          {item.year}
                        </span>
                        <h3 className="text-lg">{item.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F0EB]/50 dark:bg-[#4A2E4C]/30 text-sm border border-[#E8DED2]/50">
                <Coffee className="w-4 h-4 text-[#FFB7C5]" />
                Matcha Lover
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F0EB]/50 dark:bg-[#4A2E4C]/30 text-sm border border-[#E8DED2]/50">
                🌸 Minimalist
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F0EB]/50 dark:bg-[#4A2E4C]/30 text-sm border border-[#E8DED2]/50">
                📚 Lifelong Learner
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
