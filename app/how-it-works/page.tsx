import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import HowItWorksCarousel from './HowItWorksCarousel';
import './page.css';

export const metadata = {
  title: 'How it works',
  description: 'How Clear30 works.',
  alternates: { canonical: 'https://clear30.org/how-it-works' },
  openGraph: {
    title: 'Clear30 - How it works',
    description: 'How Clear30 works.',
    url: 'https://clear30.org/how-it-works',
    images: [{ url: '/images/og-image.webp' }],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Clear30 - How it works',
    description: 'How Clear30 works.',
    images: ['/images/og-image.webp'],
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <ScrollReveal />

      <div className="hero-gradient-wrapper">
        <Header />

        <section className="hero">
          <div className="hero-inner">
            <p className="hero-eyebrow">How Clear30 works</p>
            <h1 className="hero-title">Three steps to a clearer mind</h1>

            <div className="steps-row">
              <div className="step">
                <div className="step-num">
                  <img
                    src="/images/How_it_works_3.webp"
                    alt="Step 1"
                    className="step-num-img"
                  />
                </div>
                <h3 className="step-title">Set your intention</h3>
                <p className="step-desc">
                  Choose your goal: quit, cut back, or reset your relationship
                  with weed.
                </p>
              </div>

              <div className="step-arrow">
                <svg width="68" height="38" viewBox="0 0 68 38" fill="none">
                  <path
                    d="M4 30 Q34 4 62 18"
                    stroke="#68b8a8"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M54 12 L64 19 L53 24"
                    stroke="#68b8a8"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="step">
                <div className="step-num">
                  <img
                    src="/images/How_it_works_2.webp"
                    alt="Step 2"
                    className="step-num-img"
                  />
                </div>
                <h3 className="step-title">Build your plan</h3>
                <p className="step-desc">
                  Get a personalized path with daily check-ins, progress
                  tracking, and support tools.
                </p>
              </div>

              <div className="step-arrow">
                <svg width="68" height="38" viewBox="0 0 68 38" fill="none">
                  <path
                    d="M4 30 Q34 4 62 18"
                    stroke="#68b8a8"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M54 12 L64 19 L53 24"
                    stroke="#68b8a8"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="step">
                <div className="step-num">
                  <img
                    src="/images/How_it_works_1.webp"
                    alt="Step 3"
                    className="step-num-img"
                  />
                </div>
                <h3 className="step-title">Track &amp; grow</h3>
                <p className="step-desc">
                  Log daily, spot patterns, and build momentum one day at a
                  time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="divider"></div>

      <section className="carousel-section" data-scroll-reveal>
        <div className="carousel-inner">
          <HowItWorksCarousel />
        </div>
      </section>

      <Footer />
    </>
  );
}
