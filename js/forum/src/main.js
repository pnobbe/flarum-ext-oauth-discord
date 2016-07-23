import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('pnobbe/auth-discord', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('discord',
      <LogInButton
        className="Button LogInButton--discord"
        path="/auth/discord">
        {app.translator.trans('pnobbe-oauth-discord.forum.log_in.with_discord_button')}
      </LogInButton>
    );
  });
});