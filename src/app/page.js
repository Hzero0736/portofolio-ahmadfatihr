// src/app/page.js
'use client'; // Diperlukan untuk 'motion'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhp, FaJsSquare, FaDatabase, FaReact } from 'react-icons/fa';
import { SiAdobeillustrator, SiAdobephotoshop, SiCoreldraw } from 'react-icons/si';

export default function Home() {
  const skills = [
    { name: 'PHP', icon: <FaPhp size={20} className="text-purple-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare size={20} className="text-yellow-500" /> },
    { name: 'MySQL', icon: <FaDatabase size={20} className="text-blue-500" /> },
    { name: 'Next.js', icon: <FaReact size={20} className="text-cyan-500" /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop size={20} className="text-blue-800" /> },
    { name: 'Illustrator', icon: <SiAdobeillustrator size={20} className="text-brown-600" /> },
  ];

  return (
    <div className="min-h-[80vh]">
      {/* Bagian Hero - Tata Letak 2 Kolom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-10 items-center mb-24"
      >
        {/* Kolom Teks (Kiri) */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-4">
            Ahmad Fatih Rahmatullah
          </h1>
          <p className="text-xl md:text-2xl text-primary mb-8">
            Web Developer & Graphic Designer
          </p>
          <p className="text-text-muted text-lg leading-relaxed mb-8">
            Lulusan D3 Teknik Informatika yang berfokus pada pengembangan web (PHP, JavaScript) 
            dan desain grafis, dengan pengalaman membangun sistem informasi dan aplikasi AR.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              href="/projects"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition shadow-sm">
              Lihat Proyek
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 text-text-dark px-6 py-3 rounded-lg hover:bg-blue-100 transition">
              Hubungi Saya
            </Link>
          </div>
        </div>
        
        {/* Kolom Gambar (Kanan) */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="w-full max-w-sm mx-auto md:mx-0"
        >
          <img
            src="/images/placeholder.jpg" // Ganti dengan foto Anda
            alt="Ahmad Fatih"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </motion.div>
      </motion.div>

      {/* Bagian Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 w-full"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-text-dark">
          Keahlian Utama
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100 text-gray-700 font-semibold transition duration-300 cursor-pointer"
            >
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}