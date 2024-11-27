import AboutCom from '@/components/About';
import Head from 'next/head';

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
