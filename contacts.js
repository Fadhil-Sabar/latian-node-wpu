const fs = require('fs');
const { resolve } = require('path');
const chalk = require('chalk')
const validator = require('validator')

const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// membuat file contact json
const dataPath = 'data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}



const simpanContact = (nama, email, noHP) =>{
    
    const contact = {nama, email, noHP};
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    
    const duplikat =  contacts.find((contact)=> contact.nama === nama)
    if(duplikat){
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar, gunakan nama lain'))
        return false;
    }

    if(email){
        if(!validator.isEmail(email)){
            console.log(chalk.red.inverse.bold('Email tidak valid'))
        return false;
        }
    }


    if(!validator.isMobilePhone(noHP, 'id-ID')){
        console.log(chalk.red.inverse.bold('No HP tidak valid'))
        return false;
     }

    contacts.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    console.log(chalk.green.inverse.bold('Makasih'));

};

module.exports = {simpanContact};
