'use client';

import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import StarsCanvas from '@/components/StarsBackground';
import StarBackground from '@/components/StarsBackground';
import { About } from '@/model/about';
import { getAbout } from '@/services/about.service';
import { useEffect, useState } from 'react';

export default function Home() {
   return (
      <>
         <Hero />
         {/* {aboutData && <Hero flip={flip} aboutData={aboutData} />} */}
      </>
   );
}
