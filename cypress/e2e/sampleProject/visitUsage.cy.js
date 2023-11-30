
describe('Main Commands', () => {
    it('Browse website', () => {
        cy.visit('https://automationexercise.com/')
        cy.xpath("//a[text() =' Signup / Login']").click()
        cy.xpath("(//input[@name ='email'])[1]").type('qakyhu@imagepoet.net')
        cy.xpath("(//input[@name ='password'])[1]").type('Abc1234!')
        cy.xpath("//button[text() ='Login']").click()
    })
});