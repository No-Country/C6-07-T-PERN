const withSvgr = require("next-svgr");

/** @type {import('next').NextConfig} */

require("dotenv").config();

module.exports = withSvgr({
  // your config for other plugins or the general next.js here...
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    APIKEY: process.env.APIKEY,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    domains: [`image.tmdb.org`],
  },
});
