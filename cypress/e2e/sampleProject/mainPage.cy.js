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
        cy.xpath(mainPage.buttonLogin).click()

        cy.log('Checking offer price.')
        cy.xpath(mainPage.textBlueTopPrice)
        .should('be.visible').invoke('text')
        .then(text => {
            if (text== 'Rs. 500'){
                cy.log('Text content is correct.')
                cy.xpath(mainPage.buttonBlueTopAddBasket).click()
                cy.xpath(mainPage.textAdded).should('be.visible')
                cy.xpath(mainPage.buttonContinueShopping).click()
                cy.scrollTo('top')
                cy.xpath(mainPage.buttonShoppingCart).click()
                
                // Check shopping cart and delete existing item
                cy.xpath(mainPage.textBlueTop).should('be.visible')
                cy.xpath(mainPage.buttonDeleteItem).click()
                cy.xpath(mainPage.textShoppingCardEmpty).should('be.visible')
                cy.xpath(mainPage.buttonClickHere).click()
                cy.xpath(mainPage.textAllProducts).should('be.visible')
            }
            else {
                cy.log('Text content is incorrect. Please check related offer')
            }
        
        })
    })
});