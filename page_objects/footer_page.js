const By = require('selenium-webdriver').By;
const BasePage = require('./base_page');

// Locators
const footerLinks = {
	careers: 'a.footer__link[href="/careers"]',
	github: 'a.footer__link[href="https://github.com/Skookum"]',
	privacy: 'a.footer__link[href="/privacy"]',
	contact: 'a.footer__link[href="/contact"]',
	twitter: 'a.footer__link[href="https://twitter.com/Skookum"]',
	facebook: 'a.footer__link[href="https://www.facebook.com/SkookumInc/"]',
	linkedIn: 'a.footer__link[href="https://www.linkedin.com/company/skookum/"]',
	dribbble: 'a.footer__link[href="https://dribbble.com/skookum"]',
	instagram: 'a.footer__link[href="https://www.instagram.com/skookum_inc/"]',
};

class Footer extends BasePage {
	constructor(driver) {
		super(driver);
	}

	getLink(link) {
		return this.driver.findElement(By.css(footerLinks[link]));
	}
	async clickLink(link) {
		await this.getLink(link).click();
		await this.verifyPageUpdatedTo(link);
	}
}

const footer = new Footer();

module.exports = footer;
