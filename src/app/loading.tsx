import Skeleton from '@/components/Skeleton';
import React from 'react';

const Loading = () => {
   return (
      <div className="flex items-center container mx-auto justify-center min-h-screen text-white">
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
      </div>
   );
};

export default Loading;
