class CartflowPage {
  elements = {
    inventoryItem: '.inventory_item:first-child .btn_inventory',
    shoppingCartIcon: '.shopping_cart_link',
    checkoutButton: '#checkout',
    firstNameInput: '#first-name',
    lastNameInput: '#last-name',
    postalCodeInput: '#postal-code',
    continueButton: '#continue',
    finishButton: '#finish',
    successMessage: '.complete-header'
  }

  // Add an item to the cart
  addItemToCart() {
    cy.get(this.elements.inventoryItem).should('be.visible').click();
  }

  // Go to the cart page
  openCart() {
    cy.get(this.elements.shoppingCartIcon).should('be.visible').click();
    cy.url().should('include', '/cart.html');
  }

  // Proceed to checkout
  clickCheckout() {
    cy.get(this.elements.checkoutButton).should('be.visible').click();
    cy.url().should('include', '/checkout-step-one.html');
  }

  // Fill checkout form
  fillCheckoutDetails(firstName, lastName, postalCode) {
    cy.get(this.elements.firstNameInput).type(firstName);
    cy.get(this.elements.lastNameInput).type(lastName);
    cy.get(this.elements.postalCodeInput).type(postalCode);
    cy.get(this.elements.continueButton).click();
  }

  // Finish the checkout process
  finishCheckout() {
    cy.get(this.elements.finishButton).should('be.visible').click();
  }

  // Verify success message
  verifyOrderCompletion() {
    cy.get(this.elements.successMessage)
      .should('be.visible')
      .and('contain.text', 'Thank you for your order!');
  }
}

export default new CartflowPage();
