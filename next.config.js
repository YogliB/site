const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: {
    plugins: [new WindiCSSWebpackPlugin()]
  }
}

module.exports = nextConfig



