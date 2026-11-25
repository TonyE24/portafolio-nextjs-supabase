import Link from 'next/link';
import { Terminal } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
          <Terminal className="h-6 w-6 text-emerald-400" />
          <span>DevArchitecture<span className="text-emerald-400">.io</span></span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Inicio
          </Link>
          <Link href="/categorias/arquitectura-dotnet" className="hover:text-emerald-400 transition-colors">
            .NET
          </Link>
          <Link href="/categorias/arquitectura-java" className="hover:text-emerald-400 transition-colors">
            Java
          </Link>
          <Link href="/categorias/backend-php" className="hover:text-emerald-400 transition-colors">
            APIs
          </Link>
        </nav>
      </div>
    </header>
  );
}