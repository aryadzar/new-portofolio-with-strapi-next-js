// 'use client';

// import { getAbout } from '@/services/about.service';
// import { media } from '@/utils/media';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FlipWords } from './ui/flip-words';
// import { useEffect } from 'react';

// const Hero = async () => {
//    const { data } = await getAbout();
//    const flip = ['Fullstack', 'Backend'];

//    return (
//       <div className="flex items-center container mx-auto justify-center min-h-screen  text-white">
//          {/* Kontainer Grid */}
//          <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-6 md:grid-cols-2  md:px-12">
//             {/* Bagian Gambar */}
//             <div className="relative flex justify-center  md:px-20">
//                <div className="circlePosition z-1 absolute left-[50%] top-[50%] h-[200px] w-[100px] translate-x-[-50%] translate-y-[-50%] rounded-[200%] bg-[#6517be] blur-[90px]"></div>

//                <Image
//                   src={media(data.data.foto_profile.url)} // Ganti dengan path foto Anda
//                   alt="Profile"
//                   width={300}
//                   height={300}
//                   className="relative h-48 w-48 md:h-64 md:w-64"
//                />
//             </div>

//             {/* Bagian Tulisan */}
//             <div className="relative justify-center space-y-6 text-center md:text-left">
//                {/* Glow Background */}
//                <div className=" -z-40 fixed left-[50%] top-[50%] h-[200px] w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-[100%] bg-[#6517be] blur-[90px]"></div>

//                <h1 className="relative text-3xl font-bold text-purple-300 md:text-5xl">
//                   {/* <FlipWords
//                      words={flip}
//                      className=" text-purple-300"
//                      duration={1000}
//                   />{' '} */}
//                   <span className=" text-white">Backend</span> Developer
//                </h1>
//                <p className="relative leading-relaxed text-gray-300">
//                   Im Muhammad Arya Dzaky Arenanto
//                </p>
//                <p className="relative leading-relaxed text-gray-300">
//                   {data.data.tentang_saya_singkat}
//                </p>
//                <Link
//                   href={media(data.data.cv.url)}
//                   target="_blank"
//                   className="relative inline-block items-center rounded-lg bg-gradient-to-tr from-[#2C1250] to-[#6429B6] px-6 py-3 text-white shadow-md"
//                >
//                   Download CV
//                </Link>
//                <div className="flex justify-center gap-4 mt-8 relative">
//                   {/* <img src="/icons/figma.svg" alt="Figma" className="w-8 h-8" />
//                   <img src="/icons/react.svg" alt="React" className="w-8 h-8" />
//                   <img
//                      src="/icons/nodejs.svg"
//                      alt="Node.js"
//                      className="w-8 h-8"
//                   />
//                   <img
//                      src="/icons/javascript.svg"
//                      alt="JavaScript"
//                      className="w-8 h-8"
//                   />
//                   <img
//                      src="/icons/nextjs.svg"
//                      alt="Next.js"
//                      className="w-8 h-8"
//                   />
//                   <img
//                      src="/icons/nextjs.svg"
//                      alt="Next.js"
//                      className="w-8 h-8"
//                   />
//                   <img
//                      src="/icons/nextjs.svg"
//                      alt="Next.js"
//                      className="w-8 h-8"
//                   /> */}
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default Hero;
'use client';

import { useState, useEffect } from 'react';
import { getAbout } from '@/services/about.service';
import { media } from '@/utils/media';
import Image from 'next/image';
import Link from 'next/link';
import { About } from '@/model/about';

const Hero = () => {
  const [aboutData, setAboutData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const { data } = await getAbout();
        setAboutData(data);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return       (<div className="flex items-center container mx-auto justify-center min-h-screen text-white">
    {/* Kontainer Grid */}
    <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:px-12">
       {/* Bagian Gambar */}
       <div className="relative flex justify-center md:px-20">
          <div className="circlePosition z-1 absolute left-[50%] top-[50%] h-[200px] w-[100px] translate-x-[-50%] translate-y-[-50%] rounded-[200%] bg-[#6517be] blur-[90px]"></div>
          <div className="relative h-48 w-48 md:h-64 md:w-64 bg-gray-300 rounded-full dark:bg-gray-700 animate-pulse"></div>
       </div>

       {/* Bagian Tulisan */}
       <div className="relative justify-center space-y-6 text-center md:text-left">
          {/* Glow Background */}
          <div className=" -z-40 fixed left-[50%] top-[50%] h-[200px] w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-[100%] bg-[#6517be] blur-[90px]"></div>

          <div className="relative h-8 w-3/4 md:w-1/2 bg-gray-300 rounded dark:bg-gray-700 animate-pulse"></div>
          <div className="relative h-4 w-full md:w-3/4 bg-gray-300 rounded dark:bg-gray-700 animate-pulse"></div>
          <div className="relative h-4 w-2/3 md:w-1/2 bg-gray-300 rounded dark:bg-gray-700 animate-pulse"></div>
          <div className="relative inline-block items-center rounded-lg bg-gray-300 px-6 py-3 dark:bg-gray-700 animate-pulse"></div>
          <div className="flex justify-center gap-4 mt-8 relative">
             {Array(6)
                .fill(0)
                .map((_, idx) => (
                   <div
                      key={idx}
                      className="w-8 h-8 bg-gray-300 rounded-full dark:bg-gray-700 animate-pulse"
                   ></div>
                ))}
          </div>
       </div>
    </div>
 </div>);
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex items-center container mx-auto justify-center min-h-screen text-white">
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:px-12">
        {/* Bagian Gambar */}
        <div className="relative flex justify-center md:px-20">
          <div className="circlePosition z-1 absolute left-[50%] top-[50%] h-[200px] w-[100px] translate-x-[-50%] translate-y-[-50%] rounded-[200%] bg-[#6517be] blur-[90px]"></div>

          <Image
            src={media(aboutData.data.foto_profile.url)}
            alt="Profile"
            width={300}
            height={300}
            className="relative h-48 w-48 md:h-64 md:w-64"
          />
        </div>

        {/* Bagian Tulisan */}
        <div className="relative justify-center space-y-6 text-center md:text-left">
          <div className=" -z-40 fixed left-[50%] top-[50%] h-[200px] w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-[100%] bg-[#6517be] blur-[90px]"></div>

          <h1 className="relative text-3xl font-bold text-purple-300 md:text-5xl">
            <span className="text-white">Backend</span> Developer
          </h1>
          <p className="relative leading-relaxed text-gray-300">
            I'm Muhammad Arya Dzaky Arenanto
          </p>
          <p className="relative leading-relaxed text-gray-300">
            {aboutData.data.tentang_saya_singkat}
          </p>
          <Link
            href={media(aboutData.data.cv.url)}
            target="_blank"
            className="relative inline-block items-center rounded-lg bg-gradient-to-tr from-[#2C1250] to-[#6429B6] px-6 py-3 text-white shadow-md"
          >
            Download CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;