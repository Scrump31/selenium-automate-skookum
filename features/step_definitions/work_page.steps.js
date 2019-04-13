const assert = require('assert');
const { Given, Then } = require('cucumber');

const workpage = require('../../page_objects/workpage');

Given('I am on the Work page', async () => {
	await workpage.openPage('work');
});
Then('the page title should be "Our Work"', async () => {
	assert.strictEqual(workpage.pageTitle, 'Our Work');
});

Given('The work page is loaded', async () => {
	await workpage.openPage('work');
});
Then('randomly clicked work links are rendered', async () => {
	await workpage.verify_Work_Links();
});
