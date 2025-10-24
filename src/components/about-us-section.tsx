import { CheckCircle, Award, Lightbulb, DollarSign, Heart, Target, Eye } from 'lucide-react'
import * as Accordion from '@radix-ui/react-accordion'
import * as Separator from '@radix-ui/react-separator'

export default function AboutUsSection() {
    return (
        <section className="py-12 md:py-20 bg-muted/30">
            <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
                {/* Header */}
                <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">About CROWDpullers</h2>
                </div>

                {/* Mission Section */}
                <div className="mx-auto max-w-4xl">
                    <div className="rounded-2xl border bg-background p-8 md:p-12 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                                <Target className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-semibold">Our Mission</h3>
                        </div>
                        <div className="space-y-4">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                CROWDpullers is an Event Management company that helps in intelligently shaping and responding to customers' demands. We are constantly creating better platforms to reach out to customers, and as one of India's leading event management companies, we plan and execute events that go beyond any expectations.
                            </p>
                            <Separator.Root className="my-6 h-px bg-border" />
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our vast experience and professional expertise give us the competitive edge in the events industry. With us, you can be assured of high performance, complete customer satisfaction, and value for your money.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Expertise Section */}
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-semibold mb-4">Our Expertise</h3>
                        <p className="text-lg text-muted-foreground">Why choose CROWDpullers for your next event</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {/* ISO Certification */}
                        <div className="group rounded-2xl border bg-background p-6 shadow-sm transition-all hover:shadow-lg">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                                <Award className="h-6 w-6" />
                            </div>
                            <h4 className="mb-3 text-lg font-semibold">ISO 9001:2015 Certified</h4>
                            <p className="text-sm text-muted-foreground">
                                Quality management systems ensuring excellence in every event.
                            </p>
                        </div>

                        {/* Innovative Concepts */}
                        <div className="group rounded-2xl border bg-background p-6 shadow-sm transition-all hover:shadow-lg">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                                <Lightbulb className="h-6 w-6" />
                            </div>
                            <h4 className="mb-3 text-lg font-semibold">Innovative Concepts</h4>
                            <p className="text-sm text-muted-foreground">
                                Creative and stylish execution that exceeds expectations.
                            </p>
                        </div>

                        {/* Cost Effective Solutions */}
                        <div className="group rounded-2xl border bg-background p-6 shadow-sm transition-all hover:shadow-lg">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                                <DollarSign className="h-6 w-6" />
                            </div>
                            <h4 className="mb-3 text-lg font-semibold">Cost Effective Solutions</h4>
                            <p className="text-sm text-muted-foreground">
                                Affordable solutions without compromising on quality and excellence.
                            </p>
                        </div>

                        {/* Customer Satisfaction */}
                        <div className="group rounded-2xl border bg-background p-6 shadow-sm transition-all hover:shadow-lg">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
                                <Heart className="h-6 w-6" />
                            </div>
                            <h4 className="mb-3 text-lg font-semibold">Customer Satisfaction</h4>
                            <p className="text-sm text-muted-foreground">
                                Complete customer satisfaction and value for your investment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="mx-auto max-w-4xl">
                    <div className="rounded-2xl border bg-background p-8 md:p-12 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                                <Eye className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-semibold">Our Vision</h3>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We are ready to make a difference in your business performance and turn your visions into highly marketable solutions. From initial planning to final execution, we work on every aspect that makes an event a huge success.
                        </p>
                    </div>
                </div>

                {/* Interactive Accordion for Additional Details */}
                <div className="mx-auto max-w-4xl">
                    <Accordion.Root type="single" collapsible className="space-y-4">
                        <Accordion.Item value="why-choose-us" className="overflow-hidden rounded-2xl border bg-background shadow-sm">
                            <Accordion.Header>
                                <Accordion.Trigger className="group flex w-full items-center justify-between p-6 text-left font-semibold transition-all hover:bg-muted/50 data-[state=open]:bg-muted/30">
                                    <span className="text-lg">Why Choose CROWDpullers?</span>
                                    <CheckCircle className="h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                <div className="p-6 pt-0">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                                            <p className="text-sm text-muted-foreground">
                                                <strong>Proven Track Record:</strong> Successfully managed 127+ events in 2024 alone
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                                            <p className="text-sm text-muted-foreground">
                                                <strong>Celebrity Management:</strong> Expertise in organizing concerts for Arijit Singh, Sonu Nigam, and Shreya Ghoshal
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                                            <p className="text-sm text-muted-foreground">
                                                <strong>Government Partnerships:</strong> Trusted partner for Republic Day and Independence Day celebrations
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                                            <p className="text-sm text-muted-foreground">
                                                <strong>End-to-End Solutions:</strong> From concept to execution, we handle every detail
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Content>
                        </Accordion.Item>
                    </Accordion.Root>
                </div>
            </div>
        </section>
    )
}
