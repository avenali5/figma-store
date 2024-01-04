/** @type {import('next').NextConfig} */
const nextConfig = {
  productionSourceMaps: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    domains: ["dropbox.com", "www.dropbox.com"],
  },
};

module.exports = nextConfig;
