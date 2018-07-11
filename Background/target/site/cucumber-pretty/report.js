$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("back.feature");
formatter.feature({
  "line": 1,
  "name": "Test Background Feature",
  "description": "Description: The purpose of this feature is to test the Background keyword",
  "id": "test-background-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 227854,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is Logged In",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "once logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "go to",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundSteps.once_logged_in()"
});
formatter.result({
  "duration": 719183706,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundSteps.go_to()"
});
formatter.result({
  "duration": 282765,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Search a product and add the first product to the User basket",
  "description": "",
  "id": "test-background-feature;search-a-product-and-add-the-first-product-to-the-user-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I submit username and password",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundSteps.i_navigate_to_the_login_page()"
});
formatter.result({
  "duration": 290975,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundSteps.i_submit_username_and_password()"
});
formatter.result({
  "duration": 130862,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundSteps.i_should_be_logged_in()"
});
formatter.result({
  "duration": 299188,
  "status": "passed"
});
formatter.after({
  "duration": 882166,
  "status": "passed"
});
formatter.uri("ground.feature");
formatter.feature({
  "line": 1,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file\r\nDescription: The purpose of this feature is to test the Background keyword",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 666115,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "i m second background",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "Title of your scenario",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I want to write a step with precondition",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I complete action",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "some other action",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "check more outcomes",
  "keyword": "And "
});
formatter.match({
  "location": "GroundSteps.I_want_to_write_a_step_with_precondition()"
});
formatter.result({
  "duration": 3292086,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.stepdef.GroundSteps.I_want_to_write_a_step_with_precondition(GroundSteps.java:13)\r\n\tat ✽.Given I want to write a step with precondition(ground.feature:8)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "GroundSteps.When_I_complete_action()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GroundSteps.some_other_action()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GroundSteps.I_validate_the_outcomes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GroundSteps.check_more_outcomes()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 95966,
  "status": "passed"
});
});