# Selenium-automate-skookum

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This project is a creation of UI Automated smoke tests against the 2018 version of [Skookum.com](https://skookum.com/) This project was not build without direct access to the site's repo, so selectors used may be considered "brittle".


## Getting Started

To get started, clone the repo and `npm install` dependencies.

## Running the tests

To execute the tests, simply use `npm test`. By default, tests will run in Chome browser. If you want to execute tests in Firefox use: `npm run test:firefox`.  

## Organization

Tests are written starting with a `.feature` file that maps to a `.steps.js` file for each feature. Selectors and methods for each page is creating using the [Page Object Model](https://www.seleniumhq.org/docs/06_test_design_considerations.jsp#page-object-design-pattern) style.
 

## Built With

*  [Cucumber]([https://docs.cucumber.io/](https://docs.cucumber.io/))

*  [Selenium]([https://github.com/SeleniumHQ/selenium](https://github.com/SeleniumHQ/selenium))

*  [Node.js]([https://github.com/nodejs/node](https://github.com/nodejs/node))

*  [Commitizen]([http://commitizen.github.io/cz-cli/](http://commitizen.github.io/cz-cli/)) - Using Conventional Commits specification