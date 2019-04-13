const By = require('selenium-webdriver').By;
const BasePage = require('./base_page');

// Locators
const buttons = {
	contact: '.page-header__content [href="/contact"]', // "Work Together"
	about: '.intro__markdown [href="/about"]', // Get To Know Us
	services: '.services__link',
	premier: '[href="/case-study/premier"]',
	'charlotte-mecklenburg-library': '[href="/case-study/charlotte-mecklenburg-library"]',
	'high-point': '[href="/case-study/high-point"]'
};
class HomePage extends BasePage {
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
const homePage = new HomePage();

module.exports = homePage;
