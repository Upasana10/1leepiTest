package com.stepdef;

//import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginStep {

	WebDriver driver;
	@Given("^user on home page$")
	public void user_on_home_page()  {
		System.out.println("User is on home page");
		System.setProperty("webdriver.chrome.driver", "E:\\SELE_NIUM\\JARS\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://www.facebook.com");
		
		
	}
	
	
	@And("^click on login button$")
	public void click_on_login_button()throws Throwable {
		System.out.println("Clicked on login button");
	}
	
	@And("^enter valid data$")
	public void enter_valid_data() throws Throwable{
		driver.findElement(By.id("email")).sendKeys("upasamasatapathy10@gmail.com");
		System.out.println("Entered Valid Data");
	}
	
	
	
	@Then("^user should login$")
	public void user_should_login() {
		System.out.println("verifyed message");
	}
	/*@Then("^user should login page$")
	public void user_should_login_page() {
		System.out.println("closed");
		driver.quit();
		//Assert.assertTrue(false);
	}*/
}
