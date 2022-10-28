var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index.controller')

/* GET home page. */
router.get('/', indexController.home);

// Renders the projects page
router.get('/', indexController.home);

router.get('/aboutme', indexController.about);

router.get('/projects', indexController.projects);

router.get('/contact', indexController.contact);

router.get('/services', indexController.services);

module.exports = router;
