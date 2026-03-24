import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ResourcesClient from './ResourcesClient';
import { getResourceListings } from '@/lib/guides';
import './page.css';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Free tools, guides, and resources for campus wellness teams and individuals taking a 30-day cannabis break with Clear30.',
  alternates: { canonical: 'https://clear30.org/resources' },
  openGraph: {
    title: 'Clear30 - Resources',
    description:
      'Free tools, guides, and resources for campus wellness teams and individuals taking a 30-day cannabis break with Clear30.',
    url: 'https://clear30.org/resources',
    images: [{ url: '/images/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Clear30 - Resources',
    description:
      'Free tools, guides, and resources for campus wellness teams and individuals taking a 30-day cannabis break with Clear30.',
    images: ['/images/og-image.png'],
  },
};

export default function ResourcesPage() {
  const resources = getResourceListings();

  return (
    <div className="resources-wrapper">
      <div className="resources-top-gradient-overlay" />
      <div className="resources-bottom-gradient-overlay" />
      <div className="resources-content">
        <Header />
        <ScrollReveal />

        <section className="resources-hero">
          <div className="resources-hero-text">
            <h1 className="resources-hero-headline">
              <span className="resources-hero-line1">Free Tools for Campus</span>
              <span className="resources-hero-line2">Wellness Teams</span>
            </h1>
            <h2 className="resources-hero-subheading">Campus Cannabis Support Kit.</h2>
            <p className="resources-hero-body">
              Clinically authored, ready-to-deploy resources to help you support students struggling with cannabis.
            </p>
            <a href="#" className="resources-hero-cta">Download the Kit</a>
          </div>
          <div className="resources-hero-image">
            <div className="resources-hero-image-box">
              <img src="/images/Cannabis_support_kit.png" alt="Campus Cannabis Support Kit" />
            </div>
          </div>
        </section>

        <ResourcesClient resources={resources} />
      </div>
      <Footer />
    </div>
  );
}
