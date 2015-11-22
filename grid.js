var Table = require('cli-table');
var table = new Table();

var phoneBook = {
    first_name: "Allan",
    last_name: "MacDonald",
    email: ["home","work","other"],
    home_email: "zippo@live.com",
    work_email: "nothing@hotmail.com",
    other_email: "everything@live.com",
    address: ["home","work","other"],
    home_address: "anywhere",
    work_address: "142 Rushton Rd",
    home_address: "1550 Ave Docteur Penfield"
    
}

table.push(
    {'First Name': phoneBook.first_name },
    {'Last Name': phoneBook.last_name}
    );

    if(phoneBook.email.indexOf('work') >-1){
        table.push({
            'work email': phoneBook.work_email
        });
    }
    if(phoneBook.email.indexOf('home') >-1){
        table.push({
            'home email': phoneBook.home_email
        });
    }
    if(phoneBook.email.indexOf('other') >-1){
        table.push({
            'other email': phoneBook.other_email
        });
    }
    
    if (phoneBook.address.indexOf('work') >-1){
        table.push({
            'work address': phoneBook.work_address
        });
    }
    if(phoneBook.address.indexOf('home')>-1){
        table.push({
            'home address': phoneBook.home_address
        });
    }
    if(phoneBook.address.indexOf('other')>-1){
        table.push({
            'other address': phoneBook.other_address
        });
    }
    
console.log(table.toString());
