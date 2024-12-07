import { Post } from "@/model/post";
import { media } from "@/utils/media";
import ReactMarkdown from 'react-markdown'
import remarkYoutube from 'remark-youtube';
import remarkGfm from 'remark-gfm';

interface BlogContentProps {
   post : Post
}

const BlogContent: React.FC<BlogContentProps> = ({
   post
}) => {
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
               a: ({href, children}) => (
                  <a href={href || " "} className=" text-blue-600">
                     {children}
                  </a>
               ),
               img: ({ src, alt }) => (
                  <img
                    src={src || ""}
                    alt={alt || ""}
                    className="block mx-auto  my-6"
                  />
                ),
                iframe: ({ ...props }) => (
                    <iframe
                      {...props}
                      className="w-full aspect-video"
                      allowFullScreen
                  ></iframe>
                ),
               
            }}
         
         
         
         >
            {post.content}
         </ReactMarkdown>
      </article>
   );
};
 
 export default BlogContent;