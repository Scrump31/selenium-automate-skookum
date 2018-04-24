const { assert } = require('chai');

const footer = require('../../skookumDotCom/page_objects/footer_page');

describe('Skookum.com Footer', function() {
	it('navigates user to Careers Page when "Careers" link clicked ', async function() {
		await footer.openPage();
		await footer.click_getCareers_Link();

		assert.strictEqual(footer.pageTitle, 'Skookum - Careers');
	});

	it('navigates user to Skookum Github Page when "Open Source" link clicked ', async function() {
		await footer.openPage();
		await footer.click_getOpenSource_Link();

		assert.strictEqual(footer.pageTitle, 'Skookum · GitHub');
	});
	it('navigates user to Privacy Page when "Privacy Policy" link clicked ', async function() {
		await footer.openPage();
		await footer.click_getPrivacyPolicy_Link();

		assert.strictEqual(footer.pageTitle, 'Skookum - Privacy Policy');
	});
	it('navigates user to Contact Page when "Contact Us" link clicked ', async function() {
		await footer.openPage();
		await footer.click_ContactUs_Link();

		assert.strictEqual(footer.pageTitle, 'Skookum - Contact');
	});
	it('navigates user to Skookum Facebook Page when "Facebook" link clicked ', async function() {
		await footer.openPage();
		await footer.click_Facebook_Link();

		assert.strictEqual(footer.pageTitle, 'Skookum - Home | Facebook');
	});

	it('navigates user to Skookum LinkedIn Page when "LinkedIn" link clicked ', async function() {
		await footer.openPage();
		await footer.click_LinkedIn_Link();

		assert.strictEqual(footer.pageTitle, 'Skookum | LinkedIn');
	});
	it('navigates user to Skookum Twitter Page when "Twitter" link clicked ', async function() {
		await footer.openPage();
		await footer.click_Twitter_Link();

		assert.strictEqual(footer.pageTitle, 'Skookum (@Skookum) | Twitter');
	});
	it('navigates user to Skookum Dribbble Page when "Dribbble" link clicked ', async function() {
		await footer.openPage();
		await footer.click_Dribbble_Link();

		assert.strictEqual(footer.pageTitle, 'Skookum - Dribbble');
	});
	it('navigates user to Skookum Instagram Page when "Instagram" link clicked ', async function() {
		await footer.openPage();
		await footer.click_Instagram_Link();

		assert.strictEqual(
			footer.pageTitle,
			'Skookum (@skookuminc) • Instagram photos and videos'
		);
	});

	after(async function() {
		await footer.endTest();
	});
});
