import { UserManager } from "oidc-client";

const defaultConfig = {
  authority: process.env.IDENTITY_AUTHORITY,
  client_id: process.env.IDENTITY_CLIENT_ID,
  redirect_uri: process.env.IDENTITY_REDIRECT_URI,
  response_type: process.env.IDENTITY_RESPONSE_TYPE,
  scope: process.env.IDENTITY_SCOPE,
  post_logout_redirect_uri: process.env.IDENTITY_POST_LOGOUT_REDIRECT_URI
};

export default class AuthService {
  constructor(config) {
    this.userManager = new UserManager({ ...defaultConfig, config });
  }

  login() {
    this.userManager.signinRedirect();
  }

  logout() {
    this.userManager.signoutRedirect();
  }
}
