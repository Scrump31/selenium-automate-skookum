const selenium = require('selenium-webdriver');
const webdriver = new selenium.Builder().forBrowser('chrome').build();

module.exports = webdriver;