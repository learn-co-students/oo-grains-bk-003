'use strict';

var Grains = function(){
};

// your code here.
Grains.prototype.square = function(n) {
	return Math.pow(2,n-1);
}

Grains.prototype.total = function(n) {
  var sum = 0;
  while (--n) sum += this.square(n+1);
  return sum+1;
}