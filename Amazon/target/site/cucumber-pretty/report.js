$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AmazonLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon Application",
  "description": "I want to use this template for my feature file",
  "id": "amazon-application",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Create Account Data",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 4,
  "name": "User clicks the link",
  "description": "",
  "id": "amazon-application;user-clicks-the-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is in landingpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters valid email and password",
  "keyword": "When "
});
formatter.match({
  "location": "Loggin.user_is_in_landingpage1()"
});
formatter.result({
  "duration": 11509946567,
  "status": "passed"
});
formatter.match({
  "location": "Loggin.user_enters_valid_email_and_password()"
});
formatter.result({
  "duration": 2079270783,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: call function result missing \u0027value\u0027\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DELL\u0027, ip: \u0027192.168.1.25\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Windows\\TEMP\\scoped_dir6984_30533}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dWIN8_1, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 99edfb494ba5b2c6a5919d5332c1929c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:99)\r\n\tat com.stepdef.copy.Loggin.user_enters_valid_email_and_password(Loggin.java:34)\r\n\tat ✽.When user enters valid email and password(AmazonLogin.feature:6)\r\n",
  "status": "failed"
});
formatter.uri("AmazonPay.feature");
formatter.feature({
  "line": 1,
  "name": "click on Amazonpay",
  "description": "",
  "id": "click-on-amazonpay",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "go to AmazonPay",
  "description": "",
  "id": "click-on-amazonpay;go-to-amazonpay",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is in landingpage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "click on AmazonPay",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "click on Add Money",
  "keyword": "Then "
});
formatter.match({
  "location": "Loggin.user_is_in_landingpage1()"
});
formatter.result({
  "duration": 11364892036,
  "status": "passed"
});
formatter.match({
  "location": "AmazonPay.click_on_AmazonPay()"
});
formatter.result({
  "duration": 741040,
  "error_message": "java.lang.NullPointerException\r\n\tat com.stepdef.copy.AmazonPay.click_on_AmazonPay(AmazonPay.java:14)\r\n\tat ✽.Then click on AmazonPay(AmazonPay.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AmazonPay.click_on_Add_Money()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Today.feature");
formatter.feature({
  "line": 1,
  "name": "Todaysdeal",
  "description": "",
  "id": "todaysdeal",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "go to todaysdeal",
  "description": "",
  "id": "todaysdeal;go-to-todaysdeal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is in landingpage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "click on Todaysdeal",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "click on upcoming",
  "keyword": "Then "
});
formatter.match({
  "location": "Loggin.user_is_in_landingpage1()"
});
formatter.result({
  "duration": 31325229959,
  "status": "passed"
});
formatter.match({
  "location": "Todaysdeal.click_on_Todaysdeal()"
});
formatter.result({
  "duration": 521910,
  "error_message": "java.lang.NullPointerException\r\n\tat com.stepdef.copy.Todaysdeal.click_on_Todaysdeal(Todaysdeal.java:13)\r\n\tat ✽.Then click on Todaysdeal(Today.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Todaysdeal.click_on_upcoming()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("UpasanaAmazonIn.feature");
formatter.feature({
  "line": 1,
  "name": "UpasanaAmazon.in",
  "description": "",
  "id": "upasanaamazon.in",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "go to UpasanaAmazon.in",
  "description": "",
  "id": "upasanaamazon.in;go-to-upasanaamazon.in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is in landingpage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "click on UpasanaAmazon",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "view orders",
  "keyword": "Then "
});
formatter.match({
  "location": "Loggin.user_is_in_landingpage1()"
});
formatter.result({
  "duration": 14566540183,
  "status": "passed"
});
formatter.match({
  "location": "UpasanaAmazonin.click_on_UpasanaAmazon()"
});
formatter.result({
  "duration": 858560,
  "error_message": "java.lang.NullPointerException\r\n\tat com.stepdef.copy.UpasanaAmazonin.click_on_UpasanaAmazon(UpasanaAmazonin.java:13)\r\n\tat ✽.Then click on UpasanaAmazon(UpasanaAmazonIn.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UpasanaAmazonin.view_orders()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Wish.feature");
formatter.feature({
  "line": 1,
  "name": "wishlist",
  "description": "",
  "id": "wishlist",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "go to wishlist",
  "description": "",
  "id": "wishlist;go-to-wishlist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is in landingpage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enters valid email and password",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "click wishlist",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click Your Orders",
  "keyword": "Then "
});
formatter.match({
  "location": "Loggin.user_is_in_landingpage1()"
});
formatter.result({
  "duration": 10981884541,
  "status": "passed"
});
formatter.match({
  "location": "Loggin.user_enters_valid_email_and_password()"
});
formatter.result({
  "duration": 28314138987,
  "error_message": "java.lang.NullPointerException\r\n\tat com.stepdef.copy.Loggin.user_enters_valid_email_and_password(Loggin.java:32)\r\n\tat ✽.When user enters valid email and password(Wish.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Wishlist.click_wishlist()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Wishlist.click_Your_Orders()"
});
formatter.result({
  "status": "skipped"
});
});