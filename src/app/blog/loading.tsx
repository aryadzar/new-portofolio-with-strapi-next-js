const BlogPageLoading: React.FC = () => {
   return (
      <div className="min-h-screen container mx-auto p-6 md:p-8">
         {/* Skeleton Filter Section */}
         <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
            <div className="w-full p-3 rounded-md bg-gray-800 animate-pulse h-12"></div>
            <div className="w-full p-3 rounded-md bg-gray-800 animate-pulse h-12"></div>
            <div className="w-full p-3 rounded-md bg-gray-800 animate-pulse h-12"></div>
         </div>

         {/* Skeleton Blog Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
               <div
                  key={index}
                  className="bg-gray-800 rounded shadow-lg overflow-hidden flex flex-col animate-pulse"
               >
                  <div className="w-full h-48 bg-gray-700"></div>
                  <div className="p-4 flex-1 flex flex-col gap-4">
                     <div className="w-24 h-4 bg-gray-600 rounded"></div>
                     <div className="w-full h-6 bg-gray-600 rounded"></div>
                     <div className="w-16 h-4 bg-gray-600 rounded self-end"></div>
                  </div>
               </div>
            ))}
         </div>

         {/* Skeleton Pagination */}
         <div className="flex justify-center items-center mt-8 space-x-2">
            <div className="w-8 h-8 bg-gray-800 rounded-md animate-pulse"></div>
            <div className="w-8 h-8 bg-gray-800 rounded-md animate-pulse"></div>
            <div className="w-8 h-8 bg-gray-800 rounded-md animate-pulse"></div>
         </div>
      </div>
   );
};

export default BlogPageLoading;
