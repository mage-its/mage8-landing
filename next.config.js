/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/dashboard/:path*",
          destination: "https://dashboard.mage-its.id/:path*",
        },
      ],
    };
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
