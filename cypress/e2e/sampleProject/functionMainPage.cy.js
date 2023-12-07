// This file contains functions of Main page.

import mainPage, { locatorMainPage } from "./locatorMainPage.cy";

Cypress.Commands.add('loginSystem', () => {
    cy.xpath(mainPage.textLogin).click()
    cy.xpath(mainPage.inputEmail).type('qakyhu@imagepoet.net')
    cy.xpath(mainPage.inputPassword).type('Abc1234!')
    cy.xpath(mainPage.buttonLogin).click()

})