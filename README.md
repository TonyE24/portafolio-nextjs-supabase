import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
      <span className="mb-2 text-5xl font-extrabold text-emerald-400">404</span>
      <h2 className="mb-2 text-2xl font-bold text-white">Recurso no encontrado</h2>
      <p className="mb-6 text-sm text-slate-400">
        El proyecto o categoría solicitada no existe en la base de datos.
      </p>
      <Link
        href="/"
        className="rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-medium text-white hover:border-emerald-500"
      >
        Regresar al inicio
      </Link>
    </div>
  );
}