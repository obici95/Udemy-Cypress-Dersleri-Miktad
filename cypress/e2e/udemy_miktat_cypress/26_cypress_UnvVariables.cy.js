describe("Cypress Env Variables", () => {
  it("Ortam degiskenleri kullanim ornekleri", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit(Cypress.env("amazon"));
    cy.wait(2000);
    cy.visit(Cypress.env("google"));
    cy.wait(2000);
    cy.visit(Cypress.env("saucedemo"));
  });
});
