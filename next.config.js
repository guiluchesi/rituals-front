/** @type {import('next').NextConfig} */

const {
  NODE_ENV,
  API_PATH,
  TYPEFORM_API_KEY,
  VERCEL_URL,
  SMTP_HOST,
  SMTP_USER,
  SMTP_PASSWORD,
} = process.env;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  serverRuntimeConfig: {
    typeformApiKey: TYPEFORM_API_KEY,
    smtp: {
      host: SMTP_HOST,
      user: SMTP_USER,
      password: SMTP_PASSWORD,
    },
  },
  publicRuntimeConfig: {
    applicationUrl: VERCEL_URL,
    env: NODE_ENV,
    server: API_PATH,
  },
};

module.exports = nextConfig;
