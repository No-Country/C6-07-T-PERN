const withSvgr = require("next-svgr");

/** @type {import('next').NextConfig} */

module.exports = withSvgr({
  // your config for other plugins or the general next.js here...
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
});
