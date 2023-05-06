Logo Generator CLI
Author: James Ivancic

Description
Logo Generator CLI is a Node.js command-line application that allows freelance web developers to quickly generate simple logos for their projects without the need to hire a graphic designer. The application prompts the user to input the desired logo text, text color, shape, and shape color. It then generates an SVG file of the logo according to the provided inputs.

Video Demo
https://drive.google.com/file/d/1XhhzYV26zNRbWucuBfw-bpdTo97IRIHw/view

Installation
Clone the repository or download the project files.
Open the terminal and navigate to the project directory.
Run npm install to install the required dependencies.
Usage
In the terminal, navigate to the project directory.
Run node index.js to start the application.
Follow the prompts to input the logo text (up to three characters), text color (color keyword or hexadecimal number), shape (circle, triangle, or square), and shape color (color keyword or hexadecimal number).
After providing the required inputs, the application will generate a logo.svg file and print "Generated logo.svg" in the command line.
Open the logo.svg file in a web browser to view the generated logo.

Testing
This application uses Jest for running unit tests. To run the tests, follow these steps:

In the terminal, navigate to the project directory.
Run npm test to execute the tests.

Directory Structure

├── examples/           // Example SVG file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
    └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup, and usage instructions

MIT License




