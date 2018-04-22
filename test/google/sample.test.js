const { expect, assert } = require('chai');

const homePage = require('../../google/page_objects/home');

describe('Google.com', function() {
	xit('should open and "Google" is title of homepage', async function() {
		await homePage.open();

		assert.strictEqual(homePage.pageTitle, 'Google');
	});

	it('should return results for "Skookum" after clicking search button', async function() {
		homePage.open();
		
		await homePage.googleSearchFor('Skookum');
		//homePage.takeScreenShot();

		expect(homePage.pageTitle).to.equal('Skookum - Google Search');
	});

	after(function() {
		homePage.endTest();
	});
});
