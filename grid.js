var Table = require('cli-table');
var table = new Table();

var phoneBook = {
    first_name: "Allan",
    last_name: "MacDonald",
    Email: ["home","work","other"],
    home_email: "zippo@live.com",
    work_email: "nothing@hotmail.com",
    other_email: "everything@live.com",
    Addresses: ["home","work","other"],
    home_address: "anywhere",
    work_address: "142 Rushton Rd",
    other_address: "1550 Ave Docteur Penfield",
    Number: ["home","work","other"],
    home_number: "514-660-9279",
    work_number: "514-990-2234",
    other_number: "514-802-3045"
    
    
}

table.push(
    {'First Name': phoneBook.first_name },
    {'Last Name': phoneBook.last_name}
    );

    if(phoneBook.Email.indexOf('work','home','other') >-1){
        table.push({
            'Emails': 'work: '+phoneBook.work_email+"\n"+'home: '+phoneBook.home_email+"\n"+'other: '+phoneBook.other_email
            });
    }
    
    if(phoneBook.Addresses.indexOf('work')>-1){
        table.push({
            'Work Address': phoneBook.work_address
        });
    }
    if(phoneBook.Addresses.indexOf('home')>-1){
        table.push({
            'Home Address': phoneBook.home_address
        });
    }
    if(phoneBook.Addresses.indexOf('other')>-1){
        table.push({
            'Other Address': phoneBook.other_address
        });
    }
    
    if(phoneBook.Number.indexOf('other')>-1){
        table.push({
            'Numbers': 'work: '+phoneBook.work_number+"\n"+ 'home: '+phoneBook.home_number+"\n"+ 'other: '+phoneBook.other_number
        });
    }
    
console.log(table.toString());
