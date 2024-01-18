const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
  ],

  staticDirs: ['./public'],

  babel: async options => ({
    ...options,
    plugins: [
      '@babel/plugin-transform-class-properties',
      '@babel/plugin-transform-private-methods',
      '@babel/plugin-transform-private-property-in-object'
    ],
  }),

  webpackFinal: async (config) => {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json')
      })
    ];
    return config
  },

  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  docs: {
    autodocs: true
  }
}