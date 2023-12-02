import mainPage, { locatorMainPage } from "./locatorMainPage.cy";

describe('General test automation scenario', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
        cy.viewport(1500, 1000)
      });
    it('Adding items to shopping cart', () => {
        cy.xpath(mainPage.textLogin).click()
        cy.xpath(mainPage.inputEmail).type('qakyhu@imagepoet.net')
        cy.xpath(mainPage.inputPassword).type('Abc1234!')
        cy.xpath().click()

        cy.log('Checking offer price.')
        cy.xpath(mainPage.blueTopPrice)
        .should('be.visible').invoke('text')
        .then(text => {
            if (text== 'Rs. 500'){
                cy.log('Text content is correct.')
                cy.xpath(mainPage.buttonBlueTopAddBasket).click()
                cy.xpath().should('be.visible')
                cy.xpath().click()
            }
            else {
                cy.log('Text content is incorrect. Please check related offer')
            }
        })
    })
});