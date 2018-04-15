const By = require('selenium-webdriver').By;
const until = require('selenium-webdriver/lib/until');
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
	async open() {
		this.driver.get('http://skookum.com');
		this.driver.manage().window().maximize();
		this.pageTitle = await this.getCurrentPageTitle();	
	}
	
	async clickLetsWorkTogetherBtn() {
		this.getLetsWorkTogetherBtn().click();
		this.driver.wait(until.urlContains('contact'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
    
	async clickGetToKnowUsBtn() {
		this.getGetToKnowUsBtn().click();
		this.driver.wait(until.urlContains('about'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
    
	async clickViewServicesBtn() {
		this.getViewServicesBtn().click();
		this.driver.wait(until.urlContains('services'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
    
	async clickExploreTheCaseStudyPremierBtn() {
		this.getExploreTheCaseStudyPremierBtn().click();
		this.driver.wait(until.urlContains('premier'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
    
	async clickExploreTheCaseStudyLibraryBtn() {
		this.getExploreTheCaseStudyLibraryBtn().click();
		this.driver.wait(until.urlContains('library'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
    
	async clickExploreTheCaseStudyHighPointBtn() {
		this.getExploreTheCaseStudyHighPointBtn().click();
		this.driver.wait(until.urlContains('high-point'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
}
const homePage = new HomePage();

module.exports = homePage;
