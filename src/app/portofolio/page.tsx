import ProjectCard from '@/components/ProjectSection';
import { getPortofolio } from '@/services/portofolio.service';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Daftar Project ',
   description: 'Daftar Project yang dikerjakan',
   openGraph: {
      images: 'favicon.ico',
   },
};
export const revalidate = 0;

const Home: React.FC = async () => {
   const { data } = await getPortofolio();
   return (
      <div className=" text-white min-h-screen p-8 container mx-auto">
         <h1 className="text-4xl font-bold mb-8 text-center">
            Featured Projects
         </h1>
         {data.map((item, i) => (
            <ProjectCard key={i} portofolio={item} reverse={i % 2 !== 0} />
         ))}
      </div>
   );
};

export default Home;
