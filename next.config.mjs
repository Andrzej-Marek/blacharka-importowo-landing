/** @type {import('next').NextConfig} */
const nextConfig = {
  // image domain config
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "http",
        hostname: "via.placeholder.com",
      },
    ],
  },
};

export default nextConfig;
