const path = require('path');
/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

module.exports = nextConfig;
