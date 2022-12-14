// Student ID: 301216721
// Name: Kin Man Tung
// Date: 28/10/2022

exports.home = function(req, res, next) {
    res.render('home',
     { 
        title: 'Home',
        userName: req.user ? req.user.username : ''
    }
    );
  };

exports.projects = function(req, res, next) {
    res.render('projects',
     {
       title: 'Projects', 
       userName: req.user ? req.user.username : ''
      }
      );
  };

  exports.about = function(req, res, next) {
    res.render('aboutme',
     {
       title: 'About Me', 
       userName: req.user ? req.user.username : ''
      }
      );
  };

  exports.contact = function(req, res, next) {
    res.render('contact',
     {
       title: 'Contact', 
       userName: req.user ? req.user.username : ''
      }
      );
  };

  exports.services = function(req, res, next) {
    res.render('services',
     {
       title: 'Services', 
       userName: req.user ? req.user.username : ''
      }
      );
  }