/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  compiler: {
    styledComponents: true
  },
  env: {
    API_URL: process.env.API_URL
  }
};

module.exports = nextConfig;
