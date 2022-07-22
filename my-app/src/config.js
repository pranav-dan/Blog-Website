export default {
    oidc: {
      issuer: 'https://dev-18393317.okta.com/oauth2/default',
      clientId: '$0oa45zdmxoU6Fz24w5d7',
      scopes: ['openid', 'profile', 'email'],
      redirectUri: `${window.location.origin}/login/callback`
    },
    widget: {
      issuer: 'https://dev-18393317.okta.com/oauth2/default',
      clientId: '0oa45zdmxoU6Fz24w5d7',
      redirectUri: `${window.location.origin}/login/callback`,
      scopes: ['openid', 'profile', 'email'],
      useInteractionCodeFlow: true
    }
  };
