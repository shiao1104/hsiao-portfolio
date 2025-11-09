import { useState, useEffect } from 'react';
import { Header } from '../src/components/Header';
import { Hero } from '../src/components/Hero';
import { Projects } from '../src/components/Projects';
import { Skills } from '../src/components/Skills';
import { About } from '../src/components/About';
import { Footer } from '../src/components/Footer';
import { motion } from 'motion/react';
import { ProjectCard } from '../src/components/ProjectCard';
import { projects } from '../lib/data/projectsData';

export default function ProjectsPage() {
  const [theme, setTheme] = useState<'light' | 'sakura'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'sakura' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'sakura') {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'sakura' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'sakura') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE] dark:bg-gradient-to-br dark:from-[#2D1B2E] dark:via-[#1A0F1B] dark:to-[#2D1B2E] text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main>
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
