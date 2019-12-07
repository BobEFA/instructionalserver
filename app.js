var express = require('express'); 
var app = express(); 
var test = require('./controllers/testcontroller') ;
var user = require('./controllers/usercontroller') ;
//1
var sequelize = require('./db'); 
// var bodyParser = require('body-parser')

sequelize.sync();

// app.get('/api/test', function(req, res) {
//     res.send("This data is from the /api/test endpoint. It's from the server");
// });

// app.use(bodyParser.json());
app.use(express.json());
app.use('/test/', test);
app.use('/api/user', user)

app.listen(3000, function(){
    console.log('App is listening on 3,000.') 
});

