const By = require('selenium-webdriver').By;
const BasePage = require('./base_page');

// Locators
const _our_story_button = 'a[href="/story"]';
const _view_openings_button = '.about-cta__content [href="/careers"]';

class AboutPage extends BasePage {
	constructor(driver) {
		super(driver);
	}

	// Getter Methods
	getOurStory_Button() {
		return this.driver.findElement(By.css(_our_story_button));
	}

	getViewOpenings_Button() {
		return this.driver.findElement(By.css(_view_openings_button));
	}

	// Action Methods
	async click_OurStory_Button() {
		this.getOurStory_Button().click();
		await this.verifyPageUpdatedTo('story');
	}

	async click_ViewOpenings_Button() {
		this.getViewOpenings_Button().click();
		await this.verifyPageUpdatedTo('careers');
	}
}

const aboutPage = new AboutPage();

module.exports = aboutPage;
