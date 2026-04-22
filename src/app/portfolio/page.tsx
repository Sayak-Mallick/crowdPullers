'use client'

import Image from 'next/image'
// import { useState } from 'react'
// import { Pagination, usePagination } from '@/components/ui/pagination'
// import { cn } from '@/lib/utils'
// import CategoryFilter from '@/components/category-filter'
import { HeroHeader } from '@/components/header'
import { IEvents, useEventsStore } from '@/events.store'
import { MapPin, Building2, CalendarDays, Tag } from 'lucide-react'
import Link from 'next/link'
import { EventsGridSkeleton } from '@/components/EventsGridSkeleton'

const MONTH_NAMES = [
  '', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

function EventCard({ event }: { event: IEvents }) {
  return (
    <Link href={`/portfolio/${event._id}`} className="group relative flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative w-full aspect-16/10 overflow-hidden bg-muted">
        <Image
          src={event.eventImage}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full shadow">
          <Tag className="w-3 h-3" />
          {event.category}
        </span>
        {/* Date badge */}
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-background/90 text-foreground text-xs font-semibold px-2.5 py-1 rounded-full shadow backdrop-blur-sm">
          <CalendarDays className="w-3 h-3 text-primary" />
          {MONTH_NAMES[event.month]} {event.year}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-base font-semibold leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {event.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {event.description}
        </p>

        <div className="mt-auto pt-3 border-t border-border flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Building2 className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="truncate">{event.organization}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function PortfolioPage() {
  const { events, isLoading, isError } = useEventsStore()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {isError}</div>

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navbar */}
      <HeroHeader />

      {/* Hero Section — unchanged */}
      <section className="bg-linear-to-br from-primary/5 via-primary/10 to-background">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Our
              <span className="text-primary"> Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our extensive portfolio of successfully executed events and activities across various industries and sectors.
              From corporate gatherings to cultural celebrations, we&apos;ve been creating memorable experiences since our inception.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      {isLoading ? (
        <EventsGridSkeleton count={6} />
      ) : isError ? (
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="text-muted-foreground">Something went wrong. Please try again later.</p>
        </div>
      ) : (
        <section className="mx-auto max-w-7xl px-6 py-16">
          {events && events.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground mb-8">
                Showing <span className="font-semibold text-foreground">{events.length}</span> event{events.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <EventCard key={event._id} event={event} />
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center gap-3">
              <CalendarDays className="w-12 h-12 text-muted-foreground/40" />
              <p className="text-lg font-medium text-muted-foreground">No events found</p>
            </div>
          )}
        </section>
      )}
    </div>
  )
}