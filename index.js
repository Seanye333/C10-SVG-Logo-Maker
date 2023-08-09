// Require the inquirer and fs modules for user input and file operations
const inquirer = require("inquirer");
const fs = require("fs");

// Require the shape classes from the ./lib/shape file
const { Circle, Square, Triangle } = require("./lib/shape");

// Define the main function that collects user input and generates the SVG logo
const main = async () => {
  const userInput = await inquirer.prompt([
    // Collect user input using Inquirer
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo:",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color (color keyword or hexadecimal number):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color (color keyword or hexadecimal number):",
    },
  ]);

// Based on the selected shape, create an instance of the corresponding class
  let selectedShape;
  if (userInput.shape === "circle") {
    selectedShape = new Circle();
  } else if (userInput.shape === "square") {
    selectedShape = new Square();
  } else if (userInput.shape === "triangle") {
    selectedShape = new Triangle();
  }

  // Set the color of the selected shape using user input
  selectedShape.setColor(userInput.shapeColor);

// Generate SVG content using the selected shape's render method and user input
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${selectedShape.render()}
      <text x="150" y="100" font-size="26" text-anchor="middle" fill="${userInput.textColor}">
        ${userInput.text}
      </text>
    </svg>
  `;

  // Write the SVG content to a file named "logo.svg"
  fs.writeFileSync("logo.svg", svgContent);
  console.log("Generated logo.svg");
};

main();
