'use strict';

var Grains = function(){
};

// your code here.
Grains.prototype.square = function(num) {
	for (var i=1; num>1; num--) {
		i *= 2;
	}
	return i;
};

Grains.prototype.total = function(num) {
	return this.square(num+1)-1;
};