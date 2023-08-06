describe("Cypress Write File", () => {
  it("write file", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.writeFile(
      "CypressWriteFileDoc/exampleFile.txt",
      "Sifirdan Cypress Derslerine Hosgeldiniz.\n"
    );
    cy.writeFile(
      "CypressWriteFileDoc/exampleFile.txt",
      "Bu egitim serisinden sifirdan ileri seviye cypress ogreneckesiniz",
      { flag: "a+" }
    );
    // burada en son hangi write file varsa onu alir bunun olmamasi icin flag+a komutu ekliyoruz
  });

  it("Read File", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.readFile("CypressWriteFileDoc/exampleFile.txt").should(
      "contain",
      "egitim"
    );
  });

  it("Read File 2", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.readFile("CypressWriteFileDoc/exampleFile.txt").then((text) => {
      expect(text).to.contain("egitim");
    });
  });
});
