// src/app/about/page.js
'use client'; 

import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaAward,
  FaUsers,
  FaPaintBrush,
  FaCode,
  FaDatabase,
  FaCalendarAlt, 
} from 'react-icons/fa';

// Varian untuk animasi stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  // Aksen Minimalis (Placeholder untuk Primary)
  const minimalAccent = 'indigo-700';

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto py-10"
    >
      {/* Judul Utama - Extrabold */}
     <motion.h1 
        variants={itemVariants} 
        className="text-4xl font-extrabold mb-8 text-center text-white">
        Tentang Saya
      </motion.h1>

      {/* Ringkasan Pribadi */}
      <motion.div
        variants={itemVariants}
        // Border atas diubah ke abu-abu gelap
        className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gray-300 mb-12"
      >
        <p className="text-gray-800 leading-relaxed text-lg text-center font-bold"> {/* Teks ringkasan bold */}
          Saya adalah lulusan D3 Teknik Informatika dari Politeknik Negeri Tanah
          Laut (IPK 3.59/4.00) dengan passion kuat dalam pengembangan web modern dan desain grafis. Saya berpengalaman menerapkan pengetahuan akademik ke dalam proyek nyata, mulai dari sistem informasi hingga aplikasi Augmented Reality (AR).
        </p>
      </motion.div>

      {/* Bagian Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Pendidikan */}
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
          {/* H2 - Bold, warna netral/aksen minimalis */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900">
            <FaGraduationCap className={`text-${minimalAccent} text-3xl`}/>
            Pendidikan
          </h2>
          {/* Timeline effect diubah ke abu-abu gelap */}
          <div className={`border-l-4 border-gray-300 pl-4 space-y-4`}> 
            <div>
              {/* H3 - Bold */}
              <h3 className="font-bold text-lg text-gray-900">
                Politeknik Negeri Tanah Laut
              </h3>
              <p className="text-gray-700 text-sm flex items-center gap-1">
                <FaCalendarAlt size={12} className={`text-${minimalAccent}`}/> D3 Teknik Informatika | Agt 2022 - Agt 2025
              </p>
              <p className="text-gray-700 mt-2 text-sm font-bold">IPK: 3.59/4.00</p>
            </div>
          </div>
        </motion.div>

        {/* Organisasi */}
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
          {/* H2 - Bold, warna netral/aksen minimalis */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900">
            <FaUsers className={`text-${minimalAccent} text-3xl`}/>
            Organisasi
          </h2>
          {/* Timeline effect diubah ke abu-abu gelap */}
          <div className={`border-l-4 border-gray-300 pl-4 space-y-4`}> 
            <div>
              {/* H3 - Bold */}
              <h3 className="font-bold text-lg text-gray-900">HIMA-TI Politeknik Negeri Tanah Laut</h3>
              <p className="text-gray-700 text-sm">
                Anggota Divisi Humas
              </p>
              <p className="text-gray-700 text-sm flex items-center gap-1">
                <FaCalendarAlt size={12} className={`text-${minimalAccent}`}/> Sep 2022 - Sep 2024
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sertifikasi */}
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
          {/* H2 - Bold, warna netral/aksen minimalis */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900">
            <FaAward className={`text-${minimalAccent} text-3xl`}/>
            Sertifikasi
          </h2>
          <ul className="space-y-4">
            {/* Dot list diubah ke abu-abu gelap */}
            <li className="flex items-start gap-2 text-gray-700 font-semibold">
              <span className={`w-2 h-2 bg-gray-600 rounded-full mt-2.5 flex-shrink-0`}></span>
              Junior Web Programmer (2025)
            </li>
            <li className="flex items-start gap-2 text-gray-700 font-semibold">
              <span className={`w-2 h-2 bg-gray-600 rounded-full mt-2.5 flex-shrink-0`}></span>
              Junior Graphic Designer (2024)
            </li>
          </ul>
        </motion.div>

        {/* Keterampilan */}
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
          {/* H2 - Bold, warna netral/aksen minimalis */}
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            <span className="flex items-center gap-3 text-gray-900"><FaCode className={`text-${minimalAccent} text-3xl`}/> Keterampilan</span>
          </h2>
          <div className="space-y-3 pt-1">
            {/* Border kiri diubah ke abu-abu gelap, teks dibuat bold */}
            <p className="flex items-center gap-2 text-gray-700 font-semibold border-l-4 border-gray-300 pl-2 py-0.5">
                <FaCode className={`text-${minimalAccent}`}/> Web Development (PHP, JS, HTML, CSS)
            </p>
            <p className="flex items-center gap-2 text-gray-700 font-semibold border-l-4 border-gray-300 pl-2 py-0.5">
                <FaDatabase className={`text-${minimalAccent}`}/> Database Management (MySQL)
            </p>
            <p className="flex items-center gap-2 text-gray-700 font-semibold border-l-4 border-gray-300 pl-2 py-0.5">
                <FaPaintBrush className={`text-${minimalAccent}`}/> Desain (Photoshop, Illustrator)
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}