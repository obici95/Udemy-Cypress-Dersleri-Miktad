describe("Cypress Assertion kullanimi", () => {
  it("Assertion kullanim ornekleri", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://shopist.io/");
    cy.title().should("eq", "Shop.ist");
    cy.url().should("contain", "shop");
    cy.get(":nth-child(3) > .jumbotron-box > :nth-child(3)").should(
      "be.visible"
    );
    cy.get(":nth-child(3) > .jumbotron-box > :nth-child(3)")
      .should("be.visible")
      .and("contain", "Shop");

    cy.get(":nth-child(3) > .jumbotron-box > :nth-child(3)").should(
      "contain",
      "Shop"
    );

    cy.get(":nth-child(3) > .jumbotron-box > :nth-child(3)").should(
      "have.text",
      "Shop now"
    );
    cy.get(":nth-child(3) > .jumbotron-box > :nth-child(3)").should(
      "have.length",
      1
    );
    cy.get(":nth-child(3) > .jumbotron-box > :nth-child(3)")
      .its("length")
      .and("eq", 1);

    cy.get(".chairs").should("have.attr", "href", "/department/chairs");
    cy.get(".chairs").should("have.attr", "class", "chairs");
  });
});
