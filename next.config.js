const withPreact = require('next-plugin-preact');
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = withPreact({
	reactStrictMode: true,
	swcMinify: true,
	webpack(config) {
		config.plugins.push(new WindiCSSWebpackPlugin())
		return config
	},
});

module.exports = nextConfig;
