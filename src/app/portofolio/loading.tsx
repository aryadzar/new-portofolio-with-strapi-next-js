'use client';

const Loading: React.FC = () => {
   return (
      <div className="text-white min-h-screen p-8 container mx-auto">
         <h1 className="text-4xl font-bold mb-8 text-center">
            Featured Projects
         </h1>
         <div className="space-y-12">
            {Array.from({ length: 3 }).map((_, index) => (
               <div
                  key={index}
                  className={`flex flex-col md:flex-row ${
                     index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  } items-center gap-8 my-12`}
               >
                  {/* Skeleton untuk gambar */}
                  <div className="flex-1 relative">
                     <div className="animate-pulse bg-gray-800 rounded-lg h-64 w-full"></div>
                  </div>

                  {/* Skeleton untuk deskripsi */}
                  <div className="flex-1 relative">
                     <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
                        <div className="animate-pulse space-y-4">
                           <div className="bg-gray-800 h-6 w-3/4 rounded"></div>
                           <div className="bg-gray-800 h-4 w-full rounded"></div>
                           <div className="bg-gray-800 h-4 w-5/6 rounded"></div>
                           <div className="bg-gray-800 h-4 w-1/2 rounded"></div>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Loading;
