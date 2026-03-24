'use client';

import { useEffect, useRef } from 'react';

interface LogoData {
  src: string;
  alt: string;
  className: string;
  path: number;
}

const logos: LogoData[] = [
  // PATH 1 (outer arc) — 5 circles
  { src: '/images/universities/University_Amherst_college.webp', alt: 'Amherst', className: 'university-logo university-logo--grinnell', path: 1 },
  { src: '/images/universities/University_Dartmouth.webp', alt: 'Dartmouth', className: 'university-logo university-logo--dartmouth', path: 1 },
  { src: '/images/universities/University_Michigan.webp', alt: 'Michigan', className: 'university-logo university-logo--m', path: 1 },
  { src: '/images/universities/University_Vassar.webp', alt: 'Vassar', className: 'university-logo university-logo--grinnell', path: 1 },
  { src: '/images/universities/University_Massart.webp', alt: 'MassArt', className: 'university-logo university-logo--detroit', path: 1 },
  // PATH 2 (inner arc) — 4 circles
  { src: '/images/universities/University_Harvard.webp', alt: 'Harvard', className: 'university-logo university-logo--harvard', path: 2 },
  { src: '/images/universities/University_JMU.webp', alt: 'JMU', className: 'university-logo university-logo--black', path: 2 },
  { src: '/images/universities/Universty_EIU.webp', alt: 'EIU', className: 'university-logo university-logo--black', path: 2 },
  { src: '/images/universities/University_NIU.webp', alt: 'NIU', className: 'university-logo university-logo--black', path: 2 },
];

const LOOP_MS = 28000;
const FADE_IN = 0.06;
const FADE_OUT = 0.1;
const MIN_GAP_P1 = 165;
const MIN_GAP_P2 = 185;
const LANE_GAP = 200;

interface Point { x: number; y: number; }
interface Spline { raw: Point[]; len: number[]; total: number; }

const SPINE: Point[] = [
  { x: 760, y: 80 },
  { x: 620, y: 110 },
  { x: 480, y: 180 },
  { x: 350, y: 280 },
  { x: 230, y: 390 },
  { x: 130, y: 500 },
  { x: 60, y: 610 },
];

function offsetSpine(pts: Point[], d: number): Point[] {
  return pts.map((p, i) => {
    const prev = pts[Math.max(0, i - 1)];
    const next = pts[Math.min(pts.length - 1, i + 1)];
    const tx = next.x - prev.x;
    const ty = next.y - prev.y;
    const len = Math.sqrt(tx * tx + ty * ty) || 1;
    const nx = ty / len;
    const ny = -tx / len;
    return { x: p.x + nx * d, y: p.y + ny * d };
  });
}

