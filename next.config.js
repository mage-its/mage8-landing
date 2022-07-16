/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:path*",
          destination: "https://dashboard.mage-its.id/dashboard/:path*",
        },
      ],
    };
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
