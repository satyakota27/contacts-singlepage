# Contacts App

1) Contacts app fetches json data from a api host called apiary. It has sample 5 records.
2) Contacts Controller fetches the data using $http module which handles success and error callbacks.
3) Contacts table parses json content and displays its in the table.
4) Delete contact checks the selected attribute and removes that json object.
5) Collapse expand is handled using bootstrap 4 accordion.

Testcase handles scenarios:

1) Making an api call
2) Receiving data from api call
3) Adding a row
4) Deleting rows

Unit testing AngularJS app with Karma and Jasmine

-> Install application: npm install

-> Run web server: node server.js

-> Run unit tests: karma start

Configuring Unit testing:

1) npm install angular-mocks --save-dev
2) # Install Karma:
  $ npm install karma --save-dev
  
  # Install plugins that our project needs:
  $ npm install karma-jasmine jasmine-core karma-chrome-launcher --save-dev
3) npm install karma-ng-html2js-preprocessor --save-dev
4) npm install karma karma-coverage --save-dev


Test Results:

$ karma start
11 03 2018 14:42:21.638:WARN [karma]: No captured browser, open http://localhost:9876/
11 03 2018 14:42:21.646:WARN [karma]: Port 9876 in use
11 03 2018 14:42:21.647:INFO [karma]: Karma v1.7.1 server started at http://0.0.0.0:9877/
11 03 2018 14:42:21.647:INFO [launcher]: Launching browser Chrome with unlimited concurrency
11 03 2018 14:42:21.669:INFO [launcher]: Starting browser Chrome
11 03 2018 14:42:22.846:INFO [Chrome 64.0.3282 (Mac OS X 10.13.3)]: Connected on socket hDXOatjAvPqOaU2cAAAA with id 7842304
Chrome 64.0.3282 (Mac OS X 10.13.3): Executed 4 of 4 SUCCESS (0.056 secs / 0 secs)