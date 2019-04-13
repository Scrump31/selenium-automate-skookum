@work
Feature: Work
  The Skookum Work Page

  Scenario: A user can open Skookum.com/work
    Given I am on the Work page
    Then the page title should be "Our Work"

  Scenario: A user can navigate to Work Pages when "Learn More" Links are clicked
    Given The work page is loaded
    Then randomly clicked work links are rendered

