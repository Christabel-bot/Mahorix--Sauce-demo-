import LoginPage from '../PageObject/LoginPage';

describe('SauceDemo Login Feature', () => {

  const baseUrl = 'https://www.saucedemo.com/';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should login successfully with valid credentials', () => {
    LoginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
  });

  it('should show error message for invalid credentials', () => {
    LoginPage.login('invalid_user', 'wrong_pass');
    LoginPage.getErrorMessage()
      .should('be.visible')
      .and('contain.text', 'Username and password do not match any user in this service');
  });

  it('should show error when username is missing', () => {
    LoginPage.fillUsername(''); // safely does nothing now
    LoginPage.fillPassword('secret_sauce');
    LoginPage.submit();

    LoginPage.getErrorMessage()
      .should('be.visible')
      .and('contain.text', 'Username is required');
  });

  it('should show error when password is missing', () => {
    LoginPage.fillUsername('standard_user');
    LoginPage.fillPassword(''); // safely does nothing now
    LoginPage.submit();

    LoginPage.getErrorMessage()
      .should('be.visible')
      .and('contain.text', 'Password is required');
  });

});
