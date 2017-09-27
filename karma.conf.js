// uh i like that pattern!
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'mocha',
      'chai'
    ],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'resources/private/javascript/karmaExample.js',
      'test/frontend/**/*.js'
    ],
    reporters: [
      'progress'
    ],
    port: 9876,
    colors: true,
    autoWatch: false,
    singleRun: false,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS']

  });
};