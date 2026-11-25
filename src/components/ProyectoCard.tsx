import Link from 'next/link';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { Proyecto } from '@/lib/supabase';

export default function ProyectoCard({ proyecto }: { proyecto: Proyecto }) {
  return (
    <article className="group flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-emerald-500/50 hover:bg-slate-900">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <Link
            href={`/categorias/${proyecto.categoria_slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 hover:bg-emerald-500/20 transition-colors"
          >
            <FolderGit2 className="h-3.5 w-3.5" />
            {proyecto.categoria_nombre}
          </Link>
          {proyecto.destacado && (
            <span className="rounded-md bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
              Destacado
            </span>
          )}
        </div>

        <Link href={`/proyectos/${proyecto.slug}`}>
          <h3 className="mb-2 text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
            {proyecto.titulo}
          </h3>
        </Link>
        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          {proyecto.resumen}
        </p>
      </div>

      <div>
        <div className="mb-5 flex flex-wrap gap-2">
          {proyecto.tecnologias.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-700/80 bg-slate-800/80 px-2.5 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/proyectos/${proyecto.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
        >
          Ver arquitectura y detalles
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}