describe("Back Forward Kullanimi", () => {
  it("Cypress.io sayfasinda ileri geri komutlari", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://cypress.io/");

    cy.get('a[href="/pricing"]').click();
    cy.title().should(
      "eq",
      "Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing"
    );

    cy.go("back"); // anasayfa

    cy.title().should(
      "eq",
      "JavaScript Component Testing and E2E Testing Framework | Cypress"
    );
    cy.wait(2000);
    cy.go("forward");
    cy.title().should(
      "eq",
      "Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing"
    );

    cy.go(-1); // back
    cy.go(+1); // forward
  });
});
