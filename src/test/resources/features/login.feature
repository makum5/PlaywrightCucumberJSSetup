@login
Feature: User Authentication tests

  Background: 
    Given User navigates to the application
    And User click on the login link

    @login1
    Scenario Outline: Login should be success
        And User enter the username as "<Username>"
        And User enter the password as "<Password>"
        When User click on the login button
        Then Login should be success "<Username>"

        Examples:
            | Username   | Password   |
            | 123Test456 | Test@12345 |
            | 123Test789 | Test@12345 |

@login2
  Scenario: Login should not be success
    Given User enter the username as "123Test456"
    Given User enter the password as "incorrect"
    When User click on the login button
    But Login should fail
