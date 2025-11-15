export default function Loading() {
  return (
    <section>
      <div className="mb-8">
        <div className="h-8 w-40 animate-pulse rounded-md bg-black/10 dark:bg-white/10" />
        <div className="mt-2 h-4 w-72 animate-pulse rounded-md bg-black/10 dark:bg-white/10" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-black/10 bg-white dark:border-white/15 dark:bg-black">
            <div className="aspect-[16/9] w-full animate-pulse bg-black/10 dark:bg-white/10" />
            <div className="p-6">
              <div className="h-5 w-40 animate-pulse rounded-md bg-black/10 dark:bg-white/10" />
              <div className="mt-3 h-4 w-full animate-pulse rounded-md bg-black/10 dark:bg-white/10" />
              <div className="mt-1 h-4 w-2/3 animate-pulse rounded-md bg-black/10 dark:bg-white/10" />
              <div className="mt-4 flex gap-2">
                <div className="h-6 w-16 animate-pulse rounded-full bg-black/10 dark:bg-white/10" />
                <div className="h-6 w-20 animate-pulse rounded-full bg-black/10 dark:bg-white/10" />
                <div className="h-6 w-14 animate-pulse rounded-full bg-black/10 dark:bg-white/10" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
