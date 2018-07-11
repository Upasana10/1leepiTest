Feature: Verify login invalid flow

Scenario: verify login with invalid data1
Given user on home page
And click on login button
And enter invalid data
Then user should see error message 

Scenario: verify login with valid data2
Given user on home page
And click on login button
And enter invalid data
Then user should warning error message