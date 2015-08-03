var webpackConfig = require('./webpack.config');

module.exports = function karmaConfig(config) {
  config.set({
    frameworks: [
      'jasmine'
    ],

    reporters: [
      //'coverage',
      'nyan'
    ],

    files: [
      'app/vendors.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/components/**/*.spec.js'
    ],

    browsers: [
      'Chrome'
    ],

    singleRun: true,

    coverageReporter: {
      dir: 'coverage/',
      type: 'html'
    },

    webpack: webpackConfig
  });
};
