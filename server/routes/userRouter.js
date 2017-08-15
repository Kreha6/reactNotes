var express = require('express');
var app = express();
var userRouter = express.Router();

var User = require('../models/User');

userRouter.route('/add/user').post(function (req, res) {
  var user = new User(req.body);
      user.save()
    .then(user => {
    res.json('User added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

userRouter.route('/').get(function (req, res) {
  User.find(function (err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});


// Defined edit route
userRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
  });
});

//  Defined update route
userRouter.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function(err, user) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here

      user.save().then(user => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
userRouter.route('/delete/:id').get(function (req, res) {
  User.findByIdAndRemove({_id: req.params.id},
       function(err, item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRouter;
