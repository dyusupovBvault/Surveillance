const assert = require('assert');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

var driver;
// Explicitly point to the chromedriver executable, because it is not in the system PATH
var service = new chrome.ServiceBuilder('node_modules\\chromedriver\\bin\\chromedriver.exe').build();
chrome.setDefaultService(service);

describe('Open Door Login Page', async function() {
  this.timeout(30000);

  before(async function() {
    this.timeout(30000);
    driver = await new webdriver.Builder().forBrowser('chrome').build();
    await driver.get('http://trading-uat.opendoorllc.com/');
  });
  
  after(async function() {
    //await driver.quit();
  });
  
  it('Has the expected title value', async function() {
    let promise = await driver.getTitle();
    await assert.equal(promise, 'OpenDoor');
  });
  
  it('Properly enters the Username', async function() {
    let userName = await driver.findElement(webdriver.By.name('username'));
    await userName.sendKeys('TSOXBETA2');
    let enteredText = await userName.getAttribute('value');
    await assert.equal(enteredText, 'TSOXBETA2');
    //await driver.sleep(10000);
  });

  it('Properly enters the Password', async function() {
      let password = await driver.findElement(webdriver.By.name('password'));
      await password.sendKeys('test123');
      let enteredText = await password.getAttribute('value');
      await assert.equal(enteredText, 'test123');
  });

  it('Logs the User In Correctly', async function() {
    let userName = await driver.findElement(webdriver.By.name('username'));
    await userName.sendKeys(webdriver.Key.ENTER);
    await driver.sleep(5000);
    let promise = await driver.getTitle();
    await assert.equal(promise, 'OpenDoor - Auction Matching');
  })

  it('Finds and clicks a menu item called "SCHEDULE"', async function() {
    let button = await driver.findElement(webdriver.By.css('div.left-nav button:nth-of-type(1) span:nth-of-type(1)'));
    let text = await button.getText();
    await assert.equal(text, 'SCHEDULE');
    await button.click();
    await driver.sleep(5000);
  })

  it('Finds and clicks a menu item called "AUCTION"', async function() {
    let auctionText = await driver.findElement(webdriver.By.xpath('//*[@id="root"]/div/div/div/div[2]/div[2]/div[2]/div/div/div/div[2]/div/div[2]/section[1]/div[2]/article[1]/div[2]'))
    await auctionText.click();
    await driver.sleep(5000);  
  })

  it('Finds and clicks the Sell Price', async function() {
    //let sellPrice = await driver.findElement(webdriver.By.xpath('//*[@id="grid-panel"]/div[1]/div/div[3]/div/div/div/div[2]/div[5]'))
    let sellPrice = await driver.findElement(webdriver.By.xpath('//*[@id="grid-panel"]/div[1]/div/div[3]/div/div/div/div[2]/div[3]'))
    await sellPrice.click();  
    await driver.sleep(5000);
  })

  it('Finds and clicks the OFT OUTRIGHT on BUY', async function() {
    let oftrOutright = await driver.findElement(webdriver.By.xpath('/html/body/div[4]/div[2]/ul/div/li'))
    await oftrOutright.click();  
    await driver.sleep(5000);
  })

  it('Finds and types the Size', async function() {
    let size = await driver.findElement(webdriver.By.xpath('/html/body/div[3]/div[2]/div/div/div[2]/div[2]/div[2]/div[1]/div/div/input'))
    //let size = await driver.findElement(webdriver.By.xpath('//*[@id="validTextField-48"]'))
    await size.sendKeys('45');
    await driver.sleep(5000);  
  })

  it('Finds and clicks the Submit Button', async function() {
    let submitButton = await driver.findElement(webdriver.By.xpath('/html/body/div[3]/div[2]/div/div/div[3]/div/div[2]/div[2]/div/button/div[1]'))
    await submitButton.click();
    await driver.sleep(5000);  
  })

  it('Finds and clicks on Place Order Button', async function() {
    let orderButton = await driver.findElement(webdriver.By.xpath('/html/body/div[4]/div[2]/div/div[3]/button[2]/span[1]'))
    await orderButton.click();
    await driver.sleep(5000);  
  })
  
});