const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");
const getUserInput = require("./lib/userInput");

async function main() {
  const answers = await getUserInput();
  let shape;

  switch (answers.shape) {
    case "triangle":
      shape = new Triangle();
      break;
    case "circle":
      shape = new Circle();
      break;
    case "square":
      shape = new Square();
      break;
  }

  shape.setColor(answers.shapeColor);
  const svgShape = shape.render();
  const svgText = shape.renderText(answers.text, answers.textColor);

  const svgHeader = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  const svgFooter = "</svg>";
  const svgContent = `${svgHeader}\n${svgShape}\n${svgText}\n${svgFooter}`;

  fs.writeFileSync("logo.svg", svgContent);
  console.log("Generated logo.svg");
}

main();

