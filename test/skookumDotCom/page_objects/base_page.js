/*eslint no-console: "off"*/
const fs = require('fs');
const selenium = require('selenium-webdriver');
const webdriver = new selenium.Builder().forBrowser('chrome').build();

//const By = require('selenium-webdriver').By;


class BasePage {
	constructor() {
		this.driver = webdriver;
	}

	async getCurrentPageTitle() {
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

module.exports = BasePage;
