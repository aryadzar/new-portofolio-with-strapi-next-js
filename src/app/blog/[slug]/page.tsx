
import BlogContent from '@/components/BlogContent';
import BlogHeader from '@/components/BlogHeader';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { getPost } from '@/services/post.service';
import { notFound } from 'next/navigation';
import { FC } from 'react';
import Head from 'next/head';
import { media } from '@/utils/media';
import type { Metadata } from 'next'

interface DetailBlogProps {
   params: { slug: string };
}

export async function generateMetadata({
   params,
}: {
   params: { slug: string };
}): Promise<Metadata> {
   const slug = (await params).slug;
   const { data } = await getPost(slug);

   if (!data) {
      notFound();
   }

   const title = data.title || 'Default Blog Title';
   const description = data.short_description || 'Default Blog Description';
   const imageUrl = media(data.thumbnail?.url) || '/default-image.png'; // Default image

   return {
      title,
      description,
      openGraph: {
         title,
         description,
         images: [imageUrl],
         type: 'article',
      },
      twitter: {
         card: 'summary_large_image',
         title,
         description,
         images: [imageUrl],
      },
   };
}


const DetailBlog = async ({
   params,
}: {
   params: Promise<{ slug: string }>;
}) => {
   const slug = (await params).slug;
   const {data} = await getPost(slug);

   if (!data) {
      notFound();
   }

   return (
      <>         
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
      
      </>
   );
};

export default DetailBlog;
