package com.stepdef.copy;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;

public class Todaysdeal {
	WebDriver driver;
	@Then("^click on Todaysdeal$")
	public void click_on_Todaysdeal() throws Throwable {
		System.out.println("click_on_Todaysdeal");
		 driver.findElement(By.xpath(".//*[@id='a-page']/div[2]/div/div[2]/div[1]/a/div/div/div/div[2]/h3")).click();
	}
		 @Then("^click on upcoming$")
			public void click_on_upcoming() throws Throwable {
		 System.out.println("click_on_upcoming");
		 driver.findElement(By.xpath(".//*[@id='shovlStateHeader']/div/span[2]/div")).click();
		 

}
}
