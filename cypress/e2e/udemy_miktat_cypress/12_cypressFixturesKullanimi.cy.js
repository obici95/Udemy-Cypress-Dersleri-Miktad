/// <reference types="cypress" />

describe("Custom Commands", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://automationexercise.com/login");
  });
  it("Cypress Fixture Kullanim Ornek Invalid Username Valid Password", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.fixture("loginData").as("credentials");
    cy.get("@credentials").then((data) => {
      cy.login(data.invalidUsername, data.validPassword);
    });
  });
  it("Cypress Fixture Kullanim Ornek Valid Username Invalid Password", () => {
    cy.fixture("loginData").as("credentials");
    cy.get("@credentials").then((data) => {
      cy.login(data.validUsername, data.invalidPassword);
    });
  });

  it("then ornek", () => {
    cy.get("#price").then(() => {
      cy.get(".priceFields").should("be.visible").type("100");
    });
  });
});
