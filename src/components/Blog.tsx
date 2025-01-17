// 'use client';

// import { getPosts } from '@/services/post.service';
// import { media } from '@/utils/media';
// import Link from 'next/link';
// import { useState } from 'react';

// const BlogPage = async () => {

//    const {data} = await getPosts();
//    const [search, setSearch] = useState('');
//    const [category, setCategory] = useState('All');
//    const [sort, setSort] = useState('Latest');
//    const [currentPage, setCurrentPage] = useState(1);
//    const blogsPerPage = 6;

//    // Filter dan sort blog berdasarkan search
//    const filteredBlogs = data
//       .filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()))
//       .sort((a, b) =>
//          sort === 'Latest'
//             ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//             : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
//       );

//    // Pagination
//    const startIndex = (currentPage - 1) * blogsPerPage;
//    const paginatedBlogs = filteredBlogs.slice(
//       startIndex,
//       startIndex + blogsPerPage
//    );

//    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

//    return (
//       <div className="min-h-screen container mx-auto text-white p-6 md:p-8">
//          {/* Filter Section */}
//          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
//             <input
//                type="text"
//                placeholder="Search"
//                className=" w-full p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                value={search}
//                onChange={(e) => setSearch(e.target.value)}
//             />
//             <select
//                className="w-full p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                value={category}
//                onChange={(e) => setCategory(e.target.value)}
//             >
//                <option className=" bg-black text-white" value="All">
//                   Category
//                </option>
//                <option className=" bg-black text-white" value="Web Development">
//                   Web Development
//                </option>
//                <option className=" bg-black text-white" value="Design">
//                   Design
//                </option>
//             </select>
//             <select
//                className="w-full p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                value={sort}
//                onChange={(e) => setSort(e.target.value)}
//             >
//                <option className="bg-black text-white" value="Latest">
//                   Sort By: Latest
//                </option>
//                <option className="bg-black text-white" value="Oldest">
//                   Sort By: Oldest
//                </option>
//             </select>
//          </div>

//          {/* Blog Grid */}
//          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {paginatedBlogs.map((blog) => (
//                <Link href={`/blog/${blog.slug}`}>
//                   <div
//                      key={blog.id}
//                      className="bg-purple-700 rounded shadow-lg overflow-hidden flex flex-col"
//                   >
//                      <img
//                         src={media(blog.thumbnail.url)}
//                         alt={blog.title}
//                         className="w-full h-48 object-cover"
//                      />
//                      <div className="p-4 flex-1 flex flex-col justify-between">
//                         <div>
//                            <p className="text-sm text-gray-300">Project</p>
//                            <h2 className="text-xl font-bold">{blog.title}</h2>
//                         </div>
//                         <p className="text-gray-400 mt-4">{blog.createdAt}</p>
//                      </div>
//                   </div>
//                </Link>
//             ))}
//          </div>

//          {/* Pagination */}
//          <div className="flex justify-center items-center mt-8 space-x-2">
//             <button
//                className={`  p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                   currentPage === 1
//                      ? 'bg-gray-700'
//                      : 'bg-purple-600 hover:bg-purple-500'
//                }`}
//                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             >
//                &lt;
//             </button>
//             {Array.from({ length: totalPages }, (_, index) => (
//                <button
//                   key={index}
//                   className={`    p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                      currentPage === index + 1
//                         ? 'bg-purple-600'
//                         : 'bg-gray-700 hover:bg-purple-500'
//                   }`}
//                   onClick={() => setCurrentPage(index + 1)}
//                >
//                   {index + 1}
//                </button>
//             ))}
//             <button
//                className={`  p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                   currentPage === totalPages
//                      ? 'bg-gray-700'
//                      : 'bg-purple-600 hover:bg-purple-500'
//                }`}
//                onClick={() =>
//                   setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//                }
//             >
//                &gt;
//             </button>
//          </div>
//       </div>
//    );
// };

// export default BlogPage;

// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { getPosts } from '@/services/post.service';
// import { media } from '@/utils/media';
// import { Post } from '@/model/post';

// const BlogPage: React.FC = () => {
//    const [blogs, setBlogs] = useState<Post[]>([]);
//    const [error, setError] = useState<string | null>(null);
//    const [loading, setLoading] = useState<boolean>(true);
//    const [search, setSearch] = useState('');
//    const [category, setCategory] = useState('All');
//    const [sort, setSort] = useState('Latest');
//    const [currentPage, setCurrentPage] = useState(1);
//    const [totalBlogs, setTotalBlogs] = useState(0);

//    const blogsPerPage = 1;

//    useEffect(() => {
//       const fetchPosts = async () => {
//          try {
//             setLoading(true);
//             const { data } = await getPosts( currentPage, blogsPerPage);
//             setBlogs(data);   
//             setTotalBlogs(data.length); // Total blogs untuk perhitungan total halaman
//          } catch (err) {
//             setError('Failed to fetch posts');
//          } finally {
//             setLoading(false);
//          }
//       };

