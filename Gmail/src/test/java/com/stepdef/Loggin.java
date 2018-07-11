package com.stepdef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Loggin {
	WebDriver driver;
	@Given("^user is in landingpage$")
	public void user_is_in_landingpage1() {
		System.out.println("user is in landingpage");
		System.setProperty("webdriver.chrome.driver", "E:\\SELE_NIUM\\JARS\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);	
		driver.get("https://accounts.google.com/signin");
		//driver.get("https://www.amazon.in");
		}
	@When("^user enters valid email and password$")
	public void user_enters_valid_email_and_password() throws Throwable {
		System.out.println("user enters valid email and password");
		 driver.findElement(By.id("identifierId")).sendKeys("upasanasatapathy10@gmail.com"); 
		 driver.findElement(By.xpath(".//*[@id='identifierNext']/content/span")).click();
		 driver.findElement(By.name("password")).sendKeys("liPi@1991");
		 driver.findElement(By.xpath("//*[@class='RveJvd snByac']")).click();
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	/*@Then("^click create Account$")
	public void click_create_Account() throws Throwable {
		System.out.println("click login");
		driver.findElement(By.xpath("//*[@class='RveJvd snByac']")).click(); 
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}*/

}


