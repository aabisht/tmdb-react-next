const { i18n } = require("./next-i18next.config.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: false,
  images: {
    domains: ["locize.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
