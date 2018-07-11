/**
 * 
 */
package com.stepdef;

import java.util.concurrent.TimeUnit;

//import org.junit.Test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
//import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep {
public static WebDriver driver;
	@Given("^user on home page$")
	public void user_on_home_page() throws Throwable{
		System.out.println("User is on home page");
		System.setProperty("webdriver.chrome.driver", "E:\\SELE_NIUM\\JARS\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://www.facebook.com");
		
		}
	/*@Given("^Navigate to LogIn Page$")
	public void navigate_to_LogIn_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}*/

	@When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void I_enter_and(String username,String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("email")).sendKeys(username);
		driver.findElement(By.id("pass")).sendKeys(password);
	    throw new PendingException();
	}

	@Then("^Click on the LogIn button$")
	public void click_on_the_LogIn_button() throws Throwable {
		System.out.println("login");
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	

	
	}


