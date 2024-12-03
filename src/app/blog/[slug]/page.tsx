import BlogContent from '@/components/BlogContent';
import BlogHeader from '@/components/BlogHeader';
import { TracingBeam } from '@/components/ui/tracing-beam';
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
   const blog = {
      title: "Radiant: A beautiful new marketing site template",
      date: "Thursday, September 12, 2024",
      imageSrc: "https://torch.id/cdn/shop/articles/Artikel_167_-_Preview.webp?v=1713337145", // Ganti dengan path gambar
      imageAlt: "Bromo landscape",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, 
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, 
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, 
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, 
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, 
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, 
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, 
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, 
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, 
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, 
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, 
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, 
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, 
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, 
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, 
        ex nec condimentum vehicula, nisi odio dictum mauris, id ullamcorper diam 
        elit vehicula tellus. Nunc vel ligula urna. Cras tempus arcu lectus, a 
        rhoncus eros dignissim id. Donec vel risus nisl. Aenean aliquam...
        `,
    };
   return (
      <div className="bg-gradient-to-b  min-h-screen p-8">
         <TracingBeam>
        <div className="max-w-3xl mx-auto">
         <div className=" -z-40 fixed left-[50%] top-[50%] h-[200px] w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-[100%] bg-[#6517be] blur-[90px]"></div>
          <BlogHeader title={blog.title} date={blog.date} />
          <BlogContent
            imageSrc={blog.imageSrc}
            imageAlt={blog.imageAlt}
            content={blog.content}
          />
        </div>
        </TracingBeam>
      </div>
    );
};

export default DetailBlog;
