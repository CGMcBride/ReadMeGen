const fs = require("fs");
const inquirer = require("inquirer");
const questions = [{
    type: "input",
    message: "what is your Title name?",
    name: "Title"
}, {
    type: "list",
    message: "Table of Contents",
    choices: ["Fire", "Ice", "Gravity"],
    name: "TLC"
},
{
    type: "input",
    message: "Description ",
    name: "Description"
},
{
    type: "input",
    message: "What label do you want for your badge?",
    name: "Badgelabel"
},
{
    type: "input",
    message: "What message do you want for your badge?",
    name: "Badgemessage"
},
{
    type: "input",
    message: "What color do you want for your badge?",
    name: "Badgecolor"
},
{
    type: "input",
    message: "What type of installation did you use?",
    name: "Install"
},
{
    type: "input",
    message: "What are you going to use this for?",
    name: "Usage"
}
];

function writeToFile(fileName, data) {
    let fileContent =
        `
# ${data.Title}
#### ${data.Description}
![GitHub Badge](https://img.shields.io/badge/${data.Badgelabel}-${data.Badgemessage}-${data.Badgecolor})
### Table of Contents
* ${data.TLC}
### Installation
${data.Install}
### Usage
${data.Usage}
`

    fs.writeFile(fileName, fileContent, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

function init() {
    inquirer.prompt(questions)
        .then(answers => {
            // Use user feedback for... whatever!!
            console.log(answers)
            writeToFile("User/README.md", answers)
            // data = answers
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }
        });
}

init();