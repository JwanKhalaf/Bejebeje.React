import { UserManager } from "oidc-client";
import { IDENTITY_CONFIG } from "../../utils/authConfig";

export default class AuthService {
  constructor(config) {
    this.userManager = new UserManager({ ...IDENTITY_CONFIG, config });
  }

  login() {
    this.userManager.signinRedirect();
  }

  logout() {
    this.userManager.signoutRedirect();
  }
}
