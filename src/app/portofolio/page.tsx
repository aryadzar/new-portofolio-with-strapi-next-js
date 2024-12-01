'use client'

import ProjectCard from "@/components/ProjectSection";
import { getPortofolio } from "@/services/portofolio.service";


  const Home: React.FC = async() => {
    const {data} = await getPortofolio()
    return (
      <div className=" text-white min-h-screen p-8 container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Featured Projects</h1>
        {data.map((item, i) => (<ProjectCard key={i} portofolio={item} reverse={i % 2 !== 0} />))}
      </div>
    );
  };

  export default Home;
