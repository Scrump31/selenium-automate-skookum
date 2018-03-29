const env = process.env.NODE_ENV || 'local';
let webdriver;
if (env === 'browserstack') {
	webdriver = require('./config/browserstack');
} else {
	webdriver = require('./config/local');
}
module.exports = webdriver;