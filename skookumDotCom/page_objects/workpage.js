const By = require('selenium-webdriver').By;
const BasePage = require('./base_page');

// Locators
const _premierInc_LearnMore_Link = '//h2[text()="Premier Inc: Technology That’s Transforming Healthcare"]';
const _jri_Shocks_Link = '//h2[text()="JRi Shocks"]';
const _metal_Marketing_Link = '//h2[text()="Metal Marketing"]';
const _rj_Reynolds_Tobacco_Link = '//h2[text()="RJ Reynolds Tobacco"]';
const _cola_Consolidated_Link = '//h2[text()="Coca-Cola Consolidated"]';
const _electric_Power_Link = '//h2[text()="Electric Power Research Institute (EPRI)"]';
const _adac_Automotive = '//h2[text()="ADAC Automotive"]';

class WorkPage extends BasePage {
	constructor(driver) {
		super(driver);
	}

	// Getter Methods
	getPremierInc_LearnMore_Link(){
		return this.driver.findElement(By.xpath(_premierInc_LearnMore_Link));
	}
	getJri_Shocks_Link(){
		return this.driver.findElement(By.xpath(_jri_Shocks_Link));
	}
	getMetal_Marketing_Link(){
		return this.driver.findElement(By.xpath(_metal_Marketing_Link));
	}


	// Action Methods	
	async click_premierInc_LearnMore_Link() {
		this.getPremierInc_LearnMore_Link().click();
		await this.verifyPageUpdatedTo('premier');
	}

	async click_Jri_Shocks_Link() {
		this.getJri_Shocks_Link().click();
		await this.verifyPageUpdatedTo('jri-shocks');
	}

	async click_Metal_Marketing_Link() {
		this.getMetal_Marketing_Link().click();
		await this.verifyPageUpdatedTo('metal-marketing');
	}
}

const workPage = new WorkPage();

module.exports = workPage;
