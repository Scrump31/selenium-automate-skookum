@about
Feature: About Page
  The Skookum About Page

  Scenario Outline: A user can navigate to "Our Story" and "Careers" Pages
    Given I am on the About page
    When I click the "<button>" button
    Then I am navigated to "<result>"

    Examples:
      | button  | result              |
      | story   | Skookum - Our Story |
      | careers | Skookum - Careers   |


