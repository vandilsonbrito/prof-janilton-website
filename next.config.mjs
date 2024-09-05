/** @type {import('next').NextConfig} */
const nextConfig = {
  amp: {
    canonicalBase: 'https://profjanilton.com.br',
  },
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
        },
      ],
    },
};

export default nextConfig;


