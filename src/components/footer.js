// src/components/Footer.js
'use client'; // <--- Perbaikan: Menambahkan direktif 'use client';

import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import Link from 'next/link'; 
// Import motion dan hook untuk animasi
import { motion, useInView } from 'framer-motion'; 
import { useRef } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // 1. Buat referensi (ref) untuk elemen footer
  const ref = useRef(null);
  // 2. Gunakan useInView untuk melacak apakah elemen terlihat
  const isInView = useInView(ref, { once: true, amount: 0.1 }); 

  // Properti animasi
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.1 // Animasi anak-anak muncul secara berurutan
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      // Pemicu animasi saat terlihat
      animate={isInView ? "visible" : "hidden"} 
      className="bg-gray-900 text-gray-400 py-10 mt-12 border-t border-gray-700">
      
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Konten Utama Footer (Tiga Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-b border-gray-700/50 pb-8 mb-8">
          
          {/* 1. Logo/Pernyataan */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-2">Ahmad Fatih R.</h3>
          </motion.div>

          {/* 2. Navigasi Cepat */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-3">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <motion.li variants={itemVariants}><Link href="/about" className="hover:text-primary transition">Tentang</Link></motion.li>
              <motion.li variants={itemVariants}><Link href="/projects" className="hover:text-primary transition">Proyek</Link></motion.li>
              <motion.li variants={itemVariants}><Link href="/contact" className="hover:text-primary transition">Kontak</Link></motion.li>
              <motion.li variants={itemVariants}><Link href="/privacy" className="hover:text-primary transition">Privasi</Link></motion.li>
            </ul>
          </motion.div>

          {/* 3. Hubungi Saya */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-3">Hubungi</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://linkedin.com/in/ahmadfatihr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
              <a href="https://github.com/hzero0736" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition" aria-label="GitHub"><FaGithub size={24} /></a>
              <a href="mailto:ahmadfatihplh@gmail.com" className="text-gray-400 hover:text-primary transition" aria-label="Email"><FaEnvelope size={24} /></a>
            </div>
            <p className="text-sm">
                Email: ahmadfatihplh@gmail.com
            </p>
          </motion.div>
        </div>

        {/* Hak Cipta & Info Build (Bottom Bar) */}
        <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {currentYear} Ahmad Fatih Rahmatullah.
          </p>
          <p className="mt-2 md:mt-0 text-gray-500">
            Dibuat dengan Next.js & Tailwind CSS.
          </p>
        </motion.div>

      </div>
    </motion.footer>
  );
}