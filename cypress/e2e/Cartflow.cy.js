import LoginPage from '../PageObject/LoginPage';
import CartflowPage from '../PageObject/CartflowPage';

describe('SauceDemo Cart Flow Feature', () => {
  const baseUrl = 'https://www.saucedemo.com/';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should complete the full cart flow successfully', () => {
    // Step 1: Login
    LoginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');

    // Step 2: Add item to cart
    CartflowPage.addItemToCart();

    // Step 3: Go to cart
    CartflowPage.openCart();

    // Step 4: Proceed to checkout
    CartflowPage.clickCheckout();

    // Step 5: Fill checkout details
    CartflowPage.fillCheckoutDetails('Christabel', 'Adedeji', '100001');

    // Step 6: Finish checkout
    CartflowPage.finishCheckout();

    // Step 7: Verify order completion
    CartflowPage.verifyOrderCompletion();
  });
});
