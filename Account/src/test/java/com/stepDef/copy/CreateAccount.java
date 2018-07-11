package com.stepDef.copy;

//import cucumber.api.PendingException;
//import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
//import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateAccount {
	/* @Background("^Account Data$")
	 public void background()throws Throwable{
		 System.out.println("Account data"); 
	 }*/
	
	   
	   
	    @Given("^user is on home page$")
	    public void user_is_on_home_page()throws Throwable  {
	        // Write code here that turns the phrase above into concrete actions
	    	 System.out.println("user is on home page");
	    	 
	    	
	    }

	    @When("^user click into signin button$")
	    public void user_click_into_signin_button() throws Throwable {
	    	 System.out.println("user click signin");
	    	// Write code here that turns the phrase above into concrete actions
	    	 
	    }

	    @Then("^Signin page displayed$")
	    public void signin_page_displayed() throws Throwable {
	        // Write code here that turns the phrase above into concrete actions
	    	System.out.println("signin page displayed");
	    	
	    }

	    @Given("^Add all details$")
	    public void add_all_details()throws Throwable  {
	        // Write code here that turns the phrase above into concrete actions
	    	System.out.println("added all details");
	    	
	    }

	    @Then("^Click save$")
	    public void Click_save() throws Throwable {
	        // Write code here that turns the phrase above into concrete actions
	    	System.out.println("Click on save");
	    	
	    	
	    }

	    @Given("^Get a code$")
	    public void get_a_code()throws Throwable {
	        // Write code here that turns the phrase above into concrete actions
	    	System.out.println("get code and enter");
	    
	    }

	    @When("^Verified account details$")
	    public void verified_account_details() throws Throwable {
	        // Write code here that turns the phrase above into concrete actions
	    	System.out.println("verify account ");
	    	
	    }

	    @Then("^account created$")
	    public void account_created()throws Throwable  {
	        // Write code here that turns the phrase above into concrete actions
	    	System.out.println("Account created successfully");
	    	
	    }
	    @Before
	    public void beforeScenario(){
	        System.out.println("---------------before--------------- Scenario(@before)");
	    }
	 
		@After
	    public void afterrScenario(){
	        System.out.println("---------------after---------------- Scenario(@after)");
	    }
		    

}
