import { extend } from 'flarum/extend';
import app from 'flarum/app';

import DiscordSettingsModal from 'pnobbe/auth-discord/components/DiscordSettingsModal';

app.initializers.add('pnobbe/auth-discord', app => {
  app.extensionSettings['pnobbe-oauth-discord'] = () => app.modal.show(new DiscordSettingsModal());
});