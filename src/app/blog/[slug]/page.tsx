import { FC } from 'react';

interface DetailBlogProps {
  params: { slug: string };
}

const DetailBlog= async ({
   params,
 }: {
   params: Promise<{ slug: string }>
 }) => {

   const slug = (await params).slug
   return (

      <div className="text-white">
         {slug}
         bla
      </div>
   );
};

export default DetailBlog;
