const inquirer = require("inquirer");

async function getUserInput() {
  const questions = [
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo text:",
      validate: input => input.length <= 3 || "Please enter up to three characters.",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (keyword or hexadecimal number):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color (keyword or hexadecimal number):",
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
}

module.exports = getUserInput;
