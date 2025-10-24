import { HeroHeader } from "@/components/header";
import { Building2, CheckCircle, ArrowRight, Users, Calendar, Briefcase, Trophy, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CorporateEventsPage() {
    const features = [
        {
            icon: Calendar,
            title: 'Product Launches',
            description: 'Grand unveiling events that create buzz and drive market penetration for your new products.'
        },
        {
            icon: Users,
            title: 'Corporate Parties',
            description: 'Employee engagement events, annual celebrations, and team building activities.'
        },
        {
            icon: Briefcase,
            title: 'Marketing Events',
            description: 'Brand activation campaigns, promotional events, and customer engagement initiatives.'
        },
        {
            icon: Trophy,
            title: 'Public Relations',
            description: 'Media events, press conferences, and reputation management activities.'
        }
    ];

    const benefits = [
        'Professional event planning and execution',
        'Customized themes and creative concepts',
        'End-to-end project management',
        'Premium vendor network and partnerships',
        'Budget optimization and cost control',
        'Post-event analysis and reporting'
    ];

    const projects = [
        {
            title: 'Tata Motors Product Launch',
            description: 'Successfully organized the grand launch event for Tata Motors new vehicle line with 500+ attendees.',
            impact: '500+ Attendees'
        },
        {
            title: 'ITC Limited Annual Conference',
            description: 'Managed corporate annual conference with international delegates and live streaming.',
            impact: '1000+ Participants'
        },
        {
            title: 'Micro Labs Marketing Campaign',
            description: 'Executed nationwide marketing events across 15 cities for pharmaceutical product promotion.',
            impact: '15 Cities Coverage'
        }
    ];

    return (
        <>
            <HeroHeader />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-background">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                    <Building2 className="h-4 w-4" />
                                    Corporate Events
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                    Professional Corporate Events That Drive Results
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                    From product launches to corporate celebrations, we create impactful events that strengthen your brand, engage stakeholders, and achieve your business objectives.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" asChild>
                                        <Link href="/contact">
                                            Start Your Project
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="lg" asChild>
                                        <Link href="#portfolio">View Our Work</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-blue-100 rounded-3xl p-8 transform rotate-3">
                                    <div className="bg-background rounded-2xl p-6 transform -rotate-3 shadow-xl">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                                                <Building2 className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">Corporate Excellence</div>
                                                <div className="text-sm text-muted-foreground">Event Planning</div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span>Event Success Rate</span>
                                                <span className="font-semibold">98%</span>
                                            </div>
                                            <div className="w-full bg-muted rounded-full h-2">
                                                <div className="bg-blue-600 h-2 rounded-full w-[98%]"></div>
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
                            <h2 className="text-3xl font-bold mb-4">Our Corporate Event Services</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Comprehensive corporate event solutions designed to elevate your brand and achieve your business goals.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-background rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
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
                                <h2 className="text-3xl font-bold mb-6">Why Choose CROWDpullers for Corporate Events?</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Our team brings years of expertise in corporate event management, ensuring every detail is perfectly executed to meet your business objectives.
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
                                    <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                                    <div className="text-muted-foreground">Corporate Events Delivered</div>
                                </div>
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div>
                                        <div className="text-2xl font-bold mb-1">98%</div>
                                        <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">500+</div>
                                        <div className="text-xs text-muted-foreground">Corporate Partners</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">15+</div>
                                        <div className="text-xs text-muted-foreground">Years Experience</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">24/7</div>
                                        <div className="text-xs text-muted-foreground">Support Available</div>
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
                            <h2 className="text-3xl font-bold mb-4">Recent Corporate Projects</h2>
                            <p className="text-lg text-muted-foreground">
                                Discover how we've helped leading companies create memorable corporate experiences.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-background rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Star className="h-4 w-4 text-yellow-500" />
                                        <span className="text-sm font-medium text-blue-600">{project.impact}</span>
                                    </div>
                                    <h3 className="font-semibold mb-3">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-blue-600 text-white">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Corporate Event?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Let's discuss your vision and create an unforgettable corporate experience that drives results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">
                                    Get Started Today
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                                <Link href="tel:+919876543210">Call Now: +91 98765 43210</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
