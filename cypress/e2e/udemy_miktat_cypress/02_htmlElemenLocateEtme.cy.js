describe("Cypress Locate", () => {
  it("Html element locate etme", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.get("#user-name"); // id loca
    cy.get(".login-box"); // class locate
    cy.get("input"); // tag locate
    cy.get('input["name-username"]'); // attribute locate
    cy.get('input[placeholder]:contains("username")'); // text iceren elementin locate'i

    cy.get('a:contains ("login")');
    cy.get("a").contains("Login");
    cy.contains("Login"); //bu 3 locate de birbirinin aynisi, yazim tarzi bize kalmis
  });
});
