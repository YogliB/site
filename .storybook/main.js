const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = {
  "stories": [
    "./stories/*.stories.@(mdx|js|jsx|ts|tsx)",
    "../**/*.stories.@(mdx|js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
}