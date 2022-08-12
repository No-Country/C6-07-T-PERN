/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APIKEY: process.env.APIKEY,
  },
};

module.exports = nextConfig;
