'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Pagination, PaginationInfo, usePagination } from '@/components/ui/pagination'
import { Calendar, MapPin, Users, ChevronDown, Search, Grid, List } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getActivitiesFromEvents, getAvailableCategoriesFromEvents, type Activity } from '@/lib/events-data'
import CategoryFilter from '@/components/category-filter'
import { HeroHeader } from '@/components/header'

const ITEMS_PER_PAGE = 10

export default function PortfolioPage() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([])
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all')
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showYearDropdown, setShowYearDropdown] = useState(false)
  const [loading, setLoading] = useState(true)
  const [availableCategories, setAvailableCategories] = useState<string[]>([])

  // Pagination hook
  const {
    currentPage,
    totalPages,
    paginatedItems: paginatedActivities,
    goToPage,
  } = usePagination(filteredActivities, ITEMS_PER_PAGE)

  // Load activities from events.json on component mount
  useEffect(() => {
    const loadActivities = async () => {
      try {
        setLoading(true)
        const [activitiesData, categoriesData] = await Promise.all([
          getActivitiesFromEvents(),
          getAvailableCategoriesFromEvents()
        ])
        setActivities(activitiesData)
        setFilteredActivities(activitiesData)
        setAvailableCategories(categoriesData)
      } catch (error) {
        console.error('Error loading activities:', error)
      } finally {
        setLoading(false)
      }
    }

    loadActivities()
  }, [])

  // Extract unique years from activities
  const availableYears = Array.from(
    new Set(activities.map(activity => activity.year))
  ).sort((a, b) => b - a) // Sort in descending order (latest first)

  // Filter activities based on selected year, category, and search query
  useEffect(() => {
    let filtered = activities

    if (selectedYear !== 'all') {
      filtered = filtered.filter(activity => activity.year === selectedYear)
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(activity => activity.category === selectedCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter(activity =>
        activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.organization?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.location?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    setFilteredActivities(filtered)
  }, [selectedYear, selectedCategory, searchQuery, activities])

  const handleYearFilter = (year: number | 'all') => {
    setSelectedYear(year)
    setShowYearDropdown(false)
  }

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

      {/* Filters and Search Section */}
      <section className="bg-background border-b">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:gap-6 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:flex-1 lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search activities, organizations, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="flex flex-col sm:flex-row w-full lg:w-auto items-stretch sm:items-center gap-3">
              {/* Year Filter Dropdown */}
              <div className="relative flex-1 sm:flex-none">
                <Button
                  variant="outline"
                  onClick={() => setShowYearDropdown(!showYearDropdown)}
                  className="w-full sm:min-w-[140px] justify-between"
                >
                  {selectedYear === 'all' ? 'All Years' : selectedYear}
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform",
                    showYearDropdown && "rotate-180"
                  )} />
                </Button>

                {showYearDropdown && (
                  <div className="absolute top-full mt-2 w-full bg-background border border-border rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => handleYearFilter('all')}
                      className={cn(
                        "w-full px-4 py-2 text-left hover:bg-muted rounded-t-lg transition-colors",
                        selectedYear === 'all' && "bg-primary text-primary-foreground"
                      )}
                    >
                      All Years
                    </button>
                    {availableYears.map(year => (
                      <button
                        key={year}
                        onClick={() => handleYearFilter(year)}
                        className={cn(
                          "w-full px-4 py-2 text-left hover:bg-muted transition-colors",
                          selectedYear === year && "bg-primary text-primary-foreground"
                        )}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex border border-border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none flex-1 sm:flex-none"
                >
                  <Grid className="h-4 w-4" />
                  <span className="ml-2 sm:hidden">Grid</span>
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none flex-1 sm:flex-none"
                >
                  <List className="h-4 w-4" />
                  <span className="ml-2 sm:hidden">List</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mt-6">
            <CategoryFilter
              categories={availableCategories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Results Summary */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              Showing {filteredActivities.length} of {activities.length} activities
              {selectedYear !== 'all' && ` for ${selectedYear}`}
              {selectedCategory !== 'all' && ` in ${selectedCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </div>
            
            {filteredActivities.length > 0 && (
              <PaginationInfo
                currentPage={currentPage}
                totalItems={filteredActivities.length}
                itemsPerPage={ITEMS_PER_PAGE}
              />
            )}
          </div>
        </div>
      </section>

      {/* Activities Grid/List */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          {loading ? (
            <div className="text-center py-16">
              <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-muted flex items-center justify-center">
                <Calendar className="h-12 w-12 text-muted-foreground animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Loading activities...</h3>
              <p className="text-muted-foreground">
                Please wait while we fetch the latest event data.
              </p>
            </div>
          ) : filteredActivities.length === 0 ? (
            <div className="text-center py-16">
              <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-muted flex items-center justify-center">
                <Calendar className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No activities found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search query to find what you&apos;re looking for.
              </p>
            </div>
          ) : (
            <>
              <div className={cn(
                viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
              )}>
                {paginatedActivities.map((activity) => (
                  <ActivityCard
                    key={activity.id}
                    activity={activity}
                    viewMode={viewMode}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex flex-col items-center space-y-4">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={goToPage}
                    className="justify-center"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}

// Activity Card Component
interface ActivityCardProps {
  activity: Activity
  viewMode: 'grid' | 'list'
}

function ActivityCard({ activity, viewMode }: ActivityCardProps) {
  if (viewMode === 'list') {
    return (
      <div className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium w-fit">
              {activity.category}
            </span>
            <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs w-fit">
              {activity.year}
            </span>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">{activity.title}</h3>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base line-clamp-2">{activity.description}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 shrink-0" />
              <span className="truncate">{activity.date}</span>
            </div>
            {activity.location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="truncate">{activity.location}</span>
              </div>
            )}
            {activity.organization && (
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 shrink-0" />
                <span className="truncate">{activity.organization}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Event Image */}
      {activity.images && activity.images[0] && (
        <div className="h-48 bg-muted relative overflow-hidden">
          <Image
            src={activity.images[0]}
            alt={activity.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Hide image if it fails to load
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      )}
      
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
          <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium w-fit">
            {activity.category}
          </span>
          <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs w-fit">
            {activity.year}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
          {activity.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 text-sm sm:text-base line-clamp-3">{activity.description}</p>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 shrink-0" />
            <span className="truncate">{activity.date}</span>
          </div>
          {activity.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              <span className="truncate">{activity.location}</span>
            </div>
          )}
          {activity.organization && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 shrink-0" />
              <span className="truncate">{activity.organization}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
