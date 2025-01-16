import { Post } from '@/model/post';
import Link from 'next/link';
import { format } from 'date-fns';

interface BlogHeaderProps {
   post: Post;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ post }) => {
   const formattedDate = format(new Date(post.createdAt), 'EEEE, MMMM d, yyyy');

   return (
      <header className="mb-8">
         <Link href="/blog" className="text-white hover:underline text-sm">
            &lt; Go back
         </Link>
         <p className="text-gray-400 text-sm mt-4">{formattedDate}</p>
         <h1 className="text-4xl font-bold text-white mt-2">{post.title}</h1>
      </header>
   );
};

export default BlogHeader;
