import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        style={{
          maxWidth: 600,
          margin: '0 auto',
          padding: '120px 24px',
          textAlign: 'center',
          fontFamily: "'Lexend', sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontWeight: 700,
            background: 'linear-gradient(90deg, #80C97A 0%, #5BB4A9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 16,
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: '#1a1a1a',
            marginBottom: 12,
          }}
        >
          Page not found
        </h2>
        <p
          style={{
            fontSize: 17,
            color: '#4a4a4a',
            lineHeight: 1.6,
            marginBottom: 32,
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #80C97A 0%, #5BB4A9 100%)',
            color: '#FFFFFF',
            fontFamily: "'Lexend', sans-serif",
            fontSize: 16,
            fontWeight: 600,
            padding: '14px 32px',
            borderRadius: 9999,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(91, 180, 169, 0.3)',
          }}
        >
          Go to homepage
        </Link>
      </main>
      <Footer />
    </>
  );
}
