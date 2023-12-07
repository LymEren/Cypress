// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress-xpath" />

import mainPage, { locatorMainPage } from "./locatorMainPage.cy";

Cypress.Commands.add('login', (username, password) => {
    cy.xpath(mainPage.textLogin).click()
    cy.xpath(mainPage.inputEmail).type('qakyhu@imagepoet.net')
    cy.xpath(mainPage.inputPassword).type('Abc1234!')
    cy.xpath(mainPage.buttonLogin).click()

})