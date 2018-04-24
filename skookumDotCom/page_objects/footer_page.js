const By = require('selenium-webdriver').By;
const BasePage = require('./base_page');

// Locators
const _careers_link = 'a.footer__link[href="/careers"]';
const _open_source_link = 'a.footer__link[href="https://github.com/Skookum"]';
const _privacy_policy_link = 'a.footer__link[href="/privacy"]';
const _contact_us_link = 'a.footer__link[href="/contact"]';
const _twitter_link = 'a.footer__link[href="https://twitter.com/skookum"]';
const _facebook_link = 'a.footer__link[href="https://facebook.com/SkookumInc"]';
const _linkedIn_link =
	'a.footer__link[href="https://www.linkedin.com/company/skookum/"]';
const _dribbble_link = 'a.footer__link[href="http://dribbble.com/skookum"]';
const _instagram_link =
	'a.footer__link[href="http://instagram.com/skookuminc"]';

class Footer extends BasePage {
	constructor(driver) {
		super(driver);
	}

	// Getter Methods
	getCareers_link() {
		return this.driver.findElement(By.css(_careers_link));
	}
	getOpen_source_link() {
		return this.driver.findElement(By.css(_open_source_link));
	}
	getPrivacy_policy_link() {
		return this.driver.findElement(By.css(_privacy_policy_link));
	}
	getContact_us_link() {
		return this.driver.findElement(By.css(_contact_us_link));
	}
	getFacebook_link() {
		return this.driver.findElement(By.css(_facebook_link));
	}
	getLinkedIn_link() {
		return this.driver.findElement(By.css(_linkedIn_link));
	}

	getTwitter_link() {
		return this.driver.findElement(By.css(_twitter_link));
	}

	getDribbble_link() {
		return this.driver.findElement(By.css(_dribbble_link));
	}
	getInstagram_link() {
		return this.driver.findElement(By.css(_instagram_link));
	}

	// Action Methods
	async click_getCareers_Link() {
		this.getCareers_link().click();
		await this.verifyPageUpdatedTo('careers');
	}
	async click_getOpenSource_Link() {
		this.getOpen_source_link().click();
		await this.verifyPageUpdatedTo('github');
	}
	async click_getPrivacyPolicy_Link() {
		this.getPrivacy_policy_link().click();
		await this.verifyPageUpdatedTo('privacy');
	}
	async click_ContactUs_Link() {
		this.getContact_us_link().click();
		await this.verifyPageUpdatedTo('contact');
	}
	async click_Facebook_Link() {
		this.getFacebook_link().click();
		await this.verifyPageUpdatedTo('facebook');
	}
	async click_LinkedIn_Link() {
		this.getLinkedIn_link().click();
		await this.verifyPageUpdatedTo('linkedin');
	}
	async click_Twitter_Link() {
		this.getTwitter_link().click();
		await this.verifyPageUpdatedTo('twitter');
	}
	async click_Dribbble_Link() {
		this.getDribbble_link().click();
		await this.verifyPageUpdatedTo('dribbble');
	}
	async click_Instagram_Link() {
		this.getInstagram_link().click();
		await this.verifyPageUpdatedTo('instagram');
	}
}

const footer = new Footer();

module.exports = footer;
