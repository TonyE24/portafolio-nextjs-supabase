'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
      <AlertTriangle className="mb-4 h-12 w-12 text-rose-500" />
      <h2 className="mb-2 text-2xl font-bold text-white">Error de conexión con el servidor</h2>
      <p className="mb-6 text-sm text-slate-400">
        No se pudieron cargar los datos desde Supabase. Verifica las variables de entorno o intenta nuevamente.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
      >
        Reintentar conexión
      </button>
    </div>
  );
}