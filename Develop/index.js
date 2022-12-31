// TODO: Include packages needed for this application
import inquirer from "inquirer";
// TODO: Create an array of questions for user input
//These are the question to pick from when creating the README
const questions = [
    {
    type: "input",
    name: "title",
    message: "Please choose a title for your project:",
    default: "My README."
},
{
    type: "input",
    name: "description",
    mesage: "Please write a description of the project:",
    default: "Your description goes here."
},
{
    type: "input",
    name: "table of contents",
    message: "Please write a table of contents:",
    default: "A table of contents goes here."
},
{
    type: "input",
    name: "installation",
    message: "Please put the steps for installation here:",
    default: "Installation steps goes here."
},
{
    type: "input",
    name: "usage information",
    message: "Please write your usage information here:",
    default: "Usage information goes here."
},
{
    type: "list",
    name: "licenses",
    message: "Which license fits your project?",
    default: "Apache 2.0 License",
    choices: ["Apache 2.0 License", "Boost Software License 1.0", "CC0", "Eclipse Public License 1.0", "GNU GPL v3", "The Hippocratic License 2.1", "IBM Public License Version 1.0", "The MIT License", "Mozilla Public License 2.0", "Open Database License (ODbL)", "The Artistic License 2.0", "SIL Open Font License 1.1", "The Unlicense", "The zlib/libpng License"]
},
{
    type: "input",
    name: "contribution",
    message: "Please write how others can contribute here:",
    default: "Contribution information goes here."
},
{
    type: "input",
    name: "tests",
    message: "Please write how to run tests for this project here:",
    default: "Test information goes here."
},
{
    type: "input",
    name: "username",
    message: "Please write your github username here:",
    default: "Username information goes here."
},
{
    type: "input",
    name: "usage information",
    message: "Please write the email associated with your github here:",
    default: "Github associated email goes here."
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
