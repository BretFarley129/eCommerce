//Cap = capitalized, singular.  this is the model.
//plur = lowercase, plural. this depends on what you're trying to retrieve from the server
//thing = lowercase, singular.

var mongoose = require('mongoose'); 
var Cap = mongoose.model('Cap');


module.exports = {
    showAll: function(req, res){
        Cap.find({}, function(err, plur){
           if(err) {
            console.log('something went wrong');
            console.log(plur.errors);
          }
          else {
            console.log("show works")
            console.log(plur);
            res.json( plur);
            
          }
        })
    },

    create: function(req,res){
      console.log('adding new thing to db');
      console.log(req.body);
        var thing = new Cap({text: req.body.text});
        thing.save(function(err) {
          if(err) {
            console.log('something went wrong');
            let errors = [];
            for (var key in err.errors){
              errors.push(err.errors[key].message)
            }
            res.json({message: "Error", error:errors})
          } 
          else {
            console.log('successfully added a Cap!');
            res.json({message: "Success", thing:thing});
          }
        })
    }
}