//       fetchPosts();
//    }, [currentPage]);

//    // Filter dan sort blog berdasarkan search
//    const filteredBlogs = blogs
//       .filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()))
//       .sort((a, b) =>
//          sort === 'Latest'
//             ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//             : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
//       );

//    // Pagination
//    // const startIndex = (currentPage - 1) * blogsPerPage;
//    // const paginatedBlogs = filteredBlogs.slice(
//    //    startIndex,
//    //    startIndex + blogsPerPage
//    // );


//    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

//    if (loading) {
//       return (
//          <div className="min-h-screen container mx-auto p-6 md:p-8">
//             {/* Skeleton Filter Section */}
//             <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
//                <div className="w-full p-3 rounded-md bg-gray-800 animate-pulse h-12"></div>
//                <div className="w-full p-3 rounded-md bg-gray-800 animate-pulse h-12"></div>
//                <div className="w-full p-3 rounded-md bg-gray-800 animate-pulse h-12"></div>
//             </div>

//             {/* Skeleton Blog Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                {Array.from({ length: 6 }).map((_, index) => (
//                   <div
//                      key={index}
//                      className="bg-gray-800 rounded shadow-lg overflow-hidden flex flex-col animate-pulse"
//                   >
//                      <div className="w-full h-48 bg-gray-700"></div>
//                      <div className="p-4 flex-1 flex flex-col gap-4">
//                         <div className="w-24 h-4 bg-gray-600 rounded"></div>
//                         <div className="w-full h-6 bg-gray-600 rounded"></div>
//                         <div className="w-16 h-4 bg-gray-600 rounded self-end"></div>
//                      </div>
//                   </div>
//                ))}
//             </div>

//             {/* Skeleton Pagination */}
//             <div className="flex justify-center items-center mt-8 space-x-2">
//                <div className="w-8 h-8 bg-gray-800 rounded-md animate-pulse"></div>
//                <div className="w-8 h-8 bg-gray-800 rounded-md animate-pulse"></div>
//                <div className="w-8 h-8 bg-gray-800 rounded-md animate-pulse"></div>
//             </div>
//          </div>
//       );
//    }

//    if (error) {
//       return <div className="text-red-500">{error}</div>;
//    }

//    return (
//       <div className="min-h-screen container mx-auto text-white p-6 md:p-8">
//          {/* Filter Section */}
//          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
//             <input
//                type="text"
//                placeholder="Search"
//                className=" w-full p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                value={search}
//                onChange={(e) => setSearch(e.target.value)}
//             />
//             {/* <select
//                className="w-full p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                value={category}
//                onChange={(e) => setCategory(e.target.value)}
//             >
//                <option className=" bg-black text-white" value="All">
//                   Category
//                </option>
//                <option className=" bg-black text-white" value="Web Development">
//                   Web Development
//                </option>
//                <option className=" bg-black text-white" value="Design">
//                   Design
//                </option>
//             </select>
//             <select
//                className="w-full p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                value={sort}
//                onChange={(e) => setSort(e.target.value)}
//             >
//                <option className="bg-black text-white" value="Latest">
//                   Sort By: Latest
//                </option>
//                <option className="bg-black text-white" value="Oldest">
//                   Sort By: Oldest
//                </option>
//             </select> */}
//          </div>

//          {/* Blog Grid */}
//          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {blogs   .map((blog) => (
//                <Link key={blog.id} href={`/blog/${blog.slug}`}>
//                   <div className="bg-gradient-to-r from-[#2B0B3A] via-[#200635] via-50% to-[#261045] rounded shadow-lg overflow-hidden hover-3d transition-transform duration-300 flex flex-col">
//                      <img
//                         src={media(blog.thumbnail.url)}
//                         alt={blog.title}
//                         className="w-full h-48 object-cover"
//                      />
//                      <div className="p-4 flex-1 flex flex-col justify-between">
//                         <div>
//                         <p className="text-sm text-gray-300">
//                            {blog.post_categories.map((category) => category.category_name).join(', ')}
//                         </p>
//                            <h2 className="text-xl font-bold">{blog.title}</h2>
//                         </div>
//                         <p className="text-gray-400 mt-4">
//                            {new Date(blog.createdAt).toLocaleString('id-ID')}
//                         </p>
//                      </div>
//                   </div>
//                </Link>
//             ))}
//          </div>

