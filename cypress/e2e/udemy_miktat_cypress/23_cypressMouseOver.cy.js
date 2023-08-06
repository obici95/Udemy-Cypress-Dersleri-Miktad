describe("Mouse over", () => {
  it("mouse over", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.visit("https://www.amazon.de/");
    cy.get("#nav-link-accountList-nav-line-1").trigger("mouseover");
  });
  it("mouse over", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://www.amazon.de/");
    cy.get("#nav-link-accountList-nav-line-1").trigger("mousedown", {
      button: 0,
    }); // mouseun sol tiklamasi icin
    cy.get("#nav-link-accountList-nav-line-1").trigger("mousedown", {
      button: 1,
    }); // mouseun orta tusu tiklamasi icin
    cy.get("#nav-link-accountList-nav-line-1").trigger("mousedown", {
      button: 2,
    }); // mouseun sag tusu tiklamasi icin
  });
});
