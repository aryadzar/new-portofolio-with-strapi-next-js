import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex items-center justify-center bg-[#11071F] min-h-screen text-white">
      {/* Kontainer Grid */}
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:px-12">
        {/* Bagian Gambar */}
        <div className="relative flex justify-center md:px-20">
          <div className="circlePosition z-1 absolute left-[50%] top-[50%] h-[200px] w-[100px] translate-x-[-50%] translate-y-[-50%] rounded-[200%] bg-[#6517be] blur-[90px]"></div>

          <Image
            src="/profile.svg" // Ganti dengan path foto Anda
            alt="Profile"
            width={200}
            height={300}
            className="relative h-48 w-48 md:h-64 md:w-64"
          />
        </div>

        {/* Bagian Tulisan */}
        <div className="relative justify-center space-y-6 text-center md:text-left">
          {/* Glow Background */}
          <div className="z-1 absolute left-[50%] top-[50%] h-[200px] w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[100%] bg-[#6517be] blur-[90px]"></div>

          <h1 className="relative text-3xl font-bold text-purple-300 md:text-5xl">
            Im BackEnd Developer
          </h1>
          <p className="relative leading-relaxed text-gray-300">
            I work as a Backend and Fullstack Developer, creating scalable web
            applications with robust backend systems and seamless user
            experiences.
          </p>
          <a
            href="/path-to-your-cv.pdf"
            download
            className="relative inline-block items-center rounded-lg bg-gradient-to-tr from-[#2C1250] to-[#6429B6] px-6 py-3 text-white shadow-md"
          >
            Download CV
          </a>
          <div className="flex justify-center gap-4 mt-8 relative">
            <img src="/icons/figma.svg" alt="Figma" className="w-8 h-8" />
            <img src="/icons/react.svg" alt="React" className="w-8 h-8" />
            <img src="/icons/nodejs.svg" alt="Node.js" className="w-8 h-8" />
            <img src="/icons/javascript.svg" alt="JavaScript" className="w-8 h-8" />
            <img src="/icons/nextjs.svg" alt="Next.js" className="w-8 h-8" />
            <img src="/icons/nextjs.svg" alt="Next.js" className="w-8 h-8" />
            <img src="/icons/nextjs.svg" alt="Next.js" className="w-8 h-8" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
