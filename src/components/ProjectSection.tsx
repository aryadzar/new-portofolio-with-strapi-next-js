interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    reverse?: boolean;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    link,
    reverse = false,
  }) => {
    return (
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center gap-8 my-12`}
      >
        {/* Gambar Proyek */}
        <div className="flex-1 relative">
            <div className=" -z-40 absolute left-[20%] top-[50%] h-[200px] w-[200px] translate-x-[-50%] translate-y-[-50%] rounded-[100%] bg-[#6517be] blur-[90px]"></div>

          <img
            src={image}
            alt={title}
            className="rounded-lg shadow-lg object-cover h-48 w-48"
          />
        </div>
  
        {/* Deskripsi dengan Efek Blur */}
        <div className="flex-1 relative">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-200 mb-6">{description}</p>
            <a
              href={link}
              className="text-purple-400 hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Detail &rarr;
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  