const By = require('selenium-webdriver').By;
const BasePage = require('./base_page');

// Locators
const _letsWorkTogetherBtn = '.page-header__content [href="/contact"]';
const _getToKnowUsBtn = '.intro__markdown [href="/about"]';
const _viewServicesBtn = '.services__link';
const _exploreTheCaseStudyPremierBtn = '[href="/case-study/premier"]';
const _exploreTheCaseStudyLibraryBtn = '[href="/case-study/charlotte-library"]';
const _exploreTheCaseStudyHighPointBtn = '[href="/case-study/high-point"]';

class HomePage extends BasePage {
	constructor(driver) {
		super(driver);
	}

	// Getter Methods
	getLetsWorkTogetherBtn() {
		return this.driver.findElement(By.css(_letsWorkTogetherBtn));
	}
	getGetToKnowUsBtn() {
		return this.driver.findElement(By.css(_getToKnowUsBtn));
	}
	getViewServicesBtn(){
		return this.driver.findElement(By.css(_viewServicesBtn));
	}
	getExploreTheCaseStudyPremierBtn(){
		return this.driver.findElement(By.css(_exploreTheCaseStudyPremierBtn));
	}
	getExploreTheCaseStudyLibraryBtn(){
		return this.driver.findElement(By.css(_exploreTheCaseStudyLibraryBtn));
	}
	getExploreTheCaseStudyHighPointBtn(){
		return this.driver.findElement(By.css(_exploreTheCaseStudyHighPointBtn));
	}

	// Action Methods	
	async clickLetsWorkTogetherBtn() {
		this.getLetsWorkTogetherBtn().click();
		await this.verifyPageUpdatedTo('contact');
	}
    
	async clickGetToKnowUsBtn() {
		this.getGetToKnowUsBtn().click();
		await this.verifyPageUpdatedTo('about');
	}
    
	async clickViewServicesBtn() {
		this.getViewServicesBtn().click();
		await this.verifyPageUpdatedTo('services');
	}
    
	async clickExploreTheCaseStudyPremierBtn() {
		this.getExploreTheCaseStudyPremierBtn().click();
		await this.verifyPageUpdatedTo('premier');
	}
    
	async clickExploreTheCaseStudyLibraryBtn() {
		this.getExploreTheCaseStudyLibraryBtn().click();
		await this.verifyPageUpdatedTo('library');
	}
    
	async clickExploreTheCaseStudyHighPointBtn() {
		this.getExploreTheCaseStudyHighPointBtn().click();
		await this.verifyPageUpdatedTo('high-point');
	}
}
const homePage = new HomePage();

module.exports = homePage;
