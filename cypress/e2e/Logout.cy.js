import LoginPage from '../PageObject/LoginPage';
import LogoutPage from '../PageObject/LogoutPage';

describe('SauceDemo Logout Feature', () => {
  const baseUrl = 'https://www.saucedemo.com/';

  beforeEach(() => {
    // Start fresh on the login page before each test
    cy.visit(baseUrl);
  });

  it('should login and logout successfully', () => {
    // Step 1: Login
    LoginPage.login('standard_user', 'secret_sauce');

    // Step 2: Wait for inventory page to confirm login success
    cy.url().should('include', '/inventory.html');

    // Step 3: Perform logout
    LogoutPage.logout();

    // Step 4: Verify successful logout
    LogoutPage.verifyLogout();
  });
});
