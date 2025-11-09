import { link } from 'fs';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  theme: 'light' | 'sakura';
  toggleTheme: () => void;
}

export function Header({ theme, toggleTheme }: HeaderProps) {
  const navItems = [
    {
      name: '首頁',
      link: '/'
    },
    {
      name: '專案作品',
      link: 'projects-page'
    },
    {
      name: '我的技能',
      link: 'skills'
    },
    {
      name: '有關於我',
      link: 'about'
    },
    {
      name: '聯絡方式',
      link: 'contact'
    }
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#2D1B2E]/80 border-b border-[#E8DED2]/30"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <span className="text-[#FFB7C5]">✿</span>
          <h1 className="text-lg tracking-wide"></h1>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.link}
              href={item.link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="text-sm transition-colors hover:text-[#FFB7C5] cursor-pointer"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full bg-[#F5F0EB]/50 dark:bg-[#4A2E4C]/50 transition-colors"
        >
          {theme === 'light' ? (
            <Moon className="w-4 h-4 text-[#FFB7C5]" />
          ) : (
            <Sun className="w-4 h-4 text-[#FFD6A5]" />
          )}
        </motion.button>
      </div>
    </motion.header>
  );
}
