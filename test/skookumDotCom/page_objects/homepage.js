const By = require('selenium-webdriver').By;

const BasePage = require('./base_page');

const letsWorkTogetherBtn = By.css('.page-header__content [href]');
const getToKnowUsBtn = By.css('.intro__markdown [href]');
const viewServicesBtn = By.css('.services__link');
const exploreTheCaseStudyPremierBtn = By.css('[href="/case-study/premier"]');
const exploreTheCaseStudyLibraryBtn = By.css('[href="/case-study/charlotte-library"]');
const exploreTheCaseStudyHighPointBtn = By.css('[href="/case-study/high-point"]');


class HomePage extends BasePage {
	constructor(driver) {
		super(driver);
	}

	async open() {
		return this.driver.get('http://skookum.com');
	}
    
	async clickLetsWorkTogetherBtn() {
		return this.driver.findElement(letsWorkTogetherBtn).click();
	}
    
	async clickGetToKnowUsBtn() {
		return this.driver.findElement(getToKnowUsBtn).click();
	}
    
	async clickViewServicesBtn() {
		return this.driver.findElement(viewServicesBtn).click();
	}
    
	async clickExploreTheCaseStudyPremierBtn() {
		return this.driver.findElement(exploreTheCaseStudyPremierBtn).click();
	}
    
	async clickExploreTheCaseStudyLibraryBtn() {
		return this.driver.findElement(exploreTheCaseStudyLibraryBtn).click();
	}
    
	async clickExploreTheCaseStudyHighPointBtn() {
		return this.driver.findElement(exploreTheCaseStudyHighPointBtn).click();
	}
}
const homePage = new HomePage();

module.exports = homePage;
