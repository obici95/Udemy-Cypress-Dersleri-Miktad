describe("Cypress Test Isolation ", () => {
  it("Test Isolation - 1", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://www.qrcode-monkey.com/");
    cy.log(localStorage.length);
    cy.log(window.localStorage.length);

    localStorage.setItem("cypress derleri icin", "deneme test");

    cy.wait(2000).then(() => {
      localStorage.removeItem("cypress derleri icin", "deneme test");
    });

    cy.wait(1500).then(() => {
      localStorage.clear();
    });
  });

  it.only("Test Isolation - 1", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://www.qrcode-monkey.com/").then(() => {
      cy.wait(5000);
      cy.clearLocalStorage;
    });
  });
});
