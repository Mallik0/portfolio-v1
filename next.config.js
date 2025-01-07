/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'placeholder.svg', // Replace with your actual domain
    //   },
    // ],   =>    used only when serving images from the internet or any URL
    dangerouslyAllowSVG: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      pg: false,
    };
    return config;
  },
};

module.exports = nextConfig;
