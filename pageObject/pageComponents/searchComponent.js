const { Builder, By, until } = require('selenium-webdriver');
const BasePage = require('../basePage');

class SearchComponent extends BasePage {
    get chromeExtencionsButtonNavMenu() {
        return driver.findElement(By.xpath('//*[@id="WDxLfe"]/ul/li[3]/div[1]/div/a'))
    }

    get searchButton() {
        return driver.findElement(By.xpath('//div[contains(@class, "Pvc6xe")]/div[2]'))
    }

    get searchField() {
        return driver.findElement(By.xpath('//div[contains(@class, "Xb9hP")]/input'))
    }

    get submitSearchButton() {
        return driver.findElement(By.xpath('//div[contains(@class, "U26fgb mUbCce fKz7Od i3PoXe")]/span/span'))
    }

    get firstResult() {
        return driver.findElement(By.xpath('//div[contains(@class, "gtazFe")][1]/div/div'))
    }
}

module.exports = SearchComponent