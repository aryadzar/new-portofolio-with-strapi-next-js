import Link from "next/link";

interface BlogHeaderProps {
    title: string;
    date: string;
  }
  
  const BlogHeader: React.FC<BlogHeaderProps> = ({ title, date }) => {
    return (
      <header className="mb-8">
        <Link href="/blog" className="text-white hover:underline text-sm">
          &lt; Go back
        </Link>
        <p className="text-gray-400 text-sm mt-4">{date}</p>
        <h1 className="text-4xl font-bold text-white mt-2">{title}</h1>
      </header>
    );
  };
  
  export default BlogHeader;
  