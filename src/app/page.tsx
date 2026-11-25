import Link from 'next/link';
import { Server, ShieldCheck, Database } from 'lucide-react';
import { getProyectos } from '@/lib/supabase';
import ProyectoCard from '@/components/ProyectoCard';

// Fuerza renderizado dinámico o revalidación periódica para reflejar cambios en Supabase
export const revalidate = 60;

export default async function HomePage() {
  const proyectos = await getProyectos();

  // Extraer categorías únicas desde los registros
  const categorias = Array.from(
    new Map(
      proyectos.map((p) => [
        p.categoria_slug,
        { slug: p.categoria_slug, nombre: p.categoria_nombre },
      ])
    ).values()
  );

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <span className="mb-4 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-emerald-400 uppercase">
            Next.js 16 App Router + Supabase Serverless
          </span>
          <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Ingeniería de Software & <span className="text-emerald-400">Arquitectura Backend</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
            Catálogo técnico de soluciones empresariales, APIs RESTful seguras y sistemas distribuidos construidos bajo estándares modernos de producción.
          </p>

          {/* Filtros rápidos por categoría (Ruta Dinámica 1) */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-slate-400">Explorar por dominio:</span>
            {categorias.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categorias/${cat.slug}`}
                className="rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm font-medium text-slate-200 hover:border-emerald-500 hover:text-emerald-400 transition-colors"
              >
                {cat.nombre}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares Técnicos */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <Server className="mb-3 h-8 w-8 text-emerald-400" />
            <h2 className="mb-2 text-lg font-bold text-white">Arquitectura Multi-Capa</h2>
            <p className="text-sm text-slate-400">
              Separación clara de responsabilidades mediante patrones limpios, inyección de dependencias y DTOs.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <ShieldCheck className="mb-3 h-8 w-8 text-emerald-400" />
            <h2 className="mb-2 text-lg font-bold text-white">Seguridad & Políticas RLS</h2>
            <p className="text-sm text-slate-400">
              Control de acceso granular a nivel de fila en PostgreSQL, autenticación basada en tokens JWT y validación estricta.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <Database className="mb-3 h-8 w-8 text-emerald-400" />
            <h2 className="mb-2 text-lg font-bold text-white">Persistencia Serverless</h2>
            <p className="text-sm text-slate-400">
              Consumo directo desde React Server Components para minimizar latencia y evitar exposición innecesaria en cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Proyectos */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Proyectos Implementados</h2>
            <p className="text-sm text-slate-400">
              Datos consultados en tiempo real desde PostgreSQL en Supabase ({proyectos.length} registros)
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {proyectos.map((proyecto) => (
            <ProyectoCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      </section>
    </div>
  );
}