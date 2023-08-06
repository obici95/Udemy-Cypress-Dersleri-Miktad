describe("Alias, Then, Each, Wrap", () => {
  it("Kullanim ornegi", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    let itemLength;

    cy.visit("https://shopist.io/");

    cy.get(".navbar-section a").should("be.visible").as("NavbarMenus"); // Alias ornek

    cy.get("@NavbarMenus")
      .then(($el) => {
        itemLength = $el.length;
      })
      .each(($el, index) => {
        cy.on("uncaught:exception", (err, runnable) => {
          return false;
        });
        // cy.log($el.text());
        cy.get("@NavbarMenus").should("be.visible");
        cy.log("Navbar Menu" + index + ": " + $el.text()); //section a olan her bir elementi yazdir

        if ($el.text().includes("Cart")) {
          // eger Cart diye bir text varsa menumuzde ona tikla
          cy.wrap($el).click();
        }
      });
  });
});
