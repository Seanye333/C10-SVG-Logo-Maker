// Import circle class from shapes file 
const { Circle } = require("./shapes");

// Jest test 
test("Circle renders correctly", () => {
  const circle = new Circle();
  circle.setColor("blue");
  expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
});

const { Triangle } = require("./shapes");

test("Triangle renders correctly", () => {
  const triangle = new Triangle();
  triangle.setColor("blue");
  expect(triangle.render()).toEqual('<triangle cx="150" cy="100" r="50" fill="blue" />');
});

const { Square } = require("./shapes");

test("Triangle renders correctly", () => {
  const square = new Square();
  square.setColor("blue");
  expect(square.render()).toEqual('<square cx="150" cy="100" r="50" fill="blue" />');
});