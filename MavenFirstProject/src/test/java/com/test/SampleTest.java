package com.test;

import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class SampleTest {
@Test
public void Testcase() {
	System.setProperty("webdriver.gecko.driver","E:\\SELE_NIUM\\JAR\\gecko\\geckodriver.exe" );
	WebDriver driver = new FirefoxDriver();
	driver.get("http://www.google.com");
	
}
}
