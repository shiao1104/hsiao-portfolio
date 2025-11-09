import { motion } from 'motion/react';
import { ExternalLink, ShieldQuestionIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  badge?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  badge,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      <div className="bg-white/80 dark:bg-[#2D1B2E]/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#E8DED2]/30 dark:border-[#4A2E4C]/30 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#FFB7C5]/10 hover:border-[#FFB7C5]/40">
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {badge && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-[#FFB7C5] text-white border-0 rounded-full px-3 py-1">
                {badge}
              </Badge>
            </div>
          )}

          {/* Hover Tooltip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-6 gap-3"
          >
            {demoUrl && (
              <motion.a
                href={demoUrl}
                initial={{ y: 20 }}
                animate={{ y: isHovered ? 0 : 20 }}
                transition={{ delay: 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white rounded-full text-sm flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <ShieldQuestionIcon className="w-4 h-4" />
                專案說明
              </motion.a>
            )}
            {githubUrl && (
              <motion.a
                href={githubUrl}
                initial={{ y: 20 }}
                animate={{ y: isHovered ? 0 : 20 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white rounded-full text-sm flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                瀏覽網站
              </motion.a>
            )}
          </motion.div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#F5F0EB]/50 dark:bg-[#4A2E4C]/30 text-xs border border-[#E8DED2]/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
