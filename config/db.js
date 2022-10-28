// Student ID: 301216721
// Name: Kin Man Tung
// Date: 28/10/2022

// In real project, never expose your credentail in your code.
let atlasDB ="mongodb+srv://dbuser:hZc110oKk3Cd8vcj@cluster005.u92wuqx.mongodb.net/products?retryWrites=true&w=majority";

let mongoose = require('mongoose');

module.exports = function(){

    // Conect to the database
    mongoose.connect(atlasDB);

    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('==== Conected to MongoDB ====');
    });

    return mongodb;
}