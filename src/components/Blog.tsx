'use client';

import Link from 'next/link';
import { useState } from 'react';

const blogs = [
   {
      id: 1,
      title: 'Next JS Project',
      date: '2024-09-23 21:42:07',
      image: '/images/example.jpg', // Ganti dengan path gambar Anda
      link: '/blog/1',
   },
   {
      id: 2,
      title: 'React Project',
      date: '2024-09-21 21:42:07',
      image: '/images/example.jpg',
      link: '/blog/1',
   },
   {
      id: 2,
      title: 'React Project',
      date: '2024-09-21 21:42:07',
      image: '/images/example.jpg',
      link: '/blog/1',
   },
   {
      id: 2,
      title: 'React Project',
      date: '2024-09-21 21:42:07',
      image: '/images/example.jpg',
      link: '/blog/1',
   },
   {
      id: 2,
      title: 'React Project',
      date: '2024-09-21 21:42:07',
      image: '/images/example.jpg',
      link: '/blog/1',
   },
   {
      id: 2,
      title: 'React Project',
      date: '2024-09-21 21:42:07',
      image: '/images/example.jpg',
      link: '/blog/1',
   },
   {
      id: 2,
      title: 'React Project',
      date: '2024-09-21 21:42:07',
      image: '/images/example.jpg',
      link: '/blog/1',
   },
   {
      id: 2,
      title: 'React Project',
      date: '2024-09-21 21:42:07',
      image: '/images/example.jpg',
      link: '/blog/1',
   },
   // Tambahkan lebih banyak data blog di sini
];

const BlogPage: React.FC = () => {
   const [search, setSearch] = useState('');
   const [category, setCategory] = useState('All');
   const [sort, setSort] = useState('Latest');
   const [currentPage, setCurrentPage] = useState(1);
   const blogsPerPage = 6;

   // Filter dan sort blog berdasarkan search
   const filteredBlogs = blogs
      .filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) =>
         sort === 'Latest'
            ? new Date(b.date).getTime() - new Date(a.date).getTime()
            : new Date(a.date).getTime() - new Date(b.date).getTime()
      );

   // Pagination
   const startIndex = (currentPage - 1) * blogsPerPage;
   const paginatedBlogs = filteredBlogs.slice(
      startIndex,
      startIndex + blogsPerPage
   );

   const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

   return (
      <div className="min-h-screen container mx-auto text-white p-6 md:p-8">
         {/* Filter Section */}
         <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
            <input
               type="text"
               placeholder="Search"
               className=" w-full p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
            />
            <select
               className="w-full p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
               value={category}
               onChange={(e) => setCategory(e.target.value)}
            >
               <option className=" bg-black text-white" value="All">
                  Category
               </option>
               <option className=" bg-black text-white" value="Web Development">
                  Web Development
               </option>
               <option className=" bg-black text-white" value="Design">
                  Design
               </option>
            </select>
            <select
               className="w-full p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
               value={sort}
               onChange={(e) => setSort(e.target.value)}
            >
               <option className='bg-black text-white' value="Latest">Sort By: Latest</option>
               <option className='bg-black text-white' value="Oldest">Sort By: Oldest</option>
            </select>
         </div>

         {/* Blog Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedBlogs.map((blog) => (
               <Link href={blog.link}>
                  <div
                     key={blog.id}
                     className="bg-purple-700 rounded shadow-lg overflow-hidden flex flex-col"
                  >
                     <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-48 object-cover"
                     />
                     <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                           <p className="text-sm text-gray-300">Project</p>
                           <h2 className="text-xl font-bold">{blog.title}</h2>
                        </div>
                        <p className="text-gray-400 mt-4">{blog.date}</p>
                     </div>
                  </div>
               </Link>
            ))}
         </div>

         {/* Pagination */}
         <div className="flex justify-center items-center mt-8 space-x-2">
            <button
               className={`  p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  currentPage === 1
                     ? 'bg-gray-700'
                     : 'bg-purple-600 hover:bg-purple-500'
               }`}
               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
               &lt;
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
               <button
                  key={index}
                  className={`    p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                     currentPage === index + 1
                        ? 'bg-purple-600'
                        : 'bg-gray-700 hover:bg-purple-500'
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
               >
                  {index + 1}
               </button>
            ))}
            <button
               className={`  p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  currentPage === totalPages
                     ? 'bg-gray-700'
                     : 'bg-purple-600 hover:bg-purple-500'
               }`}
               onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
               }
            >
               &gt;
            </button>
         </div>
      </div>
   );
};

export default BlogPage;
