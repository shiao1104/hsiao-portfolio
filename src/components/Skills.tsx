import { motion } from 'motion/react';
import { Code2, Database, Palette, Wrench } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      subtitle: '前端開發',
      icon: Code2,
      color: '#FFB7C5',
      skills: ['React', 'JavaScript', 'Next.js', 'Tailwind CSS', 'SCSS', 'TypeScript'],
    },
    {
      title: 'Backend',
      subtitle: '後端開發',
      icon: Database,
      color: '#B8D4C8',
      skills: ['Python', 'Flask', 'Django', 'Java', 'MySQL'],
    },
    {
      title: 'Tools',
      subtitle: '版本工具',
      icon: Wrench,
      color: '#FFD6A5',
      skills: ['Git', 'GitHub', 'Fork'],
    },
    {
      title: 'Other',
      subtitle: '其他技能',
      icon: Palette,
      color: '#C5A3FF',
      skills: ['SEO', 'Responsive Design', 'Typography', 'Color Theory'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#F5F0EB]/30 dark:bg-[#1A0F1B]/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block">
            <span className="text-4xl">⚡</span>
          </div>
          <h2 className="text-3xl md:text-4xl">我的技能</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white/80 dark:bg-[#2D1B2E]/80 backdrop-blur-sm rounded-3xl p-6 border border-[#E8DED2]/30 dark:border-[#4A2E4C]/30 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}20, ${category.color}40)`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: category.color }} />
                </motion.div>

                <h3 className="text-lg mb-1">{category.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  {category.subtitle}
                </p>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ x: 4 }}
                      className="px-3 py-2 rounded-full bg-[#F5F0EB]/50 dark:bg-[#4A2E4C]/30 text-xs border border-[#E8DED2]/50 dark:border-[#4A2E4C]/50 text-center"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
