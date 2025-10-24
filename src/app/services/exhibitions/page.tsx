import { HeroHeader } from "@/components/header";
import { Users, CheckCircle, ArrowRight, Building, Presentation, Network, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ExhibitionsPage() {
    const features = [
        {
            icon: Building,
            title: 'Trade Shows',
            description: 'Large-scale trade exhibitions connecting businesses with potential clients and partners.'
        },
        {
            icon: Presentation,
            title: 'Business Conferences',
            description: 'Professional conferences with keynote speakers, workshops, and networking opportunities.'
        },
        {
            icon: Globe,
            title: 'Industry Exhibitions',
            description: 'Sector-specific exhibitions showcasing latest innovations and industry trends.'
        },
        {
            icon: Network,
            title: 'Networking Events',
            description: 'Strategic networking sessions designed to foster business relationships and partnerships.'
        }
    ];

    const benefits = [
        'Complete exhibition booth design and setup',
        'International pavilion management',
        'Digital integration and live streaming',
        'Visitor management and registration',
        'Multi-language support services',
        'ROI tracking and analytics reporting'
    ];

    const projects = [
        {
            title: 'IMME Mining Exhibition',
            description: 'Managed the complete International Mining & Machinery Exhibition with 200+ exhibitors.',
            impact: '200+ Exhibitors'
        },
        {
            title: 'Austrade Business Pavilion',
            description: 'Successfully organized Australian Trade pavilion at major Indian business exhibitions.',
            impact: 'International Success'
        },
        {
            title: 'Bengal Chamber Conference',
            description: 'Executed annual business conference for Bengal Chamber of Commerce with global delegates.',
            impact: '800+ Delegates'
        }
    ];

    return (
        <>
            <HeroHeader />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-background">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                    <Users className="h-4 w-4" />
                                    Exhibitions & Conferences
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                    World-Class Exhibitions & Business Conferences
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                    Create impactful business connections through professionally managed exhibitions, trade shows, and conferences that drive industry growth and innovation.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" asChild>
                                        <Link href="/contact">
                                            Plan Your Exhibition
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="lg" asChild>
                                        <Link href="#showcase">View Our Exhibitions</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-purple-100 rounded-3xl p-8 transform -rotate-3">
                                    <div className="bg-background rounded-2xl p-6 transform rotate-3 shadow-xl">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                                                <Users className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">Exhibition Management</div>
                                                <div className="text-sm text-muted-foreground">Professional Events</div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span>International Standards</span>
                                                <span className="font-semibold">100%</span>
                                            </div>
                                            <div className="w-full bg-muted rounded-full h-2">
                                                <div className="bg-purple-600 h-2 rounded-full w-full"></div>
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
                            <h2 className="text-3xl font-bold mb-4">Our Exhibition & Conference Services</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Comprehensive exhibition management solutions that connect businesses and drive industry growth.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-background rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-4">
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
                                <h2 className="text-3xl font-bold mb-6">Expert Exhibition Management</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    With extensive experience in managing international exhibitions and conferences, we ensure seamless execution and maximum business impact.
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
                                    <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                                    <div className="text-muted-foreground">Exhibitions Managed</div>
                                </div>
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div>
                                        <div className="text-2xl font-bold mb-1">5000+</div>
                                        <div className="text-xs text-muted-foreground">Exhibitors Served</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">100K+</div>
                                        <div className="text-xs text-muted-foreground">Visitors Managed</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">25+</div>
                                        <div className="text-xs text-muted-foreground">Countries Reached</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">95%</div>
                                        <div className="text-xs text-muted-foreground">Repeat Clients</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Showcase Section */}
                <section id="showcase" className="py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Major Exhibitions & Conferences</h2>
                            <p className="text-lg text-muted-foreground">
                                Showcasing our expertise in managing world-class business events and exhibitions.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-background rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Globe className="h-4 w-4 text-purple-600" />
                                        <span className="text-sm font-medium text-purple-600">{project.impact}</span>
                                    </div>
                                    <h3 className="font-semibold mb-3">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-purple-600 text-white">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Host Your Exhibition?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Let's create a world-class exhibition or conference that drives business growth and industry connections.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">
                                    Start Planning
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600" asChild>
                                <Link href="tel:+919876543210">Call: +91 98765 43210</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
