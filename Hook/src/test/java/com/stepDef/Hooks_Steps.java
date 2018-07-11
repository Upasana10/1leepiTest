package com.stepDef;

import cucumber.api.java.After;
import cucumber.api.java.Before;
//import cucumber.api.java.After;
//import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Hooks_Steps {
	@Given("^this is the first step$")
	public void This_Is_The_First_Step(){
		System.out.println("This is the first step");
	}
	
	@When("^this is the second step$")

	public void This_Is_The_Second_Step(){
		System.out.println("This is the second step");
	}
	
	@Then("^this is the third step$")
	public void This_Is_The_Third_Step(){
		System.out.println("This is the third step");
	}
	@Before
    public void beforeScenario(){
        System.out.println("This will run before the every Scenario(@before)");
    }
 
	@After
    public void afterrScenario(){
        System.out.println("This will run after the every Scenario(@after)");
    }
 
	@Before(order=1)
    public void beforeeScenario(){
        System.out.println("This will run order1 before the every Scenario(before order-1)");
    }	
	@Before(order=0)
    public void beforeScenarioStart(){
        System.out.println("-----------------Start of Scenario-----------------before order-0");
    }	
	
	
	@After(order=0)
    public void afterScenarioFinish(){
        System.out.println("-----------------End of Scenario-----------------aftr order-0");
    }	
	@After(order=1)
    public void afterScenario(){
        System.out.println("This will run order1 after the every Scenario(aftr order-0)");
    }	
 
}

