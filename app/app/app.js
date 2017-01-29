"use strict";
var fbApp = angular.module("FBApp", [
	"ngRoute",
	"firebase",
	"ngSanitize",
	"ui.bootstrap",
	"ngParallax",
	"ngScrollSpy",
	"formio",

	"franciscobenedict.modules.main",
	"franciscobenedict.modules.scrollto",
	"franciscobenedict.modules.closenav",
	"franciscobenedict.modules.parallaxscrolling",
	"franciscobenedict.modules.navcollapse",
	"franciscobenedict.modules.contactform",
	"franciscobenedict.modules.limitchar"
]);
