const By = require('selenium-webdriver').By;
const BasePage = require('./base_page');
const _ = require('lodash');

const _workLinks = [
	{ h2: 'Service Pros', slug: 'service-pros' },
	{ h2: 'High Point Market', slug: 'high-point' },
	{
		h2: 'Charlotte Mecklenburg Library',
		slug: 'charlotte-mecklenburg-library',
	},
	{
		h2: 'Premier Inc: Technology That’s Transforming Healthcare',
		slug: 'premier',
	},
	{ h2: 'Coca-Cola Consolidated', slug: 'coca-cola' },
	{ h2: 'Electric Power Research Institute (EPRI)', slug: 'epri' },
	{ h2: 'ADAC Automotive', slug: 'adac-automotive' },
];
class WorkPage extends BasePage {
	constructor(driver) {
		super(driver);
	}

	async verify_Work_Links() {
		const rand = _.random(_workLinks.length - 1);
		const link = _workLinks[rand];
		await this.driver
			.findElement(By.xpath(`//h2[text()="${link.h2}"]`))
			.click();
		await this.verifyPageUpdatedTo(link.slug);
	}
}

const workPage = new WorkPage();

module.exports = workPage;
