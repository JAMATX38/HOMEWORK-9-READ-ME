const inquirer = require('inquirer');
const path = require('path');
//fs part of node- file system
const fs = require('fs');
const createMarkdown = require('./generateMarkdown');
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the Title of your Project?",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a description of your project.",
        name: "Description"
    },
    {
        type: "input",
        message: "Please enter your Table of Contents.",
        name:"Table of Contents"
    },
    {
        type: "input",
        message: "Please enter the Installation instructions for your project. If none please write NONE",
        name: "Installation"
    },
    {
        type: "input",
        message: "Please enter the Usage for your Read Me.",
        name: "Usage"
    },
    {
        type: "list",
        message: "Which license woould you like to use?",
        choices: ["Apache-2.0", "LICENSE_1_0.txt", "BSD-3-"],
        name: "License"
    },
    {
        type: "input",
        message: "Please enter your contributing information.",
        name: "Contributing"
    },
    {
        type: "input",
        message: "If tests are needed please enter the command for the test.",
        name: "Tests"
    },
    {
        type: "input",
        message: "Please enter your GitHub UserName.",
        name: "GitHub"
    },
    {
        type: "input",
        message: "Please enter your email address",
        name: "Email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating README...');
      writeToFile('README.md', createMarkdown({ ...inquirerResponses }));
    });
  }

// Function call to initialize app
init();



