const By = require('selenium-webdriver').By;
const BasePage = require('./base_page');

// Locators
const _premierInc_LearnMore_Link =
	'//h2[text()="Premier Inc: Technology That’s Transforming Healthcare"]';
const _jri_Shocks_Link = '//h2[text()="JRi Shocks"]';
const _metal_Marketing_Link = '//h2[text()="Metal Marketing"]';
const _rj_Reynolds_Tobacco_Link = '//h2[text()="RJ Reynolds Tobacco"]';
const _cola_Consolidated_Link = '//h2[text()="Coca-Cola Consolidated"]';
const _electric_Power_Link =
	'//h2[text()="Electric Power Research Institute (EPRI)"]';
const _adac_Automotive = '//h2[text()="ADAC Automotive"]';

class WorkPage extends BasePage {
	constructor(driver) {
		super(driver);
	}

	// Getter Methods
	getPremierInc_LearnMore_Link() {
		return this.driver.findElement(By.xpath(_premierInc_LearnMore_Link));
	}
	getJri_Shocks_Link() {
		return this.driver.findElement(By.xpath(_jri_Shocks_Link));
	}
	getMetal_Marketing_Link() {
		return this.driver.findElement(By.xpath(_metal_Marketing_Link));
	}

	getRJ_Reynolds_Tobacco_Link() {
		return this.driver.findElement(By.xpath(_rj_Reynolds_Tobacco_Link));
	}

	getcola_Consolidated_Link() {
		return this.driver.findElement(By.xpath(_cola_Consolidated_Link));
	}

	getElectric_Power_Link() {
		return this.driver.findElement(By.xpath(_electric_Power_Link));
	}

	getAdac_Automotive_Link() {
		return this.driver.findElement(By.xpath(_adac_Automotive));
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
	async click_RJ_Reynolds_Tobacco_Link() {
		this.getRJ_Reynolds_Tobacco_Link().click();
		await this.verifyPageUpdatedTo('rj-reynolds');
	}

	async click_cola_Consolidated_Link() {
		this.getcola_Consolidated_Link().click();
		await this.verifyPageUpdatedTo('coca-cola');
	}

	async click_Electric_Power_Link() {
		this.getElectric_Power_Link().click();
		await this.verifyPageUpdatedTo('epri');
	}

	async click_Adac_Automotive_Link() {
		this.getAdac_Automotive_Link().click();
		await this.verifyPageUpdatedTo('adac-automotive');
	}
}

const workPage = new WorkPage();

module.exports = workPage;
