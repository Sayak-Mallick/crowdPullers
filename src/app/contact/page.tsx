import { HeroHeader } from "@/components/header";
import { Phone, MapPin, Building2, User, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function ContactPage() {
    const eventTypes = [
        'Corporate Events',
        'Exhibitions & Trade Shows',
        'Cultural Events',
        'Government Events',
        'Sports Events',
        'Educational Events',
        'Wedding & Social Events',
        'Other'
    ];

    const partners = [
        {
            name: 'Miss Prantika Mazumder',
            role: 'Partner',
            phone: '983029938'
        },
        {
            name: 'Mr. Jayanta Saha',
            role: 'Partner',
            phone: '9875586039 / 9051342284'
        },
        {
            name: 'Mr. Swarup Chakraborty',
            role: 'Partner',
            phone: '98303 36402'
        },
        {
            name: 'Mr. Supratim Roy',
            role: 'Partner',
            phone: '98303 33821'
        }
    ];

    return (
        <>
            <HeroHeader />
            <main>
                {/* Hero Section */}
                <section className="bg-linear-to-br from-primary/5 via-primary/10 to-background">
                    <div className="mx-auto max-w-7xl px-6 pt-32 pb-16">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                                Get In Touch
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                Ready to create an unforgettable event? Let&apos;s discuss your vision and make it a reality.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Form & Offices Section */}
                <section className="py-16 md:py-24 bg-linear-to-b from-background to-muted/20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div className="bg-background rounded-3xl border shadow-xl p-8">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Send className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Send Us a Message</h2>
                                </div>

                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email address"
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="Enter your phone number"
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                                            Event Type
                                        </label>
                                        <select
                                            id="eventType"
                                            name="eventType"
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                            required
                                        >
                                            <option value="">Select event type</option>
                                            {eventTypes.map((type, index) => (
                                                <option key={index} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            placeholder="Tell us about your event requirements..."
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                            required
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full">
                                        Send Message
                                        <Send className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </div>

                            {/* Office Information */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold mb-8">Our Offices</h2>

                                    {/* Head Office */}
                                    <div className="bg-background rounded-2xl border p-6 mb-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mt-1">
                                                <Building2 className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2">Head Office</h3>
                                                <p className="text-muted-foreground">
                                                    23, Nabin Kundu Lane, College Street<br />
                                                    Kolkata - 700 009, India
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Branch Office */}
                                    <div className="bg-background rounded-2xl border p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 mt-1">
                                                <MapPin className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2">Branch Office</h3>
                                                <p className="text-muted-foreground">
                                                    19, Ashutosh Shastri Road, Beleghata<br />
                                                    Kolkata - 700 010, India
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Partners */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-6">Contact Our Partners</h2>
                                    <div className="space-y-4">
                                        {partners.map((partner, index) => (
                                            <div key={index} className="bg-background rounded-2xl border p-6">
                                                <div className="flex items-start gap-4">
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                                                        <User className="h-5 w-5" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold">{partner.name}</h4>
                                                        <p className="text-sm text-muted-foreground mb-2">{partner.role}</p>
                                                        <div className="flex items-center gap-2">
                                                            <Phone className="h-4 w-4 text-primary" />
                                                            <a
                                                                href={`tel:${partner.phone.split(' / ')[0]}`}
                                                                className="text-primary hover:underline"
                                                            >
                                                                {partner.phone}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom Section with Logo and Tagline */}
                <section className="py-16 bg-muted/30 border-t">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <div className="flex justify-center mb-8">
                            <Image src="/crowdPullers.png" alt="CROWDpullers Logo" width={180} height={60} />
                        </div>

                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                © 2025 CROWDpullers. All rights reserved. | ISO 9001:2015 Certified Company
                            </p>

                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full font-medium">
                                Efficient • Fast • Personalised
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
