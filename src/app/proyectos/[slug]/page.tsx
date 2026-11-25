import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, ExternalLink, FolderGit2 } from 'lucide-react';
import { getProyectoPorSlug } from '@/lib/supabase';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProyectoDetallePage({ params }: PageProps) {
  const { slug } = await params;
  const proyecto = await getProyectoPorSlug(slug);

  if (!proyecto) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al catálogo principal
      </Link>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 sm:p-10">
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <Link
            href={`/categorias/${proyecto.categoria_slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/20"
          >
            <FolderGit2 className="h-3.5 w-3.5" />
            {proyecto.categoria_nombre}
          </Link>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(proyecto.creado_en).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>

        <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
          {proyecto.titulo}
        </h1>

        <p className="mb-8 text-lg text-slate-300">{proyecto.resumen}</p>

        <div className="mb-8 border-y border-slate-800 py-6">
          <h2 className="mb-3 text-sm font-semibold tracking-wider text-slate-400 uppercase">
            Especificación Técnica
          </h2>
          <p className="leading-relaxed text-slate-300">{proyecto.descripcion}</p>
        </div>

        <div className="mb-8">
          <h2 className="mb-3 text-sm font-semibold tracking-wider text-slate-400 uppercase">
            Stack Tecnológico
          </h2>
          <div className="flex flex-wrap gap-2">
            {proyecto.tecnologias.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm font-medium text-emerald-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {proyecto.repositorio_url && (
          <div className="flex gap-4">
            <a
              href={proyecto.repositorio_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              Ver Código Fuente
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}