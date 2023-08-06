describe("web scrapping", () => {
  it("write file to txt products", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.step("shopist.io sandalyeler sayfasina gidiyor");
    cy.visit("https://shopist.io/department/chairs");

    cy.step("description icindeki sandalye adi ve fiyatinini uzunlugu");
    cy.get(".description").as("chairsPrice").its("length").should("eq", 9);

    const result = [];
    cy.step("Sonuclari logluyoruz");
    cy.get("@chairsPrice")
      .each(($el, index) => {
        cy.log("Results: " + index + "-" + $el.text());
        result.push($el.text());
      })
      .then(() => {
        cy.step("sonuclari charirsPrice.txt file yazdiriyoruz");
        cy.writeFile("CypressWriteFileDoc/ChairsPrice.txt", result);
      });
  });
});
