const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const navBar = require('../../page_objects/navigation_page.js');

Given('I am on the Home Page', async () => {
	await navBar.openPage();
});
When('the {string} link is clicked', async link => {
	await navBar.clickLink(link);
});
Then('I am navigated to the {string} Page', async (endPage) => {
	assert.strictEqual(navBar.pageTitle, endPage);
});

