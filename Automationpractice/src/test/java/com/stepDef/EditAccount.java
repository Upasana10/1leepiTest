package com.stepDef;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EditAccount {
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

	@And("^click on Edit profile$")
    public void click_on_Edit_profile()throws Throwable{
	 	 System.out.println("user click on Edit profile"); 
	 	throw new PendingException();
	 }
    @And("^Edit whatever need to be changed$")
    public void Edit_whatever_need_to_be_changed()throws Throwable{
		 System.out.println("Edit whatever need to be changed");
		 throw new PendingException();
}
  @Then("^Click save$")
    public void Click_save()throws Throwable{
		 System.out.println("Click save");
		 throw new PendingException();
		
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