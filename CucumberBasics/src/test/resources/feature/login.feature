Feature: Login feature
  I want to use this template for my feature file
  Scenario: login with correct username and password
    Given when i navigate to login
    And i enter the following for login
   | username  |password | 
      | admin |   abuokkk |
      And i click login button
   Then I should see the userform page
    

  Scenario Outline:login with correct username and password
    Given when i navigate to login

     And i click login button
   Then I should see the userform page

    Examples: 
      | username  |password | 
      | upasana@gmail.com |  Lipi@1234 |
      | upasana10@gmail.com |  Lipi@1234 |