module.exports = {
  presets: [
    ['@babel/preset-env', {
      'modules': false,
      'targets': {
        'browsers': [
          'IE >= 10',
          'Chrome >= 35',
          'FF >= 45',
          'UCAndroid >= 11.8',
          'Edge >= 16',
          'iOS >= 9',
          'ChromeAndroid >= 45',
          'FirefoxAndroid >= 45',
          'Android >= 4.4',
          'Safari >= 9'
        ]
      }
    }],
    '@babel/preset-react'
  ],
  plugins: [
    ['@babel/transform-runtime', {
      'regenerator': true
    }],
    ['@babel/plugin-proposal-class-properties', { 'loose': true }]
  ]

};