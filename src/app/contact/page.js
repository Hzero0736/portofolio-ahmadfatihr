// src/app/contact/page.js
'use client'; 

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

// Varian animasi untuk item (opsional, jika Anda ingin stagger item kontak)
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto py-10"
    >
      <h1 className="text-4xl font-extrabold mb-8 text-center text-white">Hubungi Saya</h1>

      {/* Card Utama */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="bg-white p-6 md:p-10 rounded-xl shadow-2xl border border-gray-100" // Bayangan lebih kuat
      >
        <div className="space-y-0 divide-y divide-gray-200"> {/* Menambahkan garis pemisah */}
          
          {/* Email */}
          <motion.div variants={itemVariants} className="flex items-center justify-between gap-4 py-4 md:py-6 group transition duration-300">
            <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-4 rounded-full text-gray-500 shadow-md flex-shrink-0">
                  <FaEnvelope size={24} /> 
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Email</h3> {/* Judul lebih gelap */}
                  <a
                    href="mailto:ahmadfatihplh@gmail.com"
                    // Teks lebih gelap, hover ke warna primary
                    className="text-gray-600 hover:text-primary transition duration-300 font-medium"
                  >
                    ahmadfatihplh@gmail.com
                  </a>
                </div>
            </div>
            {/* Indikator hover visual */}
            <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</div>
          </motion.div>

          {/* LinkedIn */}
          <motion.div variants={itemVariants} className="flex items-center justify-between gap-4 py-4 md:py-6 group transition duration-300">
            <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-4 rounded-full text-gray-500 shadow-md flex-shrink-0">
                  <FaLinkedin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/ahmadfatihr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition duration-300 font-medium"
                  >
                    /in/ahmadfatihr
                  </a>
                </div>
            </div>
            <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</div>
          </motion.div>
          
          {/* Telepon */}
          <motion.div variants={itemVariants} className="flex items-center justify-between gap-4 py-4 md:py-6 group transition duration-300">
            <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-4 rounded-full text-gray-500 shadow-md flex-shrink-0">
                  <FaPhone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Telepon / WhatsApp</h3>
                  <p className="text-gray-600 font-medium">+62 852-5119-2872</p>
                </div>
            </div>
            {/* Indikator hover WA */}
            <a href="https://wa.me/6285251192872" target="_blank" rel="noopener noreferrer" className="text-primary opacity-0 group-hover:opacity-100 transition-opacity font-semibold hover:underline">Chat</a>
          </motion.div>

          {/* Lokasi (Opsional, Menambah Profesionalitas) */}
           <motion.div variants={itemVariants} className="flex items-center justify-between gap-4 py-4 md:py-6">
            <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-4 rounded-full text-gray-500 shadow-md flex-shrink-0">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Lokasi</h3>
                  <p className="text-gray-600 font-medium">Kabupaten Tanah Laut, Kalimantan Selatan</p>
                </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
}