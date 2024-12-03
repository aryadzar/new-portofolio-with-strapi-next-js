interface BlogContentProps {
    imageSrc: string;
    imageAlt: string;
    content: string;
  }
  
  const BlogContent: React.FC<BlogContentProps> = ({
    imageSrc,
    imageAlt,
    content,
  }) => {
    return (
      <article className="text-gray-300 leading-relaxed">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full rounded-lg mb-6 shadow-lg"
        />
        <p className="mb-6">{content}</p>
      </article>
    );
  };
  
  export default BlogContent;
  