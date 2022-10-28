let express = require('express');
let router = express.Router();
let usersController = require('../controllers/user');

/* GET users listing. */
router.get('/julio', function(req, res, next) {
  res.render('users',
   {
     title: 'Julio', 
     name: 'Julio'
    }
    );
});


// Sign-up
router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

// Sign-in
router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

// Sign-out
router.get('/signout', usersController.signout);


module.exports = router;
