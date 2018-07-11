$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("parameter.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "login-action;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "upasanasatapathy10@gmail.com",
        "iwantjob"
      ],
      "line": 11,
      "id": "login-action;successful-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "lipihyd25@gmail.com",
        "iwantjob"
      ],
      "line": 12,
      "id": "login-action;successful-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"upasanasatapathy10@gmail.com\" and \"iwantjob\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "parametertest.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 7950554035,
  "status": "passed"
});
formatter.match({
  "location": "parametertest.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 4673583,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.stepdef.parametertest.user_Navigate_to_LogIn_Page(parametertest.java:33)\r\n\tat ✽.When User Navigate to LogIn Page(parameter.feature:5)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "upasanasatapathy10@gmail.com",
      "offset": 13
    },
    {
      "val": "iwantjob",
      "offset": 48
    }
  ],
  "location": "parametertest.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "parametertest.click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "parametertest.message_displayed_Login_Successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"lipihyd25@gmail.com\" and \"iwantjob\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "parametertest.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 11150759105,
  "status": "passed"
});
formatter.match({
  "location": "parametertest.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 647127,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.stepdef.parametertest.user_Navigate_to_LogIn_Page(parametertest.java:33)\r\n\tat ✽.When User Navigate to LogIn Page(parameter.feature:5)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "lipihyd25@gmail.com",
      "offset": 13
    },
    {
      "val": "iwantjob",
      "offset": 39
    }
  ],
  "location": "parametertest.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "parametertest.click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "parametertest.message_displayed_Login_Successfully()"
});
formatter.result({
  "status": "skipped"
});
});