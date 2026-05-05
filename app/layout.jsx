import './styles/index.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from './context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '700'],
  preload: true,
});

export const metadata = {
  title: 'Deepanshu Singla | Full Stack Developer',
  description:
    'Portfolio of Deepanshu Singla — Full Stack Developer from Panchkula, India. Skilled in React, Next.js, Node.js, Spring Boot, and AI-powered web applications.',
  keywords: 'Deepanshu Singla, Full Stack Developer, React, Next.js, Node.js, Java, Spring Boot',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} data-theme="dark">
      <head>
        {/* Preconnect to external services */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for faster resolution */}
        <link rel="dns-prefetch" href="https://api.lanyard.rest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}



