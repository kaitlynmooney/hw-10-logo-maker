// DEPENDENCIES

const inquirer = require("inquirer");

const fs = require("fs");

const { Circle, Square, Triangle } = require("./lib/shapes");

// Function to write SVG file based on user input

function generateFile(newFile, data) {
  let svgStr = "";
  svgStr =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  // Wrap <text>
  svgStr += "<g>";
  // Insert user input into SVG file
  svgStr += `${data.shape}`;

  // Conditonal to add color and polygon properties from user input to string
  let chosenShape;
  if (data.shape === "Circle") {
    chosenShape = new Circle();
    svgStr += `<circle cx="150" cy="115" r="80" fill="${data.shapeBG}"/>`;
  } else if (data.shape === "Square") {
    chosenShape = new Square();
    svgStr += `<rect x="73" y="40" width="160" height="160" fill="${data.shapeBG}"/>`;
  } else {
    chosenShape = new Triangle();
    svgStr += `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeBG}"/>`;
  }
  // Format text
  svgStr += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${data.textColor}">${data.text}</text>`;
  svgStr += "</g>";
  svgStr += "</svg>";

  // Generate SVG File
  fs.writeFile(newFile, svgStr, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

// Add logo questions for user with inquirer
function questions() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter text for logo, up to three characters.',
            name: 'text',
        },
        {
            type: "input",
            message: "Enter text color, can be color keyword or hexadecimal number.",
            name: "textColor",
          },  
          {
            type: "list",
            message: "Choose a logo shape.",
            choices: ['Circle', 'Square', 'Triangle'],
            name: "shape",
          }, 
          {
            type: "input",
            message: "Enter shape color, can be color keyword or hexadecimal number.",
            name: "shapeBG",
          },     
    ])
    .then((data) => {
        if (data.text.length > 3) {
            console.log('Logo must be three characters or less');
            questions();
        } else {
generateFile('logo.svg', data);
        }
        
    });
}

// Call function on application load
questions();