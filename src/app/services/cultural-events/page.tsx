import { HeroHeader } from "@/components/header";
import { Music, CheckCircle, ArrowRight, Mic2, Calendar, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CulturalEventsPage() {
    const features = [
        {
            icon: Mic2,
            title: 'Music Concerts',
            description: 'Live concerts featuring renowned artists like Arijit Singh, Sonu Nigam, and Shreya Ghoshal.'
        },
        {
            icon: Calendar,
            title: 'Cultural Festivals',
            description: 'Traditional and contemporary cultural festivals celebrating diverse heritage and arts.'
        },
        {
            icon: Heart,
            title: 'Traditional Celebrations',
            description: 'Durga Puja carnivals, classical music conferences, and religious celebrations.'
        },
        {
            icon: Users,
            title: 'Entertainment Shows',
            description: 'Variety shows, dance performances, and cultural entertainment programs.'
        }
    ];

    const benefits = [
        'Celebrity artist management and coordination',
        'Traditional and modern stage setups',
        'Sound and lighting technical expertise',
        'Crowd management and security',
        'Cultural authenticity and respect',
        'Live streaming and digital coverage'
    ];

    const projects = [
        {
            title: 'Arijit Singh Live Concert',
            description: 'Organized massive live concert with state-of-the-art sound system and crowd management for 15,000+ audience.',
            impact: '15,000+ Audience'
        },
        {
            title: 'Durga Puja Carnival',
            description: 'Managed traditional Durga Puja celebrations with cultural performances and community engagement.',
            impact: 'Community Favorite'
        },
        {
            title: 'Classical Music Conference',
            description: 'Curated international classical music conference featuring maestros from across the globe.',
            impact: 'International Artists'
        }
    ];

    return (
        <>
            <HeroHeader />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-background">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                    <Music className="h-4 w-4" />
                                    Cultural Events
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                    Celebrating Culture Through Memorable Events
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                    From celebrity concerts to traditional festivals, we create cultural experiences that unite communities and celebrate the rich heritage of arts and entertainment.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" asChild>
                                        <Link href="/contact">
                                            Plan Your Cultural Event
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="lg" asChild>
                                        <Link href="#portfolio">View Our Events</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-green-100 rounded-3xl p-8 transform rotate-2">
                                    <div className="bg-background rounded-2xl p-6 transform -rotate-2 shadow-xl">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                                                <Music className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">Cultural Excellence</div>
                                                <div className="text-sm text-muted-foreground">Event Management</div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span>Cultural Authenticity</span>
                                                <span className="font-semibold">100%</span>
                                            </div>
                                            <div className="w-full bg-muted rounded-full h-2">
                                                <div className="bg-green-600 h-2 rounded-full w-full"></div>
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
                            <h2 className="text-3xl font-bold mb-4">Our Cultural Event Services</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Creating authentic cultural experiences that honor traditions while embracing modern entertainment.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-background rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 mb-4">
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
                                <h2 className="text-3xl font-bold mb-6">Cultural Event Expertise</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Our deep understanding of cultural nuances and artistic requirements ensures authentic and memorable cultural celebrations.
                                </p>
                                <div className="space-y-3">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-background rounded-3xl p-8 shadow-xl">
                                <div className="text-center mb-6">
                                    <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
                                    <div className="text-muted-foreground">Cultural Events</div>
                                </div>
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div>
                                        <div className="text-2xl font-bold mb-1">50+</div>
                                        <div className="text-xs text-muted-foreground">Celebrity Artists</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">200K+</div>
                                        <div className="text-xs text-muted-foreground">Audience Reached</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">25+</div>
                                        <div className="text-xs text-muted-foreground">Festivals Managed</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">99%</div>
                                        <div className="text-xs text-muted-foreground">Success Rate</div>
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
                            <h2 className="text-3xl font-bold mb-4">Memorable Cultural Events</h2>
                            <p className="text-lg text-muted-foreground">
                                Celebrating culture through spectacular events that bring communities together.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-background rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Music className="h-4 w-4 text-green-600" />
                                        <span className="text-sm font-medium text-green-600">{project.impact}</span>
                                    </div>
                                    <h3 className="font-semibold mb-3">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-green-600 text-white">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Create Cultural Magic?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Let&#39;s bring your cultural vision to life with authentic celebrations that honor tradition and inspire communities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">
                                    Start Your Cultural Event
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
                                <Link href="tel:+919876543210">Call: +91 98765 43210</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
