const { assert } = require('chai');

const homepage = require('../page_objects/homepage');

describe('Skookum.com', function() {
	it('should open and "Skookum - Strategy, Design, Development" is title of page', async function() {
		await homepage.openPage();

		assert.strictEqual(homepage.pageTitle, 'Skookum - Strategy, Design, Development');
	});

	it('navigates user to Contact Page when "Let\'s Work Together" button clicked', async function() {
		await homepage.openPage();
		await homepage.clickLetsWorkTogetherBtn();

		assert.strictEqual(homepage.pageTitle, 'Contact Us | Skookum');
	});
    
	it('navigates user to About Page when "Get To Know Us" button clicked', async function() {
		await homepage.openPage();
		await homepage.clickGetToKnowUsBtn();

		assert.strictEqual(homepage.pageTitle, 'Skookum - About');
	});
    
	it('navigates user to Services Page when "View Services" button clicked', async function() {
		await homepage.openPage();
		await homepage.clickViewServicesBtn();

		assert.strictEqual(homepage.pageTitle, 'Skookum - Services');
	});
    
	it('navigates user to Premier Case Study when "Explore the case study" button under Premier Inc. clicked', async function() {
		await homepage.openPage();
		await homepage.clickExploreTheCaseStudyPremierBtn();

		assert.strictEqual(homepage.pageTitle, 'Case Study - Premier Inc');
	});
    
	it('navigates user to Library Case Study when "Explore the case study" button under Charlotte Mecklenburg Library. clicked', async function() {
		await homepage.openPage();
		await homepage.clickExploreTheCaseStudyLibraryBtn();

		assert.strictEqual(homepage.pageTitle, 'Case Study - Charlotte Mecklenburg Library');
	});
    
	it('navigates user to High Point Case Study when "Explore the case study" button under High Point Market. clicked', async function() {
		await homepage.openPage();
		await homepage.clickExploreTheCaseStudyHighPointBtn();

		assert.strictEqual(homepage.pageTitle, 'Case Study - High Point Market');
	});

	after(async function() {
		await homepage.endTest();
	});
});
