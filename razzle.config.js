module.exports = {
  modify: (config, { target, dev }, webpack) => {
    const appConfig = Object.assign({}, config)

    // @BUG: Do not inline certain env vars; https://github.com/jaredpalmer/razzle/issues/356
    if (target === 'node') {
      const idx = appConfig.plugins.findIndex(plugin => plugin.constructor.name === 'DefinePlugin')
      const { definitions } = appConfig.plugins[idx]
      const newDefs = Object.assign({}, definitions)

      delete newDefs['process.env.PORT']
      delete newDefs['process.env.HOST']
      delete newDefs['process.env.PUBLIC_PATH']

      appConfig.plugins = [].concat(appConfig.plugins)
      appConfig.plugins[idx] = new webpack.DefinePlugin(newDefs)
    }

    return appConfig
  },
}
