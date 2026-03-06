import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from './context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '700'],
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
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}



