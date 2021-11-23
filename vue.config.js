module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/apex-star/'   //任意
    : '/',

  transpileDependencies: [
    'vuetify'
  ]
}

