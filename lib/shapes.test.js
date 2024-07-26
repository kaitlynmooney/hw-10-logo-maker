// Import shapes
const { Circle, Square, Triangle } = require("./shapes.js");

// Given test: Triangle with blue background
describe("Triangle Test", () => {
  test("triangle should render blue background", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// Test Circle
describe("Circle Test", () => {
  test("circle should render #FFBBED background", () => {
    const shape = new Circle();
    shape.setColor("#FFBBED");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#FFBBED" />'
    );
  });
});

// Test Square
describe("Square Test", () => {
  test("square should render green background", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="green" />'
    );
  });
});
