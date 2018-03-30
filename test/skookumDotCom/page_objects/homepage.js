const By = require('selenium-webdriver').By;
const until = require('selenium-webdriver/lib/until');
const BasePage = require('./base_page');

const letsWorkTogetherBtn = By.css('.page-header__content [href="/contact"]');
const getToKnowUsBtn = By.css('.intro__markdown [href="/about"]');
const viewServicesBtn = By.css('.services__link');
const exploreTheCaseStudyPremierBtn = By.css('[href="/case-study/premier"]');
const exploreTheCaseStudyLibraryBtn = By.css('[href="/case-study/charlotte-library"]');
const exploreTheCaseStudyHighPointBtn = By.css('[href="/case-study/high-point"]');


class HomePage extends BasePage {
	constructor(driver) {
		super(driver);
	}

	async open() {
		await this.driver.get('http://skookum.com');
		await this.driver.manage().window().maximize();
		this.pageTitle = await this.getCurrentPageTitle();	
	}
    
	async clickLetsWorkTogetherBtn() {
		await this.driver.findElement(letsWorkTogetherBtn).click();
		await this.driver.wait(until.urlContains('contact'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
    
	async clickGetToKnowUsBtn() {
		await this.driver.findElement(getToKnowUsBtn).click();
		await this.driver.wait(until.urlContains('about'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
    
	async clickViewServicesBtn() {
		await this.driver.findElement(viewServicesBtn).click();
		await this.driver.wait(until.urlContains('services'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
    
	async clickExploreTheCaseStudyPremierBtn() {
		await this.driver.findElement(exploreTheCaseStudyPremierBtn).click();
		await this.driver.wait(until.urlContains('premier'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
    
	async clickExploreTheCaseStudyLibraryBtn() {
		await this.driver.findElement(exploreTheCaseStudyLibraryBtn).click();
		await this.driver.wait(until.urlContains('library'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
    
	async clickExploreTheCaseStudyHighPointBtn() {
		await this.driver.findElement(exploreTheCaseStudyHighPointBtn).click();
		await this.driver.wait(until.urlContains('high-point'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
}
const homePage = new HomePage();

module.exports = homePage;
