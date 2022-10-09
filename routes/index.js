 /* Student ID: 301216721
 Name: Kin Man Tung
 Date: 8/10/2022 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme',
   {
     title: 'About Me'
    }
    );
});

router.get('/projects', function(req, res, next) {
  res.render('projects',
   {
     title: 'Projects'
    }
    );
});

router.get('/contactme', function(req, res, next) {
  res.render('contactme',
   {
     title: 'Contact Me'
    }
    );
});

router.get('/services', function(req, res, next) {
  res.render('services',
   {
     title: 'Services'
    }
    );
});

module.exports = router;
