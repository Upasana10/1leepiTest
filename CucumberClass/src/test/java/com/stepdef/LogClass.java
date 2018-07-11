package com.stepdef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
//import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LogClass {
	WebDriver driver;
	@Given("^user on home page$")
	public void user_on_home_page1() {
		System.out.println("User is on home page");
		System.setProperty("webdriver.chrome.driver", "E:\\SELE_NIUM\\JARS\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://www.facebook.com");}
	public void user_on_home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
	
	

	@Given("^enter valid data$")
	public void enter_valid_data() throws Throwable {
		driver.findElement(By.id("email")).sendKeys("upasanasatapathy10@gmail.com");
		driver.findElement(By.id("pass")).sendKeys("Lipi@jeypore");
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
	@Then("^ click login$")
	public void click_login() throws Throwable {
	   System.out.println("click login"); // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^login page success$")
	public void login_page_success() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}


}
