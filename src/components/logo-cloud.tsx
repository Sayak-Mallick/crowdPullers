"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { useClientsStore } from "@/clients.store";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Client {
  _id: string;
  name: string;
  clientLogo: string;
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

const SKELETON_WIDTHS = [68, 52, 80, 44, 72, 56, 88, 48, 76, 60];

function LogoCloudSkeleton() {
  return (
    <section className="py-12 md:py-16" aria-hidden="true">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top rule — matches live state */}
        <div className="mb-8 h-px w-full bg-border/50" />
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-0">
          {/* Label column skeleton */}
          <div className="flex shrink-0 items-center gap-2.5 md:w-44 md:pr-6 md:border-r md:border-border/50">
            <div className="h-2 w-2 rounded-full bg-muted animate-pulse" />
            <div
              className="h-3 w-32 rounded-md bg-muted animate-pulse"
              style={{ animationDelay: "80ms" }}
            />
          </div>
          {/* Track skeleton */}
          <div className="relative overflow-hidden md:flex-1 md:pl-6">
            <div className="flex items-center gap-14 py-1.5">
              {SKELETON_WIDTHS.map((w, i) => (
                <div
                  key={i}
                  className="h-7 shrink-0 rounded-md bg-muted animate-pulse"
                  style={{ width: w, animationDelay: `${i * 70}ms` }}
                />
              ))}
            </div>
            {/* Edge fades — same dimensions as live state */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Logo item ────────────────────────────────────────────────────────────────

function LogoItem({ client }: { client: Client }) {
  return (
    <div
      className={cn(
        "flex items-center transition-opacity duration-300",
        "opacity-50 grayscale hover:opacity-90 hover:grayscale-0",
      )}
    >
      <Image
        src={client.clientLogo}
        alt={`${client.name} logo`}
        width={400}
        height={64}
        style={{ width: "auto", height: 36 }}
        className="select-none"
      />
    </div>
  );
}

// ─── Label ────────────────────────────────────────────────────────────────────

function LiveLabel() {
  return (
    <div className="flex shrink-0 items-start gap-2.5 md:w-44 md:pr-6 md:border-r md:border-border/50 md:items-center">
      {/* Pulsing live dot — signals "these are real, current clients" */}
      <span
        className={cn(
          "mt-0.5 md:mt-0 h-2 w-2 shrink-0 rounded-full",
          "bg-emerald-500 dark:bg-emerald-400",
          "animate-[pulse_2.5s_ease-in-out_infinite]",
        )}
        aria-hidden="true"
      />
      <p className="text-xs font-medium leading-snug text-muted-foreground">
        Trusted by the&nbsp;world&apos;s best teams
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export const LogoCloud = () => {
  const { clients, isLoading, isError } = useClientsStore();

  if (isLoading) return <LogoCloudSkeleton />;
  if (isError || clients.length === 0) return null;

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 h-px w-full bg-border/50" />
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-0">
          <LiveLabel />
          <div className="relative overflow-hidden md:flex-1 md:pl-6">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              {clients.map((client) => (
                <LogoItem key={client._id} client={client} />
              ))}
            </InfiniteSlider>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background to-transparent" />
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
