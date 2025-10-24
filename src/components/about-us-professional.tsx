import { Award, Lightbulb, DollarSign, Users, Building } from 'lucide-react'
import Image from 'next/image'

export default function AboutUsSection() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-linear-to-br from-primary/5 via-primary/10 to-background">
                <div className="mx-auto max-w-7xl px-6 pt-32 pb-16">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            About
                            <Image 
                                src="/crowdPullers.png" 
                                alt="CrowdPullers Logo" 
                                width={500}
                                height={50}
                                className="inline-block ml-3 h-12  md:h-16"
                            />
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            One of India&apos;s leading event management companies, creating memorable experiences and delivering exceptional results for over 15 years. We transform visions into reality with our professional expertise and innovative approach.
                        </p>
                    </div>
                </div>
            </section>

            <section id="about" className="py-16 md:py-24 bg-linear-to-b from-background to-muted/20">
                <div className="mx-auto max-w-7xl px-6">
                    {/* Header */}
                    <div className="mx-auto max-w-3xl text-center mb-16">
                    </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
                    {/* Left Column - Company Description */}
                    <div className="space-y-8">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg leading-relaxed text-foreground mb-6">
                                CROWDpullers is an Event Management company. We help in intelligently shaping and responding to customers&apos; demands. We are constantly creating better platform to reach out to customers, and as one of India&apos;s leading event management companies, we plan and execute events that goes beyond any expectations.
                            </p>

                            <p className="text-lg leading-relaxed text-foreground mb-6">
                                Our vast experience and professional expertise give us the competitive edge in the events industry. With us you can be assured of high performance, complete customer satisfaction and value for your money.
                            </p>

                            <p className="text-lg leading-relaxed text-foreground">
                                We are ready to make a difference in your business performance and turn your visions into highly marketable solutions.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Key Highlights */}
                    <div className="bg-background rounded-3xl border shadow-xl p-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Building className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold">Why Choose Us</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600 mt-1">
                                    <Award className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Professional Excellence</h4>
                                    <p className="text-sm text-muted-foreground">High performance delivery with complete customer satisfaction</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mt-1">
                                    <Lightbulb className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Innovative Concepts</h4>
                                    <p className="text-sm text-muted-foreground">Creative and stylish execution that exceeds expectations</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600 mt-1">
                                    <DollarSign className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Cost Effective Solutions</h4>
                                    <p className="text-sm text-muted-foreground">Affordable solutions without compromising quality</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600 mt-1">
                                    <Users className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">End-to-End Solutions</h4>
                                    <p className="text-sm text-muted-foreground">From initial planning to final execution</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-8">
                        <Award className="h-4 w-4" />
                        Trusted by Leading Organizations Across India
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">500+</div>
                            <div className="text-sm text-muted-foreground">Events Delivered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">15+</div>
                            <div className="text-sm text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">100+</div>
                            <div className="text-sm text-muted-foreground">Corporate Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">98%</div>
                            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
