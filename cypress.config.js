const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1500,
  viewportWidth: 1000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      automationExercise: 'https://automationexercise.com/'
    }
  },
});
