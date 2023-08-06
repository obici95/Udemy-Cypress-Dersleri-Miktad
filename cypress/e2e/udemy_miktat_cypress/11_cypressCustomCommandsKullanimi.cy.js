/// <reference types="cypress" />

describe("Custom Commands", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://automationexercise.com/login");
  });
  it("Custom Commands Kullanim Ornek Invalid Username Valid Password", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.login("denemeadb@gmail.com", "deneme1234");
  });
  it("Custom Commands Kullanim Ornek Valid Username Invalid Password", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.login("deneme222@gmail.com", "denemeParola");
  });
});
