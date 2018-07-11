package com.stepdef;

import base.Baseutil;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;

public class LoginStep extends Baseutil {
	private Baseutil base;
	
	public LoginStep(Baseutil base) {
	this.base= base;
	}
	@Then("^I should see the userform page$")
	public void i_should_see_the_userform_page() throws Throwable {
		System.out.println("The driver is : "+base.stepInfo);
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
}
