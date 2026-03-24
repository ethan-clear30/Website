import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ComingSoonModal from './ComingSoonModal';
import './page.css';

export const metadata = {
  title: 'Partner with us',
  description:
    'Partner with Clear30 to bring evidence-based cannabis wellness tools to your campus, organization, or community.',
  alternates: { canonical: 'https://clear30.org/partner-with-us' },
  openGraph: {
    title: 'Clear30 - Partner with us',
    description:
      'Partner with Clear30 to bring evidence-based cannabis wellness tools to your campus, organization, or community.',
    url: 'https://clear30.org/partner-with-us',
    images: [{ url: '/images/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Clear30 - Partner with us',
    description:
      'Partner with Clear30 to bring evidence-based cannabis wellness tools to your campus, organization, or community.',
    images: ['/images/og-image.png'],
  },
};

export default function PartnerWithUsPage() {
  return (
    <>
      <div className="partner-gradient-wrapper">
        <div className="top-gradient-overlay" aria-hidden="true"></div>
        <div className="bottom-gradient-overlay" aria-hidden="true"></div>
        <div className="partner-content">
          <Header />

          {/* Hero */}
          <section className="partner-hero">
            <div className="partner-hero-content">
              <div className="partner-hero-left hero-animate">
                <h1 className="partner-hero-headline">
                  <span>The New Standard</span>
                  <span>For Cannabis</span>
                  <span>Support</span>
                </h1>
                <p className="partner-hero-body">
                  Clear30 provides evidence-based, confidential cannabis reduction programs that help
                  individuals reflect on their use and access support - at their own pace, at scale.
                </p>
                <Link href="/book-demo" className="partner-hero-btn">
                  Request a demo
                </Link>
              </div>
              <div className="partner-hero-right hero-animate-delay">
                <div className="partner-hero-image">
                  <img
                    src="/images/partner_with_us_hero.png"
                    alt="Clear30 - The New Standard for Cannabis Support"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Partner Cards */}
          <section className="partner-cards-section" data-scroll-reveal>
            <div className="partner-cards">
              <div className="partner-card">
                <h3>Universities</h3>
                <p className="partner-card-desc">
                  Evidence-based cannabis reduction support for students.
                </p>
                <Link href="/universities">Learn more</Link>
              </div>
              <div className="partner-card">
                <h3>Employers</h3>
                <p className="partner-card-desc">
                  Evidence-based cannabis reduction support for employees.
                </p>
                <ComingSoonModal />
              </div>
              <div className="partner-card">
                <h3>States</h3>
                <p className="partner-card-desc">
                  Evidence-based cannabis reduction support for public health initiatives.
                </p>
                <a href="#">Learn more</a>
              </div>
            </div>
          </section>

          {/* The Clear30 Approach */}
          <section className="approach-section" data-scroll-reveal>
            <div className="approach-content">
              <div className="approach-left">
                <h2 className="approach-headline">
                  <span>The Clear30</span>
                  <span>Approach</span>
                </h2>
                <div className="approach-points">
                  <p className="approach-point">
                    <strong>Evidence-based</strong> cannabis reduction programs grounded in clinical
                    and research expertise
                  </p>
                  <p className="approach-point">
                    <strong>Confidential, self-guided support</strong> built to fit different goals,
                    patterns, and levels of use
                  </p>
                  <p className="approach-point">
                    <strong>Brief check-ins</strong> that reveal patterns and adapt support over time
                  </p>
                  <p className="approach-point">
                    <strong>Guided tools</strong> that build insight and momentum - with clear next
                    steps when it matters
                  </p>
                  <p className="approach-point">
                    <strong>Aggregate reporting</strong> to support evaluation and population-level
                    understanding
                  </p>
                </div>
                <div className="approach-divider"></div>
              </div>
              <div className="approach-right">
                <img
                  src="/images/Partner_with_us_collage.png"
                  alt="Clear30 approach"
                  className="approach-collage-img"
                />
              </div>
            </div>
          </section>

          {/* See Clear30 in Action */}
          <section className="action-section" data-scroll-reveal>
            <div className="action-content">
              <h2 className="action-headline">See Clear30 in Action</h2>
              <p className="action-subtitle">
                How we&rsquo;re helping institutions tackle the cannabis crisis &mdash; in under two
                minutes.
              </p>
              <div className="action-video-wrap">
                <iframe
                  src="https://www.youtube.com/embed/cV3x-gPicuU"
                  title="Clear30 in Action"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>

          {/* Why Clear30? */}
          <section className="why-section" data-scroll-reveal>
            <div className="why-content">
              <h2 className="why-headline">Why Clear30?</h2>
              <div className="why-body">
                <div className="why-left">
                  <div className="why-mockup-box">
                    <div className="why-mockup-wrap">
                      <img
                        src="/images/partner_with_us_clear30mockup.png"
                        alt="Clear30 app mockup"
                        className="why-mockup-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="why-right">
                  <div className="why-item">
                    <h4>Credibility</h4>
                    <p>
                      Developed with guidance from leading researchers and clinicians in addiction
                      science, behavioral health, and public health.
                    </p>
                  </div>
                  <div className="why-item">
                    <h4>Engagement</h4>
                    <p>
                      Designed for real-world use, reaching people traditional outreach and referrals
                      often miss.
                    </p>
                  </div>
                  <div className="why-item">
                    <h4>Coverage</h4>
                    <p>
                      Flexible support across the full spectrum of use, from early reflection to more
                      serious challenges.
                    </p>
                  </div>
                  <div className="why-item">
                    <h4>Insight</h4>
                    <p>
                      Aggregate, de-identified reporting that helps organizations see trends, gaps,
                      and opportunities for earlier support.
                    </p>
                  </div>
                  <div className="why-item">
                    <h4>Outcomes</h4>
                    <p>
                      Outcomes equivalent to more intensive (and expensive) interventions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Engagement that lasts */}
          <section className="engagement-section" data-scroll-reveal>
            <div className="engagement-content">
              <h2 className="engagement-headline">Engagement that lasts</h2>
              <p className="engagement-subtitle">
                Real results from a university pilot partnership.
              </p>
              <div className="engagement-cards">
                <div className="engagement-card">
                  <div className="engagement-card-icon-wrap engagement-card-icon-wrap--gold">
                    <div className="engagement-card-icon-ring">
                      <div className="engagement-card-icon-inner">
                        <span className="engagement-card-icon">&#127942;</span>
                      </div>
                    </div>
                  </div>
                  <div className="engagement-card-metric">83%</div>
                  <div className="engagement-card-label">Achieved At Least One Goal</div>
                  <p className="engagement-card-desc">
                    Users set their own goals &mdash; and the vast majority hit them.
                  </p>
                </div>
                <div className="engagement-card">
                  <div className="engagement-card-icon-wrap engagement-card-icon-wrap--branded">
                    <div className="engagement-card-icon-ring">
                      <div className="engagement-card-icon-inner">
                        <img
                          src="/images/Partner_with_us_white_30.png"
                          alt=""
                          className="engagement-card-icon-img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="engagement-card-metric">81%</div>
                  <div className="engagement-card-label">Days Sober Across All Check-ins</div>
                  <p className="engagement-card-desc">
                    Users reported not using on 4 out of every 5 days tracked.
                  </p>
                </div>
                <div className="engagement-card">
                  <div className="engagement-card-icon-wrap engagement-card-icon-wrap--blue">
                    <div className="engagement-card-icon-ring">
                      <div className="engagement-card-icon-inner">
                        <span className="engagement-card-icon">&#9997;&#65039;</span>
                      </div>
                    </div>
                  </div>
                  <div className="engagement-card-metric">68</div>
                  <div className="engagement-card-label">average check-ins per user</div>
                  <p className="engagement-card-desc">
                    Users engaged consistently throughout the program &mdash; not just day one.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Scholarships */}
          <section className="scholarships-section" data-scroll-reveal>
            <div className="scholarships-inner">
              <h2 className="scholarships-headline">Scholarships</h2>
              <div className="scholarships-metric">1,600+</div>
              <p className="scholarships-desc">
                Over 1,600 scholarships granted in the last year to individuals who couldn&rsquo;t
                afford Clear30.
              </p>
            </div>
          </section>

          {/* CTA Card */}
          <section className="cta-card-section" data-scroll-reveal>
            <div className="cta-card-wrap">
              <div className="cta-card">
                <img
                  src="/images/Partner_with_us_bottom_imgae_mockup.png"
                  alt="Clear30 app on phone"
                  className="cta-card-image"
                />
                <div className="cta-card-content">
                  <h3 className="cta-card-header">Bring Clear30 to Your Organization</h3>
                  <p className="cta-card-text">
                    We&rsquo;re onboarding a limited number of partners for Fall 2026. Book a demo
                    to see the program, the data, and the pricing.
                  </p>
                  <Link href="/book-demo" className="cta-card-btn">
                    <span>Book a demo</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <ScrollReveal />
    </>
  );
}
