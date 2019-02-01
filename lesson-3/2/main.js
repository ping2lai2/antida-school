function Rectangle(width = 10, height = 10, measure = 'sm') {
  this.width = width;
  this.height = height;
  this.measure = measure;
}

Rectangle.prototype.getInfo = function() {
  console.log(`width = ${this.width}${this.measure}, height = ${this.height}${this.measure}.`);
};

const getArea = function() {
  console.log(`Area = ${this.width * this.height} ${this.measure}^2`);
};
const getPerimeter = function() {
  console.log(`Perimeter = ${(this.width + this.height) << 1}${this.measure}`);
};

const firstElem = new Rectangle();
const secondElem = new Rectangle(30, 10);

firstElem.getInfo();
getArea.call(firstElem);
getPerimeter.call(firstElem);

secondElem.getInfo();
getArea.call(secondElem);
getPerimeter.call(secondElem);

