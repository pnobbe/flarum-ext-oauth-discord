'use strict';

System.register('pnobbe/auth-discord/main', ['flarum/extend', 'flarum/app', 'flarum/components/LogInButtons', 'flarum/components/LogInButton'], function (_export, _context) {
  "use strict";

  var extend, app, LogInButtons, LogInButton;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsLogInButtons) {
      LogInButtons = _flarumComponentsLogInButtons.default;
    }, function (_flarumComponentsLogInButton) {
      LogInButton = _flarumComponentsLogInButton.default;
    }],
    execute: function () {

      app.initializers.add('pnobbe/auth-discord', function () {
        extend(LogInButtons.prototype, 'items', function (items) {
          items.add('discord', m(
            LogInButton,
            {
              className: 'Button LogInButton--discord',
              path: '/auth/discord' },
            app.translator.trans('pnobbe-oauth-discord.forum.log_in.with_discord_button')
          ));
        });
      });
    }
  };
});