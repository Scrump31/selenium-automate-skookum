const By = require('selenium-webdriver').By;
const BasePage = require('./base_page');

// Locators
const buttons = {
	story: 'a[href="/story"]',
	careers: '.about-cta__content [href="/careers"]',
};

class AboutPage extends BasePage {
	constructor(driver) {
		super(driver);
	}

	getButton(button) {
		return this.driver.findElement(By.css(buttons[button]));
	}
	async clickButton(button) {
		await this.getButton(button).click();
		await this.verifyPageUpdatedTo(button);
	}
}

const aboutPage = new AboutPage();

module.exports = aboutPage;
