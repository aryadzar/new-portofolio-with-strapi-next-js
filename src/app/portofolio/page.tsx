import ProjectCard from "@/components/ProjectSection";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Example Project 1",
    description: "A web app for visualizing personalized Spotify data.",
    image: "/profile.svg", // Ganti dengan path gambar Anda
    link: "#",
  },
  {
    title: "Example Project 2",
    description: "Another exciting project description here.",
    image: "/profile.svg",
    link: "#",
  },
  {
    title: "Example Project 3",
    description: "Yet another project with its own details.",
    image: "/profile.svg",
    link: "#",
  },
];

const Home: React.FC = () => {
  return (
    <div className=" text-white min-h-screen p-8 container mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Featured Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          reverse={index % 2 !== 0} // Selang-seling: true untuk ganjil
        />
      ))}
    </div>
  );
};

export default Home;
