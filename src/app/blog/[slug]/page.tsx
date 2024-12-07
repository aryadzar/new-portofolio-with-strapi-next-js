import BlogContent from '@/components/BlogContent';
import BlogHeader from '@/components/BlogHeader';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { getPost } from '@/services/post.service';
import { FC } from 'react';

interface DetailBlogProps {
   params: { slug: string };
}

const DetailBlog = async ({
   params,
}: {
   params: Promise<{ slug: string }>;
}) => {
   const slug = (await params).slug;
   const {data} = await getPost(slug);

   return (
         <TracingBeam className=''>
      <div className="bg-gradient-to-b  min-h-screen p-8">
            <div className="max-w-3xl mx-auto container">
               <div className=" -z-40 fixed left-[50%] top-[50%] h-[200px] w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-[100%] bg-[#6517be] blur-[90px]"></div>
               <BlogHeader post={data} />
               <BlogContent
                  post={data}
               />
            </div>
      </div>
         </TracingBeam>
   );
};

export default DetailBlog;
