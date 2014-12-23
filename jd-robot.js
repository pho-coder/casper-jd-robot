var tools = require('tools');
var casper = require('casper').create();
var mouse = require("mouse").create(casper);

casper.start('http://www.jd.com', function() {
	console.log(this.getCurrentUrl());
	console.log(this.evaluate(tools.getDateTime));
	this.capture('jd.' + this.evaluate(tools.getDateTime) + '.png');
}).viewport(1920, 1080);

casper.then(function() {
	console.log(this.evaluate(function() {
		return document.querySelectorAll('a').length;
	}));
	console.log(this.evaluate(function() {
		return document.querySelectorAll('a')[100][0];
	}));
});

casper.then(function() {
	console.log(this.getCurrentUrl());
	console.log(this.evaluate(tools.getDateTime));
	this.capture('jd.' + this.evaluate(tools.getDateTime) + '.png');
});

casper.run();