var express = require('express');
var router = express.Router(); //1
var sequelize = require('../db');
var User = sequelize.import('../models/user'); 

/*****************************************
 * * Create User Endpoint: Starter***
 *****************************************/
//2
router.post('/createuser', function (req, res) {

    var username = "The Dude";
    var pass = "therugtiedtheroomtogether";  /**3**/

    User.create({
        username: username,
        passwordhash: pass
    }).then(
        function message() {
            res.send("I hate the Eagles, man")
        }
    );
})

module.exports = router;