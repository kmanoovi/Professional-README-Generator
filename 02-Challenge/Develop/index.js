// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const generateREADME = ({ title, description, installation, usage, guidelines, test }) =>

`# ${title} 
## Description
${description}
## Installation
${installation}
## Usage
${usage}
## Contributing
${guidelines}
## Tests
${test}
`

inquirer
    .prompt ([
        {
            type: 'title',
            message: 'What is the project title?',
            name: 'title',
        },
        {
            type: 'description',
            message: 'Please describe the project.',
            name: 'description',
        },
        {
            type: 'instructions',
            message: 'What are the installation instruction?',
            name: 'installation',
        },
        {
            type: 'usage',
            message: 'Please include the usage information for this project.',
            name: 'usage',
        },
        {
            type: 'guidelines',
            message: 'What are the contribution guidelines?',
            name: 'guidelines',
        },
        {
            type: 'test',
            message: 'What are the test instructions?',
            name: 'test',
        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
