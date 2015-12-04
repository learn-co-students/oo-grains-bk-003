'use strict';

var Grains = function(){
};

Grains.prototype.square = function(num){
	this.num = num;
	var i = this.num - 1;
    return Math.pow(2, i);
}

Grains.prototype.total = function(num){
	var o = num + 1;
    return (Grains.prototype.square(o) - 1);
}