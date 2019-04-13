@home
Feature: Home
  The Skookum Home Page

  Scenario: A user can open Skookum.com
    Given I navigate to skookum.com
    Then the page title should be Skookum - Strategy, Design, Development

  Scenario Outline: A user can navigate to various sections of the site
    Given I'm on the Home page
    When I select "<button>"
    Then I'm navigated to "<result>"

    Examples:
      | button                        | result                                     |
      | contact                  | Contact Us \| Skookum                      |
      | about                         | Skookum - About                            |
      | services                      | Skookum - Services                         |
      | premier                       | Case Study - Premier Inc                   |
      | charlotte-mecklenburg-library | Case Study - Charlotte Mecklenburg Library |
      | high-point                    | Case Study - High Point Market             |


