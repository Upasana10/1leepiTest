package com.stepdef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SimpleTest {
	
	@Given("^User is on homepage$")
	public void user_is_at_the_Home_Page()throws Throwable {
		System.out.println("user is at home page");
		
	    }

	@When("^Navigate to LogIn Page$")
	public void navigate_to_LogIn_Page()throws Throwable  {
	   System.out.println("Navigate to LogIn Page");
	   
	  }

	@When("^I enter valid data$")
	public void i_enter_valid_data() throws Throwable {
	    System.out.println("Enter details");
	  
	}

	@When("^Click on the LogIn button$")
	public void click_on_the_LogIn_button() throws Throwable  {
	    System.out.println("click login");
	    
	}

	@Then("^login message should display$")
	public void login_message_should_display()throws Throwable {
	    System.out.println("LogIN message should display");
	    
	}

}
