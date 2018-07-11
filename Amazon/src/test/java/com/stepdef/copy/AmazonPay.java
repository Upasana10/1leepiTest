package com.stepdef.copy;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;

public class AmazonPay {
	WebDriver driver;
	@Then("^click on AmazonPay$")
	public void click_on_AmazonPay() throws Throwable {
		System.out.println("click_on_AmazonPay");
		 driver.findElement(By.id("nav-xshop-container")).click();
		 
	}
		 @Then("^click on Add Money$")
			public void click_on_Add_Money() throws Throwable {
		 System.out.println("Add Money");
		 driver.findElement(By.xpath(".//*[@id='dashboard-container']/div/div[2]/div/div[1]/a")).click();
		 throw new PendingException();

}
}
