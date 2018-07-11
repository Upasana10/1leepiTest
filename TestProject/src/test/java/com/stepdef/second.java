package com.stepdef;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class second {
	@And("^enter invalid data$")
	public void enter_invalid_data()throws Throwable {
		System.out.println("Entered inValid Data");
	}
	@Then("^user should login page$")
	public void user_should_login_page() {
		System.out.println("closed");
		
}
}