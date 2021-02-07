Feature: Eligibility Checker
  As a person from Wales
  I need to know what help I can get with my NHS costs
  So that I can get the treatment I need
  Scenario: User enter circumstances in to eligibility check tool and should get a result of whether I will get help or not
    Given I am on check for help paying NHS cost page
    And I click on "Start" button
    When I click "Wales" country I live in
    And I click on "Next"
    And I enter day "1" month "3" and year "1951" is my date of birth
    And I click on "Next" button
    And I enter "Yes" as I am living with my partner
    And I click on "Next" button
    And I enter "No" as me and my partner not claim any benefits or tax credits
    And I click on "Next" button
    And I enter "No" as not have any injury or illness caused by serving in armed force
    And I click on "Next" button
    And I enter "No" as me and my partner are not living permanently in a care home
    And I click on "Next" button
    And I enter "Yes" as me and my partner have more than £16000 in savings, investments or property
    And I click on "Next" button
    Then I should get a result of whether I will get help or not
