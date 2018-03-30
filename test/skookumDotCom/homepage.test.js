const { assert } = require('chai');

const page = require('./page_objects/homepage');

describe('Skookum.com', function() {
	it('should open and "Skookum - Strategy, Design, Development" is title of page', async function() {
		await page.open();
		
		assert.strictEqual(page.pageTitle, 'Skookum - Strategy, Design, Development');
	});

	it('navigates user to Contact Page when "Let\'s Work Together" button clicked ', async function() {
		await page.open();
		await page.clickLetsWorkTogetherBtn();

		assert.strictEqual(page.pageTitle, 'Skookum - Contact');
	});
    
	it('navigates user to About Page when "Get To Know Us" button clicked ', async function() {
		await page.open();
		await page.clickGetToKnowUsBtn();

		assert.strictEqual(page.pageTitle, 'Skookum - About');
	});
    
	it('navigates user to Services Page when "View Services" button clicked ', async function() {
		await page.open();
		await page.clickViewServicesBtn();

		assert.strictEqual(page.pageTitle, 'Skookum - Services');
	});
    
	it('navigates user to Premier Case Study when "Explore the case study" button under Premier Inc. clicked ', async function() {
		await page.open();
		await page.clickExploreTheCaseStudyPremierBtn();

		assert.strictEqual(page.pageTitle, 'Case Study - Premier Inc');
	});
    
	it('navigates user to Library Case Study when "Explore the case study" button under Charlotte Mecklenburg Library. clicked ', async function() {
		await page.open();
		await page.clickExploreTheCaseStudyLibraryBtn();

		assert.strictEqual(page.pageTitle, 'Case Study - Charlotte Mecklenburg Library');
	});
    
	it('navigates user to High Point Case Study when "Explore the case study" button under High Point Market. clicked ', async function() {
		await page.open();
		await page.clickExploreTheCaseStudyHighPointBtn();

		assert.strictEqual(page.pageTitle, 'Case Study - High Point Market');
	});

	after(async function() {
		await page.endTest();
	});
});
