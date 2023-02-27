// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Name?',
        name: 'pName'
    },
    {
        type: 'input',
        message: 'Give a short description of your project, ansering the WHAT WHY and HOW questions',
        name: 'desc'
    },
    {
        type: 'input',
        message: 'What are the steps required to intall this project',
        name: 'inst'
    },
    {
        type: 'input',
        message: 'Provide insturctions and examples for use',
        name: 'use'
    },
    {
        type: 'input',
        message: 'List your collaborators if any, with links to thier GitHub profile',
        name: 'cred'
    },
    {
        type: 'list',
        message: 'What license would you prefer?',
        choices: ['ISC License (ISC)', 'MIT', 'The Pearl License', 
        'The Do What the Fuck You Want to Public License', 'The zlib/libpng License', 
        `I don't want a license at this time`],
        name: 'lic'
    }];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt(questions)
        .then((response) =>
        fs.writeFile(`README.md`, markDown(response), (err)=>
        err ? console.error(err) : console.log('Success'))
        );
}
// TODO: Create a function to initialize app
function init() {
    writeToFile ();
}

//Function call to initialize app
init();
