/*eslint no-console: "off"*/
const fs = require('fs');
const selenium = require('selenium-webdriver');
const webdriver = new selenium.Builder().forBrowser('chrome').build();

const By = require('selenium-webdriver').By;

const searchField = By.id('lst-ib');
const submitBtn = By.css('[value="Google Search"]');

class HomePage {
	constructor() {
		this.driver = webdriver;
	}

	async open() {
		return this.driver.get('http://google.com');
	}

	async googleSearch(searchText) {
		await this.driver.findElement(searchField).sendKeys(searchText);
		await this.driver.findElement(submitBtn).submit();
	}

	async getPageTitle() {
		return this.driver.getTitle();
	}

	async takeScreenShot() {
		const screenShot = await this.driver.takeScreenshot();
		return fs.writeFile(
			'search-results.png',
			screenShot,
			'base64',
			err => console.error(err)
		);
	}

	async endTest() {
		return this.driver.quit();
	}
}
const homePage = new HomePage();

module.exports = homePage;
