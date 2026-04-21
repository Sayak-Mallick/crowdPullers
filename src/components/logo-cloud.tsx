'use client'

import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import Image from "next/image";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getClients } from "@/services/api/clients.endpoints";
import { cn } from "@/lib/utils";

interface IClients {
    _id: string;
    name: string;
    clientLogo: string;
    createdAt: string;
    updatedAt: string;
};

/* ─── widths cycle so the skeleton feels organic, not robotic ─── */
const SKELETON_WIDTHS = [88, 72, 104, 64, 96, 80, 112, 68, 92, 76];

function LogoCloudSkeleton() {
    return (
        <section className="bg-background pb-16 md:pb-32">
            <div className="group relative m-auto max-w-6xl px-6">
                <div className="flex flex-col items-center md:flex-row">

                    {/* label placeholder */}
                    <div className="inline md:max-w-44 md:border-r md:pr-6">
                        <div className="ml-auto h-4 w-32 rounded-md bg-muted animate-pulse" />
                    </div>

                    {/* logo strip placeholder */}
                    <div className="relative py-6 md:w-[calc(100%-11rem)] overflow-hidden">
                        <div className="flex items-center gap-28">
                            {SKELETON_WIDTHS.map((w, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "h-10 shrink-0 rounded-lg bg-muted animate-pulse",
                                    )}
                                    style={{
                                        width: w,
                                        animationDelay: `${i * 80}ms`,
                                    }}
                                />
                            ))}
                        </div>

                        {/* same fade edges so skeleton feels identical to the real thing */}
                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20 pointer-events-none" />
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20 pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export const LogoCloud = () => {
    const {
        data: clients,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["clients"],
        queryFn: getClients,
        staleTime: 1000 * 60 * 5,
    });

    if (isLoading) return <LogoCloudSkeleton />;
    if (isError) return null;

    const logosToDisplay = clients?.data?.data || [];

    return (
        <section className="bg-background pb-16 md:pb-32">
            <div className="group relative m-auto max-w-6xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="inline md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Powering the best teams</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                            {logosToDisplay.map((logo: IClients) => (
                                <div className="flex" key={logo?._id}>
                                    <Image
                                        src={logo?.clientLogo}
                                        alt={`${logo?.name} logo`}
                                        width={400}
                                        height={40}
                                        style={{ width: 'auto', height: 40 }}
                                    />
                                </div>
                            ))}
                        </InfiniteSlider>
                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20 pointer-events-none" />
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20 pointer-events-none" />
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
    );
};