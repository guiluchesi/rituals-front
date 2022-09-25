/** @type {import('next').NextConfig} */

const { NODE_ENV } = process.env;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    env: NODE_ENV,
  },
};

module.exports = nextConfig;
