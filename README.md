

# Grains

## Contents

* Background
* Instructions
* Hints
* Resources

## Background

> There once was a wise servant who saved the life of a prince. The king promised to pay whatever the servant could dream up. Knowing that the king loved chess, the servant told the king he would like to have grains of wheat. One grain on the first square of a chess board. Two grains on the next. Four on the third, eight on the fourth, and so on.

![grains on chessboard image](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/js/grains.png)

Learn more about the wheat and chessboard problem [here](http://en.wikipedia.org/wiki/Wheat_and_chessboard_problem).

## Instructions

Write a JavaScript constructor called Grains. Create two prototypes for this constructor: square and total.

## Square

Write a prototype function for Grains called `square`. This function should accept one one parameter, the square's postition/number. It should return the number of grains of wheat on a chessboard given that the number on each square doubles.

For example:

```javascript
var grains = new Grains();

grains.square(1)
// => 1

grains.square(2)
// => 2

grains.square(3)
// => 4

grains.square(4)
// => 8

grains.square(5)
// => 16

grains.square(6)
// => 32

// etc.
```

### Total

Write a prototype function for Grains called `total`. This function should accept one one parameter, the square's postition/number. Given that number, it should return the total number of grains on the board *up until and including* that square.

For example:

```javascript
var grains = new Grains();

grains.total(1)
// => 1

grains.total(2)
// => 3

grains.total(3)
// => 7

grains.total(4)
// => 16

grains.total(5)
// => 31

// etc.
```

Notice the relationship between the function `square` and the function `total`.

## Hints

* The return value of `grains.total(5)` is equal to one less than the return value of `grains.square(6)`.

## Resources

* [Object.prototype.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
* [Wheat and chessboard problem](http://en.wikipedia.org/wiki/Wheat_and_chessboard_problem)
* [Math.pow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
