export class HomePage {
  navigate() {
    cy.visit("https://cypress.io/");
    return this;
  }

  pricingButton() {
    cy.get('a[href="/pricing"]').click();
    return this;
  }
}