//          {/* Pagination */}
//          <div className="flex justify-center items-center mt-8 space-x-2">
//             <button
//                className={`  p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                   currentPage === 1
//                      ? 'bg-gray-700'
//                      : 'bg-purple-600 hover:bg-purple-500'
//                }`}
//                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             >
//                &lt;
//             </button>
//             {Array.from({ length: totalPages }, (_, index) => (
//                <button
//                   key={index}
//                   className={`    p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                      currentPage === index + 1
//                         ? 'bg-purple-600'
//                         : 'bg-gray-700 hover:bg-purple-500'
//                   }`}
//                   onClick={() => setCurrentPage(index + 1)}
//                >
//                   {index + 1}
//                </button>
//             ))}
//             <button
//                className={`  p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                   currentPage === totalPages
//                      ? 'bg-gray-700'
//                      : 'bg-purple-600 hover:bg-purple-500'
//                }`}
//                onClick={() =>
//                   setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//                }
//             >
//                &gt;
//             </button>
//          </div>
//       </div>
//    );
// };

// export default BlogPage;

'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebounce } from 'use-debounce';
import Link from 'next/link';
import { getPosts } from '@/services/post.service';
import { media } from '@/utils/media';
import { Post } from '@/model/post';
// import 'nprogress/nprogress.css'; // Pastikan gaya NProgress dimuat
const BlogPage: React.FC = () => {
   const searchParams = useSearchParams();
   const router = useRouter();

   const [blogs, setBlogs] = useState<Post[]>([]);
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [totalPages, setTotalPages] = useState(1);

   const blogsPerPage = 6;

   // Ambil query parameter dari URL
   const currentPage = parseInt(searchParams.get('page') || '1');
   const [searchQuery, setSearchQuery] = useState<string>(searchParams.get('search') || '');

   // Debounced value untuk pencarian
   const [debouncedSearchQuery] = useDebounce(searchQuery, 500); // Delay 500ms

   // Fetch blogs setiap kali currentPage atau debouncedSearchQuery berubah
   useEffect(() => {
      const fetchPosts = async () => {
         try {
            setLoading(true);

            // Fetch blogs berdasarkan currentPage dan debouncedSearchQuery
            const { data, meta } = await getPosts(currentPage, blogsPerPage, debouncedSearchQuery);
            setBlogs(data);
            setTotalPages(meta.pagination.pageCount);
         } catch (err) {
            setError('Failed to fetch posts');
         } finally {
            setLoading(false);
         }
      };

      fetchPosts();
   }, [currentPage, debouncedSearchQuery]);

   // Update state pencarian dan URL query
   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchQuery(value); // Update local search state
      router.replace(`/blog?page=1&search=${value}`); // Update URL query
   };

   const handlePageChange = (page: number) => {
      router.replace(`/blog?page=${page}&search=${searchQuery}`); // Update URL dengan pagination
   };

   if (loading) {
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
   }

   if (error) {
      return <div className="text-red-500">{error}</div>;
   }

   return (
      <div className="min-h-screen container mx-auto text-white p-6 md:p-8">
         {/* Search Bar */}
         <div className="flex justify-between items-center mb-8">
            <input
               type="text"
               placeholder="Search blogs..."
               value={searchQuery}
               onChange={handleSearch}
               className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
         </div>

         {/* Blog Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
               <Link key={blog.id} href={`/blog/${blog.slug}`}>
                  <div className="bg-gradient-to-r from-[#2B0B3A] via-[#200635] via-50% to-[#261045] rounded shadow-lg overflow-hidden hover-3d transition-transform duration-300 flex flex-col">
                     <img
                        src={media(blog.thumbnail?.formats?.medium?.url || blog.thumbnail?.url)}
                        alt={blog.title}
                        className="w-full h-48 object-cover"
                     />
                     <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                           <p className="text-sm text-gray-300">
                              {blog.post_categories.map((category) => category.category_name).join(', ')}
                           </p>
                           <h2 className="text-xl font-bold">{blog.title}</h2>
                        </div>
                        <p className="text-gray-400 mt-4">
                           {new Date(blog.createdAt).toLocaleString('id-ID')}
                        </p>
                     </div>
                  </div>
               </Link>
            ))}
         </div>

         {/* Pagination */}
         <div className="flex justify-center items-center mt-8 space-x-2">
            {/* Previous Button */}
            <button
               className={`p-3 rounded-md ${
                  currentPage === 1 ? 'bg-gray-700' : 'bg-purple-600 hover:bg-purple-500'
               }`}
               disabled={currentPage === 1}
               onClick={() => handlePageChange(currentPage - 1)}
            >
               &lt;
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
               <button
                  key={index}
                  className={`p-3 rounded-md ${
                     currentPage === index + 1 ? 'bg-purple-600' : 'bg-gray-700 hover:bg-purple-500'
                  }`}
                  onClick={() => handlePageChange(index + 1)}
               >
                  {index + 1}
               </button>
            ))}

            {/* Next Button */}
            <button
               className={`p-3 rounded-md ${
                  currentPage === totalPages ? 'bg-gray-700' : 'bg-purple-600 hover:bg-purple-500'
               }`}
               disabled={currentPage === totalPages}
               onClick={() => handlePageChange(currentPage + 1)}
            >
               &gt;
            </button>
         </div>
      </div>
   );
};

export default BlogPage;
