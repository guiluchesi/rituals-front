/** @type {import('next').NextConfig} */

const { NODE_ENV, VITE_API_PATH } = process.env;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    env: NODE_ENV,
    server: VITE_API_PATH,
  },
};

module.exports = nextConfig;
