$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("first.feature");
formatter.feature({
  "line": 1,
  "name": "Login to fb",
  "description": "",
  "id": "login-to-fb",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "login with valid data",
  "description": "",
  "id": "login-to-fb;login-with-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter  \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on the LogIn button",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "login-to-fb;login-with-valid-data;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8,
      "id": "login-to-fb;login-with-valid-data;;1"
    },
    {
      "cells": [
        "upasanasatapathy10@gmail.com",
        "Lipi@jeypore"
      ],
      "line": 9,
      "id": "login-to-fb;login-with-valid-data;;2"
    },
    {
      "cells": [
        "ups@gmail.com",
        "Password1"
      ],
      "line": 10,
      "id": "login-to-fb;login-with-valid-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "login with valid data",
  "description": "",
  "id": "login-to-fb;login-with-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter  \"upasanasatapathy10@gmail.com\" and \"Lipi@jeypore\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on the LogIn button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 10,
  "name": "login with valid data",
  "description": "",
  "id": "login-to-fb;login-with-valid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter  \"ups@gmail.com\" and \"Password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on the LogIn button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});