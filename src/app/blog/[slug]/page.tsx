import React from 'react';

const DetailBlog = ({ params }: { params: { slug: string } }) => {
  return (
    <div className=" text-white">
      {params.slug}
      bla
    </div>
  );
};

export default DetailBlog;
