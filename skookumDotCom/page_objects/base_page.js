/*eslint no-console: "off"*/
const fs = require('fs');
const until = require('selenium-webdriver/lib/until');

const webdriver = require('../../index');
class BasePage {
	constructor() {
		this.driver = webdriver;
		this.pageTitle;
	}
	async openPage(url) {
		const base = 'https://skookum.com/';

		switch (url) {
		case 'home'.toLowerCase():
			url = base;
			break;
		case 'services'.toLowerCase():
			url = `${base}/services`;
			break;
		case 'work'.toLowerCase():
			url = `${base}/work`;
			break;
		case 'blog'.toLowerCase():
			url = `${base}/blog`;
			break;
		case 'events'.toLowerCase():
			url = `${base}/events`;
			break;
		case 'about'.toLowerCase():
			url = `${base}/about`;
			break;
		case 'contact'.toLowerCase():
			url = `${base}/contact`;
			break;
		default:
			url = base;
			break;
		}
		this.driver.get(url);
		this.driver
			.manage()
			.window()
			.maximize();
		this.pageTitle = await this.getCurrentPageTitle();
	}

	async verifyPageUpdatedTo(page) {
		this.driver.wait(until.urlContains(page.toLowerCase()), 3000);
		this.pageTitle = await this.getCurrentPageTitle();
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
		// https://github.com/cucumber/cucumber-js/issues/709#issuecomment-440260870
		return this.driver = null;
	}
}

module.exports = BasePage;
