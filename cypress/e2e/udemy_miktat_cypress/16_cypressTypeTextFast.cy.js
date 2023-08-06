describe("Hizli text yazimi", () => {
  it("Hizli text yazimi", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://automationexercise.com/contact_us");
    cy.get("#message").type(
      "If you have any suggestion areas or improvements, do let us know. We will definitely work on it.Thank you",
      { delay: 0 }
    );
  });
});
