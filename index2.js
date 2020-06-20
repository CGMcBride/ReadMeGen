// Title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions

const inquirer = require('inquirer');
const fs = require("fs");
let data = ""
inquirer.prompt([{
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
}])
    .then(answers => {
        // Use user feedback for... whatever!!
        console.log(answers)
        // data = answers
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });
// console.log(data)