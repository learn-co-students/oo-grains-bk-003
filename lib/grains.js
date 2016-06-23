'use strict';

var Grains = function(){};

// your code here.
Grains.prototype.square = function(num){
  let value = 1;
  for(let i = 1; i < num; i++){
     value *= 2 
  	}
   
   return value;
}

Grains.prototype.total = function(num){
  let total = 0;
  for(let i = 1; i <= num; i++){
     total += this.square(i);
  }
  return total;
}