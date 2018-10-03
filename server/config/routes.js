var users = require('../controllers/user.js'); 
var products = require('../controllers/product.js'); 

module.exports = function(app){
    console.log('in routes');
    app.get('/getAllUsers', (req, res, next) =>{
        console.log('fetching things');
        users.showAll(req, res);
    });
    app.post('/login', (req, res, next) =>{
        console.log('fetching user stuff');
        users.login(req, res);
    });

    app.post('/register', (req, res, next) =>{
        console.log('adding user');
        users.create(req, res);
    })
} 