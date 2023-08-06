describe("XHR Test", () => {
  it("cy.request Kullanimi", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.request("https://jsonplaceholder.cypress.io/comments").should(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(500);
        expect(response).to.have.property("headers");
      }
    );
  });

  it("cy.intercept kullanimi", () => {});
});
