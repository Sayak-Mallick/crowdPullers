import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, Building2, Users } from 'lucide-react'
import * as Separator from '@radix-ui/react-separator'
import * as Tabs from '@radix-ui/react-tabs'
import Link from 'next/link'
import Image from 'next/image'
// import { Button } from '@/components/ui/button'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Youtube, href: '#', label: 'YouTube' },
    ]

    const quickLinks = [
        { name: 'About Us', href: '/about-us' },
        { name: 'Our Services', href: '/services' },
        { name: 'Our Expertise', href: '/#expertise' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact Us', href: '/contact' },
    ]

    const officeData = [
        {
            title: 'Head Office',
            icon: Building2,
            address: ['23, Nabin Kundu Lane, College Street', 'Kolkata - 700 009, India']
        },
        {
            title: 'Branch Office',
            icon: Building2,
            address: ['19, Ashutosh Shastri Road, Beleghata', 'Kolkata - 700 010, India']
        }
    ]

    const partners = [
        { name: 'Miss Prantika Mazumder', role: 'Partner', phones: ['983029938'] },
        { name: 'Mr. Jayanta Saha', role: 'Partner', phones: ['9875586039', '9051342284'] },
        { name: 'Mr. Swarup Chakraborty', role: 'Partner', phones: ['98303 36402'] },
        { name: 'Mr. Supratim Roy', role: 'Partner', phones: ['98303 33821'] }
    ]

    return (
        <footer className="bg-background border-t">
            {/* Newsletter Section */}
            {/* <div className="bg-primary/5 border-b">
                <div className="mx-auto max-w-7xl px-6 py-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Stay Updated with CROWDpullers</h3>
                            <p className="text-muted-foreground text-lg">
                                Get the latest updates on our events, industry insights, and exclusive offers directly to your inbox.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                            </div>
                            <Button size="lg" className="whitespace-nowrap">
                                Subscribe
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Main Footer Content */}
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Company Info & Quick Links */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                            <Image src="/crowdPullers.png" alt="CROWDpullers Logo" width={140} height={45} />
                        </div>
                        <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                            One of India&apos;s leading event management companies, intelligently shaping and responding to customers&apos; demands with innovative solutions.
                        </p>

                        {/* Email Contact */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 text-sm">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <span className="text-muted-foreground">info@crowdpullers.com</span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Information using Tabs */}
                    <div className="lg:col-span-3">
                        <Tabs.Root defaultValue="offices" className="w-full">
                            <Tabs.List className="flex space-x-1 mb-8 bg-muted p-1 rounded-lg">
                                <Tabs.Trigger 
                                    value="offices" 
                                    className="flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:text-foreground text-muted-foreground hover:text-foreground"
                                >
                                    Our Offices
                                </Tabs.Trigger>
                                <Tabs.Trigger 
                                    value="partners" 
                                    className="flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:text-foreground text-muted-foreground hover:text-foreground"
                                >
                                    Contact Partners
                                </Tabs.Trigger>
                                <Tabs.Trigger 
                                    value="connect" 
                                    className="flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:text-foreground text-muted-foreground hover:text-foreground"
                                >
                                    Connect With Us
                                </Tabs.Trigger>
                            </Tabs.List>

                            {/* Offices Tab */}
                            <Tabs.Content value="offices" className="mt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {officeData.map((office, index) => (
                                        <div key={index} className="bg-muted/50 rounded-lg p-6">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                    <office.icon className="h-5 w-5" />
                                                </div>
                                                <h5 className="font-semibold text-foreground">{office.title}</h5>
                                            </div>
                                            <div className="space-y-1">
                                                {office.address.map((line, idx) => (
                                                    <p key={idx} className="text-muted-foreground text-sm">{line}</p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Certifications */}
                                <div className="mt-8">
                                    <h5 className="font-semibold mb-4">Certifications</h5>
                                    <div className="bg-muted/50 rounded-lg p-6 max-w-md">
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-background border">
                                            <div className="flex h-8 w-8 items-center justify-center rounded bg-green-100 text-green-600">
                                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium">ISO 9001:2015</div>
                                                <div className="text-xs text-muted-foreground">Certified Quality Management</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tabs.Content>

                            {/* Partners Tab */}
                            <Tabs.Content value="partners" className="mt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {partners.map((partner, index) => (
                                        <div key={index} className="bg-muted/50 rounded-lg p-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                    <Users className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold text-foreground text-sm">{partner.name}</h5>
                                                    <p className="text-xs text-muted-foreground">{partner.role}</p>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                {partner.phones.map((phone, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-primary">
                                                            <Phone className="h-3 w-3" />
                                                        </div>
                                                        <span className="text-muted-foreground text-sm">{phone}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tabs.Content>

                            {/* Connect Tab */}
                            <Tabs.Content value="connect" className="mt-6">
                                <div className="bg-muted/50 rounded-lg p-6 max-w-md">
                                    <h5 className="font-semibold mb-4">Follow Us</h5>
                                    <div className="flex flex-wrap gap-3">
                                        {socialLinks.map((social, index) => (
                                            <Link
                                                key={index}
                                                href={social.href}
                                                aria-label={social.label}
                                                className="group flex h-10 w-10 items-center justify-center rounded-lg bg-background hover:bg-primary transition-all duration-200 border"
                                            >
                                                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-200" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </Tabs.Content>
                        </Tabs.Root>
                    </div>
                </div>
            </div>

            <Separator.Root className="bg-border" />

            {/* Bottom Footer */}
            <div className="mx-auto max-w-7xl px-6 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                        © {currentYear} CROWDpullers. All rights reserved.
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                            Cookie Policy
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
