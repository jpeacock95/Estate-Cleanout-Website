"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, ChevronsLeftRight } from "lucide-react";

type Pair = {
  id: string;
  label: string;
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
};

const pairs: Pair[] = [
  {
    id: "living-room",
    label: "Living Room",
    beforeSrc: "/images/before-after/livingroom-before.jpg",
    beforeAlt: "Pittsburgh living room cluttered with old couches, boxes, and belongings before a Steel City Cleanouts estate cleanout",
    afterSrc: "/images/before-after/livingroom-after.jpg",
    afterAlt: "Same living room completely empty with polished hardwood floors after Steel City Cleanouts finished the estate cleanout",
  },
  {
    id: "garage",
    label: "Garage",
    beforeSrc: "/images/before-after/garage-before.jpg",
    beforeAlt: "Residential Pittsburgh garage packed with boxes, old furniture, a bicycle, and clutter before Steel City Cleanouts arrived",
    afterSrc: "/images/before-after/garage-after.jpg",
    afterAlt: "Same garage completely empty with clean concrete floor after Steel City Cleanouts hauled everything away",
  },
];

function RevealSlider({ pair }: { pair: Pair }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const draggingRef = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!draggingRef.current) return;
      const x = "touches" in e ? e.touches[0]?.clientX : e.clientX;
      if (typeof x === "number") updatePosition(x);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [updatePosition]);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    draggingRef.current = true;
    const x = "touches" in e ? e.touches[0]?.clientX : e.clientX;
    if (typeof x === "number") updatePosition(x);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] border-2 border-[#1d1d1d] bg-black shadow-[10px_10px_0_#000] select-none"
      onMouseDown={startDrag}
      onTouchStart={startDrag}
      role="slider"
      aria-label={`Before and after reveal for ${pair.label}. Drag to compare.`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
        if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
      }}
    >
      <Image
        src={pair.beforeSrc}
        alt={pair.beforeAlt}
        fill
        sizes="(max-width: 768px) 100vw, 960px"
        className="object-cover object-center"
        priority={false}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <Image
          src={pair.afterSrc}
          alt={pair.afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, 960px"
          className="object-cover object-center"
          priority={false}
        />
      </div>

      <div className="pointer-events-none absolute left-5 top-5 rounded-full border-2 border-white/30 bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm font-[family-name:var(--font-heading)]">
        Before
      </div>
      <div className="pointer-events-none absolute right-5 top-5 rounded-full border-2 border-black bg-[#ed6623] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white font-[family-name:var(--font-heading)]">
        After
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-[3px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.6)]"
        style={{ left: `calc(${position}% - 1.5px)` }}
      />
      <button
        type="button"
        aria-label="Drag to reveal"
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        className="absolute top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-black bg-[#ed6623] text-white shadow-[3px_3px_0_#000] transition-transform hover:scale-110"
        style={{ left: `${position}%` }}
      >
        <ChevronsLeftRight className="h-5 w-5" strokeWidth={3} />
      </button>
    </div>
  );
}

export function BeforeAfterSection() {
  const [activeId, setActiveId] = useState(pairs[0].id);
  const active = pairs.find((p) => p.id === activeId) ?? pairs[0];

  return (
    <section id="before-after" className="bg-[#f8f9fa] py-[100px] max-md:py-[60px]">
      <div className="container-site">
        <div className="mb-12 text-center max-md:mb-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#ed6623] px-4 py-2 text-white shadow-[3px_3px_0_#000]">
            <Sparkles className="h-4 w-4" strokeWidth={3} />
            <span className="font-[family-name:var(--font-heading)] text-[14px] font-bold uppercase tracking-wider">
              Real Pittsburgh Jobs
            </span>
          </div>
          <h2
            className="m-0 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)]"
            style={{ fontSize: "clamp(36px, 4vw, 50px)", lineHeight: "1.2" }}
          >
            See The Difference
            <br />
            <span className="text-[#ed6623]">Drag To Reveal.</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-[560px] text-[#1d1d1d] font-[family-name:var(--font-body)]"
            style={{ fontSize: 16, lineHeight: "25px", fontWeight: 500 }}
          >
            Every cleanout ends the same way: a clean, empty space ready for whatever comes next.
            Drag the slider to see what we walked into and what we left behind.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3 max-md:mb-6">
          {pairs.map((p) => {
            const isActive = p.id === activeId;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveId(p.id)}
                className={`rounded-full border-2 border-black px-5 py-2 font-[family-name:var(--font-heading)] text-[14px] font-bold uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-[#ed6623] text-white shadow-[3px_3px_0_#000]"
                    : "bg-white text-[#1d1d1d] hover:bg-[#1d1d1d] hover:text-white"
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        <div className="mx-auto max-w-[960px]">
          <RevealSlider key={active.id} pair={active} />
          <p className="mt-4 text-center text-[13px] uppercase tracking-wider text-[#666] font-[family-name:var(--font-body)]">
            Drag the handle · Tap arrows · Swipe on mobile
          </p>
        </div>

        <div className="mt-12 text-center max-md:mt-8">
          <a href="#contact" className="btn btn-primary">
            <span>GET YOUR FREE ESTIMATE</span>
          </a>
        </div>
      </div>
    </section>
  );
}
