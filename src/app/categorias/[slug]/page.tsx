import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Layers } from 'lucide-react';
import { getProyectosPorCategoria } from '@/lib/supabase';
import ProyectoCard from '@/components/ProyectoCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoriaPage({ params }: PageProps) {
  const { slug } = await params;
  const proyectos = await getProyectosPorCategoria(slug);

  if (proyectos.length === 0) {
    notFound();
  }

  const nombreCategoria = proyectos[0].categoria_nombre;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Todos los proyectos
      </Link>

      <div className="mb-10 flex items-center gap-3 border-b border-slate-800 pb-6">
        <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-400">
          <Layers className="h-7 w-7" />
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            Categoría Filtrada
          </p>
          <h1 className="text-3xl font-bold text-white">{nombreCategoria}</h1>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((proyecto) => (
          <ProyectoCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
}