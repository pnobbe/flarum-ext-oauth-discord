'use strict';

System.register('pnobbe/auth-discord/components/DiscordSettingsModal', ['flarum/components/SettingsModal', 'flarum/app'], function (_export, _context) {
  "use strict";

  var SettingsModal, app, DiscordSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }],
    execute: function () {
      DiscordSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(DiscordSettingsModal, _SettingsModal);

        function DiscordSettingsModal() {
          babelHelpers.classCallCheck(this, DiscordSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(DiscordSettingsModal).apply(this, arguments));
        }

        babelHelpers.createClass(DiscordSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'DiscordSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('pnobbe-oauth-discord.admin.discord_settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('pnobbe-oauth-discord.admin.discord_settings.client_id_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('pnobbe-oauth-discord.app_id') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('pnobbe-oauth-discord.admin.discord_settings.client_secret_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('pnobbe-oauth-discord.app_secret') })
            )];
          }
        }]);
        return DiscordSettingsModal;
      }(SettingsModal);

      _export('default', DiscordSettingsModal);
    }
  };
});;
'use strict';

System.register('pnobbe/auth-discord/main', ['flarum/extend', 'flarum/app', 'pnobbe/auth-discord/components/DiscordSettingsModal'], function (_export, _context) {
  "use strict";

  var extend, app, DiscordSettingsModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_pnobbeAuthDiscordComponentsDiscordSettingsModal) {
      DiscordSettingsModal = _pnobbeAuthDiscordComponentsDiscordSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('pnobbe/auth-discord', function (app) {
        app.extensionSettings['pnobbe-oauth-discord'] = function () {
          return app.modal.show(new DiscordSettingsModal());
        };
      });
    }
  };
});