
const yargs = require('yargs')
const contacts = require('./contacts')
const chalk = require('chalk')
yargs.command({
    command: 'add',
    describe: 'Menambahkan kontak baru ',
    builder:{
        nama:{
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        },
        email:{
            describe: 'Email',
            demandOption: false,
            type: 'string'
        },
        noHP:{
            describe: 'Nomor hp',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        contacts.simpanContact(argv.nama, argv.email, argv.noHP)
    }
})

yargs.parse()

















// // mengambil argumen dr cl
// const command = process.argv[2]
// if (command === 'add') {
    
// }
// const contacts = require('./contacts')

// const main = async () => {
//     const nama = await contacts.tulisPertanyaan('Masukkan nama anda : ');
//     const email = await contacts.tulisPertanyaan('Masukkan email : ');
//     const noHP = await contacts.tulisPertanyaan('Masukkan noHP : ');

//     contacts.simpanContact(nama, email, noHP);
// };
// main();

