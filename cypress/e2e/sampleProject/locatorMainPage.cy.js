// This file contains xpaths of html elements.

const mainPage = {
    
    // Login Page
    textLogin: '//a[text() =" Signup / Login"]',
    inputEmail: '(//input[@name ="email"])[1]',
    inputPassword:'(//input[@name ="password"])[1]',
    buttonLogin: '//button[text() ="Login"]',

    // Items Page
    textBlueTopPrice: '(//h2[following-sibling::p[contains(text(), "Blue Top")]])[1]',
    buttonBlueTopAddBasket: '(//h2[following-sibling::p[contains(text(), "Blue Top")]])[1]/following-sibling::a',
    
    textAdded: '//*[text()="Added!"]',
    buttonContinueShopping: '//*[text()="Continue Shopping"]'
};
  
  export default mainPage;