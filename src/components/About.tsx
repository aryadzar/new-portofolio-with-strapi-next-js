import {
   getAbout,
   getEducation,
   getExperience,
} from '@/services/about.service';

const AboutCom = async () => {
   const { data } = await getAbout();

   const { data: experienceData } = await getExperience();
   const { data: educationData } = await getEducation();
   return (
      <div className="container px-10 lg:mx-auto my-20">
         <p className=" text-justify">{data.data.isi_tentang_saya}</p>
         <div className="flex flex-col mx-auto md:flex-row justify-center max-w-6xl  gap-10 mt-10">
            <div className=" -z-40 fixed left-[50%] top-[50%] h-[200px] w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-[100%] bg-[#6517be] blur-[90px]"></div>
            {/* Section Experience */}
            <div className="text-white w-full md:w-1/2">
               <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
                  Work Experience
               </h2>
               <div className="space-y-6">
                  {experienceData.map((item: any, index: number) => (
                     <div
                        key={index}
                        className="bg-gradient-to-b from-[#130428] via-[#38126D] to-[#190634] hover-3d p-6 transition-transform duration-300 rounded-lg shadow-purple-700 relative"
                     >
                        <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:-left-4 top-4 bg-purple-600 w-4 h-4 rounded-full border-4 border-white"></div>
                        <h3 className="text-xl font-bold text-center md:text-left">
                           {item.title}
                        </h3>
                        <p className="mt-2 text-center md:text-left">
                           {item.description}
                        </p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Section Education */}
            <div className="text-white w-full md:w-1/2">
               <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
                  Education
               </h2>
               <div className="space-y-6">
                  {educationData.map((item: any, index: number) => (
                     <div
                        key={index}
                        className="bg-gradient-to-b from-[#130428] via-[#38126D] to-[#190634] hover-3d p-6 transition-transform duration-300 rounded-lg shadow-purple-700 relative"
                     >
                        <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:-left-4 top-4 bg-purple-600 w-4 h-4 rounded-full border-4 border-white"></div>
                        <h3 className="text-xl font-bold text-center md:text-left">
                           {item.title}
                        </h3>
                        <p className="mt-2 text-center md:text-left">
                           {item.description}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutCom;
