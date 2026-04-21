"use client";

import { useState, useEffect, useCallback } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

/* ─── types ─── */
interface CelebImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  event: string;
  year: string;
  /** intrinsic width of the source image – used by next/image for aspect ratio */
  width: number;
  /** intrinsic height of the source image – used by next/image for aspect ratio */
  height: number;
}

/* ─── data ─── */
const celebImages: CelebImage[] = [
  {
    id: 1,
    src: "/celeb/arijit.png",
    alt: "Arijit Singh Live Concert",
    title: "Arijit Singh Live Concert",
    event: "Eco Park Cultural Festival",
    year: "2020",
    width: 1200,
    height: 800,
  },
  {
    id: 2,
    src: "/celeb/shreya.png",
    alt: "Shreya Ghoshal Performance",
    title: "Shreya Ghoshal",
    event: "Corporate Gala Night",
    year: "2019",
    width: 800,
    height: 1000,
  },
  {
    id: 3,
    src: "/celeb/shreya-2.png",
    alt: "Shreya Ghoshal Encore",
    title: "Shreya Ghoshal — Encore",
    event: "Cultural Evening",
    year: "2018",
    width: 1200,
    height: 900,
  },
  {
    id: 4,
    src: "/celeb/sonunigam.png",
    alt: "Sonu Nigam Live",
    title: "Sonu Nigam Live",
    event: "Cultural Heritage Festival",
    year: "2018",
    width: 900,
    height: 1200,
  },
  {
    id: 5,
    src: "/celeb/concert.png",
    alt: "Event Photography Highlights",
    title: "Event Photography",
    event: "Portfolio Highlights",
    year: "2021",
    width: 1200,
    height: 800,
  },
  {
    id: 6,
    src: "/celeb/eventcollage.png",
    alt: "Event Collage Showcase",
    title: "Event Collage",
    event: "Multiple Events",
    year: "2022",
    width: 1200,
    height: 1200,
  },
];

/* ─── lightbox ─── */
interface LightboxProps {
  images: CelebImage[];
  activeId: number | null;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
}

function Lightbox({ images, activeId, onClose, onNavigate }: LightboxProps) {
  const image = images.find((img) => img.id === activeId);
  const index = images.findIndex((img) => img.id === activeId);

  /* keyboard navigation */
  useEffect(() => {
    if (activeId === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onNavigate("prev");
      if (e.key === "ArrowRight") onNavigate("next");
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeId, onNavigate, onClose]);

  return (
    <Dialog.Root
      open={activeId !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/85 z-50 animate-in fade-in duration-200" />

        <Dialog.Content
          className={cn(
            "fixed inset-0 z-50 flex flex-col",
            "focus:outline-none"
          )}
          aria-label="Image lightbox"
        >
          {/* ── header ── */}
          <div className="flex items-center justify-between px-6 py-4 bg-black/40">
            {image && (
              <div>
                <p className="text-sm font-semibold text-white leading-tight">
                  {image.title}
                </p>
                <p className="text-xs text-white/60 mt-0.5">
                  {image.event} · {image.year}
                </p>
              </div>
            )}
            <div className="flex items-center gap-3 ml-auto">
              <span className="text-xs text-white/50 tabular-nums">
                {index + 1} / {images.length}
              </span>
              <Dialog.Close asChild>
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </Dialog.Close>
            </div>
          </div>

          {/* ── image area ── */}
          <div className="relative flex-1 flex items-center justify-center">
            {image && (
              <Image
                key={image.id}
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/crowdPullers.png";
                }}
              />
            )}

            <button
              onClick={() => onNavigate("prev")}
              aria-label="Previous image"
              className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/60 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={() => onNavigate("next")}
              aria-label="Next image"
              className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/60 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* ── thumbnail strip ── */}
          <div className="flex items-center justify-center gap-2 py-4 bg-black/40 px-6 overflow-x-auto">
            {images.map((img, i) => (
              <button
                key={img.id}
                onClick={() => onNavigate(i < index ? "prev" : "next")}
                className={cn(
                  "relative h-12 w-16 shrink-0 overflow-hidden rounded-md transition-all duration-200",
                  img.id === activeId
                    ? "ring-2 ring-white opacity-100"
                    : "opacity-40 hover:opacity-70"
                )}
                aria-label={`Go to ${img.title}`}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="64px"
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/crowdPullers.png";
                  }}
                />
              </button>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

/* ─── gallery card ─── */
interface GalleryCardProps {
  image: CelebImage;
  priority: boolean;
  onClick: () => void;
}

function GalleryCard({ image, priority, onClick }: GalleryCardProps) {
  return (
    <div
      className="group relative mb-4 overflow-hidden rounded-xl cursor-pointer break-inside-avoid"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${image.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/crowdPullers.png";
        }}
      />

      {/* overlay — visible on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />

      <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4">
        <p className="text-sm font-semibold text-white leading-tight">
          {image.title}
        </p>
        <p className="text-xs text-white/70 mt-0.5">
          {image.event} · {image.year}
        </p>
      </div>
    </div>
  );
}

/* ─── main section ─── */
export default function CelebscapeSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const navigate = useCallback((direction: "prev" | "next") => {
    setActiveId((prev) => {
      if (prev === null) return null;
      const index = celebImages.findIndex((img) => img.id === prev);
      const next =
        direction === "prev"
          ? index === 0
            ? celebImages.length - 1
            : index - 1
          : index === celebImages.length - 1
            ? 0
            : index + 1;
      return celebImages[next].id;
    });
  }, []);

  /* split images into 4 columns (masonry) */
  const columns: CelebImage[][] = [[], [], [], []];
  celebImages.forEach((img, i) => columns[i % 4].push(img));

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* ── section header ── */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Portfolio
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-none">
              Celebscape
            </h2>
            <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
              A decade of successfully executed events — from government
              inaugurations and corporate galas to cultural celebrations and
              international exhibitions.
            </p>
          </div>
          {/* thin rule */}
          <div className="mt-8 h-px bg-border w-full" />
        </div>

        {/* ── masonry grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {columns.map((col, ci) => (
            <div key={ci} className="grid gap-4 content-start">
              {col.map((image) => (
                <GalleryCard
                  key={image.id}
                  image={image}
                  priority={image.id <= 4}
                  onClick={() => setActiveId(image.id)}
                />
              ))}
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="mt-12 flex items-center justify-center">
          <Link href="/portfolio">
            <Button variant="outline" size="lg" className="gap-2 group">
              View complete portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      {/* ── lightbox ── */}
      <Lightbox
        images={celebImages}
        activeId={activeId}
        onClose={() => setActiveId(null)}
        onNavigate={navigate}
      />
    </section>
  );
}
