// Student ID: 301216721
// Name: Kin Man Tung
// Date: 28/10/2022

// create a reference to the model
let Inventory = require('../models/inventory.model');

exports.inventoryList = function(req, res, next) {  
    
    Inventory.find((err, inventoryList) => {
        // console.log(inventoryList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('inventory/list', {
                title: 'Business Contact List', 
                InventoryList: inventoryList,
                userName: req.user ? req.user.username : ''
            })            
        }
    }).sort({item:1});
}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Inventory.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('inventory/add_edit', {
                title: 'Edit Item', 
                item: itemToEdit,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Inventory({
        _id: req.body.id,
        item: req.body.item,
        contactNum: req.body.contactNum,
        email: req.body.email,
        
    });

    // console.log(updatedItem);

    Inventory.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/inventory/list');
        }
    });
}


module.exports.displayAddPage = (req, res, next) => {
    let newItem = Inventory();

    res.render('inventory/add_edit', {
        title: 'Add a new Item',
        item: newItem,
        userName: req.user ? req.user.username : ''
    })          
}

module.exports.processAddPage = (req, res, next) => {
    let newItem = Inventory({
        _id: req.body.id,
        item: req.body.item,
        contactNum: req.body.contactNum,
        email: req.body.email,
    });

    Inventory.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/inventory/list');
        }
    });

}



module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Inventory.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/inventory/list');
        }
    });
}