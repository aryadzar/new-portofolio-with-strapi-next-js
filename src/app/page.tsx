import Hero from '@/components/Hero';
import { getAbout } from '@/services/about.service';
import { media } from '@/utils/media';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
   const { data } = await getAbout();

   const title = 'Portofolio Arya Dzaky';
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

export const revalidate = 0;

export default function Home() {
   return (
      <>
         <Hero />
         {/* {aboutData && <Hero flip={flip} aboutData={aboutData} />} */}
      </>
   );
}
