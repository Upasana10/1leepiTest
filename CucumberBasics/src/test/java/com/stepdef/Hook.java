package com.stepdef;

import base.Baseutil;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Hook extends Baseutil{
	private Baseutil base;
	public Hook(Baseutil base) {
	this.base= base;
	}
@Before
public void BeforeMethod() {
	System.out.println("............before...........");
	//pass dummy webdriver instance
	base.stepInfo="FirefoxDriver";
}
@After
public void AfterMethod() {
	System.out.println("............after...........");
}
@Given("^when i navigate to login$")
public void when_i_navigate_to_login() throws Throwable {
	System.out.println("when i navigate to login");
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@Given("^i enter the following for login$")
public void i_enter_the_following_for_login() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	System.out.println("i enter the following for login");
    throw new PendingException();

    
}

@Given("^i click login button$")
public void i_click_login_button() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	System.out.println("i click login button");
    
}

@Then("^I should see the userform page$")
public void i_should_see_the_userform_page() throws Throwable {
	System.out.println("I should see the userform page");
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

}
