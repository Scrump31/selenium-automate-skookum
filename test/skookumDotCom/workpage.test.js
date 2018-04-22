const { assert } = require('chai');

const workpage = require('../../skookumDotCom/page_objects/workpage');

describe('Skookum.com/work', function() {
	it('should open and "Our Work" is title of page', async function() {
		await workpage.openPage('work');

		assert.strictEqual(workpage.pageTitle, 'Our Work');
	});

	it('navigates user to Premier Inc Work Page when "Learn More" link clicked ', async function() {
		await workpage.openPage('work');
		await workpage.click_premierInc_LearnMore_Link();

		assert.strictEqual(workpage.pageTitle, 'Case Study - Premier Inc');
	});

	it('navigates user to JRi Shocks Work Page when "Learn More" link clicked ', async function() {
		await workpage.openPage('work');
		await workpage.click_Jri_Shocks_Link();

		assert.strictEqual(workpage.pageTitle, 'Case Study - JRi Shocks');
	});

	it('navigates user to Metal Marketing Work Page when "Learn More" link clicked ', async function() {
		await workpage.openPage('work');
		await workpage.click_Metal_Marketing_Link();

		assert.strictEqual(workpage.pageTitle, 'Case Study - Metal Marketing');
	});
	it('navigates user to RJ Reynolds Tobacco Work Page when "Learn More" link clicked ', async function() {
		await workpage.openPage('work');
		await workpage.click_RJ_Reynolds_Tobacco_Link();

		assert.strictEqual(workpage.pageTitle, 'Case Study - RJ Reynolds Tobacco');
	});

	it('navigates user to Coca-Cola Consolidated Work Page when "Learn More" link clicked ', async function() {
		await workpage.openPage('work');
		await workpage.click_cola_Consolidated_Link();

		assert.strictEqual(
			workpage.pageTitle,
			'Case Study - Coca-Cola Consolidated'
		);
	});

	it('navigates user to (EPRI) Work Page when "Learn More" link clicked ', async function() {
		await workpage.openPage('work');
		await workpage.click_Electric_Power_Link();

		assert.strictEqual(
			workpage.pageTitle,
			'Case Study - Electric Power Research Institute (EPRI)'
		);
	});

	it('navigates user to ADAC Automotive Work Page when "Learn More" link clicked ', async function() {
		await workpage.openPage('work');
		await workpage.click_Adac_Automotive_Link();

		assert.strictEqual(workpage.pageTitle, 'Case Study - ADAC Automotive');
	});

	after(async function() {
		await workpage.endTest();
	});
});
