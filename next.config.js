/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/https://meme-api.herokuapp.com/gimme/:path*",
        destination: "https://meme-api.herokuapp.com/gimme/:path*",
      },
    ];
  },
  images: {
    domains: ["https://meme-api.herokuapp.com/gimme"],
  },
};
