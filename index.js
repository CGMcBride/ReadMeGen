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
}
];

function writeToFile(fileName, data) {
    let fileContent =


        `
# ${data.Title}
#### ${data.Description}
https://img.shields.io/static/v1?label=${data.Badgelabel}&message=${data.Badgemessage}&color=${data.Badgecolor}
### Table of Contents
* ${data.TLC}    `
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