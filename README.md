# franciscobenedictsite

# Under development
development start date: 14-11-2016


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

To run gulp and gulp watch together run the following in Terminal: 

`gulp && gulp watch`


# Gulp - JS Files concatenation, rename, minification
I'm bundling all my custom (not vendor) JS files into one js file, I rename this new JS file but I am also adding a hash to the filename so it is unique to the previous saved version when the file changes.

`gulp-concat`

`gulp-uglify`

`gulp-rev`

`gulp-rev-all`

`gulp-rev-replace`

`gulp-filter`

Check the gulp file for how all these tasks are being achieved


# Gulp - Live Reload
I am using `browser-sync` for live reloads to the browser - any changes in my SASS or JS files tells the browser to automatically reload - cool eh?

Check the gulp file for how this task is being achieved


# SASS
`npm install --save-dev gulp`

`npm install --save-dev gulp-sass`

`npm install gulp-minify-css --save-dev`


# NPM Check

npm install -g npm-check

Use: `npm-check`


# Firebase

First get a Firebase account from (console.firebase.google.com)[https://console.firebase.google.com/]


# GRID

I'm using [Bootstrap 3.3.7](http://getbootstrap.com/) at the time of writing this.


# Font Awesome

Add font awesome to header via CDN - think you have to register or you can just download it from `fontawesome.io`


# Font

The font used is Lato from Google `https://fonts.google.com/`


# http-server

A command-line http server. More info from [here](https://github.com/indexzero/http-server)

install using `npm install http-server -g`

Use it in terminal like `http-server location\to\app`.

Get full path to path using `pwd` in Terminal on OSx.

You should see the locahost IP provided in Terminal. Hit that IP and you can see your site. Boom!!! and you're good to go!


# URL REWRITE

Add .htaccess file with the following tackle refresh of non existent URLs:

`RewriteEngine On `
`Options FollowSymLinks`

`RewriteBase /`

`RewriteCond %{REQUEST_FILENAME} !-f`
`RewriteCond %{REQUEST_FILENAME} !-d`
`RewriteRule ^(.*)$ /#/$1 [L]`


# UI Bootstrap

Using Angular dependency UI Bootstrap `https://angular-ui.github.io/bootstrap/`


# Github API

I made use of the Github API. The isolated working example is [here, (Github API)](https://github.com/franciscobenedict/github-api).

This can be seen on my [website](http://www.franciscobenedict.com/portfolio#githubSection) on the [Portfolio page](http://www.franciscobenedict.com/portfolio#githubSection) under the [Github section](http://www.franciscobenedict.com/portfolio#githubSection)