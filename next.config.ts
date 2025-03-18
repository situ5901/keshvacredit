/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "pagedone.io",
      "via.placeholder.com",
      "png.pngtree.com",
      "images.unsplash.com",
    ], // Ensure via.placeholder.com is added here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pagedone.io", // Allow external images from pagedone.io
        pathname: "/asset/uploads/**", // Adjust the path if necessary
      },
    ],
  },
};

module.exports = nextConfig;
