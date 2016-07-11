var gulp = require('flarum-gulp');

gulp({
  modules: {
    'pnobbe/auth-discord': [
      'src/**/*.js'
    ]
  }
});
