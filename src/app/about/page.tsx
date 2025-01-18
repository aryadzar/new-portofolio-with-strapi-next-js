import AboutCom from '@/components/About';
import { getAbout } from '@/services/about.service';
import { media } from '@/utils/media';
import { Metadata } from 'next';
import Head from 'next/head';

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

const About = () => {
   return (
      <>
         <Head>
            <title>Tentang Saya</title>
            <meta name="description" content="Tentang Arya Dzaky" />
         </Head>
         <div className=" text-white">
            <AboutCom />
         </div>
      </>
   );
};

export default About;
