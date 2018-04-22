const { assert } = require('chai');

const workpage = require('../../skookumDotCom/page_objects/workpage');

describe('Skookum.com/work', function() {
	it('should open and "Our Work" is title of page', async function() {
		await workpage.openPage('work');

		assert.strictEqual(workpage.pageTitle, 'Our Work');
	});    
    
	after(async function() {
		await workpage.endTest();
	});
});
