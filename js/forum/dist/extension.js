'use strict';

System.register('pnobbe/auth-discord/main', ['flarum/extend', 'flarum/app', 'flarum/components/LogInButtons', 'flarum/components/LogInButton', 'flarum/components/AvatarEditor', 'flarum/components/SignUpModal'], function (_export, _context) {
  "use strict";

  var extend, app, LogInButtons, LogInButton, AvatarEditor, SignUpModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsLogInButtons) {
      LogInButtons = _flarumComponentsLogInButtons.default;
    }, function (_flarumComponentsLogInButton) {
      LogInButton = _flarumComponentsLogInButton.default;
    }, function (_flarumComponentsAvatarEditor) {
      AvatarEditor = _flarumComponentsAvatarEditor.default;
    }, function (_flarumComponentsSignUpModal) {
      SignUpModal = _flarumComponentsSignUpModal.default;
    }],
    execute: function () {

      AvatarEditor.controlItems.empty();
      AvatarEditor.quickUpload = new function () {}();

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
        SignUpModal.prototype.body = function () {
          return [this.props.token ? '' : m(LogInButtons, null)];
        };
      });
    }
  };
});