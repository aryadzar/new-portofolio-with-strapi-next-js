'use client';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarBackground from '@/components/StarsBackground';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const geistSans = localFont({
   src: './fonts/GeistVF.woff',
   variable: '--font-geist-sans',
   weight: '100 900',
});
const geistMono = localFont({
   src: './fonts/GeistMonoVF.woff',
   variable: '--font-geist-mono',
   weight: '100 900',
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <title>Portofolio Arya Dzaky</title>
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            <StarBackground />
            <Navbar />

            {children}
            <ProgressBar
               height="2px"
               color="#FFFFFF"
               options={{ showSpinner: false }}
               shallowRouting
            />
            <Footer />
         </body>
      </html>
   );
}
