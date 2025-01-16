import { Post } from '@/model/post';
import { media } from '@/utils/media';
import ReactMarkdown from 'react-markdown';
import remarkYoutube from 'remark-youtube';
import remarkGfm from 'remark-gfm';

interface BlogContentProps {
   post: Post;
}

const BlogContent: React.FC<BlogContentProps> = ({ post }) => {
   return (
      <article className="text-white leading-relaxed">
         <img
            src={media(post.thumbnail.url)}
            alt={post.title}
            className="w-full rounded-lg mb-6 shadow-lg"
         />
         <ReactMarkdown
            remarkPlugins={[remarkYoutube, remarkGfm]}
            components={{
               a: ({ href, children }) => (
                  <a
                     href={href || ' '}
                     className="text-blue-600 hover:underline"
                  >
                     {children}
                  </a>
               ),
               img: ({ src, alt }) => (
                  <img
                     src={src || ''}
                     alt={alt || ''}
                     className="block mx-auto mt-5 my-6 max-w-full rounded-lg shadow-md"
                     style={{ height: 'auto' }}
                  />
               ),
               iframe: ({ ...props }) => (
                  <iframe
                     {...props}
                     className="w-full aspect-video mt-5 rounded-md"
                     allowFullScreen
                  ></iframe>
               ),
               blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-purple-800 pl-4 italic text-gray-300 my-6">
                     {children}
                  </blockquote>
               ),
               p: ({ children }) => (
                  <p className="mb-6 text-gray-200">{children}</p>
               ),
            }}
         >
            {post.content}
         </ReactMarkdown>
      </article>
   );
};

export default BlogContent;
