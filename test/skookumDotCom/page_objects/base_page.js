/*eslint no-console: "off"*/
const fs = require('fs');

const webdriver = require('../../../index');
class BasePage {
	constructor() {
		this.driver = webdriver;
		this.pageTitle;
	}

	async getCurrentPageTitle() {
		return this.driver.getTitle();
	}

	async takeScreenShot() {
		const screenShot = await this.driver.takeScreenshot();
		return fs.writeFile('search-results.png', screenShot, 'base64', err =>
			console.error(err)
		);
	}

	async endTest() {
		return this.driver.quit();
	}
}

module.exports = BasePage;
