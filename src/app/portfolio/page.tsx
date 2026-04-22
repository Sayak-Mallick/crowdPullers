'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Pagination, PaginationInfo, usePagination } from '@/components/ui/pagination'
import { cn } from '@/lib/utils'
import CategoryFilter from '@/components/category-filter'
import { HeroHeader } from '@/components/header'

export default function PortfolioPage() {

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navbar */}
      <HeroHeader />
      
      {/* Hero Section */}
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
    </div>
  )
}
