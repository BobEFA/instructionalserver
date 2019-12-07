// Setting up from Expess Router Intro
var express = require('express');
var router = express.Router(); 
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test'); 

/****************************************
 * Controller Method #1: Simple Response
 ****************************************/

router.post('/one', function(req, res) {
    res.send("Got a post request!");
})

/****************************************
 * Controller Method #2: Persisting data
 ****************************************/
router.post('/two', function(req, res){
    let testData = "Test data for endpoint two"; 

    TestModel 
      .create({ 
        testdata: testData,
        firstname: "Bob"
      }) .then(dataFromDatabase => {
          res.send("Test two went through!")
      })
});

/****************************************
 * Controller Method #3: Persisting data
 ****************************************/
router.post('/three', function(req, res){
    //1
    var testData = req.body.testdata.item; 

    TestModel 
      .create({ //2
        testdata: testData 
      }) 
    res.send("Test three went through!")
    console.log("Test three went through!")
});

/****************************************
 * Controller Method #4: Use w/ Postman
 ****************************************/
router.post('/four', function(req, res){
    //1
    var testData = req.body.testdata.item; 

    TestModel 
      .create({ //2
        testdata: testData 
      }) 
      .then (
          function message() {
            res.send("Test 4 went through!");
        }
      );
});

/****************************************
 * Controller Method #5: Use w/ Postman
 ****************************************/
router.post('/five', function(req, res){
    //1
    var testData = req.body.testdata.item; 

    TestModel 
      .create({ //2
        testdata: testData 
      }) 
      .then (
          function message(data) {
            res.send(data);
        }
      );
});

/***********************************************
 * Controller Method #6: Return response as JSON
 **********************************************/
router.post('/six', function(req, res){
    //1
    var testData = req.body.testdata.item; 

    TestModel 
      .create({ //2
        testdata: testData 
      }) 
      .then (
          function message(testdata) {
            res.json({
                testdata: testdata
            });
        }
      );
});

/***************************************************
 * Route 7: Handle Errors
 **************************************************/

router.post('/seven', function(req, res){
    //1
    var testData = req.body.testdata.item; 

    TestModel 
      .create({ //2
        testdata: testData 
      }) 
      .then (
          function createSuccess(testdata) {
            res.json({
                testdata: testdata
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
      );
});

// router.get('/', function(req, res){
//     res.send('This seems to be working'); 
// });

// router.get('/', function(req, res){
//     res.send('This is a route')
// });

// router.get('/about', function(req, res){
//     res.send('This is an about route')
// });

// router.get('/contact', function(req, res){
//     let myObj = {
//         name: "Bob",
//         email: "bmadison@elevenfifty.org"
//     }
//     res.send(myObj);
// });

// router.get('/projects', function(req, res){
//     let myObj = {
//         firstAssign: "Project1",
//         secondAssign: "Project2"
//     }
//     res.send(myObj);
// });

// router.get('/mycontacts', function(req, res){
//     let myArr = [
//         {user: "quincy", email: "kenn@beastmode.com"},
//         {user: "quincy", email: "kenn@beastmode.com"},
//         {user: "quincy", email: "kenn@beastmode.com"},
//         {user: "quincy", email: "kenn@beastmode.com"}
//     ];

//     res.send(myArr);
// });

module.exports = router;