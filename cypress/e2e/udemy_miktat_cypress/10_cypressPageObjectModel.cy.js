/// <reference types="cypress" />

import { HomePage } from "../../pageObjectModel/homePage";
const homePagePom = new HomePage();

import homePageSecond from "../../pageObjectModel/homePageSecond";
describe("Page Object Model first kullanimi", () => {
  it("POM kullanim ornekleri", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    homePagePom.navigate().pricingButton(); // navigate ile sayfaya git pricing butonuna tikla
  });
});

describe("POM second using", () => {
  it("POM using examples", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    homePageSecond.navivate();
    homePageSecond.pricingButton
      .should("be.visible")
      .and("contain", "Pricing")
      .click();
  });
});
