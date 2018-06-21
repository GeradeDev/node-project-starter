#!/usr/bin/env node

var inquirer = require('inquirer');
var fs = require('fs-extra');
var generator = require('./generator')

var availTemplates = fs.readdirSync(__dirname + '/templates');

var questions = [
    {
        name: "template",
        type: "list",
        message: "what type of project would you like to create?",
        choices: availTemplates
    },
    {
        name: "name",
        type: "input",
        message: "Please enter the name of the project?"
    }
]

inquirer.prompt(questions).then(function (answers) {
    var selecteTemplate = answers['template'];
    var projName = answers['name'];

    if(selecteTemplate != null && projName != null){
        generator.generate(selecteTemplate, projName);
    }
    else
        console.log("Please complete all inputs before the project can be created.");

});