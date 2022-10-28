// Student ID: 301216721
// Name: Kin Man Tung
// Date: 28/10/2022

let mongoose = require('mongoose');

// Create a model class
let inventoryModel = mongoose.Schema(
    {
        item: String,
        contactNum: Number,
        email: String,
    },
    {
        collection: "inventory"
    }
);

module.exports = mongoose.model('Inventory', inventoryModel);