package com.stepdef.copy;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;

public class UpasanaAmazonin {
	WebDriver driver;
	@Then("^click on UpasanaAmazon$")
	public void click_on_UpasanaAmazon() throws Throwable {
		System.out.println("click_on_UpasanaAmazon");
		 driver.findElement(By.id("nav-your-amazon")).click();
	}
		 @Then("view orders$")
			public void view_orders() throws Throwable {
		 System.out.println("view orders");
		 driver.findElement(By.xpath(".//*[@id='Orders']/a/div[3]")).click();
		 

}
}
