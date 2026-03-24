import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShareButton from './ShareButton';
import './page.css';

export const metadata = {
  title: 'For Musicians',
  description:
    'Clear30 for musicians — a simple way to reflect on your relationship with cannabis, in and out of the studio.',
  alternates: { canonical: 'https://clear30.org/for-musicians' },
  openGraph: {
    title: 'Clear30 - For Musicians',
    description:
      'Clear30 for musicians — a simple way to reflect on your relationship with cannabis, in and out of the studio.',
    url: 'https://clear30.org/for-musicians',
    images: [{ url: '/images/og-image.webp' }],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Clear30 - For Musicians',
    description:
      'Clear30 for musicians — a simple way to reflect on your relationship with cannabis, in and out of the studio.',
    images: ['/images/og-image.webp'],
  },
};

export default function ForMusiciansPage() {
  return (
    <div className="musicians-page">
      <Header />

      {/* Hero */}
      <section className="musicians-hero">
        <h1>Clear30 for Musicians</h1>
        <p className="subtitle">
          A simple way to reflect on your relationship with cannabis &mdash; in and out of the
          studio.
        </p>
      </section>

      {/* Section 1: Guide description + downloadable card */}
      <section className="musicians-section">
        <div className="musicians-container">
          <div className="two-col">
            <div className="col">
              <h2>Clear30 for Musicians</h2>
              <p>
                Clear30 is here to help musicians explore how cannabis fits into their daily lives.
                <br />
                <br />
                This short guide includes a printable calendar to easily track your break, offering
                clarity around your habits, creativity, and overall well-being.
                <br />
                <br />
                It&apos;s all about helping you feel your best, without any judgment or pressure.
              </p>
              <ShareButton />
            </div>
            <div className="col">
              <div className="card">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://cdn.prod.website-files.com/66ad08d3b8c70b65f11316e6/6807abf83d23569d11fecae4_Screenshot%202025-04-22%20at%2010.47.03%E2%80%AFAM.png"
                    alt="Clear30 for Musicians Guide preview"
                    className="pdf-image"
                    loading="lazy"
                  />
                </div>
              </div>
              <a
                href="https://clear30.org/files/MusiCares-Kit.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button"
              >
                Download the Clear30 for Musicians Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: App screenshots + QR code + CTA */}
      <section className="musicians-section">
        <div className="musicians-container">
          <div className="two-col reverse">
            <div className="col">
              <div className="card">
                <div className="duo-images">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://cdn.prod.website-files.com/66ad08d3b8c70b65f11316e6/67991fa4ebb59110faa71ba7_Simulator%20Screenshot%20-%20iPhone%2016%20-%202025-01-28%20at%2012.18.05-portrait.png"
                    alt="Clear30 app home screen"
                    className="duo-image"
                    loading="lazy"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://cdn.prod.website-files.com/66ad08d3b8c70b65f11316e6/673b8bc878a6eb19a45a7ce0_profile%20tab.png"
                    alt="Clear30 app profile tab"
                    className="duo-image smaller"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="download-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.prod.website-files.com/66ad08d3b8c70b65f11316e6/6807e85d09da3fb5d7f18971_msuicares.png"
                  alt="QR code to download Clear30"
                  className="qr-code"
                  loading="lazy"
                />
                <p>
                  Start your Clear30 for free!
                  <br />
                  <span className="desktop-hint">Scan this QR code on your iPhone.</span>
                </p>
                <a
                  href="https://clear30.org/referral/?code=free2musicares"
                  className="gradient-button mobile-download-link"
                >
                  Download now
                </a>
              </div>
            </div>
            <div className="col">
              <h2>Start your Clear30</h2>
              <p>
                <span className="gradient-text">Download Clear30 today</span> to start exploring how
                cannabis fits into your life, your creativity, and your overall wellbeing.
                <br />
                <br />
                We&apos;re offering{' '}
                <span className="gradient-text">100 free vouchers</span> to all musicians.
                <br />
                <br />
                Redeem yours to unlock Clear30 for free and take the first step toward a more
                intentional relationship with weed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
