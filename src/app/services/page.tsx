import { Building2, Users, Music, Landmark, Trophy, GraduationCap, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { HeroHeader } from '@/components/header'

export default function ServicesPage() {
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
              <span className="text-primary"> Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive event management solutions tailored to your needs. From corporate gatherings to cultural celebrations, 
              we provide end-to-end event planning and execution services across various industries and sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Corporate Events */}
            <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Corporate Events</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Professional corporate parties, product launches, marketing and public relations events.
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  Product Launches
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  Corporate Parties
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  Marketing Events
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  Public Relations
                </div>
              </div>
              <Button variant="outline" size="sm" className="group/btn" asChild>
                <Link href="/services/corporate-events">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Exhibitions & Conferences */}
            <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Exhibitions & Conferences</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Complete exhibition management and conference organization with innovative concepts.
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                  Trade Shows
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                  Business Conferences
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                  Industry Exhibitions
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                  Networking Events
                </div>
              </div>
              <Button variant="outline" size="sm" className="group/btn" asChild>
                <Link href="/services/exhibitions">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Cultural Events */}
            <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                <Music className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Cultural Events</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Traditional and modern cultural celebrations, festivals, and entertainment shows.
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                  Music Concerts
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                  Cultural Festivals
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                  Traditional Celebrations
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                  Entertainment Shows
                </div>
              </div>
              <Button variant="outline" size="sm" className="group/btn" asChild>
                <Link href="/services/cultural-events">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Government Events */}
            <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Government Events</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Official government functions, ceremonies, and public events management.
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                  Official Ceremonies
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                  Public Functions
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                  Government Meetings
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                  State Events
                </div>
              </div>
              <Button variant="outline" size="sm" className="group/btn" asChild>
                <Link href="/services/government-events">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Sports Events */}
            <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Sports Events</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Comprehensive sports event management from tournaments to award ceremonies.
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-600"></div>
                  Tournaments
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-600"></div>
                  Award Ceremonies
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-600"></div>
                  Sports Festivals
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-600"></div>
                  Athletic Competitions
                </div>
              </div>
              <Button variant="outline" size="sm" className="group/btn" asChild>
                <Link href="/services/sports-events">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Educational Events */}
            <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Educational Events</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Academic conferences, seminars, workshops, and institutional celebrations.
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                  Academic Conferences
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                  Workshops
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                  Seminars
                </div>
                <div className="flex items-center text-sm">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                  Convocations
                </div>
              </div>
              <Button variant="outline" size="sm" className="group/btn" asChild>
                <Link href="/services/educational-events">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
