package com.stepdef;

import cucumber.api.java.en.Given;
import com.stepdef.Customer;
import com.stepdef.Item;
import com.stepdef.World;

public class GoodsSteps {
	private World world;

    public void GoodsSteps(World world) {
        this.world = world;
    }

    @Given("^that (.*) bought a faulty (.*) for \\$(\\d+)$")
    public void that_bought_a_faulty_kettle(String name, String itemType, int price) throws Throwable {
        world.customer = new Customer(name);
        world.item = new Item(itemType, price);
    }
}


