const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

const driver = new Builder().forBrowser('chrome').build();

describe('ChromeDriver tests', function() {
    it('check "ChromeDriver" title', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const mainTitle = driver.getTitle();
        expect(await mainTitle).to.equal('ChromeDriver');
        
    })

    it('check "Chrome Extensions" title', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const chromeExtencionsButtonNavMenu = await driver.findElement(By.xpath('//*[@id="WDxLfe"]/ul/li[3]/div[1]/div/a'));
        await chromeExtencionsButtonNavMenu.click();
        const mainTitle = driver.getTitle();
        expect(await mainTitle).to.contain('Chrome Extensions');        
    })

    it.only('check search', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const searchButton = await driver.findElement(By.xpath('//div[contains(@class, "Pvc6xe")]/div[2]'));
        await searchButton.click();

        const searchField = await driver.findElement(By.xpath('//div[contains(@class, "Xb9hP")]/input'));
        await driver.wait(until.elementIsVisible(searchField), 2000);
        await searchField.sendKeys('driver');

        const submitSearchButton = await driver.findElement(By.xpath('//div[contains(@class, "U26fgb mUbCce fKz7Od i3PoXe")]/span/span'));
        await submitSearchButton.click();
        await driver.sleep(2000);

        const firstResult = await driver.findElement(By.xpath('//div[contains(@class, "gtazFe")][1]/div/div')).getText();
        expect(await firstResult).to.contain('driver'); 

    })
})