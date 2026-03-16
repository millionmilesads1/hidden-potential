"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { fadeUp, stagger, ease } from "@/lib/animations";

// ── Types ─────────────────────────────────────────────────────────────────────

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  categoryId: string;
}

interface CategoryDef {
  id: string;
  label: string;
  count: number;
  badgeVariant: "purple" | "gold" | "teal";
}

interface LightboxState {
  images: GalleryImage[];
  index: number;
}

// ── Category Definitions ──────────────────────────────────────────────────────

const CATEGORIES: CategoryDef[] = [
  { id: "01_Personal_Professional",    label: "Personal & Professional",    count: 6,  badgeVariant: "purple" },
  { id: "02_School_Workshops",         label: "School Workshops",           count: 51, badgeVariant: "teal"   },
  { id: "03_Corporate_Teacher_Training", label: "Corporate & Teacher Training", count: 22, badgeVariant: "gold" },
  { id: "04_Online_Sessions",          label: "Online Sessions",            count: 14, badgeVariant: "purple" },
  { id: "05_Events_Conferences",       label: "Events & Conferences",       count: 13, badgeVariant: "teal"   },
  { id: "06_Certificates_Awards",      label: "Certificates & Awards",      count: 2,  badgeVariant: "gold"   },
  { id: "07_Media_Press",              label: "Media & Press",              count: 2,  badgeVariant: "purple" },
  { id: "08_Book",                     label: "Books",                      count: 2,  badgeVariant: "gold"   },
  { id: "09_Flyers_Posters",           label: "Flyers & Posters",           count: 2,  badgeVariant: "teal"   },
  { id: "10_Counseling_Sessions",      label: "Counseling Sessions",        count: 5,  badgeVariant: "purple" },
  { id: "11_Student_Photos",           label: "Student Photos",             count: 3,  badgeVariant: "teal"   },
  { id: "12_Training_Activities",      label: "Training Activities",        count: 6,  badgeVariant: "gold"   },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function makeCategoryImages(cat: CategoryDef): GalleryImage[] {
  return Array.from({ length: cat.count }, (_, i) => ({
    src:        `/gallery/${cat.id}/img-${String(i + 1).padStart(3, "0")}.jpg`,
    alt:        `${cat.label} — photo ${i + 1}`,
    category:   cat.label,
    categoryId: cat.id,
  }));
}

// Marquee selection: first N images from a category
function pick(cat: CategoryDef, n: number): GalleryImage[] {
  return makeCategoryImages(cat).slice(0, Math.min(n, cat.count));
}

// Marquee Row 1: School + Corporate + Events (scrolls left)
const MARQUEE_ROW1: GalleryImage[] = [
  ...pick(CATEGORIES[1], 9),   // School Workshops
  ...pick(CATEGORIES[2], 8),   // Corporate & Teacher Training
  ...pick(CATEGORIES[4], 6),   // Events & Conferences
];

// Marquee Row 2: Personal + Online + Training + Students (scrolls right)
const MARQUEE_ROW2: GalleryImage[] = [
  ...pick(CATEGORIES[0], 6),   // Personal & Professional (all)
  ...pick(CATEGORIES[3], 7),   // Online Sessions
  ...pick(CATEGORIES[11], 6),  // Training Activities (all)
  ...pick(CATEGORIES[10], 3),  // Student Photos (all)
];

// How many bento images to show per category
const BENTO_MAX = 8;

// ── Lightbox Component ────────────────────────────────────────────────────────

function Lightbox({
  state,
  onClose,
  onPrev,
  onNext,
}: {
  state: LightboxState;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = state.images[state.index];
  const hasMultiple = state.images.length > 1;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasMultiple) onPrev();
      if (e.key === "ArrowRight" && hasMultiple) onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext, hasMultiple]);

  const catDef = CATEGORIES.find(c => c.id === img.categoryId);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${img.category} lightbox`}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25, ease }}
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
          {/* Header bar */}
          <div className="flex items-center justify-between px-4 py-3 rounded-t-2xl" style={{ background: "rgba(45,27,105,0.85)", backdropFilter: "blur(12px)" }}>
            <div className="flex items-center gap-3">
              <Badge variant={catDef?.badgeVariant ?? "white"} className="!bg-white/10 !text-white !border-white/20">
                {img.category}
              </Badge>
              {hasMultiple && (
                <span className="text-white/50 text-xs font-body">
                  {state.index + 1} / {state.images.length}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Image area — plain <img> avoids Next.js Image black-box bug inside fixed overlays */}
          <div
            className="relative flex-1 min-h-0 flex items-center justify-center rounded-b-2xl overflow-hidden"
            style={{ maxHeight: "calc(90vh - 56px)", background: "#09090b" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              style={{
                maxHeight: "80vh",
                width: "auto",
                maxWidth: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />

            {/* Prev / Next arrows */}
            {hasMultiple && (
              <>
                <button
                  onClick={onPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-white transition-all"
                  style={{ background: "rgba(45,27,105,0.7)", backdropFilter: "blur(6px)" }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={onNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-white transition-all"
                  style={{ background: "rgba(45,27,105,0.7)", backdropFilter: "blur(6px)" }}
                  aria-label="Next image"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
  );
}

// ── Marquee Row ───────────────────────────────────────────────────────────────

function MarqueeRow({
  images,
  reverse = false,
  onImageClick,
}: {
  images: GalleryImage[];
  reverse?: boolean;
  onImageClick: (images: GalleryImage[], index: number) => void;
}) {
  // Duplicate images for seamless loop
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden w-full py-2" aria-hidden="true">
      <div className={cn("flex gap-3 w-max", reverse ? "animate-marquee-reverse" : "animate-marquee")}>
        {doubled.map((img, i) => (
          <button
            key={i}
            className="relative w-56 h-40 flex-shrink-0 rounded-xl overflow-hidden cursor-zoom-in group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
            onClick={() => onImageClick(images, i % images.length)}
            tabIndex={-1}
            aria-label={img.alt}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="224px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Bento Grid ────────────────────────────────────────────────────────────────

function BentoGrid({
  images,
  onImageClick,
}: {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}) {
  const display = images.slice(0, BENTO_MAX);

  if (display.length === 0) return null;

  // For 1–2 images: simple 2-col grid, no span
  if (display.length <= 2) {
    return (
      <div className={cn("grid gap-3", display.length === 1 ? "grid-cols-1" : "grid-cols-2")}>
        {display.map((img, i) => (
          <BentoCell key={i} img={img} spanClass="col-span-1" heightClass="h-56" index={i} onClick={() => onImageClick(i)} />
        ))}
      </div>
    );
  }

  // For 3+ images: 3-col grid with first image wide
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {display.map((img, i) => {
        // Pattern: 0=wide(2col), rest=normal(1col).
        // Re-apply wide at index 5 for visual rhythm in 8-image grids.
        const isWide   = i === 0 || i === 5;
        const spanCls  = isWide ? "col-span-2 sm:col-span-2" : "col-span-1";
        const heightCls = isWide ? "h-64 sm:h-72" : "h-44 sm:h-48";
        return (
          <BentoCell key={i} img={img} spanClass={spanCls} heightClass={heightCls} index={i} onClick={() => onImageClick(i)} />
        );
      })}
    </div>
  );
}

function BentoCell({
  img,
  spanClass,
  heightClass,
  index,
  onClick,
}: {
  img: GalleryImage;
  spanClass: string;
  heightClass: string;
  index: number;
  onClick: () => void;
}) {
  return (
    // Outer wrapper: carries the visible border + rounded corners — NO overflow-hidden
    <motion.button
      className={cn(
        "relative group cursor-zoom-in block w-full text-left",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2",
        spanClass,
        heightClass
      )}
      style={{
        borderRadius: "0.75rem",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "rgba(124,58,237,0.6)",
      }}
      onClick={onClick}
      whileHover={{
        y: -2,
        borderColor: "rgba(124,58,237,1)",
        boxShadow: "0 0 0 3px rgba(124,58,237,0.3)",
      }}
      transition={{ duration: 0.2 }}
      aria-label={`View ${img.alt}`}
    >
      {/* Inner: overflow-hidden clips the image to rounded corners */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius: "10px" }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={spanClass.includes("col-span-2") ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 50vw, 33vw"}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {/* Zoom icon — sits above the inner div, z-10 */}
      <div
        className="absolute bottom-2.5 right-2.5 z-10 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
        style={{ background: "rgba(45,27,105,0.75)", backdropFilter: "blur(6px)" }}
      >
        <ZoomIn size={14} className="text-white" />
      </div>
    </motion.button>
  );
}

// ── Section Header (with useInView animation) ─────────────────────────────────

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Category Section ──────────────────────────────────────────────────────────

function CategorySection({
  cat,
  allImages,
  onOpen,
}: {
  cat: CategoryDef;
  allImages: GalleryImage[];
  onOpen: (images: GalleryImage[], index: number) => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden:  {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {/* Category header */}
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
        <Badge variant={cat.badgeVariant}>{cat.label}</Badge>
        <span className="text-[13px] font-body" style={{ color: "#9B9B9B" }}>
          {cat.count} {cat.count === 1 ? "photo" : "photos"}
          {cat.count > BENTO_MAX && ` — showing ${BENTO_MAX}`}
        </span>
        <div className="flex-1 h-px" style={{ background: "rgba(45,27,105,0.08)" }} />
      </motion.div>

      {/* Grid */}
      <motion.div variants={fadeUp}>
        <BentoGrid
          images={allImages}
          onImageClick={(i) => onOpen(allImages, i)}
        />
      </motion.div>
    </motion.section>
  );
}

// ── Stats Bar ─────────────────────────────────────────────────────────────────

const STATS = [
  { value: "128+", label: "Photos" },
  { value: "12",   label: "Categories" },
  { value: "14+",  label: "Years of Impact" },
  { value: "5000+", label: "Lives Transformed" },
];

// ── Main Gallery Client ───────────────────────────────────────────────────────

export default function GalleryClient() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = useCallback((images: GalleryImage[], index: number) => {
    setLightbox({ images, index });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevImage = useCallback(() => {
    setLightbox(prev => {
      if (!prev) return null;
      const newIndex = (prev.index - 1 + prev.images.length) % prev.images.length;
      return { ...prev, index: newIndex };
    });
  }, []);

  const nextImage = useCallback(() => {
    setLightbox(prev => {
      if (!prev) return null;
      const newIndex = (prev.index + 1) % prev.images.length;
      return { ...prev, index: newIndex };
    });
  }, []);

  // Build per-category image arrays (memoized as static data)
  const categoryImageMap = React.useMemo(() => {
    return CATEGORIES.reduce<Record<string, GalleryImage[]>>((acc, cat) => {
      acc[cat.id] = makeCategoryImages(cat);
      return acc;
    }, {});
  }, []);

  // Hero section ref
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden grain-overlay"
        style={{ background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)", minHeight: "420px" }}
      >
        {/* Decorative blob */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 80% 25%, rgba(109,40,217,0.12) 0%, transparent 60%)" }} />

        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28 text-center relative z-10" ref={heroRef}>
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={stagger}
          >
            {/* Label */}
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.2em] mb-5 font-display"
              style={{ color: "#C8A951" }}
            >
              <Camera size={12} className="inline mr-2 mb-0.5" />
              Photo Gallery
            </motion.p>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-extrabold text-white mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
            >
              Every Session.<br />
              <span style={{ color: "#C8A951" }}>Every Story.</span>{" "}
              Every Breakthrough.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="font-body text-base sm:text-lg max-w-xl mx-auto mb-10"
              style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}
            >
              14+ years of transforming lives — captured one moment at a time across Delhi NCR and beyond.
            </motion.p>

            {/* Stats row */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 sm:gap-10">
              {STATS.map(s => (
                <div key={s.label} className="text-center">
                  <p className="font-display font-extrabold text-2xl sm:text-3xl text-white">{s.value}</p>
                  <p className="font-body text-xs uppercase tracking-wider mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #1A0F3C)" }} />
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────────── */}
      <section className="relative py-12 sm:py-16 overflow-hidden" style={{ background: "#F8F6F2" }}>
        <AnimatedSection className="max-w-5xl mx-auto px-6 mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] font-display mb-2" style={{ color: "#7C3AED" }}>
            Moments from our journey
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl" style={{ color: "#2D1B69" }}>
            Glimpses of Transformation
          </h2>
        </AnimatedSection>

        {/* Row 1 — scrolls left */}
        <div className="mb-3">
          <MarqueeRow images={MARQUEE_ROW1} onImageClick={openLightbox} />
        </div>

        {/* Row 2 — scrolls right */}
        <MarqueeRow images={MARQUEE_ROW2} reverse onImageClick={openLightbox} />

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10" style={{ background: "linear-gradient(to right, #F8F6F2, transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10" style={{ background: "linear-gradient(to left, #F8F6F2, transparent)" }} />
      </section>

      {/* ── BENTO GRID ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto px-6">
          {/* Section header */}
          <AnimatedSection className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] font-display mb-2" style={{ color: "#7C3AED" }}>
              All categories
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-3" style={{ color: "#2D1B69" }}>
              Explore Our Journey
            </h2>
            <p className="font-body text-base max-w-lg mx-auto" style={{ color: "#6B6B6B" }}>
              From school workshops to corporate trainings, art therapy to certification programs — every photograph tells a story of growth.
            </p>
          </AnimatedSection>

          {/* Category grid sections */}
          <div className="flex flex-col gap-14">
            {CATEGORIES.map(cat => (
              <CategorySection
                key={cat.id}
                cat={cat}
                allImages={categoryImageMap[cat.id]}
                onOpen={openLightbox}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 relative overflow-hidden grain-overlay"
        style={{ background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 15% 80%, rgba(109,40,217,0.1) 0%, transparent 55%)" }} />
        <AnimatedSection className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] font-display mb-4" style={{ color: "#C8A951" }}>
            Begin your journey
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
            Your transformation story starts here
          </h2>
          <p className="font-body text-base mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            Every photo in this gallery represents a real person who chose structured growth. Book a free evaluation to discover your pathway.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/assessment"
              className="btn-teal inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-bold text-white font-display"
            >
              Take the Assessment
            </a>
            <a
              href="/contact"
              className="btn-outline-dark inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-bold font-display"
            >
              Book Free Evaluation
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* ── LIGHTBOX ────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            key="lightbox"
            state={lightbox}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </>
  );
}
