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
      afterFiles: [
        {
          source: "/static/:path*",
          destination: "http://dashboard.mage-its.id/static/:path*",
        },
      ],
    };
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
