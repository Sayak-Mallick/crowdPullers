import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import Image from "next/image";
import React from "react";

const clientLogos = [
    "austrade.png",
    "BCOC.png",
    "Biswa-Bangla.png",
    "CINI.png",
    "goodyear.png",
    "HIDCO.png",
    "Indian-Air-Force.png",
    "iskcon.png",
    "itc-limited.png",
    "kolkata-police.png",
    "Micro-Labs.png",
    "NCSM.png",
    "NIT-durgapur.png",
    "queensland-government.png",
    "RCGC.png",
    "REC.png",
    "se-railway.png",
    "srei.png",
    "Tata-Motors.png",
    "TMGMSOI.png",
    "WBMDFC.png"
];

export const LogoCloud = () => {
    return (
        <section className="bg-background pb-16 md:pb-32">
            <div className="group relative m-auto max-w-6xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="inline md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Powering the best teams</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            {clientLogos.map((logo) => (
                                <div className="flex" key={logo}>
                                    <Image src={`/clients/${logo}`} alt={logo.replace(/[-.]/g, ' ')} width={400} height={40} style={{ width: 'auto', height: 40 }} />
                                </div>
                            ))}
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
