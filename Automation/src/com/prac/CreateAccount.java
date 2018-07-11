package com.prac;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class CreateAccount {
	public static void main(String[]Args) {
		WebDriver driver;
		System.setProperty("webdriver.chrome.driver","E:\\SELE_NIUM\\JAR\\chromedriver.exe");
		 driver= new ChromeDriver();
			driver.get("http://automationpractice.com/index.php");
			driver.findElement(By.xpath(".//*[@id='header']/div[2]/div/div/nav/div[1]/a")).click();
			driver.findElement(By.id("email_create")).sendKeys("upasanasatapathy10@gmail.com");
			driver.findElement(By.id("SubmitCreate")).click();
			//driver.findElement(By.xpath(".//*[@id='id_gender2']")).click();
			//driver.findElement(By.id("id_gender2")).click();
			driver.findElement(By.id("customer_firstname")).sendKeys("upasana");
			driver.findElement(By.id("customer_lastname")).sendKeys("satpathy");
			driver.findElement(By.id("email")).sendKeys("upasanasatapathy10@gmail.com");
			driver.findElement(By.id("passwd")).sendKeys("Lipi4u");
			new Select(driver.findElement(By.id("days"))).selectByValue("5");
			new Select(driver.findElement(By.id("months"))).selectByVisibleText("June");
			new Select(driver.findElement(By.id("years"))).selectByValue("1992");
			driver.findElement(By.id("submitAccount")).click(); 
		}
		}

