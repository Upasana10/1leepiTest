$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "I want to use this template for my feature file",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "login with correct username and password",
  "description": "",
  "id": "login-feature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "when i navigate to login",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "i enter the following for login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 6
    },
    {
      "cells": [
        "admin",
        "abuokkk"
      ],
      "line": 7
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "i click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the userform page",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "login with correct username and password",
  "description": "",
  "id": "login-feature;login-with-correct-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "when i navigate to login",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "i click login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-feature;login-with-correct-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "login-feature;login-with-correct-username-and-password;;1"
    },
    {
      "cells": [
        "upasana@gmail.com",
        "Lipi@1234"
      ],
      "line": 20,
      "id": "login-feature;login-with-correct-username-and-password;;2"
    },
    {
      "cells": [
        "upasana10@gmail.com",
        "Lipi@1234"
      ],
      "line": 21,
      "id": "login-feature;login-with-correct-username-and-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "login with correct username and password",
  "description": "",
  "id": "login-feature;login-with-correct-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "when i navigate to login",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "i click login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the userform page",
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
  "line": 21,
  "name": "login with correct username and password",
  "description": "",
  "id": "login-feature;login-with-correct-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "when i navigate to login",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "i click login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the userform page",
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