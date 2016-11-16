<?php

namespace pnobbe\Auth\Discord;

use Flarum\Forum\AuthenticationResponseFactory;
use Flarum\Forum\Controller\AbstractOAuth2Controller;
use Flarum\Settings\SettingsRepositoryInterface;
use pnobbe\OAuth2\Client\Provider\Discord;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;

class DiscordAuthController extends AbstractOAuth2Controller
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param AuthenticationResponseFactory $authResponse
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(AuthenticationResponseFactory $authResponse, SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
        $this->authResponse = $authResponse;
    }

    /**
     * {@inheritdoc}
     */
    protected function getProvider($redirectUri)
    {
        return new Discord([
            'clientId' => $this->settings->get('pnobbe-oauth-discord.app_id'),
            'clientSecret' => $this->settings->get('pnobbe-oauth-discord.app_secret'),
            'redirectUri' => $redirectUri
        ]);
    }

    /**
     * {@inheritdoc}
     */
    protected function getAuthorizationUrlOptions()
    {
        return ['scope' => [
            'email', // The same as identify but with email
            'identify' // Allows you to retrieve user data (except for email)
        ]];
    }

    /**
     * {@inheritdoc}
     */
    protected function getIdentification(ResourceOwnerInterface $resourceOwner)
    {
        return [
            'email' => $resourceOwner->getEmail(),
        ];
    }

    /**
     * {@inheritdoc}
     */
    protected function getSuggestions(ResourceOwnerInterface $resourceOwner)
    {
        return [
            'username' => $resourceOwner->getUsername(),
            'avatarUrl' => $resourceOwner->getAvatar()
        ];
    }
}
    
