const { assert } = require('chai');

const aboutpage = require('../page_objects/aboutpage');

describe('Skookum.com/about', function() {
	it('should open and "Skookum - About" is title of page', async function() {
		await aboutpage.openPage('about');

		assert.strictEqual(aboutpage.pageTitle, 'Skookum - About');
	});

	it('navigates user to Our Story Page when "Our Story" button is clicked', async function() {
		await aboutpage.openPage('about');
		await aboutpage.click_OurStory_Button();

		assert.strictEqual(aboutpage.pageTitle, 'Skookum - Our Story');
	});

	it('navigates user to Careers Page when "View Openings" button is clicked', async function() {
		await aboutpage.openPage('about');
		await aboutpage.click_ViewOpenings_Button();

		assert.strictEqual(aboutpage.pageTitle, 'Skookum - Careers');
	});

	after(async function() {
		await aboutpage.endTest();
	});
});
