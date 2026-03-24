import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import { getAllSlugs, getGuideBySlug } from '@/lib/guides';
import './page.css';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.subtitle,
    alternates: { canonical: `https://clear30.org/guides/${guide.id}` },
    openGraph: {
      title: `${guide.title} - Clear30`,
      description: guide.subtitle,
      url: `https://clear30.org/guides/${guide.id}`,
      images: [{ url: '/images/og-image.webp' }],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: `${guide.title} - Clear30`,
      description: guide.subtitle,
      images: ['/images/og-image.webp'],
    },
  };
}

export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  return (
    <div className="resource-wrapper">
      <header className="resource-header-bar">
        <div className="resource-header-content">
          <Link href="/" className="logo">
            <img src="/images/PNG App Logo.webp" alt="Clear30" className="logo-icon" />
            <span className="logo-text">Clear30</span>
          </Link>
          <Link href="/resources" className="back-link">
            &larr; Back to Resources
          </Link>
        </div>
      </header>

      <main className="resource-main">
        <article>
          <header className="resource-header">
            <h1 className="resource-title">{guide.title}</h1>
            {guide.subtitle && <p className="resource-subtitle">{guide.subtitle}</p>}
          </header>
          <div className="resource-content">
            {guide.sections.map((section, i) => (
              <section key={i} className="resource-section">
                <h2 className="resource-section-title">{section.title}</h2>
                <div
                  className="resource-section-body"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </section>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
