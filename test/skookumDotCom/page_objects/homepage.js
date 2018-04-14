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
		this.driver.get('http://skookum.com');
		this.driver.manage().window().maximize();
		this.pageTitle = await this.getCurrentPageTitle();	
	}
    
	async clickLetsWorkTogetherBtn() {
		this.driver.findElement(letsWorkTogetherBtn).click();
		this.driver.wait(until.urlContains('contact'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
    
	async clickGetToKnowUsBtn() {
		this.driver.findElement(getToKnowUsBtn).click();
		this.driver.wait(until.urlContains('about'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
    
	async clickViewServicesBtn() {
		this.driver.findElement(viewServicesBtn).click();
		this.driver.wait(until.urlContains('services'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
    
	async clickExploreTheCaseStudyPremierBtn() {
		this.driver.findElement(exploreTheCaseStudyPremierBtn).click();
		this.driver.wait(until.urlContains('premier'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
    
	async clickExploreTheCaseStudyLibraryBtn() {
		this.driver.findElement(exploreTheCaseStudyLibraryBtn).click();
		this.driver.wait(until.urlContains('library'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
    
	async clickExploreTheCaseStudyHighPointBtn() {
		this.driver.findElement(exploreTheCaseStudyHighPointBtn).click();
		this.driver.wait(until.urlContains('high-point'), 3000);
		this.pageTitle = await this.getCurrentPageTitle();	
	}
}
const homePage = new HomePage();

module.exports = homePage;
