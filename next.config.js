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
    ],
  },
};

module.exports = nextConfig;
