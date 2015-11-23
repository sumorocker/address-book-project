var request = require('request');
var prompt = require('prompt');
var inquirer = require('inquirer');
// var phoneBook= require('./phonebook').phonebook

function searchTerm(name) {
    var result = phoneBook.filter(function(e) {
        if (e.first_name === name) {
            return true;
        }
        else if (e.last_name === name) {
            return true;
        }
        else if (e.email === name) {
            return true;
        }
        else {
            return false;
        }
    });
    return result
}

var questions = [{
    type: 'input',
    name: 'searchWord',
    message: 'Who are you looking for?',
}]


var phoneBook = [{
    "first_name": "Allan",
    "last_name": "MacDonald",
    "email": "macdonald.allan@live.com"
}, {
    "first_name": "Mark",
    "last_name": "Walberg",
    "email": "markymark@email.com"
}, {
    "first_name": "billy",
    "last_name": "Holiday",
    "email": "sunday@live.com"
}, {
    "first_name": "Allan",
    "last_name": "MacDouglas",
    "email": "macdouglas.allan@email.com"
}]

inquirer.prompt(questions, function(answers) {
    var searchResults = searchTerm(answers.searchWord);
    
    var foundNames = searchResults.map(
        function(result) {
            return { 
                name:result.first_name + ' ' + result.last_name,
                value:result
            }
        }
    );
    
    
    inquirer.prompt(

        [{
            type: "list",
            name: "listed",
            message: "Select your desired result",
            choices: foundNames


        }],
        function(selectedEntry) {
            console.log(selectedEntry.listed);

        })
});

