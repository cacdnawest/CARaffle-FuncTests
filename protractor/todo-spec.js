describe('The Modern Software Factory Demo UI Test - NA West', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://nawest-preprod.cdbu.io');
    element(by.css('[name="name"]')).sendKeys('Selenium Test User');
    element(by.buttonText('I\'m In!')).click();
    });
});
