/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://mage-its.id",
  generateRobotsTxt: true,
};

export default config;
