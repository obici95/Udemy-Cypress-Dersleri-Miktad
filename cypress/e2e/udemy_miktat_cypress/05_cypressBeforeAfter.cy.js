/// <reference types="cypress" />

describe("Before After Kullanimi", () => {
  before(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.log("Before Kullanimi cypress test");
    cy.visit("https://automationexercise.com/");
  });

  it("Title assertion", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.title().should("eq", "Automation Exercise");
  });

  after(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.log("After kullanimi icin bir ornek");
  });
});
