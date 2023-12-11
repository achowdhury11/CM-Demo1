const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },




    experimentalStudio: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    numTestsKeptInMemory: 20,
    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    hideXHRInCommandLog: true,
    defaultCommandTimeout: 20000,
    waitForAnimations: true,
    pageLoadTimeout: 30000,
    watchForFileChanges: false,


    "env":
    {
      "ogisTest": "https://nationalarchives--ogiscat.sandbox.my.salesforce.com/",
      "MAILOSAUR-API-KEY": "KlFKhfydIr0Co92anwXTGc6VxCu8cSzx"
    }

  },

});

