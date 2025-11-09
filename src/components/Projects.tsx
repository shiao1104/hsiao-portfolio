import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const projects = [
    {
      title: 'Interviewer AI',
      description: '多模態智慧面試系統，結合臉部表情辨識、語音轉文字與大型語言模型生成動態題庫，協助企業進行初步線上面試篩選。',
      image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYyMjU5NTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'MUI', 'Restful API', 'Django', 'OpenCV', 'Whisper', 'MySQL'],
      badge: '二技專題',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'SoulGO',
      description: '結合狗狗辨識與問答等互動式方式，提供一個全民寓教於樂的應用程式。',
      image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyMzE3NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Android Studio', 'Java', 'MySQL', 'Figma'],
      badge: '五專專題',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: '北商教學發展中心資訊系統',
      description: '結合ESG政策，打造一個提升行政速度與便利性的教學發展中心資訊系統。',
      image: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIyNDUxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Next.js', 'API', 'Figma', 'Sass', 'MySQL'],
      badge: '作品完成',
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block">
            <span className="text-4xl">🌸</span>
          </div>
          <h2 className="text-3xl md:text-4xl">專案作品</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <motion.a
          href="projects-page"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FFB7C5] to-[#FFC9D6] text-white shadow-lg shadow-[#FFB7C5]/30 cursor-pointer"
        >
          查看全部作品
        </motion.a>
      </div>
    </section>
  );
}
