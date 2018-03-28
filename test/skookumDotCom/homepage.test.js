const { assert } = require('chai');

const homePage = require('./page_objects/homepage');

describe('Skookum.com', function() {
	it('should open and "Skookum - Strategy, Design, Development" is title of page', async function() {
		await homePage.open();
		const pageTitle = await homePage.getCurrentPageTitle();

		assert.strictEqual(pageTitle, 'Skookum - Strategy, Design, Development');
	});

	it('navigates user to Contact Page when "Let\'s Work Together" button clicked ', async function() {
		await homePage.clickLetsWorkTogetherBtn();
		const confirmOnContactPage = await homePage.getCurrentPageTitle();

		assert.strictEqual(confirmOnContactPage, 'Skookum - Contact');
	});
    
	it('navigates user to About Page when "Get To Know Us" button clicked ', async function() {
		await homePage.open();
		await homePage.clickGetToKnowUsBtn();
		const confirmOnAboutPage = await homePage.getCurrentPageTitle();

		assert.strictEqual(confirmOnAboutPage, 'Skookum - About');
	});
    
	it('navigates user to Services Page when "View Services" button clicked ', async function() {
		await homePage.open();
		await homePage.clickViewServicesBtn();
		const confirmOnServicesPage = await homePage.getCurrentPageTitle();

		assert.strictEqual(confirmOnServicesPage, 'Skookum - Services');
	});
    
	it('navigates user to Premier Case Study when "Explore the case study" button under Premier Inc. clicked ', async function() {
		await homePage.open();
		await homePage.clickExploreTheCaseStudyPremierBtn();
		const confirmOnPremierPage = await homePage.getCurrentPageTitle();

		assert.strictEqual(confirmOnPremierPage, 'Case Study - Premier Inc');
	});
    
	it('navigates user to Library Case Study when "Explore the case study" button under Charlotte Mecklenburg Library. clicked ', async function() {
		await homePage.open();
		await homePage.clickExploreTheCaseStudyLibraryBtn();
		const confirmOnLibraryPage = await homePage.getCurrentPageTitle();

		assert.strictEqual(confirmOnLibraryPage, 'Case Study - Charlotte Mecklenburg Library');
	});
    
	it('navigates user to High Point Case Study when "Explore the case study" button under High Point Market. clicked ', async function() {
		await homePage.open();
		await homePage.clickExploreTheCaseStudyHighPointBtn();
		const confirmOnHighPointPage = await homePage.getCurrentPageTitle();

		assert.strictEqual(confirmOnHighPointPage, 'Case Study - High Point Market');
	});

	after(async function() {
		await homePage.endTest();
	});
});
