'use client'

import { Portofolio } from '@/model/portofolio';
import { media } from '@/utils/media';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
   portofolio: Portofolio;
   reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
   portofolio,
   reverse = false,
}) => {
   return (
      <div
         className={`flex flex-col md:flex-row  ${
            reverse ? 'md:flex-row-reverse' : ''
         } items-center gap-8 my-12`}
      >
         {/* Gambar Proyek */}
         <div className="flex-1 relative hover-3d transition-transform duration-300">
            <div className=" -z-40 absolute left-[10%] top-[50%] h-[200px] w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[100%] bg-[#6517be] blur-[90px]"></div>

            <Image
               src={media(portofolio.Gambar.url ?? ' ')}
               alt={portofolio.Judul}
               width={800}
               height={500}
               className="rounded-lg shadow-lg object-cover"
            />
         </div>

         {/* Deskripsi dengan Efek Blur */}
         <div className="flex-1 relative hover-3d transition-transform duration-300">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
               <h3 className="text-2xl font-bold mb-4">{portofolio.Judul}</h3>
               <p className="text-gray-200 mb-6">{portofolio.Deskripsi}</p>
               <a
                  href={portofolio.Link_Project}
                  className="text-purple-400 hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  View Detail &rarr;
               </a>
            </div>
         </div>
      </div>
   );
};

export default ProjectCard;
