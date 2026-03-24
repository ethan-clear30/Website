import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clear30 - Redirect',
};

export default function RedirLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
