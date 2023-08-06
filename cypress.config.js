const { defineConfig } = require("cypress");

const { removeDirectory } = require("cypress-delete-downloads-folder");

module.exports = defineConfig({
  viewportHeight: 1200,
  viewportWidth: 1500,

  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", { removeDirectory }),
        require("cypress-mochawesome-reporter/plugin")(on);
    },

    env: {
      amazon: "https://www.amazon.com",
      google: "https://www.google.com",
      saucedemo: "https://www.saucedemo.com",
    },
  },
});
