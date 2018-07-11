$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("simple.feature");
formatter.feature({
  "line": 1,
  "name": "Login to Facebook",
  "description": "Scenerio :Test Fb credentials\r\nGiven User is on homepage\r\nWhen Navigate to LogIn Page\r\nWhen I enter valid data\r\nWhen Click on the LogIn button\r\nThen login message should display",
  "id": "login-to-facebook",
  "keyword": "Feature"
});
});