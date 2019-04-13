const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const homePage = require('../../page_objects/homepage');

Given('I navigate to skookum.com', async () => {
	await homePage.openPage();
});
Then(
	'the page title should be Skookum - Strategy, Design, Development',
	async () => {
		assert.strictEqual(
			homePage.pageTitle,
			'Skookum - Strategy, Design, Development',
		);
	},
);

Given('I\'m on the Home page', async () => {
	await homePage.openPage();
});
When('I select {string}', async btn => {
	await homePage.clickButton(btn);
});
Then('I\'m navigated to {string}', async endPage => {
	assert.strictEqual(homePage.pageTitle, endPage);
});
