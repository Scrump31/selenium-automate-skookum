const { expect, assert } = require('chai');

const homePage = require('../page_objects/home');

describe('Google.com', function() {
	it('should open and "Google" is title of homepage', async function() {
		await homePage.open();
		const pageTitle = await homePage.getPageTitle();
		
		assert.strictEqual(pageTitle, 'Google');
	});

	it('should return results for "Skookum" after clicking search button', async function() {
		await homePage.googleSearch('Skookum');
		const searchResultsPageTitle = await homePage.getPageTitle();
		homePage.takeScreenShot();

		expect(searchResultsPageTitle).to.equal('Skookum - Google Search');
	});

	after(async function() {
		await homePage.endTest();
	});
});
