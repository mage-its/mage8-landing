/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "dashboard.mage-its.id",
            },
          ],
          destination: "/dashboard/:path*",
        },
      ],
    };
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
