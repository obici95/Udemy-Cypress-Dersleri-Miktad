// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require("cypress-delete-downloads-folder").addCustomCommand();

import "cypress-file-upload";

import customCommandsLogin from "../pageObjectModel/customCommandsLogin";

Cypress.Commands.add("login", (username, password) => {
  // cy.visit("https://automationexercise.com/login");
  customCommandsLogin.usernameField.type(username);
  customCommandsLogin.passwordField.type(password);
  customCommandsLogin.loginButton.click();
});

// Session ile Kullanim
Cypress.Commands.add("loginWithSession", (username, password) => {
  cy.session([username, password], () => {
    cy.visit("https://react-redux.realworld.io/");
    cy.contains("Sign in").click();
    cy.get('input[type="email"]').type(username);
    cy.get('input[type="password"]').type(password);
    cy.get("button").click();
    cy.get('a[href="#editor"]').should("be.visible").and("contain", "New Post");
  });
});
