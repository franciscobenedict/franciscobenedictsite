# franciscobenedictsite


# Node JS
Ensure Node JS is installed

[Install NodeJS](https://nodejs.org/download/)


# AngularJS
Install AngularJS

`npm install angular --save`


# Unit Test (Karma + Jasmine)
Set up Unit Tests

Karma + Jasmine


Configuration

Navigate to your working directory in your terminal or command prompt and follow the below instructions.


Install Karma

`npm install -g karma --save-dev`


Install Jasmine

`npm install karma-jasmine jasmine-core --save-dev`


Install ngMock

ngMock allows you to inject and mock angular services to help you test your application.

`npm install angular-mocks --save-dev`


Browsers

Install browser launcher on which you want karma to run your tests. We need to install atleast one browser. 

I used PhantomJs.

`npm install karma-phantomjs-launcher --save-dev`


Create two folders in  your working directory.

`mkdir app` //your script files, controllers,filters etc.

`mkdir tests` //here we will keep our tests.


karma.conf.js

`karma init`

Select Jasmine as your testing framework.

Select browser, I’ve selected PhantomJS.

Specify the paths to your js and spec files. Eg. `app/*.js`, `test/*.js`.

After answering a few more questions you should be done.

Open up your `karma.conf.js` and add the location of angular.js in to the files array.

`node_modules/angular/angular.js`

Add the location for ngMock just below that.

`node_modules/angular-mocks/angular-mocks.js`


Run tests using:

`karma start`


# Gulp
`npm install gulp -g`

`npm install gulp --save-dev`

`npm install gulp-concat --save-dev`

`npm install gulp-uglify --save-dev`

`npm install del --save-dev`


# SASS
`npm install --save-dev gulp`

`npm install --save-dev gulp-sass`

`npm install gulp-minify-css --save-dev`