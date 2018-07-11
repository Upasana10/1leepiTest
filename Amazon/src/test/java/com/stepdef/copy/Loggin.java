package com.stepdef.copy;

import java.util.concurrent.TimeUnit;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

//import cucumber.api.PendingException;
//import cucumber.api.java.After;
//import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Loggin {
	WebDriver driver;
	@Given("^user is in landingpage$")
	public void user_is_in_landingpage1() {
		System.out.println("user is in landingpage");
		System.setProperty("webdriver.chrome.driver", "E:\\SELE_NIUM\\JARS\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);	
		
		driver.get("https://www.amazon.in");
		
		}
	@When("^user enters valid email and password$")
	public void user_enters_valid_email_and_password() throws Throwable {
		System.out.println("click on signin");
		 driver.findElement(By.xpath(".//*[@id='nav-link-yourAccount']/span[1]")).click();
		 System.out.println("click id");
		 driver.findElement(By.id("ap_email")).sendKeys("upasanasatapathy10@gmail.com");
		 System.out.println("click continue");
		 driver.findElement(By.id("continue")).click();
		 System.out.println("click pwd");
		 driver.findElement(By.id("ap_password")).sendKeys("8895473580");
		 System.out.println("click on login");
		 driver.findElement(By.id("signInSubmit")).click();
		// System.out.println(" again click on login");
		// driver.findElement(By.xpath(".//*[@id='nav-link-yourAccount']/span[2]")).click();
	    
	}
	/*@Then("^click create Account$")
	public void click_create_Account() throws Throwable {
		System.out.println("click login");
		driver.findElement(By.xpath("//*[@class='RveJvd snByac']")).click(); 
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}*/

}


