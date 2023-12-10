/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-international', 'international-types'],

  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'preproduction.api.petshealth.kitg.com.ua',
        pathname: '/public/ads-categories/**',
      },
      {
        protocol: 'https',
        hostname: 'preproduction.api.petshealth.kitg.com.ua',
        pathname: '/public/advice/**',
      },
    ],
  },
};

module.exports = nextConfig;
