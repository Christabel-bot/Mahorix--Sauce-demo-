class LoginPage {
  constructor() {
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
  }

  fillUsername(username) {
    cy.get(this.usernameInput).clear();
    if (username) {
      cy.get(this.usernameInput).type(username);
    }
  }

  fillPassword(password) {
    cy.get(this.passwordInput).clear();
    if (password) {
      cy.get(this.passwordInput).type(password);
    }
  }

  submit() {
    cy.get(this.loginButton).click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }
}

export default new LoginPage();
