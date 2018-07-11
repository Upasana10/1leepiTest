package com.stepdef;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginStep {

	WebDriver driver;
	@Given("^user on home page$")
	public void user_on_home_page() {
		System.out.println("User is on home page");
		System.setProperty("webdriver.chrome.driver", "D:\\JARS\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		
	}
	
	
	@And("^click on login button$")
	public void click_on_login_button() {
		System.out.println("Clicked on login button");
	}
	
	@And("^enter valid data$")
	public void enter_data() {
		System.out.println("Entered Valid Data");
	}
	
	@And("^enter invalid data$")
	public void enter_invaliddata() {
		System.out.println("Entered inValid Data");
	}
	
	@Then("^user should login$")
	public void verify_msg() {
		System.out.println("verifyed message");
	}
	
	@Then("^user should see error message$")
	public void error_message() {
		System.out.println("verifyed error message");
	}
	
	@Then("^user should warning error message$")
	public void warning_message() {
		System.out.println("verifyed warning error message");
	}
	
	@Then("^user should login page$")
	public void loginpage() {
		System.out.println("verifyed warning error message");
		Assert.assertTrue(false);
	}
}
