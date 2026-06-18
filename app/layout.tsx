import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IronPath Coaching | Personal Training & Online Coaching — Marcus Zhao',
  description:
    'Transform your body and your life with evidence-based personal training. 1-on-1 coaching, online programs, and nutrition guidance from certified coach Marcus Zhao. Based in Shanghai.',
  metadataBase: new URL('https://ironpath-coaching.vercel.app'),
  openGraph: {
    title: 'IronPath Coaching | Transform Your Body, Transform Your Life',
    description:
      'Evidence-based personal training by Marcus Zhao. 200+ clients transformed. Book a free consultation.',
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
