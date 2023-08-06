describe("Cypress Session kullanimi", () => {
  beforeEach(() => {
    const username = "sessionDeneme@gmail.com";
    const password = "123456";
    cy.loginWithSession(username, password);
  });

  const { faker } = require("@faker-js/faker");
  let randomTitle = faker.lorem.words();
  it("Siteye git ve bir makale ekle", () => {
    cy.visit("https://react-redux.realworld.io/");
    cy.contains("New Post").click();
    cy.get('input[placeholder="Article Title"]').type(randomTitle);
    cy.get(":nth-child(2) > .form-control").type("Udemey Derss");

    cy.get('textarea[placeholder="Write your article (in markdown)"]').type(
      "Aciklama uzun yaziii"
    );
    cy.get('input[placeholder="Enter tags"]').type("cypress");
    cy.contains("Publish Article").click();
    cy.contains("Edit Article").should("be.visible");
  });

  it("Global Feeds'e git ve dogrula", () => {
    cy.visit("https://react-redux.realworld.io/");
    cy.get(".feed-toggle > .nav > :nth-child(2) > .nav-link").click();
    // cy.get('a[class="nav-link active"]', { timeout: 10000 }).click();

    cy.get("div:nth-child(1)>a>h1", { timeout: 10000 })
      .should("be.visible")
      .and("contain", randomTitle);
  });
});
