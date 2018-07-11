Feature: Login to fb

  Scenario: login with valid data
    Given user on home page
    When I enter "username" and "password"
    And Click on the LogIn button
    
