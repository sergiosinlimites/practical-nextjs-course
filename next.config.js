const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  mode: 'production',
  disable: false
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
  },
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: '/hello',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'images.pexels.com'],
  },
});

module.exports = nextConfig;
