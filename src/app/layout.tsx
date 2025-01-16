'use client';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarBackground from '@/components/StarsBackground';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { SparklesCore } from '@/components/ui/sparkles';

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
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            <Navbar />
            <div className="w-full fixed -z-40   h-screen">
               <SparklesCore
                  id="tsparticlesfullpage"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
               />
            </div>

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
