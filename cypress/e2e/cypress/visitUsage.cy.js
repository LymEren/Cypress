
// Describe bizim test suiteimiz
describe('Temel Komutlar', () => {
    // her bir it ise testcase oluyor 
    it('Temel Komutlar cy.visit kullanimi', () => {
        cy.visit("/commands") // Base url tanımlandıysa config jsin icinde tanımlanıyor
        cy.visit('https://example.cypress.io/commands') 
    });
});