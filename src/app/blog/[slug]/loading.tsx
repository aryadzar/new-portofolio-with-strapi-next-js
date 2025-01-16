const LoadingBlog = () => {
   return (
      <div className="animate-pulse bg-gradient-to-b min-h-screen p-8">
         <div className="max-w-3xl mx-auto container">
            <div className="-z-40 fixed left-[50%] top-[50%] h-[200px] w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-[100%] bg-[#6517be] blur-[90px]"></div>

            {/* Header Skeleton */}
            <div className="mb-8">
               <div className="h-8 bg-gray-800 rounded w-2/4 mb-4"></div>
               <div className="h-6 bg-gray-800 rounded w-1/3"></div>
            </div>

            {/* Content Skeleton */}
            <div className="space-y-6">
               {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="h-6 bg-gray-800 rounded"></div>
               ))}
            </div>

            {/* Image Skeleton */}
            <div className="my-6 h-48 bg-gray-800 rounded"></div>

            {/* Additional Content Skeleton */}
            <div className="space-y-6">
               {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="h-6 bg-gray-800 rounded"></div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default LoadingBlog;
