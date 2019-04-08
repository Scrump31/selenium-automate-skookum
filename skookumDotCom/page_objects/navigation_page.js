const By = require('selenium-webdriver').By;
const BasePage = require('./base_page');

// Locators
const _logo_home_link = 'a[href="/"]';
const _services_link = '.main-nav a[href="/services"]';
const _work_link = '.main-nav a[href="/work"]';
const _blog_link = '.main-nav a[href="/blog"]';
const _events_link = '.main-nav a[href="/events"]';
const _about_link = '.main-nav a[href="/about"]';
const _contact_link = '.main-nav a[href="/contact"]';

class NavBar extends BasePage {
	constructor(driver) {
		super(driver);
	}

	// Getter Methods
	getLogo_link() {
		return this.driver.findElement(By.css(_logo_home_link));
	}
	getServices_link() {
		return this.driver.findElement(By.css(_services_link));
	}
	getWork_link() {
		return this.driver.findElement(By.css(_work_link));
	}
	getBlog_link() {
		return this.driver.findElement(By.css(_blog_link));
	}
	getEvents_link() {
		return this.driver.findElement(By.css(_events_link));
	}
	getAbout_link() {
		return this.driver.findElement(By.css(_about_link));
	}
	getContact_link() {
		return this.driver.findElement(By.css(_contact_link));
	}

	// Action Methods
	async click_logo_Link() {
		await this.getLogo_link().click();
		await this.verifyPageUpdatedTo('skookum');
	}
	async click_services_Link() {
		await this.getServices_link().click();
		await this.verifyPageUpdatedTo('services');
	}
	async click_work_Link() {
		await this.getWork_link().click();
		await this.verifyPageUpdatedTo('work');
	}
	async click_blog_Link() {
		await this.getBlog_link().click();
		await this.verifyPageUpdatedTo('blog');
	}
	async click_events_Link() {
		await this.getEvents_link().click();
		await this.verifyPageUpdatedTo('events');
	}
	async click_about_Link() {
		await this.getAbout_link().click();
		await this.verifyPageUpdatedTo('about');
	}
	async click_contact_Link() {
		await this.getContact_link().click();
		await this.verifyPageUpdatedTo('contact');
	}
}

const navBar = new NavBar();

module.exports = navBar;
