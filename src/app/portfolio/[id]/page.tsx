'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { HeroHeader } from '@/components/header'
import { useEventsStore } from '@/events.store'
import { MapPin, Building2, CalendarDays, Tag, ArrowLeft, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const MONTH_NAMES = [
  '', 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const CATEGORY_COLOR_MAP: Record<string, string> = {
  Workshop: 'bg-blue-100 text-blue-700 border-blue-200',
  Conference: 'bg-violet-100 text-violet-700 border-violet-200',
  Concert: 'bg-pink-100 text-pink-700 border-pink-200',
  'Cultural Event': 'bg-amber-100 text-amber-700 border-amber-200',
  'Cultural Events': 'bg-amber-100 text-amber-700 border-amber-200',
}

function DetailBadge({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border">
      <div className="p-2 rounded-lg bg-primary/10 shrink-0">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-0.5">
          {label}
        </p>
        <p className="text-sm font-semibold text-foreground leading-snug">{value}</p>
      </div>
    </div>
  )
}

export default function EventDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params?.id as string

  const { selectedEvent, isEventLoading, isError, fetchEventById } = useEventsStore()

  useEffect(() => {
    fetchEventById(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  /* ─── Loading ─── */
  if (isEventLoading) {
    return (
      <div className="min-h-screen bg-background">
        <HeroHeader />
        <div className="mx-auto max-w-5xl px-6 pt-32 pb-16 animate-pulse space-y-6">
          <div className="h-8 w-32 bg-muted rounded-lg" />
          <div className="h-[420px] w-full bg-muted rounded-2xl" />
          <div className="h-6 w-2/3 bg-muted rounded-lg" />
          <div className="h-4 w-full bg-muted rounded" />
          <div className="h-4 w-5/6 bg-muted rounded" />
        </div>
      </div>
    )
  }

  /* ─── Error / Not found ─── */
  if (isError || !selectedEvent) {
    return (
      <div className="min-h-screen bg-background">
        <HeroHeader />
        <div className="mx-auto max-w-5xl px-6 pt-40 pb-16 text-center space-y-4">
          <CalendarDays className="mx-auto w-14 h-14 text-muted-foreground/40" />
          <h2 className="text-2xl font-bold text-foreground">Event not found</h2>
          <p className="text-muted-foreground">
            This event may have been removed or the link is incorrect.
          </p>
          <Button asChild variant="outline" className="mt-4">
            <Link href="/portfolio">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const categoryClass =
    CATEGORY_COLOR_MAP[selectedEvent.category] ?? 'bg-primary/10 text-primary border-primary/20'

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />

      <main className="mx-auto max-w-5xl px-6 pt-28 pb-20">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Portfolio
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* ── Left column ── */}
          <div className="lg:col-span-3 space-y-6">
            {/* Hero image */}
            <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-muted shadow-md">
              <Image
                src={selectedEvent.eventImage}
                alt={selectedEvent.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Title + category */}
            <div className="space-y-3">
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border',
                  categoryClass
                )}
              >
                <Tag className="w-3 h-3" />
                {selectedEvent.category}
              </span>

              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-snug">
                {selectedEvent.title}
              </h1>
            </div>

            {/* Description */}
            <div className="prose prose-sm prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed text-base">
                {selectedEvent.description}
              </p>
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              Event Details
            </h2>

            <DetailBadge
              icon={CalendarDays}
              label="Date"
              value={`${MONTH_NAMES[selectedEvent.month]} ${selectedEvent.year}`}
            />
            <DetailBadge
              icon={MapPin}
              label="Location"
              value={selectedEvent.location}
            />
            <DetailBadge
              icon={Building2}
              label="Organized by"
              value={selectedEvent.organization}
            />
            <DetailBadge
              icon={Clock}
              label="Added on"
              value={new Date(selectedEvent.createdAt).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            />

            {/* CTA */}
            <div className="pt-4">
              <Button asChild className="w-full" variant="outline">
                <Link href="/portfolio">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  View All Events
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}