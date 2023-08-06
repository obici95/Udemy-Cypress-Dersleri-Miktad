describe("Cypress Test Isolation ", () => {
  it("Test Isolation - 1", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://www.qrcode-monkey.com/");
    cy.getCookies();
    cy.clearCookies();
    cy.getCookies().should("have.length", 0);

    // cy.get("div:nth-child(3) > div.pane-header > h3").click();
    // cy.get(".logo-preview").attachFile(
    //  { filePath: "GTR-Yellow.jpg" },
    //{ subjectType: "drag-n-drop" }
    //  ); // fotograf icin cypress direkt fixtures klaosurnun iccinebakiyor
  });

  it("Dosya yukleme - 2", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    const fileName = "white--GTR.jpg";
    cy.fixture("white--GTR.jpg")
      .then(Cypress.Blob.base64StringToBlob) // converte islemi icin
      .then((fileContent) => {
        cy.get(".logo-preview").attachFile(
          { fileContent, fileName, mimeType: "image/**" },
          { subjectType: "drag-n-drop" }
        );
      });
  });
});
