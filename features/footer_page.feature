@footer
Feature: Footer
  The Footer Component

  Scenario Outline: A user can click links to navigate to external pages
    Given I am on the Home page
    When I click "<link>"
    Then I am redirected to to "<result>"

    Examples:
      | link      | result                                               |
      | careers   | Skookum - Careers                                    |
      | github    | Skookum · GitHub                                     |
      | privacy   | Skookum - Privacy Policy                             |
      | contact   | Contact Us \| Skookum                                |
      | twitter   | Skookum (@Skookum) \| Twitter                        |
      | facebook  | Skookum - Home \| Facebook                           |
      | linkedIn  | Skookum \| LinkedIn                                  |
      | dribbble  | Skookum \| Dribbble                                  |
      | instagram | Skookum (@skookum_inc) • Instagram photos and videos |


