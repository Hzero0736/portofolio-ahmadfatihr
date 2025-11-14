// src/app/layout.js

import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portofolio Ahmad Fatih Rahmatullah',
  description: 'Web Developer & Graphic Designer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-bg-light text-text-dark`}
      >
        <Navbar />
        {/* Pindahkan padding-top ke main, agar navbar bisa 'sticky' */}
        <main className="flex-grow container mx-auto px-4 py-8 pt-24 max-w-6xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}