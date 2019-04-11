const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const footer = require('../../page_objects/footer_page');

Given('I am on the Home page', async () => {
	await footer.openPage();
});
When('I click {string}', async link => {
	await footer.clickLink(link);
});
Then('I am redirected to to {string}', async endPage => {
	assert.strictEqual(footer.pageTitle, endPage);
});
