import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import BackLink from './BackLink';
import './page.css';

export const metadata = {
  title: 'Book a Demo',
  description:
    'Schedule a demo to see how Clear30 can support cannabis wellness on your campus or in your organization.',
  alternates: { canonical: 'https://clear30.org/book-demo' },
  openGraph: {
    title: 'Clear30 - Book a Demo',
    description:
      'Schedule a demo to see how Clear30 can support cannabis wellness on your campus or in your organization.',
    url: 'https://clear30.org/book-demo',
    images: [{ url: '/images/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Clear30 - Book a Demo',
    description:
      'Schedule a demo to see how Clear30 can support cannabis wellness on your campus or in your organization.',
    images: ['/images/og-image.png'],
  },
};

export default function BookDemoPage() {
  return (
    <div className="book-demo-page-wrapper">
      <Header />
      <ScrollReveal />

      <section className="calendly-section">
        <BackLink />
        <h1 className="calendly-heading">Book a Demo</h1>
        <div className="calendly-inner">
          <iframe
            src="https://calendly.com/julian-clear30/30min"
            title="Schedule a demo with Clear30"
          />
        </div>
        <p className="calendly-email-link">
          Prefer to email?{' '}
          <a href="mailto:support@clear30.org?subject=Demo%20Request">
            Contact us at support@clear30.org
          </a>
        </p>
      </section>

      <Footer />
    </div>
  );
}