function crPoint(p0: Point, p1: Point, p2: Point, p3: Point, t: number): Point {
  const t2 = t * t, t3 = t2 * t;
  return {
    x: 0.5 * (2 * p1.x + (-p0.x + p2.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
    y: 0.5 * (2 * p1.y + (-p0.y + p2.y) * t + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3),
  };
}

function buildSpline(pts: Point[], totalSamples = 800): Spline {
  const e = [pts[0], ...pts, pts[pts.length - 1]];
  const raw: Point[] = [];
  const segs = pts.length - 1;
  for (let s = 0; s < segs; s++) {
    const n = Math.ceil(totalSamples / segs);
    for (let k = 0; k < n; k++) {
      raw.push(crPoint(e[s], e[s + 1], e[s + 2], e[s + 3], k / n));
    }
  }
  raw.push(pts[pts.length - 1]);
  const len = [0];
  for (let i = 1; i < raw.length; i++) {
    const dx = raw[i].x - raw[i - 1].x;
    const dy = raw[i].y - raw[i - 1].y;
    len.push(len[i - 1] + Math.sqrt(dx * dx + dy * dy));
  }
  return { raw, len, total: len[len.length - 1] };
}

function splineAt(sp: Spline, t: number): Point {
  const target = t * sp.total;
  let lo = 0, hi = sp.len.length - 1;
  while (lo < hi - 1) {
    const mid = (lo + hi) >> 1;
    if (sp.len[mid] < target) lo = mid; else hi = mid;
  }
  const frac = sp.len[hi] - sp.len[lo] > 0 ? (target - sp.len[lo]) / (sp.len[hi] - sp.len[lo]) : 0;
  return {
    x: sp.raw[lo].x + (sp.raw[hi].x - sp.raw[lo].x) * frac,
    y: sp.raw[lo].y + (sp.raw[hi].y - sp.raw[lo].y) * frac,
  };
}

const PATH1_PTS = SPINE;
const PATH2_PTS = offsetSpine(SPINE, LANE_GAP);
const SP1 = buildSpline(PATH1_PTS);
const SP2 = buildSpline(PATH2_PTS);

function opacityFwd(t: number) {
  if (t < FADE_IN) return t / FADE_IN;
  if (t > 1 - FADE_OUT) return Math.max(0, (1 - t) / FADE_OUT);
  return 1;
}

function opacityRev(t: number) {
  const r = 1 - t;
  if (r < FADE_IN) return r / FADE_IN;
  if (r > 1 - FADE_OUT) return Math.max(0, (1 - r) / FADE_OUT);
  return 1;
}

function place(el: HTMLElement, sp: Spline, t: number, reverse: boolean) {
  t = ((t % 1) + 1) % 1;
  const tLookup = reverse ? 1 - t : t;
  const pt = splineAt(sp, tLookup);
  el.style.left = pt.x + 'px';
  el.style.top = pt.y + 'px';
  el.style.opacity = String(reverse ? opacityRev(t) : opacityFwd(t));
}

function placeLaneStatic(els: HTMLElement[], sp: Spline, minGapPx: number, reverse: boolean, startOffset: number) {
  const minStep = minGapPx / sp.total;
  const maxVisible = Math.max(1, Math.floor(1 / minStep));
  if (els.length <= maxVisible) {
    const evenStep = 1 / els.length;
    els.forEach((el, i) => place(el, sp, startOffset + i * evenStep, reverse));
    return;
  }
  const slotStep = 1 / maxVisible;
  const beltLength = slotStep * els.length;
  els.forEach((el, i) => {
    let pos = 0 - i * slotStep;
    pos = pos % beltLength;
    if (pos < 0) pos += beltLength;
    if (pos < 1) {
      place(el, sp, pos + startOffset, reverse);
    } else {
      el.style.opacity = '0';
    }
  });
}

function placeLaneStaticUniform(els: HTMLElement[], sp: Spline, minGapPx: number, reverse: boolean, startOffset: number) {
  const evenStep = 1 / els.length;
  const minStep = minGapPx / sp.total;
  const step = Math.max(evenStep, minStep);
  els.forEach((el, i) => {
    place(el, sp, startOffset + i * step, reverse);
  });
}

function placeLaneAnimated(els: HTMLElement[], sp: Spline, minGapPx: number, reverse: boolean, ts: number, startOffset: number) {
  const minStep = minGapPx / sp.total;
  const maxVisible = Math.max(1, Math.floor(1 / minStep));
  if (els.length <= maxVisible) {
    const prog = (ts % LOOP_MS) / LOOP_MS;
    const evenStep = 1 / els.length;
    els.forEach((el, i) => place(el, sp, prog + startOffset + i * evenStep, reverse));
    return;
  }
  const slotStep = 1 / maxVisible;
  const beltLength = slotStep * els.length;
  const prog = (ts % LOOP_MS) / LOOP_MS;
  const head = prog * beltLength;
  els.forEach((el, i) => {
    let pos = head - i * slotStep;
    pos = pos % beltLength;
    if (pos < 0) pos += beltLength;
    if (pos < 1) {
      place(el, sp, pos + startOffset, reverse);
    } else {
      el.style.opacity = '0';
    }
  });
}

export default function UniversityLogos() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const p1Els = Array.from(container.querySelectorAll<HTMLElement>('[data-path="1"]'));
    const p2Els = Array.from(container.querySelectorAll<HTMLElement>('[data-path="2"]'));

    function placeStatic() {
      placeLaneStatic(p1Els, SP1, MIN_GAP_P1, false, 0);
      placeLaneStaticUniform(p2Els, SP2, MIN_GAP_P2, true, 0.1);
    }

    let rafId: number;
    function tick(ts: number) {
      if (window.innerWidth < 1024) {
        placeStatic();
        rafId = requestAnimationFrame(tick);
        return;
      }
      const prog = (ts % LOOP_MS) / LOOP_MS;
      placeLaneAnimated(p1Els, SP1, MIN_GAP_P1, false, ts, 0);
      const p2Step = Math.max(1 / p2Els.length, MIN_GAP_P2 / SP2.total);
      p2Els.forEach((el, i) => place(el, SP2, prog + 0.1 + i * p2Step, true));
      rafId = requestAnimationFrame(tick);
    }

    placeStatic();
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="universities-logos" id="universities-logos" ref={containerRef}>
      {logos.map((logo, i) => (
        <div key={i} className={logo.className} data-path={String(logo.path)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.src} alt={logo.alt} />
        </div>
      ))}
    </div>
  );
}
