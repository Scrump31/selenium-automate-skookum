const { assert } = require('chai');

const workpage = require('../../skookumDotCom/page_objects/workpage');

describe('Skookum.com/work', function() {
	it('should open and "Our Work" is title of page', async function() {
		await workpage.openPage('work');

		assert.strictEqual(workpage.pageTitle, 'Our Work');
	});

	it.only('navigates to Work Pages when "Learn More" links clicked ', async function() {
		await workpage.openPage('work');
		await workpage.verify_Work_Links();
	});

	after(async function() {
		await workpage.endTest();
	});
});
