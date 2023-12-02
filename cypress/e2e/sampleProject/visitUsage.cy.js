
describe('General test automation scenario', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
      });
    it('Login', () => {
        cy.xpath('//a[text() =" Signup / Login"]').click()
        cy.xpath('(//input[@name ="email"])[1]').type('qakyhu@imagepoet.net')
        cy.xpath('(//input[@name ="password"])[1]').type('Abc1234!')
        cy.xpath('//button[text() ="Login"]').click()

        cy.log('Checking offer price.')
        cy.xpath('(//h2[following-sibling::p[contains(text(), "Blue Top")]])[1]')
        .should('be.visible').invoke('text')
        .then(text => {
            if (text== 'Rs. 500'){
                cy.log('Text content is correct.')
            }
            else {
                cy.log('Text content is incorrect.')
            }
        })
    })
});