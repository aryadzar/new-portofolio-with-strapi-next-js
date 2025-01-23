'use client';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarBackground from '@/components/StarsBackground';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { SparklesCore } from '@/components/ui/sparkles';
import { GoogleTagManager } from '@next/third-parties/google'
import { Toaster } from 'react-hot-toast';

// const geistSans = localFont({
//    src: './fonts/GeistVF.woff',
//    variable: '--font-geist-sans',
//    weight: '100 900',
// });
// const geistMono = localFont({
//    src: './fonts/GeistMonoVF.woff',
//    variable: '--font-geist-mono',
//    weight: '100 900',
// });

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
      <GoogleTagManager gtmId="G-G0CJPYCKWQ" />
      <body
            className={` antialiased`}
         >            
            <Toaster position="top-right" toastOptions={{
               style: {
                  background: 'linear-gradient(to right, #6429B6, #2C1250)',
                  color: '#ffffff',
                  padding: '10px',
                  borderRadius: '8px',
               },
            }}
            reverseOrder={false} />
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
                           <ProgressBar
               height="2px"
               color="#FFFFFF"
               options={{ showSpinner: false }}
               shallowRouting
            />
            </div>
            {children}
            <Footer />
         </body>
         
      </html>
   );
}
