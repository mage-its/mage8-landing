/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/dashboard/:path*",
          destination: "http://127.0.0.1:3001/:path*",
        },
        {
          source: "/static/:path*",
          destination: "http://127.0.0.1:3001/static/:path*",
        },
      ],
    };
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
