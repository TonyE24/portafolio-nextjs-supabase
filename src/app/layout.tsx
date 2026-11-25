import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevArchitecture | Portafolio Serverless Next.js + Supabase',
  description: 'Aplicación web moderna con Next.js App Router y persistencia en Supabase',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} min-h-screen bg-slate-950 text-slate-100 antialiased`}>
        <Navbar />
        <main>{children}</main>
        <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
          Desarrollado con Next.js 16 App Router, Tailwind CSS y Supabase Serverless
        </footer>
      </body>
    </html>
  );
}