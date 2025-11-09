import { useState, useEffect } from 'react';
import { Header } from '../src/components/Header';
import { Hero } from '../src/components/Hero';
import { Projects } from '../src/components/Projects';
import { Skills } from '../src/components/Skills';
import { About } from '../src/components/About';
import { Footer } from '../src/components/Footer';

export default function App() {
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
        <Hero />
        <Projects />
        <Skills />
        <About />
      </main>
      
      <Footer />
    </div>
  );
}
