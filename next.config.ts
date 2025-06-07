/** @type {import('next').NextConfig} */
const allowedImageHosts = [
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
  "i.postimg.cc",
  "www.instantmudra.com",
  "www.chintamanifinlease.com",
  "clickmyloan.com",
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: allowedImageHosts.map((host) => ({
      protocol: "https",
      hostname: host,
      pathname: "/**",
    })),
  },
};

module.exports = nextConfig;
