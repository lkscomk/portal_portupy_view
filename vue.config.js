const dotenv = require('dotenv')
const env = dotenv.config({ path: '.env' }).parsed
const path = require('path')

process.env.VUE_APP_TITLE = env.APP_TITLE
process.env.VUE_APP_URL = env.APP_URL

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config
      .plugin('copy')
      .tap(options => {
        options[0].push({
          from: path.resolve(__dirname, 'src', 'assets', 'download'),
          to: path.resolve(__dirname, 'dist', 'assets', 'download'),
          toType: 'dir',
          ignore: ['.*']
        })
        return options
      })
  }
}
