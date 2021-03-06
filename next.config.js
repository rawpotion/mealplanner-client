module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
    })

    config.module.rules.push({
      type: 'json',
      use: 'yaml-loader',
      test: /\.ya?ml$/,
    })

    return config
  },
}
