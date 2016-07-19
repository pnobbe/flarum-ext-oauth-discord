import SettingsModal from 'flarum/components/SettingsModal';
import app from 'flarum/app';

export default class DiscordSettingsModal extends SettingsModal {
  className() {
    return 'DiscordSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('pnobbe-oauth-discord.admin.discord_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('pnobbe-oauth-discord.admin.discord_settings.client_id_label')}</label>
        <input className="FormControl" bidi={this.setting('pnobbe-oauth-discord.app_id')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('pnobbe-oauth-discord.admin.discord_settings.client_secret_label')}</label>
        <input className="FormControl" bidi={this.setting('pnobbe-oauth-discord.app_secret')}/>
      </div>
    ];
  }
}
