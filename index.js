const inquirer = require('inquirer');
inquirer.prompt([{
    type: "input",
    message: "what is your name?",
    name: "heroname"
}, {
    type: "list",
    message: "Pick your super power",
    choices: ["Fire", "Ice", "Lighting"],
    name: "list"
}])
    .then(answers => {
        // Use user feedback for... whatever!!
        console.log(answers)
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });