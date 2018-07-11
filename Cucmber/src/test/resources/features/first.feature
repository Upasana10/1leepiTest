Feature: Login to fb

  Scenario Outline: login with valid data
  		Given user on home page
    When I enter  "<username>" and "<password>"
    Then Click on the LogIn button
    Examples: 
      | username                     | password     |
      | upasanasatapathy10@gmail.com | Lipi@jeypore |
      | ups@gmail.com                | Password1    |
