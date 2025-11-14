// src/components/ProjectCard.js
'use client'; 

import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Varian animasi untuk 'stagger' (muncul satu per satu)
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectCard({ project }) {
  const { title, desc, tech, image, link } = project;

  return (
    <motion.div
      variants={cardVariants} 
      // Animasi hover: Naik sedikit dan bayangan glow gelap
      whileHover={{ y: -5, 
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        // Perubahan: Latar belakang gelap, border gelap
        className="bg-gray-800 rounded-xl shadow-xl border border-gray-700 flex flex-col h-full transition-all duration-300 ease-in-out group hover:border-primary">
        <div className="relative h-48 rounded-t-lg bg-gray-700 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-3">
            {/* Perubahan: Judul berwarna Putih dengan hover Primary */}
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition duration-300">{title}</h3> 
            <FiArrowUpRight
              // Perubahan: Ikon berwarna Primary
              className="text-primary opacity-0 group-hover:opacity-100 transform -translate-y-1 group-hover:translate-y-0 transition-all duration-300 flex-shrink-0"
              size={24} 
            />
          </div>

          {/* Perubahan: Deskripsi Putih lembut */}
          <p className="text-gray-300 mb-4 flex-grow">{desc}</p> 

          <div className="flex flex-wrap gap-2 mt-auto">
            {tech.map((t, i) => (
              <span
                key={i}
                // Perubahan: Tag gelap dengan teks primary
                className="text-xs font-semibold bg-gray-700 text-primary px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
}