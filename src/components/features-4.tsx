import { Calendar, Users, Music, Settings, HeartHandshake, Brain } from 'lucide-react'

export default function Features() {
    return (
        <section id="features" className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Our Event Management Services</h2>
                    <p>Comprehensive solutions for all your event needs</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Calendar className="size-4" />
                            <h3 className="text-sm font-medium">Corporate Events</h3>
                        </div>
                        <p className="text-sm">Product launches, AGMs, conferences, and corporate celebrations</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Users className="size-4" />
                            <h3 className="text-sm font-medium">Exhibitions & Trade Shows</h3>
                        </div>
                        <p className="text-sm">Mining congresses, business exhibitions, and industry showcases</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Music className="size-4" />

                            <h3 className="text-sm font-medium">Cultural & Entertainment</h3>
                        </div>
                        <p className="text-sm">Live concerts, classical music conferences, and cultural celebrations</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings className="size-4" />

                            <h3 className="text-sm font-medium">Event Planning & Coordination</h3>
                        </div>
                        <p className="text-sm">Tailored events to meet your specific needs and preferences</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <HeartHandshake className="size-4" />

                            <h3 className="text-sm font-medium">Client-Centric Approach</h3>
                        </div>
                        <p className="text-sm">Complete control over every aspect of your event</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Brain className="size-4" />

                            <h3 className="text-sm font-medium">Intelligent Solutions</h3>
                        </div>
                        <p className="text-sm">Smart event management powered by data-driven insights</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
