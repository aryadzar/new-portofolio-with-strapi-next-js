import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false); // State untuk kontrol menu
   const param = usePathname();
   const router = [
      {
         path: '/',
         name: 'Home',
      },
      {
         path: '/about',
         name: 'About',
      },
      {
         path: '/services',
         name: 'Services',
      },
      {
         path: '/portofolio',
         name: 'Portofolio',
      },
      {
         path: '/blog',
         name: 'Blog',
      },
      {
         path: '/contact',
         name: 'Contact Me',
      },
   ];

   return (
      <header className="sticky backdrop-blur-md top-0 bg-transparent  z-50 flex items-center justify-between bg-[#1A0B2E] px-6 py-4 text-white lg:px-20">
         {/* Logo */}
         <Image src="/logo.svg" width={90} height={90} alt="Logo" className='animate-fade-down animate-ease-in-out' />

         {/* Hamburger Button */}
         <button
            className="block text-white focus:outline-none lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={2}
               stroke="currentColor"
               className="h-6 w-6"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                     isOpen
                        ? 'M6 18L18 6M6 6l12 12' // Icon close
                        : 'M4 6h16M4 12h16M4 18h16' // Icon hamburger
                  }
               />
            </svg>
         </button>

         {/* Navigation Menu */}
         <nav
            className={`${
               isOpen
                  ? 'z-50 block animate-flip-down   px-10 animate-duration-[560ms] animate-once animate-ease-out'
                  : 'hidden'
            } absolute left-0 top-16 w-full bg-[#1A0B2E] lg:static lg:flex lg:w-auto lg:items-center lg:space-x-6 lg:bg-transparent`}
         >
            <ul className="flex flex-col items-center backdrop-blur-md space-y-4 lg:flex-row lg:space-x-6 lg:space-y-0 lg:px-0">
               {router.map((item, i) => (
                  <li key={i} className="relative group">
                     <Link
                        href={item.path}
                        className={`text-lg transition-all hover:text-purple-300 ${
                           param === item.path ? 'text-purple-300' : ''
                        }`}
                     >
                        {item.name}
                     </Link>
                     {/* Underline with animation */}
                     <span
                        className={`absolute bottom-0 left-0 h-[2px] w-full bg-purple-300 transition-transform duration-300 ease-out ${
                           param === item.path ? 'scale-x-100' : 'scale-x-0'
                        } group-hover:scale-x-100`}
                     ></span>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   );
};

export default Navbar;
