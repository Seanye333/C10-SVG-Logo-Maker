// Import class from shapes file 
const { Circle, Square, Triangle } = require("./shape");

// Jest test 
test("Circle renders correctly", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
});

test("Square renders correctly", () => {
  const square = new Square();
  square.setColor("red");
  expect(square.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="red" />');
});

test("Triangle renders correctly", () => {
  const triangle = new Triangle();
  triangle.setColor("green");
  expect(triangle.render()).toEqual('<polygon points="150,50 100,150 200,150" fill="green" />');
});
