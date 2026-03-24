'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import './page.css';

function UpArrow() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownArrow() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6V18M12 18L7 13M12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SchoolReferralContent() {
  const searchParams = useSearchParams();
  const [showPopup, setShowPopup] = useState(false);

  const schoolName = searchParams.get('school') || 'Your School';
  const students = searchParams.get('students') || (searchParams.get('school') ? `${searchParams.get('school')} Students` : 'Students');
  const email = searchParams.get('email') || 'school';

  return (
    <>
      {/* Popup Modal */}
      {showPopup && (
        <div className="sr-popup-overlay">
          <div className="sr-popup-card">
            <button className="sr-popup-close" onClick={() => setShowPopup(false)} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="sr-popup-step">
              <h2 className="sr-popup-heading">1. Download Clear30</h2>
              <p className="sr-popup-text">Right now we only have an iOS version, but Android is coming soon.</p>
              <a
                href="https://apps.apple.com/us/app/clear30/id6476418203"
                target="_blank"
                rel="noopener noreferrer"
                className="sr-gradient-btn"
              >
                Download
              </a>
            </div>
            <div className="sr-popup-step">
              <h2 className="sr-popup-heading">2. Sign Up With Email</h2>
              <p className="sr-popup-text">
                Sign up with your <span className="sr-gradient-text">{email}</span> email address.
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/school_referral_email_button.webp"
                alt="Email sign up button"
                className="sr-email-image"
              />
            </div>
          </div>
        </div>
      )}

      <div className="sr-wrapper">
        <Header />

        {/* Hero Section */}
        <section className="sr-hero" data-scroll-reveal>
          <div className="sr-hero-inner">
            <div className="sr-hero-phones">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/school_referral_content_tab.webp"
                alt="Clear30 content tab"
                className="sr-phone sr-phone--side"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/school_referral_home_tab.webp"
                alt="Clear30 home screen"
                className="sr-phone sr-phone--center"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/school_referral_profile_tab.webp"
                alt="Clear30 profile tab"
                className="sr-phone sr-phone--side"
              />
            </div>

            <div className="sr-hero-content">
              <h2 className="sr-hero-headline">
                <strong>{students}</strong>, Take Control of <strong>Your</strong> Weed Use with Clear30
              </h2>
              <p className="sr-hero-body">
                {schoolName} has partnered with Clear30 to give you{' '}
                <span className="sr-gradient-text">unlocked access</span> to the ultimate tool for improving your relationship with weed.
                <br /><br />
                Whether you&apos;re looking to take a break, use more mindfully, or track your smoking with friends,{' '}
                <span className="sr-gradient-text">Clear30 gives you the support you need to achieve your goals.</span>
                <br /><br />
                <span className="sr-gradient-text">Redeem your premium plan today</span> and start working toward what matters to you—your health, your focus, your future.
              </p>
              <button className="sr-gradient-btn" onClick={() => setShowPopup(true)}>
                Redeem Your Premium Plan
              </button>
            </div>

            <div className="sr-divider" />
          </div>
        </section>

        {/* Why Use Clear30 Section */}
        <section className="sr-why" data-scroll-reveal>
          <div className="sr-why-inner">
            <div className="sr-why-left">
              <h2 className="sr-section-heading">Why Use Clear30?</h2>
              <p className="sr-section-body">
                Taking a break from cannabis can help you feel your best
                <br /><br />
                Clear30 makes it easier to unlock these benefits with{' '}
                <span className="sr-gradient-text">tailored tools</span>,{' '}
                <span className="sr-gradient-text">community connection</span>, and{' '}
                <span className="sr-gradient-text">rewards</span> to keep you on track.
              </p>
            </div>
            <div className="sr-why-right">
              <div className="sr-emoji-row">
                <div className="sr-emoji-card">
                  <span className="sr-emoji">😴</span>
                  <div className="sr-emoji-info">
                    <div className="sr-arrow sr-arrow--up"><UpArrow /></div>
                    <p>Sleep Quality</p>
                  </div>
                </div>
                <div className="sr-emoji-card">
                  <span className="sr-emoji">🎯</span>
                  <div className="sr-emoji-info">
                    <div className="sr-arrow sr-arrow--up"><UpArrow /></div>
                    <p>Focus</p>
                  </div>
                </div>
              </div>
              <div className="sr-emoji-row">
                <div className="sr-emoji-card">
                  <span className="sr-emoji">😌</span>
                  <div className="sr-emoji-info">
                    <div className="sr-arrow sr-arrow--down"><DownArrow /></div>
                    <p>Anxiety</p>
                  </div>
                </div>
                <div className="sr-emoji-card">
                  <span className="sr-emoji">🗣️</span>
                  <div className="sr-emoji-info">
                    <div className="sr-arrow sr-arrow--down"><DownArrow /></div>
                    <p>Mental fog</p>
                  </div>
                </div>
              </div>
              <button className="sr-gradient-btn sr-mobile-only" onClick={() => setShowPopup(true)}>
                Start Your Clear30 Journey
              </button>
            </div>
          </div>
        </section>

        {/* Your Goals Section */}
        <section className="sr-goals" data-scroll-reveal>
          <div className="sr-goals-inner">
            <div className="sr-goals-cards">
              <div className="sr-goal-card sr-goal-card--up">
                <div className="sr-goal-item">
                  <p className="sr-goal-label">Program</p>
                  <p className="sr-goal-value">🗓️ Weed free 30 days</p>
                </div>
                <div className="sr-goal-item">
                  <p className="sr-goal-label">Goal</p>
                  <p className="sr-goal-value">🧘 Clarity</p>
                </div>
                <div className="sr-goal-item">
                  <p className="sr-goal-label">Triggers</p>
                  <p className="sr-goal-value">😶‍🌫️ My friends</p>
                </div>
                <div className="sr-goal-item">
                  <p className="sr-goal-label">Past use</p>
                  <p className="sr-goal-value">📈 Weed <strong>helped</strong> me</p>
                </div>
              </div>
              <div className="sr-goal-card sr-goal-card--down">
                <div className="sr-goal-item">
                  <p className="sr-goal-label">Program</p>
                  <p className="sr-goal-value">✅ Moderate and track use</p>
                </div>
                <div className="sr-goal-item">
                  <p className="sr-goal-label">Concerns</p>
                  <p className="sr-goal-value">🫂 Want to keep my friends</p>
                </div>
                <div className="sr-goal-item">
                  <p className="sr-goal-label">Support</p>
                  <p className="sr-goal-value">🎨 I want to maintain my creativity</p>
                </div>
                <div className="sr-goal-item">
                  <p className="sr-goal-label">Why</p>
                  <p className="sr-goal-value">🌫️ I feel like I&apos;m stuck in a mental fog</p>
                </div>
              </div>
              <button className="sr-gradient-btn sr-mobile-only" onClick={() => setShowPopup(true)}>
                Start Your Clear30 Journey
              </button>
            </div>
            <div className="sr-goals-text">
              <h2 className="sr-section-heading">Your Goals,<br />Your Program</h2>
              <p className="sr-section-body">
                Everyone&apos;s relationship with cannabis is different, and Clear30 is designed to meet you where you are.
                <br /><br />
                Want to <span className="sr-gradient-text">moderate</span> your use? We&apos;ve got you covered.
                <br /><br />
                Thinking about taking a break or <span className="sr-gradient-text">cutting back</span>? Start here.
                <br /><br />
                Ready to <span className="sr-gradient-text">quit entirely</span>? Clear30 can help you make it happen.
                <br /><br />
                With Clear30, you&apos;ll get a <span className="sr-gradient-text">personalized plan</span> tailored to your goals, whether it&apos;s managing cravings, tracking progress, or building new habits.
              </p>
            </div>
          </div>
        </section>

        {/* Real Results Section */}
        <section className="sr-results" data-scroll-reveal>
          <div className="sr-results-inner">
            <div className="sr-results-left">
              <h2 className="sr-section-heading">Real Results from Clear30 Users</h2>
              <p className="sr-section-body">Clear30 users report life-changing benefits from taking control of their cannabis use</p>
            </div>
            <div className="sr-results-right">
              <div className="sr-emoji-row">
                <div className="sr-emoji-card">
                  <span className="sr-emoji">🫁</span>
                  <div className="sr-emoji-info">
                    <div className="sr-arrow sr-arrow--down"><DownArrow /></div>
                    <p>70% Average decrease in smoking</p>
                  </div>
                </div>
                <div className="sr-emoji-card">
                  <span className="sr-emoji">💯</span>
                  <div className="sr-emoji-info">
                    <div className="sr-arrow sr-arrow--down"><DownArrow /></div>
                    <p>90% Decrease for committed users</p>
                  </div>
                </div>
              </div>
              <div className="sr-emoji-row">
                <div className="sr-emoji-card">
                  <span className="sr-emoji">🌱</span>
                  <div className="sr-emoji-info">
                    <div className="sr-arrow sr-arrow--up"><UpArrow /></div>
                    <p>96% Feel they&apos;ve experienced personal growth</p>
                  </div>
                </div>
                <div className="sr-emoji-card">
                  <span className="sr-emoji">🫂</span>
                  <div className="sr-emoji-info">
                    <div className="sr-arrow sr-arrow--up"><UpArrow /></div>
                    <p>93% Improved their relationship with cannabis</p>
                  </div>
                </div>
              </div>
              <div className="sr-emoji-row">
                <div className="sr-emoji-card">
                  <span className="sr-emoji">😌</span>
                  <div className="sr-emoji-info">
                    <div className="sr-arrow sr-arrow--up"><UpArrow /></div>
                    <p>96% Report better mental health</p>
                  </div>
                </div>
                <div className="sr-emoji-card">
                  <span className="sr-emoji">🧠</span>
                  <div className="sr-emoji-info">
                    <div className="sr-arrow sr-arrow--up"><UpArrow /></div>
                    <p>96% Noticed improved mental clarity</p>
                  </div>
                </div>
              </div>
              <button className="sr-gradient-btn sr-mobile-only" onClick={() => setShowPopup(true)}>
                Start Your Clear30 Journey
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ScrollReveal />
    </>
  );
}

export default function SchoolReferralPage() {
  return (
    <Suspense
      fallback={
        <div style={{ minHeight: '100vh', background: '#ffffff' }}>
          <Header />
        </div>
      }
    >
      <SchoolReferralContent />
    </Suspense>
  );
}
