class LogoutPage {
  elements = {
    menuButton: '#react-burger-menu-btn',
    logoutLink: '#logout_sidebar_link',
    loginButton: '#login-button'
  }

  // Perform logout action
  logout() {
    cy.get(this.elements.menuButton).should('be.visible').click();
    cy.get(this.elements.logoutLink).should('be.visible').click();
  }

  // Verify logout redirects back to login page
  verifyLogout() {
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get(this.elements.loginButton).should('be.visible');
  }
}

export default new LogoutPage();
