const By = require('selenium-webdriver').By;
const BasePage = require('./base_page');

// Locators
const navLinks = {
	skookum: 'a[href="/"]',
	services: '.main-nav a[href="/services"]',
	work: '.main-nav a[href="/work"]',
	blog: '.main-nav a[href="/blog"]',
	events: '.main-nav a[href="/events"]',
	about: '.main-nav a[href="/about"]',
	contact: '.main-nav a[href="/contact"]',
};

class NavBar extends BasePage {
	constructor(driver) {
		super(driver);
	}

	getNavLink(link) {
		return this.driver.findElement(By.css(navLinks[link]));
	}
	async clickLink(link) {
		await this.getNavLink(link).click();
		await this.verifyPageUpdatedTo(link);
	}
}

const navBar = new NavBar();

module.exports = navBar;
