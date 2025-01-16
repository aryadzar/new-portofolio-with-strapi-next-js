import BlogPage from '@/components/Blog';
import { getAbout } from '@/services/about.service';
import { media } from '@/utils/media';
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata(): Promise<Metadata> {
   const { data } = await getAbout();

   const title = 'Blog Portofolio Arya';
   const description = data.data.isi_tentang_saya || 'Default Blog Description';
   const imageUrl = media(data.data.foto_profile.url) || '/default-image.png'; // Default image

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

const Page = () => {
   return (
      <>
         <BlogPage />
      </>
   );
};

export default Page;
