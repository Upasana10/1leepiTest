$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("first.feature");
formatter.feature({
  "line": 1,
  "name": "Verify login flow",
  "description": "",
  "id": "verify-login-flow",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "verify login with valid data",
  "description": "",
  "id": "verify-login-flow;verify-login-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "enter valid data",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user should login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_on_home_page()"
});
formatter.result({
  "duration": 18296091326,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.click_on_login_button()"
});
formatter.result({
  "duration": 1026883,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.enter_valid_data()"
});
formatter.result({
  "duration": 431865710,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_should_login()"
});
formatter.result({
  "duration": 136507,
  "status": "passed"
});
formatter.uri("second.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify login with invalid data0",
  "description": "",
  "id": "title-of-your-feature;verify-login-with-invalid-data0",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "enter invalid data",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_on_home_page()"
});
formatter.result({
  "duration": 6635355368,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.click_on_login_button()"
});
formatter.result({
  "duration": 780554,
  "status": "passed"
});
formatter.match({
  "location": "second.enter_invalid_data()"
});
formatter.result({
  "duration": 268395,
  "status": "passed"
});
formatter.match({
  "location": "second.user_should_login_page()"
});
formatter.result({
  "duration": 120598,
  "status": "passed"
});
});