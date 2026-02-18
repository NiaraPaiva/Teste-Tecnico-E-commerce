/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [600, 800, 1200, 2400, 3600],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "placeimg.com",
      },
      {
        protocol: "https",
        hostname: "api.escuelajs.co",
      },
      {
        protocol: "https",
        hostname: "www.netcarshow.com",
      },
    ],
  },
};
export default nextConfig;
