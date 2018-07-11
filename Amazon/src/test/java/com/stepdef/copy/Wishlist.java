package com.stepdef.copy;

import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;

//import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;

public class Wishlist {
	WebDriver driver;
	

	@Then("^click wishlist$")
	public void click_wishlist() throws Throwable {
		System.out.println("click on your wishlist");
		 driver.findElement(By.xpath(".//*[@id='nav-link-yourAccount']/span[1]")).click();
		 
}
	@Then("^click Your Orders$")
	public void click_Your_Orders()throws Throwable {
		System.out.println("check ur orders");
		 driver.findElement(By.xpath(".//*[@id='a-page']/div[2]/div/div[2]/div[1]/a/div/div/div/div[2]/h3")).click();
}}