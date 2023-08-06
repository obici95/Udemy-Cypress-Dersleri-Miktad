/// <reference types="cypress" />

describe("Shadow ve Find Kullanimi", () => {
  before(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it("Shadow ve Find Kullanimina ornek test", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit(
      "https://www.mercedes-benz.co.uk/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE"
    );
    cy.get('cmm-cookie-banner[settings-id="fph8XBqir"]').shadow();
  });
});
