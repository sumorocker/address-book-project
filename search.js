var request = require('request');
var prompt = require('prompt');
var inquirer = require('inquirer');

function searchTerm(name) {
    var result = phoneBook.filter(function(e) {
        if (e.first_name === name) {
            return name;
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
}]

inquirer.prompt(questions, function(answers) {
    var results = searchTerm(answers.searchWord);
    var resultsArray = [results.first_name + ' ' +results.last_name];
    
    inquirer.prompt(
        
        [
            {
                type:"list",
                name:"list",
                message:"FUUUUUUUUUUCK",
                choices:resultsArray
            }
            
            
            ]
        ,
        function(ans){
            console.log(results);
            
        })
});


