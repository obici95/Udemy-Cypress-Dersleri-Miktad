const { method } = require("cypress/types/bluebird");

describe("Temel Komutlar", () => {
  it("Temel Komutlar cy.visit kullanimi", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/"); // base url tanimlandiysa sadece slah yeterli
    cy.visit("www.google.com"); // baseUrl tanimlanmadiysa
    cy.visit("https://example.cypress.io/commands"); //baseUrl tanimlanmadiysa
    cy.visit("/commands"); //baseUrl tanimliysa

    cy.visit({
      url: "https://example.cypress.io/commands", //baseUrl tanimlanmadiysa
      method: "GET",
    });

    cy.visit({
      url: "/commands", //baseUrl tanimliysa
      method: "GET",
    });
  });

  it("Temel Komutlar cy.title kullanimi", () => {
    cy.title().should("eq", "cypress.io"); // title tam esitlik olursa dogrular
    cy.title().should("contains", "cypress"); // title icerisinde cypress geciyorsa dogrular
    cy.title().should("include", "cypress"); // title icerisinde cypress geciyorsa dogrular
  });

  it("Temel Komutlar cy.url ve cy.location kullanimi", () => {
    // url'in dogru uzantiya sahip olup olmadigini kontrol ediyoruz
    cy.url().should("eq", "https://example.cypress.io/commands"); // url tam esitlik olursa dogrular
    cy.url().should("include", "commands"); // url icerisinde command geciyorsa dogrular

    cy.location("pathname").should("eq", "/commands"); // gidilen pathi dogrulamis oluyorz
    cy.location("protocol").should("eq", "https"); // gidilen prokolu dogrular
    cy.location("hostname").should("eq", "https://example.cypress.io/commands"); //tam esitlik olursa dogrular
    cy.location("hostname").should("include", "cypress.io"); //icerisinde cypress.io geciyorsa dogrular
  });

  it("Temel Komutlar cy.get kullanimi", () => {
    cy.get("#button"); // dogru kullanim
    cy.get("#button").as("deneme"); // cy.get(@deneme)
    //burada button id'sine .as ile bir isim atayarak farkli yerlerde kullanabiliriz
    cy.get('a[href="example.cypress.io"]');
    cy.get(".dropdown-menu-list");
    cy.get("div.button");
    cy.get("ul li:first");
  });

  it("Temel komutlar cy.log kullanimi", () => {
    cy.log("Temel komutlar cy.log kullanimi"); // hatirlamak icin, aciklama yapmak icin, yorum icin kullandigimiz yerdir
    cy.log("Bir mesaj", ["bir mesaj", "iki mesaj", "uc mesaj"]); // cikti : [bir mesaj, iki mesaj, uc mesaj]
  });
});
