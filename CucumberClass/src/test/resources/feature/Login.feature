Feature: Verify login flow

  Scenario: verify login with valid data
    Given user on home page
    
    And enter valid data
    And click_login
    Then login page success

  Scenario: verify login with valid data0
    Given user on home page
    
    And enter valid data
    And click_login
    Then login page success
