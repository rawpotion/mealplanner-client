const path = require('path')

module.exports = {
  stories: ['../stories/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.extensions.push('.ts', '.tsx', '.js')
    config.resolve.alias = {
      '@lib': path.resolve(__dirname, '../lib'),
      '@assets': path.resolve(__dirname, '../assets'),
      '@config': path.resolve(__dirname, '../config'),
      '@components': path.resolve(__dirname, '../components'),
      '@utils': path.resolve(__dirname, '../utils'),
    }

    return config
  },
}
