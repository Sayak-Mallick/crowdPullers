import { HeroHeader } from "@/components/header";
import { Trophy, CheckCircle, ArrowRight, Medal, Calendar, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SportsEventsPage() {
    const features = [
        {
            icon: Trophy,
            title: 'Tournaments',
            description: 'Multi-sport tournaments, league competitions, and championship events with professional management.'
        },
        {
            icon: Medal,
            title: 'Award Ceremonies',
            description: 'Sports award functions, recognition ceremonies, and athlete appreciation events.'
        },
        {
            icon: Calendar,
            title: 'Sports Festivals',
            description: 'Community sports festivals, inter-school competitions, and recreational sporting events.'
        },
        {
            icon: Target,
            title: 'Athletic Competitions',
            description: 'Professional athletic meets, marathon events, and specialized sporting competitions.'
        }
    ];

    const benefits = [
        'Complete sports venue management',
        'Athlete coordination and hospitality',
        'Live scoring and timing systems',
        'Media coverage and broadcasting',
        'Safety and medical support coordination',
        'Sponsorship management and activation'
    ];

    const projects = [
        {
            title: 'State Athletic Championship',
            description: 'Organized comprehensive state-level athletic championship with 500+ athletes across multiple disciplines.',
            impact: '500+ Athletes'
        },
        {
            title: 'Corporate Cricket Tournament',
            description: 'Managed inter-corporate cricket league with team coordination, venue setup, and live scoring.',
            impact: '32 Corporate Teams'
        },
        {
            title: 'Marathon Festival',
            description: 'Executed city-wide marathon event with route management, timing systems, and participant safety.',
            impact: '2000+ Participants'
        }
    ];

    return (
        <>
            <HeroHeader />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50 to-background">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                    <Trophy className="h-4 w-4" />
                                    Sports Events
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                    Championship-Level Sports Event Management
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                    From tournaments to award ceremonies, we deliver world-class sports events that inspire athletes and captivate audiences with professional execution.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" asChild>
                                        <Link href="/contact">
                                            Plan Sports Event
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="lg" asChild>
                                        <Link href="#portfolio">View Our Events</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-orange-100 rounded-3xl p-8 transform rotate-2">
                                    <div className="bg-background rounded-2xl p-6 transform -rotate-2 shadow-xl">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                                                <Trophy className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">Sports Excellence</div>
                                                <div className="text-sm text-muted-foreground">Event Management</div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span>Event Success Rate</span>
                                                <span className="font-semibold">99%</span>
                                            </div>
                                            <div className="w-full bg-muted rounded-full h-2">
                                                <div className="bg-orange-600 h-2 rounded-full w-[99%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Features */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Sports Event Management Services</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Comprehensive sports event solutions that ensure smooth competitions and memorable experiences for all participants.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-background rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 mb-4">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 bg-muted/30">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Professional Sports Event Management</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Our expertise in sports event logistics ensures seamless competitions that prioritize athlete performance and spectator experience.
                                </p>
                                <div className="space-y-3">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-background rounded-3xl p-8 shadow-xl">
                                <div className="text-center mb-6">
                                    <div className="text-4xl font-bold text-orange-600 mb-2">75+</div>
                                    <div className="text-muted-foreground">Sports Events</div>
                                </div>
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div>
                                        <div className="text-2xl font-bold mb-1">10K+</div>
                                        <div className="text-xs text-muted-foreground">Athletes Managed</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">50K+</div>
                                        <div className="text-xs text-muted-foreground">Spectators Served</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">25+</div>
                                        <div className="text-xs text-muted-foreground">Sports Disciplines</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">100%</div>
                                        <div className="text-xs text-muted-foreground">Safety Record</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section id="portfolio" className="py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Sports Event Portfolio</h2>
                            <p className="text-lg text-muted-foreground">
                                Championship events that showcase our expertise in sports event management and execution.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-background rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Medal className="h-4 w-4 text-orange-600" />
                                        <span className="text-sm font-medium text-orange-600">{project.impact}</span>
                                    </div>
                                    <h3 className="font-semibold mb-3">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-orange-600 text-white">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Host Your Sports Event?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Let&apos;s create a championship-level sports event that inspires athletes and thrills spectators.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">
                                    Start Planning
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600" asChild>
                                <Link href="tel:+919876543210">Call: +91 98765 43210</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
