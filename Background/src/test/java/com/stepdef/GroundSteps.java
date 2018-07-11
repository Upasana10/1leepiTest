package com.stepdef;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GroundSteps {
	@Given("^I want to write a step with precondition$")
	public void I_want_to_write_a_step_with_precondition() throws Throwable {
		System.out.println("I want to write a step with precondition");
		 throw new PendingException();
	}
 
	@When("^I complete action$")
	public void When_I_complete_action() throws Throwable {
		System.out.println("When I complete action");
		 throw new PendingException();
	}
 
	@And("^some other action$")
	public void some_other_action() throws Throwable {
		System.out.println("some other action");
		 throw new PendingException();
	}
 
	@Then("^I validate the outcomes$")
	public void I_validate_the_outcomes() throws Throwable {
		System.out.println("I validate the outcomes");
		 throw new PendingException();
	}
 
	@And("^check more outcomes$")
	public void check_more_outcomes() throws Throwable {
		System.out.println("And check more outcomes");
		 throw new PendingException();
	}
}
