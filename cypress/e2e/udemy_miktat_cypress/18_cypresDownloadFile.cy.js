describe("Cypress Download File", () => {
  before(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.deleteDownloadsFolder(); // testimiz baslamadan once download klasorunu siler
  });

  it("Download File", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.visit("https://demoqa.com/upload-download");
    cy.get("#downloadButton").click(); // 1. yontem
  });
});
