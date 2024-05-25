var express = require('express');
var router = express.Router();

const passport = require('passport');
const userModel = require('../models/users');


const LocalStrategy = require('passport-local');
passport.use(new LocalStrategy(userModel.authenticate()));


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});





router.post("/register", function (req, res) {

  const userData = new userModel({
    username: req.body.username,
    email: req.body.email,
  })

  userModel.register(userData, req.body.password).then(
    function (registerUser) {
      passport.authenticate('local')(req, res, function () {
        res.send('User registered successfully')
      })
    }
  )


})




module.exports = router;
