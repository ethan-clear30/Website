import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clear30 - Embed',
  openGraph: {
    title: 'Clear30 - Embed',
  },
  twitter: {
    title: 'Clear30 - Embed',
  },
};

export default function ExternalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
