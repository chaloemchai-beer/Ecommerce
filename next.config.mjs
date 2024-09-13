/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "blogs-images.forbes.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "optimine.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
