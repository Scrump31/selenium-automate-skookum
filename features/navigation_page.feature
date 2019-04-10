Feature: Nav Bar
  A Navigation bar for all pages

  Scenario Outline: A user can navigate to various pages using the nav bar
    Given I am on the Home Page
    When the "<page>" link is clicked
    Then I am navigated to the "<result>" Page

    Examples:
      | page     | result                                  |
      | skookum  | Skookum - Strategy, Design, Development |
      | services | Skookum - Services                      |
      | work     | Our Work                                |
      | blog     | Our Blog                                |
      | events   | Skookum - Events                        |
      | about    | Skookum - About                         |
      | contact  | Contact Us \| Skookum                   |