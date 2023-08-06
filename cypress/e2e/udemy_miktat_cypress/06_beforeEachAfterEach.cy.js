/// <reference types="cypress" />

describe("BeforeEach AfterEach Kullanimi", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.log("Before Kullanimi cypress test");
    cy.visit("https://automationexercise.com/");
  });

  afterEach(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.log("After kullanimi icin bir ornek");
  });

  it("url assertion", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.url().should("eq", "https://automationexercise.com/");
  });

  it("title assertion", () => {
    cy.title().should("include", "Automation");
  });

  it("hostname assertion", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.location("hostname").should("include", "automation");
  });
});
