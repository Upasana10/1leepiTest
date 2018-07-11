$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file.feature");
formatter.feature({
  "line": 1,
  "name": "Test Hooks",
  "description": "Description: The Background keyword1",
  "id": "test-hooks",
  "keyword": "Feature"
});
formatter.uri("ground.feature");
formatter.feature({
  "line": 1,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file\r\nDescription: The Background keyword2",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 401311,
  "status": "passed"
});
formatter.before({
  "duration": 129323,
  "status": "passed"
});
formatter.before({
  "duration": 129322,
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
  "duration": 196887533,
  "status": "passed"
});
formatter.match({
  "location": "GroundSteps.When_I_complete_action()"
});
formatter.result({
  "duration": 6364007,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.stepDef.GroundSteps.When_I_complete_action(GroundSteps.java:19)\r\n\tat ✽.When I complete action(ground.feature:9)\r\n",
  "status": "pending"
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
  "duration": 302266,
  "status": "passed"
});
formatter.after({
  "duration": 266856,
  "status": "passed"
});
formatter.after({
  "duration": 93913,
  "status": "passed"
});
});