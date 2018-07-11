    Feature: Create Account Feature
    Background: Account Data
    Given user is on home page
    When user click into signin button
    Then Signin page displayed 
  
    Scenario: Create Account
    Given Add all details
    Then  Click save
    
    Scenario: After Creation
    Given Get a code
    When Verified account details
    Then account created

    
