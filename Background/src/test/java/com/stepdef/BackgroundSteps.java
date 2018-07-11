package com.stepdef;

 
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
 
public class BackgroundSteps {
	@Before
    public void beforeScenario(){
        System.out.println("This will run before the every Scenario(@before)");
    }
 
	@After
    public void afterrScenario(){
        System.out.println("This will run after the every Scenario(@after)");
    }
	@Given("^once logged in$")
	public void once_logged_in() throws Throwable {
		System.out.println("once i login");
	}
 
	@When("^go to$")
	public void go_to()throws Throwable {
		System.out.println("go to");
	}
 
	@Given("^I navigate to the login page$")
	public void i_navigate_to_the_login_page() throws Throwable {
		System.out.println("I am at the LogIn Page");
	}
 
	@When("^I submit username and password$")
	public void i_submit_username_and_password() throws Throwable {
		System.out.println("I Submit my Username and Password");
	}
 
	@Then("^I should be logged in$")
	public void i_should_be_logged_in() throws Throwable {
		System.out.println("I am logged on to the website");
	}
}
	
 
	
 


/*Feature: Test Background Feature
  Description: The purpose of this feature is to test the Background keyword
I am at the LogIn Page
I Submit my Username and Password
I am logged on to the website

  Background: User is Logged In         [90m# back.feature:4[0m
    [32mGiven [0m[32mI navigate to the login page[0m  [90m# BackgroundSteps.i_navigate_to_the_login_page()[0m
    [32mWhen [0m[32mI submit username and password[0m [90m# BackgroundSteps.i_submit_username_and_password()[0m
    [32mThen [0m[32mI should be logged in[0m          [90m# BackgroundSteps.i_should_be_logged_in()[0m
User searched for Lenovo Laptop
First search result added to bag
Bag is now contains the added product

  Scenario: Search a product and add the first product to the User basket     [90m# back.feature:9[0m
    [32mGiven [0m[32mUser search for Lenovo Laptop[0m                                       [90m# BackgroundSteps.user_searched_for_Lenovo_Laptop()[0m
    [32mWhen [0m[32mAdd the first laptop that appears in the search result to the basket[0m [90m# BackgroundSteps.add_the_first_laptop_that_appears_in_the_search_result_to_the_basket()[0m
    [32mThen [0m[32mUser basket should display with added item[0m                           [90m# BackgroundSteps.user_basket_should_display_with_item()[0m
I am at the LogIn Page
I Submit my Username and Password
I am logged on to the website

  Background: User is Logged In         [90m# back.feature:4[0m
    [32mGiven [0m[32mI navigate to the login page[0m  [90m# BackgroundSteps.i_navigate_to_the_login_page()[0m
    [32mWhen [0m[32mI submit username and password[0m [90m# BackgroundSteps.i_submit_username_and_password()[0m
    [32mThen [0m[32mI should be logged in[0m          [90m# BackgroundSteps.i_should_be_logged_in()[0m
User navigated for Lenovo Laptop
Laptop added to the basket
Bag is now contains the added product

  Scenario: Navigate to a product and add the same to the User basket [90m# back.feature:14[0m
    [32mGiven [0m[32mUser navigate for Lenovo Laptop[0m                             [90m# BackgroundSteps.user_navigate_for_Lenovo_Laptop()[0m
    [32mWhen [0m[32mAdd the laptop to the basket[0m                                 [90m# BackgroundSteps.add_the_laptop_to_the_basket()[0m
    [32mThen [0m[32mUser basket should display with added item[0m                   [90m# BackgroundSteps.user_basket_should_display_with_item()[0m

2 Scenarios ([32m2 passed[0m)
12 Steps ([32m12 passed[0m)
0m0.170s*/
