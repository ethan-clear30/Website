import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import UniversityLogos from './UniversityLogos';
import './page.css';

export const metadata = {
  title: 'Universities',
  description:
    'See how universities use Clear30 to support student wellness and reduce cannabis-related harm on campus.',
  alternates: { canonical: 'https://clear30.org/universities' },
  openGraph: {
    title: 'Clear30 - Universities',
    description:
      'See how universities use Clear30 to support student wellness and reduce cannabis-related harm on campus.',
    url: 'https://clear30.org/universities',
    images: [{ url: '/images/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Clear30 - Universities',
    description:
      'See how universities use Clear30 to support student wellness and reduce cannabis-related harm on campus.',
    images: ['/images/og-image.png'],
  },
};

export default function UniversitiesPage() {
  return (
    <>
      <div className="universities-wrapper">
        <div className="top-gradient-overlay" aria-hidden="true" />
        <div className="bottom-wave-section" aria-hidden="true">
          <svg
            className="bottom-wave-svg"
            viewBox="0 0 1440 280"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.95 }} />
                <stop offset="30%" style={{ stopColor: '#e8f5e4', stopOpacity: 0.6 }} />
                <stop offset="60%" style={{ stopColor: '#d6efe8', stopOpacity: 0.5 }} />
                <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0.9 }} />
              </linearGradient>
            </defs>
            <path
              fill="url(#waveGrad)"
              d="M0,140 Q360,80 720,140 T1440,140 L1440,280 L0,280 Z"
            />
          </svg>
        </div>

        <div className="universities-content">
          <Header />

          <section className="universities-hero">
            <div className="universities-hero-content">
              <div className="universities-hero-left">
                <h1 className="universities-hero-headline">
                  <span>Bring Clear30 to</span>
                  <span>Your Campus</span>
                </h1>
                <p className="universities-hero-body">
                  Support every student struggling with cannabis — not just the
                  ones who ask for help.
                </p>
                <a href="/book-demo" className="universities-hero-btn">
                  Request a demo
                </a>
                <p className="universities-hero-stat">
                  *90% average reduction in cannabis use among committed users.
                </p>
              </div>

              <UniversityLogos />
            </div>
          </section>
        </div>

        {/* Cannabis Cards Section */}
        <section className="cannabis-section" data-scroll-reveal>
          <div className="cannabis-inner">
            <h2 className="cannabis-title">
              Cannabis Use has Increased Dramatically&hellip;
            </h2>
            <p className="cannabis-subtitle">
              Today&apos;s products are stronger, daily use is more common, and most
              people still don&apos;t seek support.
            </p>
            <div className="cards-grid">
              <div className="card" data-orb="employers">
                <div className="card-orb">
                  <div className="orb-ring orb-ring--3" />
                  <div className="orb-ring orb-ring--2" />
                  <div className="orb-ring orb-ring--1" />
                </div>
                <h3 className="card-title">Employers</h3>
                <p className="card-desc">
                  Increased cannabis use in employees is associated with higher
                  absenteeism and presenteeism (on-the-job impairment), higher
                  rates of mental health concerns and workplace accidents, rising
                  mental health claims, and lower overall productivity.
                </p>
              </div>

              <div className="card" data-orb="insurers">
                <div className="card-orb">
                  <div className="orb-ring orb-ring--3" />
                  <div className="orb-ring orb-ring--2" />
                  <div className="orb-ring orb-ring--1" />
                </div>
                <h3 className="card-title">Insurers &amp; Health Systems</h3>
                <p className="card-desc">
                  Regular cannabis use is associated with{' '}
                  <strong>increased</strong> healthcare utilization and{' '}
                  <strong>long-term</strong> costs,{' '}
                  <strong>greater</strong> complexity from co-occurring mental
                  health conditions, and <strong>added strain</strong> on EAP and
                  behavioral health resources.
                </p>
              </div>

              <div className="card" data-orb="colleges">
                <div className="card-orb">
                  <div className="orb-ring orb-ring--3" />
                  <div className="orb-ring orb-ring--2" />
                  <div className="orb-ring orb-ring--1" />
                </div>
                <h3 className="card-title">Colleges &amp; Universities</h3>
                <p className="card-desc">
                  Higher-risk cannabis use among students is associated with lower
                  academic performance, increased risk of academic withdrawal,
                  greater strain on campus counseling and student health services,
                  higher mental health burden, and more disciplinary issues.
                </p>
              </div>

              <div className="card" data-orb="states">
                <div className="card-orb">
                  <div className="orb-ring orb-ring--3" />
                  <div className="orb-ring orb-ring--2" />
                  <div className="orb-ring orb-ring--1" />
                </div>
                <h3 className="card-title">States &amp; Public Health</h3>
                <p className="card-desc">
                  At a population level, regular cannabis use is associated with
                  rising Cannabis Use Disorder burden, increased pressure on
                  addiction and mental health service budgets, and persistent
                  access gaps for proven, confidential support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Card Section */}
        <section className="stats-section" data-scroll-reveal>
          <div className="stats-card">
            <div className="stats-column">
              <div className="stats-number stats-number--green">3x</div>
              <p className="stats-desc">
                Increase in the amount of{' '}
                <strong>THC in cannabis flower</strong> from 1995 to 2014.
              </p>
            </div>
            <div className="stats-column">
              <div className="stats-number stats-number--orange">9.6%</div>
              <p className="stats-desc">
                of past-year cannabis users{' '}
                <strong>received substance use treatment</strong>, despite the
                significant consequences of daily use, similar to alcohol.
              </p>
            </div>
            <div className="stats-column">
              <div className="stats-number stats-number--green">20m+</div>
              <p className="stats-desc">
                Americans have <strong>Cannabis Use Disorder</strong>, with 17
                million using daily and growing fast versus 14 million daily
                alcohol users.
              </p>
            </div>
          </div>
        </section>

        {/* The Clear30 Approach Section */}
        <section className="approach-section" data-scroll-reveal>
          <div className="approach-inner">
            <div className="approach-content">
              <h2 className="approach-heading">The Clear30 Approach</h2>
              <ul className="approach-list">
                <li>
                  <strong>Evidence-based</strong> cannabis reduction programs
                  grounded in clinical and research expertise
                </li>
                <li>
                  Confidential, self-guided <strong>support</strong> built to fit
                  different goals, patterns, and levels of use
                </li>
                <li>
                  Brief <strong>check-ins</strong> that reveal patterns and adapt
                  support over time
                </li>
                <li>
                  Guided tools that build insight and momentum — with{' '}
                  <strong>clear next steps</strong> when it matters
                </li>
                <li>
                  Aggregate <strong>reporting</strong> to support evaluation and
                  population-level understanding
                </li>
              </ul>
              <a href="/book-demo" className="approach-cta">
                Contact our team
              </a>
            </div>
            <div className="approach-mockup">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Universities-Iphones_mockup.png"
                alt="Clear30 app on phones"
                className="approach-mockup-img"
              />
            </div>
          </div>
        </section>

        {/* How the partnership works Section */}
        <section className="partnership-section" data-scroll-reveal>
          <div className="partnership-inner">
            <h2 className="partnership-heading">How the partnership works</h2>
            <p className="partnership-subtitle">
              From setup to outcomes, we handle it all.
            </p>
            <div className="partnership-cards">
              <div className="partnership-card">
                <div className="partnership-card-num">1</div>
                <div className="partnership-card-content">
                  <h3>License &amp; Customize</h3>
                  <p>
                    Give every student free access to Clear30, customized with
                    your school&apos;s resources and branding.
                  </p>
                </div>
              </div>
              <div className="partnership-card">
                <div className="partnership-card-num">2</div>
                <div className="partnership-card-content">
                  <h3>Distribute</h3>
                  <p>
                    Launch with pre-built distribution kits designed by the
                    Clear30 team specifically for your university.
                  </p>
                </div>
              </div>
              <div className="partnership-card">
                <div className="partnership-card-num">3</div>
                <div className="partnership-card-content">
                  <h3>Outcome Reporting</h3>
                  <p>
                    See how your students are engaging and improving. Visualize
                    outcomes across your campus population.
                  </p>
                </div>
              </div>
            </div>
            <a href="/book-demo" className="partnership-cta">
              Request a demo
            </a>
          </div>
        </section>

        {/* Explore Resources Section */}
        <section className="resources-section" data-scroll-reveal>
          <div className="resources-inner">
            <h2 className="resources-heading">
              Explore free resources and more that we offer!
            </h2>
            <a href="/resources" className="resources-cta">
              Click here
            </a>
          </div>
        </section>
      </div>

      <Footer />
      <ScrollReveal />
    </>
  );
}
