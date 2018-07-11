Feature: Login Action
 
Scenario Outline: Successful Login with Valid Credentials
	Given User is on Home Page
	When User Navigate to LogIn Page
	When User enters "<username>" and "<password>"
	Then click on login
	Then Message displayed Login Successfully
Examples:
    | username   | password |
    | upasanasatapathy10@gmail.com | iwantjob |
    | lipihyd25@gmail.com| iwantjob|