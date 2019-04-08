const { assert } = require('chai');

const navBar = require('../../skookumDotCom/page_objects/navigation_page');

describe('Skookum.com Navigation Bar', function() {
	it('Opens skookum.com and navigates user to Home Page when "Skookum Logo" is clicked', async function() {
		await navBar.openPage();
		await navBar.click_logo_Link();

		assert.strictEqual(
			navBar.pageTitle,
			'Skookum - Strategy, Design, Development'
		);
	});
	it('navigates user to Services Page when "Services" link is clicked', async function() {
		await navBar.click_services_Link();

		assert.strictEqual(navBar.pageTitle, 'Skookum - Services');
	});
	it('navigates user to Work Page when "Work" link is clicked', async function() {
		await navBar.click_work_Link();

		assert.strictEqual(navBar.pageTitle, 'Our Work');
	});
	it('navigates user to Blog Page when "Blog" link is clicked', async function() {
		await navBar.click_blog_Link();

		assert.strictEqual(navBar.pageTitle, 'Our Blog');
	});
	it('navigates user to Events Page when "Events" link is clicked', async function() {
		await navBar.click_events_Link();

		assert.strictEqual(navBar.pageTitle, 'Skookum - Events');
	});
	it('navigates user to About Page when "About" link is clicked', async function() {
		await navBar.click_about_Link();

		assert.strictEqual(navBar.pageTitle, 'Skookum - About');
	});
	it('navigates user to Contact Page when "Contact" link is clicked', async function() {
		await navBar.click_contact_Link();
		
		assert.strictEqual(navBar.pageTitle, 'Contact Us | Skookum');
	});

	after(async function() {
		await navBar.endTest();
	});
});
