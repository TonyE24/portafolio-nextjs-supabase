export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-10 h-10 w-64 animate-pulse rounded-lg bg-slate-800" />
      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 animate-pulse rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="mb-4 h-6 w-24 rounded-full bg-slate-800" />
            <div className="mb-3 h-7 w-3/4 rounded bg-slate-800" />
            <div className="mb-2 h-4 w-full rounded bg-slate-800" />
            <div className="h-4 w-2/3 rounded bg-slate-800" />
          </div>
        ))}
      </div>
    </div>
  );
}