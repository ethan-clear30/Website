'use client';

import { useState, useEffect, useCallback } from 'react';

const TABS = [
  'Set intention',
  'Track daily',
  'See progress',
  'Learn & reflect',
  'Get support',
  'Sustain progress',
];

const SLIDES = [
  { src: '/images/How_it_works__set_intention.webp', alt: 'Set intention' },
  { src: '/images/How_it_works__track_daily.webp', alt: 'Track daily' },
  { src: '/images/How_it_works__see_progress.webp', alt: 'See progress' },
  { src: '/images/How_it_works__learn_and_reflect.webp', alt: 'Learn and reflect' },
  { src: '/images/How_it_works__get_support.webp', alt: 'Get support' },
  { src: '/images/How_it_works__sustain_progress.webp', alt: 'Sustain progress' },
];

export default function HowItWorksCarousel() {
  const [current, setCurrent] = useState(0);

  const go = useCallback((n: number) => {
    setCurrent(Math.max(0, Math.min(n, SLIDES.length - 1)));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <>
      <div className="carousel-tabs">
        {TABS.map((label, i) => (
          <button
            key={i}
            className={`carousel-tab${i === current ? ' active' : ''}`}
            onClick={() => go(i)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="carousel-track">
        <div
          className="carousel-slides"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {SLIDES.map((slide, i) => (
            <div key={i} className="carousel-slide">
              <div className="slide-img-wrap">
                <img src={slide.src} alt={slide.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
