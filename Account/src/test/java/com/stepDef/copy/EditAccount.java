package com.stepDef.copy;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
//import cucumber.api.java.en.When;

public class EditAccount {
	

@Given("^click on Edit profile$")
    public void click_on_Edit_profile()throws Throwable{
	 	 System.out.println("user click on Edit profile"); 
	 	throw new PendingException();
	 }
    @And("^Edit whatever need to be changed$")
    public void Edit_whatever_need_to_be_changed()throws Throwable{
		 System.out.println("Edit whatever need to be changed");
		 throw new PendingException();
}
  /* @Then("^Click save$")
    public void Click_save()throws Throwable{
		 System.out.println("Click save");
		 throw new PendingException();
		
}*/
}