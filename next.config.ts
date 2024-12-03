import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'strapi-api.aryadzar.my.id',
         },
      ],
   },
};

export default nextConfig;
