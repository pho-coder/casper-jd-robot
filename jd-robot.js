function getDateTime() {
	var d = new Date();
	var year = d.getFullYear() + '';
	var month = d.getMonth();
	month = month + 1;
	if (month < 10) {
		month = '0' + month;
	} else {
		month = month + '';
	};
	var date = d.getDate();
	if (date < 10) {
		date = '0' + date;
	} else {
		date = date + '';
	};
	var hour = d.getHours();
	if (hour < 10) {
		hour = '0' + hour;
	} else {
		hour = hour + '';
	};
	var min = d.getMinutes();
	if (min < 10) {
		min = '0' + min;
	} else {
		min = min + '';
	};
	var second = d.getSeconds();
	if (second < 10) {
		second = '0' + second;
	} else {
		second = second + '';
	};
	return year + month + date + hour + min + second;
};

var casper = require('casper').create();
var mouse = require("mouse").create(casper);

casper.start('http://www.jd.com', function() {
	console.log(this.getCurrentUrl());
	console.log(this.evaluate(getDateTime));
	this.capture('jd.' + this.evaluate(getDateTime) + '.png');
}).viewport(1920, 1080);

casper.then(function() {
	console.log(this.getHTML('div', true));
	console.log(document.querySelectorAll('div.w ul').length);
});

casper.then(function() {
	console.log(this.getCurrentUrl());
	console.log(this.evaluate(getDateTime));
	this.capture('jd.' + this.evaluate(getDateTime) + '.png');
});

casper.run();