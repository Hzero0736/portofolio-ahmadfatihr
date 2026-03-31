'use client'; // Diperlukan untuk 'motion'

import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Mengembangkan Sistem Informasi Booking Rapat',
    desc: 'Aplikasi pemesanan ruang rapat yang dikembangkan saat magang di PT SMART Tbk.',
    tech: ['PHP', 'MySQL', 'Web'],
    year: '2024-2025',
    image: '/images/projekmagang.png', // Path ke gambar di /public/images/
    link: 'https://github.com/Hzero0736/landing-page-update', // Link ke demo atau kode
  },
  {
    title: 'Mengembangkan Game Edukasi AR Semaphore',
    desc: 'Game berbasis Augmented Reality untuk pembelajaran kode semaphore pramuka (Tugas Akhir).',
    tech: ['Unity', 'AR', 'Mobile'],
    year: '2025',
    image: '/images/TA.jpeg',
    link: '#',
  },
  {
    title: 'Mengembangkan Sistem Informasi Manajemen Laporan Klaim BBM',
    desc: 'Aplikasi pengelolaan klaim bahan bakar untuk efisiensi operasional perusahaan PT SMART Tbk.',
    tech: ['PHP', 'MySQL', 'Web'],
    year: '2025',
    image: '/images/bbm.png',
    link: 'https://github.com/Hzero0736/bbm5',
  },
  {
    title: 'Mengembangkan Sistem Informasi Inventaris HIMA-TI',
    desc: 'Sistem manajemen barang dan aset organisasi mahasiswa.',
    tech: ['PHP', 'MySQL', 'Web'],
    year: '2024',
    image: '/images/hima.png',
    link: 'https://github.com/Hzero0736/Sipi-Hima',
  },
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2, // Mulai animasi anak setelah 0.2 detik
      staggerChildren: 0.1, // Jarak antar animasi anak 0.1 detik
    },
  },
};

export default function Projects() {
  return (
    <div className="py-10">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 text-text-dark"
      >
        Proyek Saya
      </motion.h1>

      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </div>
  );
}