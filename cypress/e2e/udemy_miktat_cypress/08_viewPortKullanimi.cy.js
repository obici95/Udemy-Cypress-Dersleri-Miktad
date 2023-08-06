/// <reference types="cypress" />

describe("Viewport kullanimi", () => {
  it("viewport with number", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://shopist.io/");
    cy.viewport(1440, 1220);
  });

  it("viewport with number", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://shopist.io/");
    cy.viewport("macbook-16");
  });

  it("viewport with string", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.viewport("iphone-se2");
    cy.visit("https://shopist.io/");
  });
});
