var mongoose = require('mongoose'); 
var User = mongoose.model('User');
var bcrypt = require('bcrypt');

module.exports = {
  showAll: function(req, res){
    User.find({}, function(err, users){
        if(err) {
        console.log('sometihng went wrong');
        console.log(users.errors);
      }
      else {
        console.log("show works")
        console.log(users);
        res.json( users);
        
      }
    })
  },

  create: function(req,res){
    console.log('adding new user to db');
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    User.find({email: req.body.email}, function(err, users){
      if(err) {
        console.log('sometihng went wrong');
        console.log(users.errors);
      }
      else {
        console.log("step 2")
        if(!users[0]){
          var user = new User({
            first: req.body.first,
            last: req.body.last,
            email: req.body.email,
            admin: req.body.admin,
            password: hash,
          });
          user.save(function(err) {
            if(err) {
              console.log('sometihng went wrong');
              let errors = [];
              for (var key in err.errors){
                errors.push(err.errors[key].message)
              }
              res.json({message: "Error", error:errors})
            } 
            else {
              console.log('successfully added a User!');
              console.log(user);
            }
          })
        }
        else{
          console.log("email already in databse")
        }
        console.log('done');
        console.log(users);
        res.json( users);
        
      }
    })
  },
  login: function(req,res){
    console.log('In the db');
    User.find({email: req.body.email}, function(err, theUser){
      if(err) {
        console.log('sometihng went wrong');
        console.log(theUser.errors);
      }
      else {
        console.log("step 2");
        console.log(theUser);
        if( theUser[0]){
          console.log(theUser[0].password);
          console.log(theUser[0].email);
          if(!theUser[0]){
            console.log('query does not match any records')
          }
          else{
            console.log('req');
            console.log(req.body.password);
            console.log('original');
            console.log(theUser[0]['password']);
            console.log(bcrypt.compareSync(req.body.password, theUser[0].password));
            if(bcrypt.compareSync(req.body.password, theUser[0].password)){
              console.log("it's a match");
              console.log( theUser[0]);
              res.json( theUser[0]);
            }
          }
        }
        console.log('done');       
      }
    })
  }
}