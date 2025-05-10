/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "pagedone.io",
      "via.placeholder.com",
      "png.pngtree.com",
      "images.unsplash.com",
      "cdn-icons-png.flaticon.com",
      "www.getzype.com",
      "www.ramfincorp.com",
      "framerusercontent.com",
      "myflot.com",
      "cdn-icons-gif.flaticon.com",
      "www.rupee112.com",
      "www.bharatloan.com",
      "themoneyfair.com",
    ], 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pagedone.io", 
        pathname: "/asset/uploads/**", 
      },
    ],
  },
};

module.exports = nextConfig;
