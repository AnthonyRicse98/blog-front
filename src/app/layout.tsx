import Header from '@/components/layout/header/header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Footer from '@/components/layout/footer';
import { Analytics } from '@/components/analytics/analytics';
import { ServerThemeProvider } from '@wits/next-themes';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Anthony Ricse - Frontend Developer',
  description:
    "Bienvenido a mi Portafolio .Soy Anthony Ricse, soy Ingeniero de Software. Explora los proyectos que realizado en este portafolio!",
  keywords: [
    'Anthony Ricse',
    'Anthony Ricse',
    'Frontend Developer',
    'Web Development',
    'React',
    'Next.js',
    'Portfolio'
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en" className="dark">
        <body className={cn(inter.className, 'min-h-screen bg-background')}>
          <Header />
          {children}
          <Footer />
        </body>
        <Analytics />
      </html>
    </ServerThemeProvider>
  );
}
