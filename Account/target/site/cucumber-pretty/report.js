$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featureFile.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Feature",
  "description": "",
  "id": "create-account-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 838545,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Account Data",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click into signin button",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Signin page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.user_is_on_home_page()"
});
formatter.result({
  "duration": 197214431,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.user_click_into_signin_button()"
});
formatter.result({
  "duration": 113414,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.signin_page_displayed()"
});
formatter.result({
  "duration": 332030,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Create Account",
  "description": "",
  "id": "create-account-feature;create-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "Add all details",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Click save",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.add_all_details()"
});
formatter.result({
  "duration": 358716,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.Click_save()"
});
formatter.result({
  "duration": 179615,
  "status": "passed"
});
formatter.after({
  "duration": 278146,
  "status": "passed"
});
formatter.before({
  "duration": 487013,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Account Data",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click into signin button",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Signin page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.user_is_on_home_page()"
});
formatter.result({
  "duration": 294568,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.user_click_into_signin_button()"
});
formatter.result({
  "duration": 335110,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.signin_page_displayed()"
});
formatter.result({
  "duration": 375139,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "After Creation",
  "description": "",
  "id": "create-account-feature;after-creation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Get a code",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Verified account details",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "account created",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.get_a_code()"
});
formatter.result({
  "duration": 440312,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.verified_account_details()"
});
formatter.result({
  "duration": 342808,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.account_created()"
});
formatter.result({
  "duration": 711274,
  "status": "passed"
});
formatter.after({
  "duration": 298161,
  "status": "passed"
});
});