// var tools = require('tools');
var casper = require('casper').create();
var mouse = require("mouse").create(casper);

casper.start('http://www.jd.com', function() {
	console.log(this.getCurrentUrl());
	// console.log(this.evaluate(tools.getDateTime));
	// this.capture('jd.' + this.evaluate(tools.getDateTime) + '.png');
	this.capture('jd.1.png');
}).viewport(1920, 1080);

casper.then(function() {
	console.log(this.evaluate(function() {
		return document.querySelectorAll('a').length;
	}));
	var n = 5;
	console.log(this.evaluate(function(n) {
		return document.querySelector('a:nth-child(' + n + ')').text;
	}, n));
	if (this.visible('a:nth-child(' + n + ')')) {
		this.echo("it's visible");
		console.log(this.popups.length);
		this.click('a:nth-child(' + n +')');
		this.captureSelector('jd.3.png', 'a:nth-child(' + n +')');
		console.log(this.popups.length);
	};
});

casper.waitForPopup('.*com', function() {
    this.test.assertEquals(this.popups.length, 1);
});

casper.then(function() {
	console.log(this.getCurrentUrl());
	// console.log(this.evaluate(tools.getDateTime));
	// this.capture('jd.' + this.evaluate(tools.getDateTime) + '.png');
	this.capture('jd.2.png');
});

casper.run();