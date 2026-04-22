function EventCardSkeleton() {
  return (
    <div className="flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
      {/* Image skeleton */}
      <div className="relative w-full aspect-16/10 bg-muted animate-pulse">
        {/* Category badge */}
        <div className="absolute top-3 left-3 h-6 w-20 bg-muted-foreground/20 rounded-full" />
        {/* Date badge */}
        <div className="absolute top-3 right-3 h-6 w-16 bg-muted-foreground/20 rounded-full" />
      </div>

      {/* Content skeleton */}
      <div className="flex flex-col flex-1 p-5 gap-3 animate-pulse">
        {/* Title */}
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded-md w-full" />
          <div className="h-4 bg-muted rounded-md w-3/4" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 bg-muted rounded w-full" />
          <div className="h-3 bg-muted rounded w-full" />
          <div className="h-3 bg-muted rounded w-2/3" />
        </div>

        {/* Footer */}
        <div className="mt-auto pt-3 border-t border-border flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-muted shrink-0" />
            <div className="h-3 bg-muted rounded w-2/3" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-muted shrink-0" />
            <div className="h-3 bg-muted rounded w-1/2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function EventsGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Count shimmer */}
      <div className="h-4 w-28 bg-muted rounded animate-pulse mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <EventCardSkeleton key={i} />
        ))}
      </div>
    </section>
  )
}