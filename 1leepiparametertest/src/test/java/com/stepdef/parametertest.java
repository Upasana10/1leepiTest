package com.stepdef;

import java.util.concurrent.TimeUnit;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
//import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class parametertest {
public static WebDriver driver;
 @Given("^User is on Home Page$")
public void user_is_on_Home_Page() throws Throwable {
	System.out.println("User is on home page");
	System.setProperty("webdriver.chrome.driver", "E:\\SELE_NIUM\\JARS\\chromedriver.exe");
	 driver=new ChromeDriver();
    // driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
     driver.get("https://www.facebook.com");
     // Write code here that turns the phrase above into concrete actions
    
}

@When("^User Navigate to LogIn Page$")
public void user_Navigate_to_LogIn_Page() throws Throwable {
	System.out.println("U r in home page click sign in");
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@When("^User enters \"(.*?)\" and \"(.*?)\"$")
public void user_enters_and(String username, String password) throws Throwable {
    // Write code here that turns the phrase above into concrete actionsSystem.out.println("given username n password");
	driver.findElement(By.id("email")).sendKeys("username");
	driver.findElement(By.id("pass")).sendKeys("password");
	throw new PendingException();

}

@Then("^click on login$")
public void click_on_login() throws Throwable {
	System.out.println("clicked login");
	driver.findElement(By.id("loginbutton")).click();
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@Then("^Message displayed Login Successfully$")
public void message_displayed_Login_Successfully() throws Throwable {
	System.out.println("u r into fb");
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

}