describe('Login Logout Demosite', function() {
  before(browser => browser.navigateTo('https://5elementslearning.dev/demosite'));
  it('Login logout Assertion Test', function(browser) {
    browser
    .useXpath() //setting locator to be used as xpath for following commands
    .click('link text', 'My Account') //click on My Account link
    .setValue("//input[@name='email_address']", "abc@demo.com")//set email
    .setValue("//input[@name='password']", "demo@123")//set  password
    .click("//button[@id='tdb5']")//click on Sign in button
    //add object presence assertion
    .assert.elementPresent("//*[contains(text(),'Log Off')]")
    .click('link text', 'Log Off')//click on Log Off link
    .click('link text', 'Continue')// Click on Continue link
    //add object absence assertion
    .assert.not.elementPresent("//*[contains(text(),'Log Off')]")
  });
  after(browser => browser.end());
});
