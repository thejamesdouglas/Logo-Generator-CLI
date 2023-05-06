const { Triangle, Circle, Square } = require("./shapes");

test("Triangle render()", () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

// Add tests for Circle and Square classes
