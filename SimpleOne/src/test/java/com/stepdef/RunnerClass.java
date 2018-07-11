package com.stepdef;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/feature",
glue="com.stepdef",
format = {"pretty",
"html:target/site/cucumber-pretty",
"json:target/cucumber.json"})

public class RunnerClass {

}
