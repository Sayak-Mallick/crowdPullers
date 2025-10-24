import { HeroHeader } from "@/components/header";
import { GraduationCap, CheckCircle, ArrowRight, BookOpen, Users, Award, Presentation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function EducationalEventsPage() {
    const features = [
        {
            icon: Presentation,
            title: 'Academic Conferences',
            description: 'International academic conferences, research symposiums, and scholarly gatherings.'
        },
        {
            icon: BookOpen,
            title: 'Workshops',
            description: 'Educational workshops, skill development sessions, and interactive learning programs.'
        },
        {
            icon: Users,
            title: 'Seminars',
            description: 'Professional seminars, guest lectures, and knowledge-sharing sessions.'
        },
        {
            icon: Award,
            title: 'Convocations',
            description: 'Graduation ceremonies, academic award functions, and institutional celebrations.'
        }
    ];

    const benefits = [
        'Academic protocol and ceremony management',
        'Distinguished speaker coordination',
        'Student and faculty engagement programs',
        'Digital learning platform integration',
        'Institutional branding and presentation',
        'Academic achievement recognition systems'
    ];

    const projects = [
        {
            title: 'NIT Durgapur Convocation',
            description: 'Managed grand convocation ceremony for National Institute of Technology with 2000+ graduates and distinguished guests.',
            impact: '2000+ Graduates'
        },
        {
            title: 'International Academic Conference',
            description: 'Organized multi-day academic conference with global researchers and interactive workshop sessions.',
            impact: 'Global Researchers'
        },
        {
            title: 'Educational Excellence Awards',
            description: 'Executed prestigious educational award ceremony recognizing outstanding academic achievements and innovations.',
            impact: 'Academic Excellence'
        }
    ];

    return (
        <>
            <HeroHeader />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-indigo-50 to-background">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                    <GraduationCap className="h-4 w-4" />
                                    Educational Events
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                    Inspiring Educational Events & Academic Excellence
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                    From convocations to conferences, we create educational experiences that celebrate knowledge, foster learning, and inspire academic achievement.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" asChild>
                                        <Link href="/contact">
                                            Plan Educational Event
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="lg" asChild>
                                        <Link href="#portfolio">View Our Events</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-indigo-100 rounded-3xl p-8 transform -rotate-2">
                                    <div className="bg-background rounded-2xl p-6 transform rotate-2 shadow-xl">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                                                <GraduationCap className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">Educational Excellence</div>
                                                <div className="text-sm text-muted-foreground">Academic Events</div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span>Academic Standard</span>
                                                <span className="font-semibold">A+</span>
                                            </div>
                                            <div className="w-full bg-muted rounded-full h-2">
                                                <div className="bg-indigo-600 h-2 rounded-full w-[95%]"></div>
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
                            <h2 className="text-3xl font-bold mb-4">Educational Event Services</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Comprehensive educational event solutions that honor academic achievement and foster learning communities.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-background rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 mb-4">
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
                                <h2 className="text-3xl font-bold mb-6">Educational Event Expertise</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Our deep understanding of academic traditions and institutional requirements ensures dignified and meaningful educational celebrations.
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
                                    <div className="text-4xl font-bold text-indigo-600 mb-2">60+</div>
                                    <div className="text-muted-foreground">Educational Events</div>
                                </div>
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div>
                                        <div className="text-2xl font-bold mb-1">25+</div>
                                        <div className="text-xs text-muted-foreground">Institutions Served</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">50K+</div>
                                        <div className="text-xs text-muted-foreground">Students Celebrated</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">200+</div>
                                        <div className="text-xs text-muted-foreground">Academic Speakers</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-1">98%</div>
                                        <div className="text-xs text-muted-foreground">Institution Satisfaction</div>
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
                            <h2 className="text-3xl font-bold mb-4">Educational Event Portfolio</h2>
                            <p className="text-lg text-muted-foreground">
                                Celebrating academic excellence through dignified and memorable educational events.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-background rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Award className="h-4 w-4 text-indigo-600" />
                                        <span className="text-sm font-medium text-indigo-600">{project.impact}</span>
                                    </div>
                                    <h3 className="font-semibold mb-3">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-indigo-600 text-white">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Celebrate Educational Excellence?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Let&apos;s create an inspiring educational event that honors achievement and fosters academic excellence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">
                                    Start Planning
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600" asChild>
                                <Link href="tel:+919876543210">Call: +91 98765 43210</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
