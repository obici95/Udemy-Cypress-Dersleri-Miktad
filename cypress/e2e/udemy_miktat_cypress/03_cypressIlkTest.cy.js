describe("Cypress ilk test", () => {
  it("ilk test", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://automationexercise.com/"); // baseUrl tanimlanmamistir
    cy.title().should("eq", "Automation Exercise");
    cy.url().should("eq", "https://automationexercise.com/");
  });
  it("ikinci test", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://automationexercise.com/"); // baseUrl tanimlanmamistir
    cy.title().should("include", "Automation");
    cy.url().should("include", "automationexercise.com/");
  });
});
