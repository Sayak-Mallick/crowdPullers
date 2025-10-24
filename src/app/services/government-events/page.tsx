import { HeroHeader } from "@/components/header";
import { Flag, CheckCircle, ArrowRight, Shield, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function GovernmentEventsPage() {
    const features = [
        {
            icon: Flag,
            title: 'Official Ceremonies',
            description: 'Republic Day celebrations, Independence Day programs, and state commemorative events.'
        },
        {
            icon: Building,
            title: 'Public Functions',
            description: 'Government inaugurations, policy announcements, and community engagement programs.'
        },
        {
            icon: Users,
            title: 'Government Meetings',
            description: 'High-level diplomatic meetings, inter-governmental conferences, and official summits.'
        },
        {
            icon: Shield,
            title: 'State Events',
            description: 'Protocol-based state functions, VIP visits, and ceremonial government events.'
        }
    ];

    const benefits = [
        'High-security event management protocols',
        'VIP and diplomatic protocol expertise',
        'Government compliance and clearances',
        'Multi-tier security coordination',
        'Media management and press relations',
        'Ceremonial planning and execution'
    ];

    const projects = [
        {
            title: 'Republic Day Celebration',
            description: 'Managed state-level Republic Day ceremony with military parade coordination and VIP protocol.',
            impact: 'State Level Event'
        },
        {
            title: 'Independence Day Program',
            description: 'Organized multi-venue Independence Day celebrations with cultural performances and flag ceremonies.',
            impact: 'Multi-Venue Success'
        },
        {
            title: 'Government Summit',
            description: 'Executed high-security government summit with international delegates and diplomatic protocols.',
            impact: 'International Delegates'
        }
    ];

    return (
        <>
            <HeroHeader />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-16 md:py-24 bg-linear-to-b from-red-50 to-background">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                    <Flag className="h-4 w-4" />
                                    Government Events
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                    Official Government Event Management
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                    Trusted partner for government ceremonies, state functions, and official events requiring the highest standards of protocol, security, and ceremonial excellence.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" asChild>
                                        <Link href="/contact">
                                            Plan Government Event
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="lg" asChild>
                                        <Link href="#portfolio">View Our Work</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-red-100 rounded-3xl p-8 transform -rotate-1">
                                    <div className="bg-background rounded-2xl p-6 transform rotate-1 shadow-xl">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
                                                <Flag className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">Government Protocol</div>
                                                <div className="text-sm text-muted-foreground">Official Events</div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span>Security Compliance</span>
                                                <span className="font-semibold">100%</span>
                                            </div>
                                            <div className="w-full bg-muted rounded-full h-2">
                                                <div className="bg-red-600 h-2 rounded-full w-full"></div>
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
                            <h2 className="text-3xl font-bold mb-4">Government Event Services</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Specialized in managing official government functions with strict protocol adherence and security compliance.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-background rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600 mb-4">
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
                                <h2 className="text-3xl font-bold mb-6">Trusted Government Partner</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Our extensive experience in government protocol and security requirements makes us the preferred choice for official state functions.
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
                                    <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
                                    <div className="text-muted-foreground">Government Events</div>
                                </div>
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div>
                                        <div className="text-2xl font-bold mb-1">100%</div>
                                        <div className="text-xs text-muted-foreground">Security Compliance</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">15+</div>
                                        <div className="text-xs text-muted-foreground">Years Experience</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">50+</div>
                                        <div className="text-xs text-muted-foreground">VIP Events</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">Zero</div>
                                        <div className="text-xs text-muted-foreground">Security Incidents</div>
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
                            <h2 className="text-3xl font-bold mb-4">Government Event Portfolio</h2>
                            <p className="text-lg text-muted-foreground">
                                Successfully managing high-profile government events with precision and protocol excellence.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-background rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Shield className="h-4 w-4 text-red-600" />
                                        <span className="text-sm font-medium text-red-600">{project.impact}</span>
                                    </div>
                                    <h3 className="font-semibold mb-3">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-red-600 text-white">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">Plan Your Government Event</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Trust us with your official government functions. We ensure protocol compliance and flawless execution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">
                                    Start Planning
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600" asChild>
                                <Link href="tel:+919876543210">Call: +91 98765 43210</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
