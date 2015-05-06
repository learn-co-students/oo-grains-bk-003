'use strict';

describe("Grains", function () {
  var grains;

  describe("square", function () { 
    grains = new Grains();

    it("square 1", function () {
      expect(grains.square(1)).toEqual(1);
    });
    it("square 2", function () {
      expect(grains.square(2)).toEqual(2);
    });
    it("square 3", function () {
      expect(grains.square(3)).toEqual(4);
    });
    it("square 4", function () {
      expect(grains.square(4)).toEqual(8);
    });
    it("square 16", function () {
      expect(grains.square(16)).toEqual(32768);
    });
    it("square 32", function () {
      expect(grains.square(32)).toEqual(2147483648);
    });
    it("square 53", function () {
      expect(grains.square(53)).toEqual(4503599627370496);
    });
  });

  describe("total", function () {
    grains = new Grains();

    it("total 1", function () {
      expect(grains.total(1)).toEqual(1);
    });
    it("total 2", function () {
      expect(grains.total(2)).toEqual(3);
    });
    it("total 3", function () {
      expect(grains.total(3)).toEqual(7);
    });
    it("total 4", function () {
      expect(grains.total(4)).toEqual(15);
    });
    it("total 5", function () {
      expect(grains.total(5)).toEqual(31);
    });
    it("total 53", function () {
      expect(grains.total(53)).toEqual(9007199254740991);
    });
  });
});
