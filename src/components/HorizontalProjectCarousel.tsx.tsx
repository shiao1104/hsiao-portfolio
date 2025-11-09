import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ProjectCard } from './ProjectCard';

export function HorizontalProjectCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern online shopping experience with smooth animations and intuitive UI design.',
      image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYyMjU5NTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'TypeScript', 'Tailwind'],
      badge: '作品完成',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'Clean and minimal task organizer with drag-and-drop functionality and beautiful transitions.',
      image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyMzE3NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'Framer Motion', 'Zustand'],
      badge: 'デモあり',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A creative showcase platform with Japanese minimalist aesthetics and soft animations.',
      image: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIyNDUxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'CSS', 'Motion'],
      badge: '作品完成',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics platform with real-time data visualization and beautiful charts.',
      image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYyMjU5NTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Vue', 'Chart.js', 'Firebase'],
      badge: 'デモあり',
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section ref={ref} className="py-20 overflow-hidden">
      <div className="px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="inline-block">
            <span className="text-4xl">✨</span>
          </div>
          <h2 className="text-3xl md:text-4xl">More Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Scroll to explore more of my work
          </p>
        </motion.div>
      </div>

      <motion.div
        style={{ x }}
        className="flex gap-8 pl-6"
      >
        {[...projects, ...projects].map((project, index) => (
          <div key={index} className="min-w-[350px] md:min-w-[400px]">
            <ProjectCard {...project} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
