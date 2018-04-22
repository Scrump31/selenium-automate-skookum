const By = require('selenium-webdriver').By;
const BasePage = require('./base_page');

// Locators
const _premierInc_LearnMore_Link = '.project__tile:nth-of-type(1) .project__cta';

class WorkPage extends BasePage {
	constructor(driver) {
		super(driver);
	}

	// Getter Methods
	getPremierInc_LearnMore_Link(){
		return this.driver.findElement(By.css(_premierInc_LearnMore_Link));
	}

	// Action Methods	
    
	async clickPremierInc_LearnMore_Link() {
		this.getPremierInc_LearnMore_Link().click();
		await this.verifyPageUpdatedTo('premier');
	}
    
}
const workPage = new WorkPage();

module.exports = workPage;
