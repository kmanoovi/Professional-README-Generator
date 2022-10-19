// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const generateREADME = ({ title, description, installation, usage, guidelines, test, github, email, questions, license}) =>

`# ${title} ${license}
## Description
${description}
## Table of Contents
Installation
Usage
Contributing
Tests
Questions
## Installation
${installation}
## Usage
${usage}
## Contributing
${guidelines}
## Tests
${test}
## Questions
My github is ${github}.
My email is ${email}.
Here is how you can reach me with additional questions ${questions}
`

inquirer
    .prompt ([
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please describe the project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the installation instruction?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please include the usage information for this project.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'guidelines',
        },
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What is your GitHub link?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'How can you be reached for further questions?',
            name: 'questions',
        },
        {
            type: 'list',
            message: 'Please choose a license.',
            name: 'license',
            choices: [
                {
                    name: 'MIT',
                    value: '[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)',
                },
                {
                    name: 'Mozilla',
                    value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
                },
            ]
        },
    ])

// TODO: Create a function to write README file
.then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
