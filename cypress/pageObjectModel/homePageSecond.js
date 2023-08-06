class HomePageSecond {
  navivate() {
    cy.visit("https://cypress.io/");
  }

  get pricingButton() {
    return cy.get('a[href="/pricing"]');
  }
}

export default new HomePageSecond();
