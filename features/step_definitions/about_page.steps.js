const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const aboutPage = require('../../page_objects/aboutpage');

Given('I am on the About page', async () => {
	await aboutPage.openPage('about');
});
When('I click the {string} button', async button => {
	await aboutPage.clickButton(button);
});
Then('I am navigated to {string}', async (endPage) => {
	assert.strictEqual(aboutPage.pageTitle, endPage);
});
