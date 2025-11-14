// src/components/Navbar.js
'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Navbar() {
  // Ambil path URL saat ini
  const pathname = usePathname();

  // Warna aksen: Biru Tua (Primary)
  const primaryBgColor = 'blue-600'; 
  // Warna aksen: Biru Muda (Hover/Active)
  const activeColor = 'blue-400';

  // Fungsi utilitas untuk menentukan kelas tautan
  const getLinkClasses = (href) => {
    const isActive = pathname === href;

    // Kelas dasar yang kini berwarna putih
    const baseClasses = 'transition duration-300 px-1 py-1 border-b-2';
    
    // Terapkan kelas aktif atau hover normal
    return `${baseClasses} ${
      isActive
        // KELAS AKTIF: Teks Putih, Garis bawah Biru Muda
        ? `text-white border-${activeColor} font-semibold` 
        // KELAS TIDAK AKTIF: Teks Putih lembut, garis bawah transparan, dan hover Biru Muda
        : `text-gray-200 border-transparent hover:text-white hover:border-${activeColor}`
    }`;
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      // Perubahan: Latar belakang Biru dengan sedikit transparansi dan bayangan halus
      className={`sticky top-0 z-50 w-full bg-${primaryBgColor}/90 backdrop-blur-md border-b border-blue-700 shadow-md`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Nama */}
          <div className="flex-shrink-0">
            {/* Logo berwarna Putih dengan hover Biru Muda */}
            <Link 
              href="/" 
              className={`text-2xl font-bold text-white hover:text-${activeColor} transition duration-300`}>
              Ahmad Fatih R.
            </Link>
          </div>

          {/* Menu Navigasi */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={getLinkClasses('/')}>
              Beranda
            </Link>
            <Link href="/about" className={getLinkClasses('/about')}>
              Tentang
            </Link>
            <Link href="/projects" className={getLinkClasses('/projects')}>
              Proyek
            </Link>
            <Link href="/contact" className={getLinkClasses('/contact')}>
              Kontak
            </Link>
          </div>

          {/* Ikon & Tombol CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Ikon berwarna Putih dengan hover Biru Muda */}
            <a
              href="https://linkedin.com/in/ahmadfatihr"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white hover:text-${activeColor} transition`}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:ahmadfatihplh@gmail.com"
              className={`text-white hover:text-${activeColor} transition`}
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>

            {/* Tombol CTA dengan latar belakang Biru Muda agar menonjol */}
            <a
              href="/cv-ahmad-fatih.pdf"
              download
              className={`bg-${activeColor} text-white-900 px-4 py-2 rounded-lg 
                         hover:bg-blue-300 transition flex items-center space-x-2 
                         shadow-sm hover:shadow-md font-semibold`}>
              <FaDownload />
              <span>Unduh CV</span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}