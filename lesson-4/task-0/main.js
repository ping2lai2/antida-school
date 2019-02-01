/*****
 * 
 *  0
 * 
 ****/

const add = (a) => (b) => a + b;
console.log(add(3)(3));

/*****
 * 
 *  1
 * 
 ****/

Number.prototype.plus = function(number) {
  return this + number;
};
Number.prototype.minus = function(number) {
  return this - number;
};

console.log((10).plus(30).minus(16));

/*****
 * 
 *  2
 * 
 ****/

Array.prototype.startsWith = String.prototype.startsWith;

console.log([5, 2, 3].startsWith(-5));