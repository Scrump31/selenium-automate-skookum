const selenium = require('selenium-webdriver');
const { browserStackUser, browserStackKey } = require('./keys');
/* 
    NOTE: navigate to https://www.browserstack.com/automate/node#configure-capabilities
    to update capabilities object
 */
// Input capabilities
const capabilities = {
	browserName: 'Firefox',
	browser_version: '60.0 beta',
	os: 'OS X',
	os_version: 'High Sierra',
	resolution: '1024x768',
	'browserstack.debug': true,
	project: 'Skookum.com',
	'browserstack.user': browserStackUser,
	'browserstack.key': browserStackKey
};

const bsdriver = new selenium.Builder()
	.usingServer('http://hub-cloud.browserstack.com/wd/hub')
	.withCapabilities(capabilities)
	.build();

module.exports = bsdriver;
