const AboutSkeleton = () => {
    return (
       <div className="container px-10 lg:mx-auto my-20">
          {/* Skeleton for About Section */}
          <div className="h-6 bg-gray-500 rounded mb-6 animate-pulse"></div>
 
          <div className="flex flex-col mx-auto md:flex-row justify-center max-w-6xl gap-10 mt-10">
             {/* Skeleton for Work Experience */}
             <div className="text-white w-full md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
                   Work Experience
                </h2>
                <div className="space-y-6">
                   {[...Array(3)].map((_, index) => (
                      <div
                         key={index}
                         className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-lg relative animate-pulse"
                      >
                         <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:-left-4 top-4 bg-gray-500 w-4 h-4 rounded-full border-4 border-gray-600"></div>
                         <div className="h-6 bg-gray-500 rounded w-2/3 mx-auto md:mx-0"></div>
                         <div className="mt-2 h-4 bg-gray-500 rounded w-full"></div>
                         <div className="mt-2 h-4 bg-gray-500 rounded w-3/4"></div>
                      </div>
                   ))}
                </div>
             </div>
 
             {/* Skeleton for Education */}
             <div className="text-white w-full md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
                   Education
                </h2>
                <div className="space-y-6">
                   {[...Array(3)].map((_, index) => (
                      <div
                         key={index}
                         className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-lg relative animate-pulse"
                      >
                         <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:-left-4 top-4 bg-gray-500 w-4 h-4 rounded-full border-4 border-gray-600"></div>
                         <div className="h-6 bg-gray-500 rounded w-2/3 mx-auto md:mx-0"></div>
                         <div className="mt-2 h-4 bg-gray-500 rounded w-full"></div>
                         <div className="mt-2 h-4 bg-gray-500 rounded w-3/4"></div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
       </div>
    );
 };
 
 export default AboutSkeleton;
 