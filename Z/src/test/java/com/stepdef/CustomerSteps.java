package com.stepdef;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CustomerSteps {
	 private World world;

	    public CustomerSteps(World world) {
	        this.world = world;
	    }

	    @When("^she return the kettle to the store$")
	    public void return_the_an_item_to_the_store(String itemType) throws Throwable {
	        Item returnedItem = new Item(itemType);
	        assertThat(world.item, is(returnedItem));
	    }

	    @When("^she show her receipt$")
	    public void she_can_show_a_receipt() throws Throwable {
	        World.customer.refund(world.item.getPrice());
	    }

	    @Then("^she will get \\$(\\d+) refunded$")
	    public void she_will_get_$_back(int expected) throws Throwable {
	        assertThat(world.customer.getRefunded(),is(expected));
	    }

		private Object is(int expected) {
			// TODO Auto-generated method stub
			return null;
		}
}
