import { Flag, Building, Music2, Trophy, Mic, Presentation, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ExpertiseSection() {
    return (
        <section id="expertise" className="py-12 md:py-20">
            <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Our Event Management Expertise</h2>
                    <p className="text-lg text-muted-foreground">Comprehensive solutions for unforgettable events</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Government Events */}
                    <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 shadow-sm transition-all hover:shadow-lg">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
                            <Flag className="h-6 w-6" />
                        </div>
                        <h3 className="mb-4 text-xl font-semibold">Government Events</h3>
                        <p className="mb-6 text-sm text-muted-foreground">
                            Republic Day celebrations, Independence Day programs, and official ceremonies
                        </p>
                        <div className="mb-6 space-y-2">
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                                Republic Day Celebrations
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                                Independence Day Programs
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                                Official Ceremonies
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                                State Functions
                            </div>
                        </div>
                        <Button variant="outline" size="sm" className="group/btn">
                            Learn More
                            <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                    </div>

                    {/* Trade Exhibitions */}
                    <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 shadow-sm transition-all hover:shadow-lg">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                            <Building className="h-6 w-6" />
                        </div>
                        <h3 className="mb-4 text-xl font-semibold">Trade Exhibitions</h3>
                        <p className="mb-6 text-sm text-muted-foreground">
                            IMME exhibitions, Austrade pavilions, and international business showcases
                        </p>
                        <div className="mb-6 space-y-2">
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                                IMME Exhibitions
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                                Austrade Pavilions
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                                International Business Showcases
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                                Industrial Trade Shows
                            </div>
                        </div>
                        <Button variant="outline" size="sm" className="group/btn">
                            Learn More
                            <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                    </div>

                    {/* Cultural Programs */}
                    <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 shadow-sm transition-all hover:shadow-lg">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                            <Music2 className="h-6 w-6" />
                        </div>
                        <h3 className="mb-4 text-xl font-semibold">Cultural Programs</h3>
                        <p className="mb-6 text-sm text-muted-foreground">
                            Classical music conferences, Durga Puja carnivals, and traditional celebrations
                        </p>
                        <div className="mb-6 space-y-2">
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                                Classical Music Conferences
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                                Durga Puja Carnivals
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                                Traditional Celebrations
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                                Cultural Festivals
                            </div>
                        </div>
                        <Button variant="outline" size="sm" className="group/btn">
                            Learn More
                            <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                    </div>

                    {/* Award Ceremonies */}
                    <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 shadow-sm transition-all hover:shadow-lg">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                            <Trophy className="h-6 w-6" />
                        </div>
                        <h3 className="mb-4 text-xl font-semibold">Award Ceremonies</h3>
                        <p className="mb-6 text-sm text-muted-foreground">
                            Corporate recognition programs, convocations, and institutional celebrations
                        </p>
                        <div className="mb-6 space-y-2">
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-600"></div>
                                Corporate Recognition Programs
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-600"></div>
                                Convocations
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-600"></div>
                                Institutional Celebrations
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-600"></div>
                                Achievement Awards
                            </div>
                        </div>
                        <Button variant="outline" size="sm" className="group/btn">
                            Learn More
                            <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                    </div>

                    {/* Live Concerts */}
                    <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 shadow-sm transition-all hover:shadow-lg">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                            <Mic className="h-6 w-6" />
                        </div>
                        <h3 className="mb-4 text-xl font-semibold">Live Concerts</h3>
                        <p className="mb-6 text-sm text-muted-foreground">
                            Arijit Singh, Sonu Nigam, Shreya Ghoshal concerts and entertainment shows
                        </p>
                        <div className="mb-6 space-y-2">
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                                Arijit Singh Concerts
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                                Sonu Nigam Shows
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                                Shreya Ghoshal Performances
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                                Entertainment Shows
                            </div>
                        </div>
                        <Button variant="outline" size="sm" className="group/btn">
                            Learn More
                            <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                    </div>

                    {/* Business Conferences */}
                    <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 shadow-sm transition-all hover:shadow-lg">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                            <Presentation className="h-6 w-6" />
                        </div>
                        <h3 className="mb-4 text-xl font-semibold">Business Conferences</h3>
                        <p className="mb-6 text-sm text-muted-foreground">
                            AGMs, seminars, mining congresses, and industry networking events
                        </p>
                        <div className="mb-6 space-y-2">
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                                AGMs
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                                Seminars
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                                Mining Congresses
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                                Industry Networking Events
                            </div>
                        </div>
                        <Button variant="outline" size="sm" className="group/btn">
                            Learn More
                            <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
